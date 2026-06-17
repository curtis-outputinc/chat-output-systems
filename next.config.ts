import type { NextConfig } from 'next';

// Pin the workspace root so Next.js doesn't pick up the parent C:\Projects\ project's lockfile.
const root = process.cwd();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root,
  },
  outputFileTracingRoot: root,
  async rewrites() {
    // Proxies Vercel Analytics through neutral, same-origin paths so
    // browser-side blockers and extensions that match "_vercel/insights"
    // can't intercept the script load or event POSTs.
    return [
      { source: '/api/r/load.js', destination: '/_vercel/insights/script.js' },
      { source: '/api/r/c/:path*', destination: '/_vercel/insights/:path*' },
    ];
  },
};

export default nextConfig;
