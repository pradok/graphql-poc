import { Connection } from "typeorm";
import { surveyQuestions } from "../../../db/mocks";
import { Survey } from "../../../entity";
import { connectionTest, graphQLTest } from "../../../utils/test";

let conn: Connection;
let survey: Survey;
beforeAll(async () => {
  conn = await connectionTest(true);
  survey = await surveyQuestions();
});
afterAll(async () => {
  await conn.close();
});

const surveysQuery = `
 {
  surveys {
    id
    name
  }
}
`;

const surveysQuestionsQuery = `
 {
  surveys {
    id
    name
    questions {
      id
      title
      subTitle
      createdDateTime
      options {
        id
        text
      }
    }
  }
}
`;

describe("SurveyResolver", () => {
  it("query surveys", async () => {
    const response = await graphQLTest({
      source: surveysQuery,
    });

    expect(response).toMatchObject({
      data: {
        surveys: [
          {
            id: `${survey.id}`,
            name: survey.name,
          },
        ],
      },
    });
  });

  it("query surveys with questions", async () => {
    const response = await graphQLTest({
      source: surveysQuestionsQuery,
    });
    const expectedQuestions = survey.squestions.map(
      ({ id, title, subTitle, options }) => ({
        id: `${id}`,
        title,
        subTitle,
        options: options
          .sort((a, b) => b.id - a.id)
          .map(({ id, text }) => ({ id: `${id}`, text })),
      })
    );
    expect(response).toMatchObject({
      data: {
        surveys: [
          {
            id: `${survey.id}`,
            name: survey.name,
            questions: expectedQuestions,
          },
        ],
      },
    });
  });
});
