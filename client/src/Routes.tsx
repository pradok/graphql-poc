import React from "react";
import { Route, Switch } from "react-router-dom";
import { SurveyPage } from "./modules/survey/Survey.page";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={"/"} component={SurveyPage} />
    </Switch>
  );
};
