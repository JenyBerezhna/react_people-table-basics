export interface Person {
  name: string;
  sex: string;
  born: number;
  died: number;
  slug: string;

  // API fields
  mother: string | null; // slug
  father: string | null; // slug

  // Derived fields (filled in after processing)
  motherName?: string | null;
  fatherName?: string | null;

  motherPerson?: Person | null;
  fatherPerson?: Person | null;
}
