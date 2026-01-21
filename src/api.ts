import { PersonApi } from './types/PersonApi';
import { Person } from './types/Person';

const API_URL =
  'https://mate-academy.github.io/react_people-table/api/people.json';

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export function getPeople(): Promise<Person[]> {
  return wait(500)
    .then(() => fetch(API_URL))
    .then(res => res.json())
    .then((peopleFromServer: PersonApi[]) => {
      // lookup map by slug
      const map = new Map<string, Person>();

      const people: Person[] = peopleFromServer.map(p => ({
        ...p,
        mother: null,
        father: null,
        motherName: null,
        fatherName: null,
      }));

      people.forEach(p => map.set(p.slug, p));

      people.forEach((person, index) => {
        const apiPerson = peopleFromServer[index];

        const mother = apiPerson.mother
          ? (map.get(apiPerson.mother) ?? null)
          : null;
        const father = apiPerson.father
          ? (map.get(apiPerson.father) ?? null)
          : null;

        people[index] = {
          ...person,
          mother,
          father,
          motherName: mother?.name ?? null,
          fatherName: father?.name ?? null,
        };
      });

      return people;
    });
}
