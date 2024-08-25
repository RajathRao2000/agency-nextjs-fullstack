export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      //to modify token
      console.log(token, user);
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
        console.log(token);
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      console.log(session);
      return session;
    },
    authorized({ auth, request }) {
      console.log(request);
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      //ONLY ADMIN CAN REACH THE ADMIN DASHBOARD

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      //ONLY AUTH USERS CAN REACH THE BLOG PAGE

      if (isOnBlogPage && !user) {
        return false;
      }

      //ONLY UNAUTH USERS CAN REACH THE LOGIN PAGE

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
