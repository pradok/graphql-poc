import React from "react";
import { Route, Switch } from "react-router-dom";
import { SurveyList, SurveyQuestions } from "./modules/survey";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={"/survey/:id"} component={SurveyQuestions} />
      <Route path={"/"} component={SurveyList} />
    </Switch>
  );
};
