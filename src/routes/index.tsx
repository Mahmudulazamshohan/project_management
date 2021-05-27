import { IRoutes } from "../interfaces/IRoutes";
import HomePage from "../pages/HomePage";
import DragPage from "../pages/DragPage";
const routes: Array<IRoutes> = [
  {
    path: "/",
    title: "Home",
    exact: true,
    component: HomePage,
    children: [],
  },
  {
    path: "/drag-page",
    title: "Drag Page",
    exact: true,
    component: HomePage,
    children: [],
  },
];
export default routes;
