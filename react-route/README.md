# React Route Notes

* the problem with using only Link is that all the links have the same color we do not know which is the active link so its better to use NavLink that will give a class active if the Link is active.

* If you have nested routes and you want a route to be rendered at the parent url make use of index route,the index route will contain the index prop instead of the path prop the path would be the same as the parent route.

* React router first of all search for the exact match in routes if not found then only it will proceed for the nested routes. And inside nested routes also it will first go to search for the exact match if not found then only proceed with dynamic route.

* Lazy loading is a technique where components not required on the homepage can be split into seperate code bundles and downloaded only when the user navigates to that page, we can think of it as incrementally downloading the application, it helps reduce initial load time thereby improving performence.