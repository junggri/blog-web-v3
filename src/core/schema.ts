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
};

export type Google = {
  __typename?: 'Google';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  rows: Scalars['Float'];
  totalsForAllResults: Result;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  getVideos: Youtube;
  getVisitor: Google;
};


export type QueryGetVideosArgs = {
  data: YoutubeInput;
};

export type Result = {
  __typename?: 'Result';
  session: Scalars['String'];
  user: Scalars['String'];
};

export type Youtube = {
  __typename?: 'Youtube';
  data: Scalars['String'];
  nextPageToken?: Maybe<Scalars['String']>;
};

export type YoutubeInput = {
  nextPageToken?: InputMaybe<Scalars['String']>;
};
