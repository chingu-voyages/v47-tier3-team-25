import { NextResponse } from 'next/server';
import { getTokenData } from './helpers/getTokenData';

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/auth/login' || path === '/auth/signup';

  const tokenCookie = request.cookies.get('token');
  const token = tokenCookie ? tokenCookie.value : '';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/profile', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.nextUrl));
  }
}

export const config = {
  matcher: ['/carlist', '/profile', '/login', '/signup'],
};
