# React Route Notes

* the problem with using only Link is that all the links have the same color we do not know which is the active link so its better to use NavLink that will give a class active if the Link is active.

* If you have nested routes and you want a route to be rendered at the parent url make use of index route,the index route will contain the index prop instead of the path prop the path would be the same as the parent route.