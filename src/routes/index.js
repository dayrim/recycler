const routes = [
  {
    path: "/",
    name: "Landing",
    componentpath: "landing/landing.js",
    hashroutenames: ["About", "How we work", "Platform"],
    hashroutes: ["section1", "section2", "section3"]
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    componentpath: "dashboard/dashboard.js"
  }
];
export default routes;
