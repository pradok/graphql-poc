import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ImageIcon from "@material-ui/icons/Image";
import React from "react";
import { Link } from "react-router-dom";
import { useSurveysQuery } from "../../../generated/graphql";

export const SurveyList: React.FC = () => {
  const { data, error, loading } = useSurveysQuery();
  if (error) {
    return <h2>Error loading Surveys</h2>;
  }

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (data) {
    return (
      <>
        <h2>Compass Surveys</h2>
        <List>
          {data.surveys.map((survey) => (
            <ListItem
              key={survey.id}
              button
              component={Link}
              to={`/survey/${survey.id}`}
            >
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={survey.name} />
            </ListItem>
          ))}
        </List>
      </>
    );
  }
  return <span />;
};
