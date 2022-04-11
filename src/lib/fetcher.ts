import axios, {AxiosInstance} from "axios"

export class fetcher {

  constructor() {
  }


  static fetch() {
    return new fetcher()
  }

  async query<T>(query: string, variables?: any): Promise<T> {
    const {data} = await axios({
      url: 'http://localhost:5000/graphql',
      method: "post",
      data: {query: query, variables: variables, errorPolicy: 'all'},
      headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-cache'},
    });

    return data
  }

  async mutation<T, F>(mutation: string, variables: any): Promise<T> {

    const {data} = await axios({
      url: 'http://localhost:5000/graphql',
      method: "post",
      data: {query: mutation, variables: variables, errorPolicy: 'all'},
      headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-cache'},
    })
    return data
  }
}
