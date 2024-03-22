// next-auth的配置文件
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // 这个函数是切换路由的时候就触发
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user; // 如果已经登录了就直接去首页
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
    // 这个是signIn方法触发provider中的验证通过后触发的
    signIn({ user, account, profile, email, credentials }) {
      // 用户登录成功后还要判断是不是有当前页面的权限，可以放在authorized执行判断
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
