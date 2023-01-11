import { redirect } from "@sveltejs/kit";
export const POST = async ({ cookies }) => {
    cookies.delete("auth");
    throw redirect(303, "/");
};
//# sourceMappingURL=+server.js.map