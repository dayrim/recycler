const routes = [
  {
    path: "/",
    name: "Landing",
    componentpath: "landing/landing.js",
    hashroutenames: ["Value proposition", "Business model"],
    hashroutes: ["section2", "section3"]
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
