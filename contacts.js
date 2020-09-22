const NUM_CONTACTS = 2;

const firstNames = ["Uttam", "Aditya", "Ankit", "Pratik", "Dhanesh", "Tanish", "Divyanshu"];

const lastNames = ["Rabari", "Mishra", "Mistry", "Dave", "Nair", "Gupta"];

const rand = (max, min=0) => Math.floor(Math.random() * (max - min + 1)) + min;

// generate a name
const generateName = () => `${firstNames[rand(firstNames.length - 1)]} ${lastNames[rand(lastNames.length - 1)]}`;

// generate a phone
const generatePhone = () => `${rand(999,100)}-${rand(999,100)}-${rand(9999,1000)}`;

const createContact = () => ({ name : generateName(), phone : generatePhone() });

const addKeys = (val, key) => ( { key, ...val } );

export default Array.from({length : NUM_CONTACTS}, createContact).map(addKeys);

export const compareNames = (contact01, contact02) => {
    return contact01.name > contact02.name
}