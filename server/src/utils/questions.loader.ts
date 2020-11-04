import DataLoader from "dataloader";
import { Question } from "../entity/Question.entity";
import { Survey } from "../entity/Survey.entity";

const batchQuestions = async (surveyIds: readonly number[]) => {
  console.log("surveyIds", surveyIds);
  const surveyQuestions = await Survey.find({
    join: {
      alias: "survey",
      leftJoinAndSelect: {
        squestions: "survey.squestions",
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