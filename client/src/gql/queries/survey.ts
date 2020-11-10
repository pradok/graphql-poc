import gql from "graphql-tag";

export const surveys = gql`
  query surveys {
    surveys {
      id
      name
    }
  }
`;

export const surveyQuestions = gql`
  query surveyQuestions($id: String) {
    surveys(id: $id) {
      id
      name
      questions {
        id
        title
        subTitle
        createdBy
        options {
          id
          text
        }
      }
    }
  }
`;
