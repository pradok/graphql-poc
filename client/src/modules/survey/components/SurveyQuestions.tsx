import {
  Button,
  Card,
  CardContent,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useSurveyQuestionsQuery } from "generated/graphql";
import React from "react";
import { Link, useParams } from "react-router-dom";

export const SurveyQuestions: React.FC = () => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useSurveyQuestionsQuery({
    variables: { id },
  });
  if (error) {
    return <h2>Error loading Surveys</h2>;
  }

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (data) {
    const { questions, name } = data.surveys[0];
    return (
      <>
        <h2>{name}</h2>
        {questions.map((question) => (
          <Card key={question.id} style={{ marginBottom: "25px" }}>
            <CardContent>
              <h4>{question.title}</h4>
              <h5>{question.subTitle}</h5>
              {question.options.map(({ id, text }) => (
                <List key={id}>
                  <ListItem onClick={handleToggle(parseInt(id))} button>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(parseInt(id)) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{
                          "aria-labelledby": `checkbox-list-label-${id}`,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </List>
              ))}
            </CardContent>
          </Card>
        ))}
        <Button
          component={Link}
          to={"/survey"}
          variant="contained"
          color="primary"
        >
          Back
        </Button>
      </>
    );
  }

  return <h2>No Survey loaded</h2>;
};
