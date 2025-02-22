import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  async prerender() {
    return ["/", "/transfer", "/medicine", "/social", "/login"];
  },
  basename: "/horses-webapp/",
} satisfies Config;
