import { InMemoryCache } from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { surveyQuestions } from "gql/queries/survey";
import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { SurveyQuestions } from "../SurveyQuestions";

const mocks = [
  {
    request: {
      query: surveyQuestions,
      variables: {
        id: "1",
      },
    },
    result: {
      data: {
        surveys: [
          {
            id: "1",
            name: "Survey 1",
            questions: [
              {
                createdBy: "Josefa Balistreri",
                id: "3",
                title: "Main title Survey 1 Question 1",
                subTitle: "Sub title Survey 1 Question 1",
                options: [
                  { id: "1", text: "Question 1 Option 1" },
                  { id: "2", text: "Question 1 Option 2" },
                ],
              },
              {
                createdBy: "Josefa Balistreri",
                id: "4",
                title: "Main title Survey 1 Question 2",
                subTitle: "Sub title Survey 1 Question 2",
                options: [
                  { id: "5", text: "Question 2 Option 1" },
                  { id: "7", text: "Question 2 Option 2" },
                ],
              },
            ],
          },
        ],
      },
    },
  },
];

it("SurveyList renders without error and correct data", async () => {
  const cache = new InMemoryCache({ addTypename: true });
  const component = render(
    <MockedProvider mocks={mocks} cache={cache}>
      <MemoryRouter initialEntries={["survey/1"]}>
        <Route path="survey/:id">
          <SurveyQuestions />
        </Route>
      </MemoryRouter>
    </MockedProvider>
  );
  await component.findByText("Survey 1");
  await component.findByText("Sub title Survey 1 Question 1");
  await component.findByText("Question 2 Option 1");
});
