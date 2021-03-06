import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  surveys?: Maybe<Array<Survey>>;
  survey?: Maybe<Survey>;
};


export type QuerySurveysArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QuerySurveyArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Survey = {
  __typename?: 'Survey';
  id: Scalars['ID'];
  name: Scalars['String'];
  questions: Array<Question>;
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['ID'];
  title: Scalars['String'];
  subTitle: Scalars['String'];
  createdDateTime: Scalars['String'];
  options: Array<Option>;
  createdBy: Scalars['String'];
};

export type Option = {
  __typename?: 'Option';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type SurveysQueryVariables = Exact<{ [key: string]: never; }>;


export type SurveysQuery = (
  { __typename?: 'Query' }
  & { surveys?: Maybe<Array<(
    { __typename?: 'Survey' }
    & Pick<Survey, 'id' | 'name'>
  )>> }
);

export type SurveyQuestionsQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type SurveyQuestionsQuery = (
  { __typename?: 'Query' }
  & { surveys?: Maybe<Array<(
    { __typename?: 'Survey' }
    & Pick<Survey, 'id' | 'name'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'title' | 'subTitle' | 'createdBy'>
      & { options: Array<(
        { __typename?: 'Option' }
        & Pick<Option, 'id' | 'text'>
      )> }
    )> }
  )>> }
);

export type SurveyByIdQuestionsQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type SurveyByIdQuestionsQuery = (
  { __typename?: 'Query' }
  & { survey?: Maybe<(
    { __typename?: 'Survey' }
    & Pick<Survey, 'id' | 'name'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'title' | 'subTitle' | 'createdBy'>
      & { options: Array<(
        { __typename?: 'Option' }
        & Pick<Option, 'id' | 'text'>
      )> }
    )> }
  )> }
);


export const SurveysDocument = gql`
    query surveys {
  surveys {
    id
    name
  }
}
    `;

/**
 * __useSurveysQuery__
 *
 * To run a query within a React component, call `useSurveysQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveysQuery({
 *   variables: {
 *   },
 * });
 */
export function useSurveysQuery(baseOptions?: Apollo.QueryHookOptions<SurveysQuery, SurveysQueryVariables>) {
        return Apollo.useQuery<SurveysQuery, SurveysQueryVariables>(SurveysDocument, baseOptions);
      }
export function useSurveysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SurveysQuery, SurveysQueryVariables>) {
          return Apollo.useLazyQuery<SurveysQuery, SurveysQueryVariables>(SurveysDocument, baseOptions);
        }
export type SurveysQueryHookResult = ReturnType<typeof useSurveysQuery>;
export type SurveysLazyQueryHookResult = ReturnType<typeof useSurveysLazyQuery>;
export type SurveysQueryResult = Apollo.QueryResult<SurveysQuery, SurveysQueryVariables>;
export const SurveyQuestionsDocument = gql`
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

/**
 * __useSurveyQuestionsQuery__
 *
 * To run a query within a React component, call `useSurveyQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyQuestionsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSurveyQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<SurveyQuestionsQuery, SurveyQuestionsQueryVariables>) {
        return Apollo.useQuery<SurveyQuestionsQuery, SurveyQuestionsQueryVariables>(SurveyQuestionsDocument, baseOptions);
      }
export function useSurveyQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SurveyQuestionsQuery, SurveyQuestionsQueryVariables>) {
          return Apollo.useLazyQuery<SurveyQuestionsQuery, SurveyQuestionsQueryVariables>(SurveyQuestionsDocument, baseOptions);
        }
export type SurveyQuestionsQueryHookResult = ReturnType<typeof useSurveyQuestionsQuery>;
export type SurveyQuestionsLazyQueryHookResult = ReturnType<typeof useSurveyQuestionsLazyQuery>;
export type SurveyQuestionsQueryResult = Apollo.QueryResult<SurveyQuestionsQuery, SurveyQuestionsQueryVariables>;
export const SurveyByIdQuestionsDocument = gql`
    query surveyByIdQuestions($id: String) {
  survey(id: $id) {
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

/**
 * __useSurveyByIdQuestionsQuery__
 *
 * To run a query within a React component, call `useSurveyByIdQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyByIdQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyByIdQuestionsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSurveyByIdQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<SurveyByIdQuestionsQuery, SurveyByIdQuestionsQueryVariables>) {
        return Apollo.useQuery<SurveyByIdQuestionsQuery, SurveyByIdQuestionsQueryVariables>(SurveyByIdQuestionsDocument, baseOptions);
      }
export function useSurveyByIdQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SurveyByIdQuestionsQuery, SurveyByIdQuestionsQueryVariables>) {
          return Apollo.useLazyQuery<SurveyByIdQuestionsQuery, SurveyByIdQuestionsQueryVariables>(SurveyByIdQuestionsDocument, baseOptions);
        }
export type SurveyByIdQuestionsQueryHookResult = ReturnType<typeof useSurveyByIdQuestionsQuery>;
export type SurveyByIdQuestionsLazyQueryHookResult = ReturnType<typeof useSurveyByIdQuestionsLazyQuery>;
export type SurveyByIdQuestionsQueryResult = Apollo.QueryResult<SurveyByIdQuestionsQuery, SurveyByIdQuestionsQueryVariables>;