/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  future: { strictPostcssConfiguration: true },
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  typescript: { ignoreDevErrors: true },
  eslint: { ignoreDuringBuilds: true },
  poweredByHeader: false,
};

// eslint-disable-next-line import/no-default-export
export default nextConfig;
