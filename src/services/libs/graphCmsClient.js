/**
* The module for managing the connection with GraphCMS
* @module services/libs/graphCmsClient
*/
import { GraphQLClient } from 'graphql-request'

/**
* @function GraphQLClient
* Create the GraphQLClient for making the request
* @return {Object} The graphQlClient
**/
export default new GraphQLClient(
  'https://api-ap-northeast-1.graphcms.com/v2/cklbydjc8p15k01z3fd6bhvz3/master'
)
