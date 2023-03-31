import { lazy, Suspense } from "react";
export const routes = [
  {
    name: "menu.dashboard",
    key: "dashboard",
  },
  {
    name: "Example",
    key: "example",
  },
];
export function getFlattenRoutes(routes) {
  console.log("routes", routes);
  const res = [];
  function travel(_routes) {
    _routes.forEach((route) => {
      if (route.key && !route.children) {
        // 顶层路由
        const Component = lazy(() => import(`./pages/${route.key}/index.jsx`));
        console.log(`./pages/${route.key}/index.tsx`);
        route.component = (
          <Suspense>
            <Component />
          </Suspense>
        );
        res.push(route);
        console.log("route", route);
      } else if (Array.isArray(route.children) && route.children.length) {
        // 字路由并且存在节点
        travel(route.children);
      }
    });
  }
  travel(routes);
  console.log("res", res);
  return res;
}
