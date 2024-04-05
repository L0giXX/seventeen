export interface IAlbum {
  id: number;
  title: string;
  artist: string;
  year: number;
  cover: string;
}

export interface IToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}
