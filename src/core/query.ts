export const POST_FRAGMENT = `
  fragment POST_BODY on Post{
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
`
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
  ${POST_FRAGMENT}
  query gql($data : PaginationInput!){
    getPaginationPost(data : $data){
      edges {
        cursor
        node {
          ...POST_BODY
        }
      }
      leftCount
      pageInfo {
        type
        endCursor
        hasNextPage
      }
    }
  }
`

export const GET_LOG_POST = `
  ${POST_FRAGMENT}
  query gql($data : PaginationInput!){
    getPaginationPost(data : $data){
      edges {
        cursor
        node {
          ...POST_BODY
        }
      }
      leftCount
      pageInfo {
        type
        endCursor
        hasNextPage
      }
    }
  }
`

export const GET_VIDEOS = `
  query gql($data : YoutubeInput!){
    getVideos(data : $data){
      data
      nextPageToken
    }
  }
`

export const GET_POST = `
  ${POST_FRAGMENT}
  query gql($data : GetPostInput!){
    getPost(data: $data){
      ...POST_BODY
    }
  }
`
