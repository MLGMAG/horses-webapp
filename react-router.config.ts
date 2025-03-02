import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  async prerender() {
    return ["/", "/logistics", "/medicine", "/social", "/login"];
  },
  basename: "/horses-webapp/",
} satisfies Config;
