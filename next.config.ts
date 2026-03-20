import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  // Skip prerendering API routes (auth requires runtime env vars)
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true
};

export default withNextIntl(nextConfig);
