declare module "next-pwa" {
  import type { NextConfig } from "next";

  type WithPwa = (config: NextConfig) => NextConfig;

  const withPWA: (options: {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
  }) => WithPwa;

  export default withPWA;
}
