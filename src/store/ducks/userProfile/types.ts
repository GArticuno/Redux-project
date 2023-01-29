
export enum UserTypes {
  REQUEST_USER = '@USER/REQUEST_USER',
  LOAD_REQUEST ='@user/LOAD_REQUEST',
  LOAD_SUCCESS ='@user/LOAD_SUCCESS',
  LOAD_FAILURE ='@user/LOAD_FAILURE',
}

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  blog: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface UserState {
  readonly user: string;
  readonly data: User;
  readonly repositories: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}