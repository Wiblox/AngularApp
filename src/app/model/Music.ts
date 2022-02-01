export interface Music {
  id?: string;
  titre?: string;
  description?: string;
  album?: string;
  artiste?: string;
  duration?: string;
  date?: string;
  style?: string[];
  picture?: string | ArrayBuffer | undefined;
}
