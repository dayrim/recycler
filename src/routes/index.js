const routes = [
  {
    path: "/",
    name: "Landing",
    componentpath: "landing/landing.js",
    hashroutenames: ["Business model", "Value proposition"],
    hashroutes: ["section3", "section2"]
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    componentpath: "dashboard/dashboard.js"
  },
  {
    path: "/material-page",
    name: "Material Page",
    componentpath: "materialpage/materialpage.js"
  }
];
export default routes;
