import { IRoutes } from "../interfaces/IRoutes";
import HomePage from "../pages/HomePage";
import DragPage from "../pages/DragPage";
import NotfoundPage from "../pages/NotfoundPage";

const routes: Array<IRoutes> = [
  {
    path: "/",
    title: "Home",
    exact: true,
    component: HomePage,
  },
  {
    path: "/drag-page/:id",
    title: "Drag Page",
    exact: true,
    component: DragPage,
  },
  {
    path: "*",
    title: "Drag Page",
    exact: true,
    component: NotfoundPage,
  },
];
export default routes;
