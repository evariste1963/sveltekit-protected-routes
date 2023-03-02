import { redirect } from "@sveltejs/kit";
export const load = async () => {
};
export const actions = {
    login: async ({ cookies }) => {
        cookies.set("auth", "adminusertoken", {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });
        throw redirect(303, "/");
    },
};
//# sourceMappingURL=+page.server.js.map