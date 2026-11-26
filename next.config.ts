import type { NextConfig } from "next";

// Finnish pages have no prefix (/tuote/x), Swedish pages live under /sv (/sv/tuote/x).
// Both are served by app/[lang]: this rewrite hands Finnish addresses to lang "fi" without a
// proxy/middleware, so it costs no extra function call per visit.
const notLangOrFile = "(?!sv(?:/|$)|fi(?:/|$)|api/|_next/|favicon\\.ico|robots\\.txt|sitemap\\.xml|llms\\.txt).*";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/fi", destination: "/", permanent: true },
      { source: "/fi/:path*", destination: "/:path*", permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/fi" },
        { source: `/:path(${notLangOrFile})`, destination: "/fi/:path" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
