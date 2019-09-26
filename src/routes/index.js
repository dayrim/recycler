const routes = [
  {
    path: "/",
    name: "Landing",
    componentpath: "landing/landing.js",
    hashroutenames: ["How we work", "Platform"],
    hashroutes: ["section2", "section3"]
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    componentpath: "dashboard/dashboard.js"
  }
];
export default routes;
