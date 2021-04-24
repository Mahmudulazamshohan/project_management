import React from "react";
import { useHistory, withRouter } from "react-router-dom";
export interface IHomePage {}

const HomePage: React.FC<IHomePage> = () => {
  const history = useHistory();
  // useEffect(() => {
  //   console.log(history);
  //   setTimeout(() => {
  //     history.push("/abcd");
  //   }, 3000);
  // }, []);
  return <div>Home Page</div>;
};
export default withRouter(HomePage);
