import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers:[],
    callbacks: {
        authorized: async ({auth}) => {
            return !!auth;
        },
    },
});