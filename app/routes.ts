import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/page.tsx", [
    index("routes/home.tsx"),
    route("/login", "routes/login.tsx"),
    route("/logistics", "routes/logistics.tsx"),
    route("/medicine", "routes/medicine.tsx"),
    route("/social", "routes/social.tsx"),
    route("/market", "routes/market.tsx"),
  ]),
] satisfies RouteConfig;
