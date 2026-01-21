export interface Person {
  name: string;
  sex: string;
  born: number;
  died: number;
  slug: string;

  motherName: string | null;
  fatherName: string | null;

  mother: Person | null;
  father: Person | null;
}
