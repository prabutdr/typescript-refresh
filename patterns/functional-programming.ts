
interface RawPerson1 {
  identifier: number;
  first_name: string;
  last_name: string;
}

interface Person1 {
  id: string;
  fullName: string;
}

const transformPerson = (raw: RawPerson1): Person1 => {
  return {
    id: `${raw.identifier}`,
    fullName: `${raw.first_name} ${raw.last_name}`
  }
}

console.log(transformPerson({
  identifier: 123,
  first_name: 'Tikku',
  last_name: 'Pikku'
}));