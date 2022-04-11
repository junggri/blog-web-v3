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
