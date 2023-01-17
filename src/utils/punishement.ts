import Timer from './../models/Timer';

export const punishement = (context: string) => {
  localStorage.setItem(
    'PUNISHEMENT_' + context,
    new Date(new Date().setHours(new Date().getHours() + 1))
      .getTime()
      .toString(),
  );
  localStorage.setItem(context + '_TENTATIVE', '0');
};

export const isPunished = (context: string): boolean => {
  let diff: number =
    +localStorage.getItem('PUNISHEMENT_' + context)! - Date.now();
  let isBanned: boolean;
  diff > 0 ? (isBanned = true) : (isBanned = false);
  return isBanned;
};
