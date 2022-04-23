export const GET_HITS = `
   query gql{
      getVisitor{
         totalsForAllResults{
            user
            session
         }
         rows
      }
   }
`

export const GET_PAGINATED_POST = `
  query gql($data : PaginationInput!){
    getPaginationPost(data : $data){
      edges {
        cursor
        node {
          content
          createdAt
          description
          id
          isPublished
          open
          thumbnail
          title
          type
          updatedAt
        }
      }
      leftCount
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`
