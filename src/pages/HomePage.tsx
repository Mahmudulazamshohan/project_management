import React from "react";
import { useHistory, withRouter } from "react-router-dom";
export interface IHomePage {}

const HomePage: React.FC<IHomePage> = () => {
  const history = useHistory();
  return (
    <div>
      <h2>Projects</h2>
    </div>
  );
};
export default withRouter(HomePage);
