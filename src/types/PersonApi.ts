export interface PersonApi {
  name: string;
  sex: string;
  born: number;
  died: number;
  slug: string;
  mother: string | null; // slug
  father: string | null;
}
