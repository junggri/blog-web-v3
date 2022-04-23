export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Auth = {
  __typename?: 'Auth';
  access_token: Scalars['String'];
};

export type DashBoardInput = {
  frequency: DashBoardFrequency;
};

export type Google = {
  __typename?: 'Google';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  rows: Scalars['Float'];
  totalsForAllResults: Result;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HitInput = {
  postId: Scalars['Float'];
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MessageInput = {
  content: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type MessageReplyInput = {
  content: Scalars['String'];
  email: Scalars['String'];
  subject: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePostState: Scalars['String'];
  createHit?: Maybe<Scalars['String']>;
  createMessage: Scalars['String'];
  createVisit: Scalars['Int'];
  login: Auth;
  replyMessage: Scalars['String'];
  upsertPost: Post;
};


export type MutationCreateHitArgs = {
  data: HitInput;
};


export type MutationCreateMessageArgs = {
  data: MessageInput;
};


export type MutationCreateVisitArgs = {
  data: VisitInput;
};


export type MutationLoginArgs = {
  data: UserInput;
};


export type MutationReplyMessageArgs = {
  data: MessageReplyInput;
};


export type MutationUpsertPostArgs = {
  data: PostInput;
  file?: InputMaybe<Scalars['Upload']>;
};

export type PageEdge = {
  __typename?: 'PageEdge';
  cursor: Scalars['Float'];
  node: Post;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Float']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
};

export type PaginatedPost = {
  __typename?: 'PaginatedPost';
  edges: Array<PageEdge>;
  leftCount?: Maybe<Scalars['Float']>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginationInput = {
  after?: InputMaybe<Scalars['Float']>;
  filter?: InputMaybe<Scalars['String']>;
  first: Scalars['Float'];
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  isPublished: Scalars['Boolean'];
  open: Scalars['Boolean'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostInput = {
  content: Scalars['String'];
  description: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  open?: InputMaybe<Scalars['Boolean']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getMessage: Array<Message>;
  getPaginationPost?: Maybe<Array<PaginatedPost>>;
  getPost: Post;
  getS3Image: Scalars['String'];
  getVideos: Youtube;
  getVisitDashBoard?: Maybe<Array<Visit>>;
  getVisitor: Google;
  ping: Scalars['String'];
  validate: Scalars['String'];
};


export type QueryGetPaginationPostArgs = {
  data: PaginationInput;
};


export type QueryGetPostArgs = {
  data: Scalars['Float'];
};


export type QueryGetS3ImageArgs = {
  data: S3Input;
};


export type QueryGetVideosArgs = {
  data: YoutubeInput;
};


export type QueryGetVisitDashBoardArgs = {
  data: DashBoardInput;
};

export type Result = {
  __typename?: 'Result';
  session: Scalars['String'];
  user: Scalars['String'];
};

export type UserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Visit = {
  __typename?: 'Visit';
  city: Scalars['String'];
  count: Scalars['Float'];
  country: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  regionAddress: Scalars['String'];
  regionName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VisitInput = {
  lat: Scalars['String'];
  lon: Scalars['String'];
};

export type Youtube = {
  __typename?: 'Youtube';
  data: Scalars['String'];
  nextPageToken?: Maybe<Scalars['String']>;
};

export type YoutubeInput = {
  nextPageToken?: InputMaybe<Scalars['String']>;
};

export enum DashBoardFrequency {
  FifteenDay = 'FIFTEEN_DAY',
  OneDay = 'ONE_DAY',
  OneMonth = 'ONE_MONTH',
  OneYear = 'ONE_YEAR',
  SevenDay = 'SEVEN_DAY',
  SixMonth = 'SIX_MONTH',
  ThreeMonth = 'THREE_MONTH'
}

export type S3Input = {
  data: Scalars['Float'];
  path: Scalars['String'];
};
