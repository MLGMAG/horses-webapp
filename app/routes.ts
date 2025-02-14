import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/login", "routes/login.tsx"),
  route("/transfer", "routes/transfer.tsx"),
  route("/medicine", "routes/medicine.tsx"),
  route("/social", "routes/social.tsx"),
] satisfies RouteConfig;
