export type Character = {
  id: number;
  name: string;
  image: string;
  gender: string;
  species: string;
  status: string;
  type: string;
  location: { name: string; url: string };
  origin: { name: string; url: string };
  episode: string[];
  url: string;
  created: string;
};

export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
export type PropsCharacter = {
  data: Character;
};

export type Props = {
  data: {
    info: Info;
    results: Character[];
  };
};

export type PageState = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
  current: string;
};

export type QueryParams = {
  query: {
    id: string;
  };
};
