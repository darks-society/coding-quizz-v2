import Challenge from "../models/Challenge";

export const randomChallenge = (challenges: Challenge[]): number => {
  return Math.floor(Math.random() * challenges.length);
};
