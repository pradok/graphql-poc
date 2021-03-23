import DataLoader from "dataloader";
import { Question, Survey } from "../entity/Survey";

const batchQuestions = async (surveyIds: readonly number[]) => {
  console.log({ surveyIds });
  const surveyQuestions = await Survey.find({
    join: {
      alias: "survey",
      leftJoinAndSelect: {
        squestions: "survey.squestions",
        createdByUser: "squestions.createdByUser",
        options: "squestions.options",
      },
    },
  });

  console.log({ surveyQuestions });

  const surveyIdQuestions: { [surveyId: number]: Question[] } = {};

  surveyQuestions.forEach((q) => {
    surveyIdQuestions[q.id] = q.squestions;
  });

  const surveyWithQuestions = surveyIds.map(
    (surveyId) => surveyIdQuestions[surveyId]
  );

  return surveyWithQuestions;
};

export const questionsLoader = () => new DataLoader(batchQuestions);
