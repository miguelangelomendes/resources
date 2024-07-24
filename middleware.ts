import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse, userAgent } from "next/server";

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "pt"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

export function middleware(req: any) {
  const all = userAgent(req);

  return I18nMiddleware(req);
}
