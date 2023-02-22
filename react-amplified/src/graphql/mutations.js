/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuestionnaire = /* GraphQL */ `
  mutation CreateQuestionnaire(
    $input: CreateQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    createQuestionnaire(input: $input, condition: $condition) {
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
export const updateQuestionnaire = /* GraphQL */ `
  mutation UpdateQuestionnaire(
    $input: UpdateQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    updateQuestionnaire(input: $input, condition: $condition) {
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
export const deleteQuestionnaire = /* GraphQL */ `
  mutation DeleteQuestionnaire(
    $input: DeleteQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    deleteQuestionnaire(input: $input, condition: $condition) {
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
