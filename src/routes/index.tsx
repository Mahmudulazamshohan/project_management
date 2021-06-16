import { IRoutes } from "../interfaces/IRoutes";
import HomePage from "../pages/HomePage";
import BoardPage from "../pages/BoardPage";
import NotfoundPage from "../pages/NotfoundPage";

const routes: Array<IRoutes> = [
  {
    path: "/",
    title: "Home",
    exact: true,
    component: HomePage,
  },
  {
    path: "/board/:id",
    title: "Board Page",
    exact: true,
    component: BoardPage,
  },
  {
    path: "*",
    title: "Drag Page",
    exact: true,
    component: NotfoundPage,
  },
];
export default routes;
