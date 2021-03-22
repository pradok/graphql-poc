import { Connection } from "typeorm";
import { surveyQuestions } from "../../../db/mocks";
import { Survey } from "../../../entity/Survey";
import { connectionTest, graphQLTest } from "../../../utils/test";

let conn: Connection;
let survey: Survey;
let expectedQuestions: {
  id: string;
  title: string;
  subTitle: string;
  options: {
    id: string;
    text: string;
  }[];
}[];
beforeAll(async () => {
  conn = await connectionTest(true);
  survey = await surveyQuestions();
  expectedQuestions = survey.squestions.map(
    ({ id, title, subTitle, options }) => ({
      id: `${id}`,
      title,
      subTitle,
      options: options
        .sort((a, b) => a.id - b.id)
        .map(({ id, text }) => ({ id: `${id}`, text })),
    })
  );
});
afterAll(async () => {
  if (conn) {
    await conn.close();
  }
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

const surveyIdQuestionsQuery = `
 {
  survey(id:"1") {
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

  it("query all surveys with questions and options", async () => {
    const response = await graphQLTest({
      source: surveysQuestionsQuery,
    });
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

  it("query survey by id with questions and options", async () => {
    const response = await graphQLTest({
      source: surveyIdQuestionsQuery,
    });
    expect(response).toMatchObject({
      data: {
        survey: {
          id: `${survey.id}`,
          name: survey.name,
          questions: expectedQuestions,
        },
      },
    });
  });
});
