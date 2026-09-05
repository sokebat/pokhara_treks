import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/trekking-and-hiking",
        destination: "/trip",
        permanent: true,
      },
      {
        source: "/everest-trekking",
        destination: "/region/everest-region",
        permanent: true,
      },
      {
        source: "/annapurna-trekking",
        destination: "/region/annapurna-region",
        permanent: true,
      },
      {
        source: "/manaslu-trekking",
        destination: "/region/manaslu-region",
        permanent: true,
      },
      {
        source: "/west-nepal-trekking",
        destination: "/region/west-nepal",
        permanent: true,
      },
      {
        source: "/langtang-trekking",
        destination: "/region/langtang-region",
        permanent: true,
      },
      {
        source: "/dhaulagiri-trek",
        destination: "/region/dhaulagiri-region",
        permanent: true,
      },
      {
        source: "/tibet-region",
        destination: "/region/tibet-region",
        permanent: true,
      },
      {
        source: "/kanchenjunga-region",
        destination: "/region/kanchenjunga-region",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
