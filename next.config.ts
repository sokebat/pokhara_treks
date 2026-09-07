import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/dashboard/region",
        destination: "/dashboard/regions",
        permanent: true,
      },
      {
        source: "/dashboard/region/:path*",
        destination: "/dashboard/regions/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
