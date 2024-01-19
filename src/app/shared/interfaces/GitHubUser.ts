export interface UserData {
  id?: number;
  name?: string;
  nickname: string;
  bio?: string;
  login: string;
  public_repos: number;
  public_gists: number;
  followers?: number;
  following?: number;
  company?: string;
  location?: string;
  avatar_url?: string;
  created_at?: string;
  updated_at?: string;
}