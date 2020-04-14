
type FancyBoolean = boolean | string;

type Tuple2String = [string, string];

let tuple2String: Tuple2String = ['test', 'test1'];

// For literal
type AllowedColors = 'RED' | 'GREEN' | 'BLUE';

type AllowedBinary = 0 | 1;

const allowedColor: AllowedColors = 'RED';
// const allowedColor: AllowedColors = 'BLACK'; // ERROR
const allowedBinary: AllowedBinary = 0;