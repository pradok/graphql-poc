import DataLoader from "dataloader";
import { Survey } from "../entity";
import { Question } from "../entity/Question.entity";

const batchQuestions = async (surveyIds: readonly number[]) => {
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
