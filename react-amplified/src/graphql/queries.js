/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestionnaire = /* GraphQL */ `
  query GetQuestionnaire($id: ID!) {
    getQuestionnaire(id: $id) {
      id
      product_source_classic
      product_source_mapreduce
      product_source_cloud
      years_on_market_classic
      years_on_market_mapreduce
      years_on_market_cloud
      pipelines_per_data_eng_classic
      pipelines_per_data_eng_mapreduce
      pipelines_per_data_eng_cloud
      createdAt
      updatedAt
    }
  }
`;
export const listQuestionnaires = /* GraphQL */ `
  query ListQuestionnaires(
    $filter: ModelQuestionnaireFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionnaires(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        product_source_classic
        product_source_mapreduce
        product_source_cloud
        years_on_market_classic
        years_on_market_mapreduce
        years_on_market_cloud
        pipelines_per_data_eng_classic
        pipelines_per_data_eng_mapreduce
        pipelines_per_data_eng_cloud
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
