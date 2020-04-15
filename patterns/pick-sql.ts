// async function fetchPersonById<T extends keyof Person> (
//   id: string,
//   ...fields: T[]
// ): Promise<Pick<Reaction, T>> {
//   return await knex('Person')
//     .where({ id })
//     .select(fields)
//     .first();
// }

// const reaction = await fetchPersonById(id, 'name', 'age');
// // = { name: string, age: number }

class BasicCalculator {
  
}