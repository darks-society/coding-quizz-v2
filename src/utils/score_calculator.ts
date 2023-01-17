export const scoreCalculator = (
  totalChallenges: number,
  challengeSuccessful: number,
): number => {
  return Math.floor((challengeSuccessful * 100) / totalChallenges);
};
