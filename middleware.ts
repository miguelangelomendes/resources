import { createI18nMiddleware } from "next-international/middleware";

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
  return I18nMiddleware(req);
}
