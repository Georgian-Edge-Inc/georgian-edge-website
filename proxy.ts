import { NextResponse, type NextRequest } from 'next/server';

const canonicalHost = 'georgianedgeinc.ca';
const wwwHost = `www.${canonicalHost}`;

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname !== wwwHost) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.hostname = canonicalHost;
  url.protocol = 'https:';

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: '/:path*',
};
