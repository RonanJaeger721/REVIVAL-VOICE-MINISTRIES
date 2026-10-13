import type { NextConfig } from 'next';
const config: NextConfig = { devIndicators: false, experimental: { cpus: 2 }, turbopack: { root: process.cwd() }, outputFileTracingRoot: process.cwd() };
export default config;
