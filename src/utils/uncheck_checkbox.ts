export const uncheck = (): void => {
  let guess1 = document.getElementById('guess1');
  let guess2 = document.getElementById('guess2');
  let guess3 = document.getElementById('guess3');
  let guess4 = document.getElementById('guess4');
  document.getElementById('guess1')!.checked = false;
  document.getElementById('guess2')!.checked = false;
  document.getElementById('guess3')!.checked = false;
  document.getElementById('guess4')!.checked = false;
};
