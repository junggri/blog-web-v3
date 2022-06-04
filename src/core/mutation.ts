export const CREATE_MESSAGE = `
  mutation gql($data : MessageInput!){
    createMessage(data : $data) 
  }
`
