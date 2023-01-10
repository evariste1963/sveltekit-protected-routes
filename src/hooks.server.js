import { authenticateUser } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */

export const handle = async ({ event, resolve }) => {
	//stage 1
	event.locals.user = authenticateUser(event);

	if (event.url.pathname.startsWith('/protected')) {
		if (!event.locals.user) {
			throw redirect(303, '/');
		}
		if (event.url.pathname.startsWith('/protected/admin')) {
			if (event.locals.user.role !== 'ADMIN') {
				throw redirect(303, '/protected');
			}
		}
	}

	// stage 2
	const response = await resolve(event);

	//stage 3
	return response;
};
