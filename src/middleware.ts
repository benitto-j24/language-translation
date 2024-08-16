import createMiddleware from "next-intl/middleware";

export default createMiddleware({

  locales: ["en", "zh","fr"],


  defaultLocale: "en",
});

export const config = {

  matcher: ["/", "/(|en|zh|fr)/:path*"],
};
