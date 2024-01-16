import { sha256 } from "react-native-sha256";

export default async function generateUniqueColor(userId) {
  const hRange = [0, 360];
  const sRange = [0, 100];
  const lRange = [0, 100];

  // Function to hash a string using a promise-based hashing library
  // const getHashOfString = async (name) => {
  //   const hash = await sha256(name);
  //   return hash;
  // };
  // Function to normalize a hash value within a given range
  // const normalizeHash = (hash, min, max) => {
  //   // Seeded randomness based on hash
  //   Math.random = () => (Math.sin(hash * Math.PI) + 1) / 2;
  //   return Math.random() * (max - min + 1) + min;
  // };

  // Function to generate and format HSL values from a string
  // const generateHSL = async (name) => {
  //   const hash = await getHashOfString(name); // Await for hash
  //   const h = normalizeHash(hash, hRange[0], hRange[1]);
  //   const s = normalizeHash(hash, sRange[0], sRange[1]);
  //   const l = normalizeHash(hash, lRange[0], lRange[1]);
  //   return `hsl(${h}, ${s}%, ${l}%)`;
  // };
  // console.log(generateHSL(userId));
  // return generateHSL(userId); // Call the asynchronous function
}
