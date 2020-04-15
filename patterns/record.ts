type Record<K extends string, T> = { [P in K]: T};

type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 
  'Friday' | 'Saturday' | 'Sunday';

type EverydayParty = Record<Day, 'party'>;
/*
= {
    Monday: "party";
    Tuesday: "party";
    Wednesday: "party";
    Thursday: "party";
    Friday: "party";
    Saturday: "party";
    Sunday: "party";
}
*/


export{}; 