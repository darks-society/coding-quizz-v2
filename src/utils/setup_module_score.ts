export const setupModuleScore = (): void => {
  let best_score_ts = localStorage.getItem('best_score_ts');
  best_score_ts
    ? (document.getElementById('scoreTS')!.textContent =
        'your best score : ' + localStorage.getItem('best_score_ts'))
    : localStorage.setItem('best_score_ts', '0');

  let best_score_mongo = localStorage.getItem('best_score_mongo');
  best_score_mongo
    ? (document.getElementById('scoreMongo')!.textContent =
        'your best score : ' + localStorage.getItem('best_score_mongo'))
    : localStorage.setItem('best_score_mongo', '0');

  let best_score_py = localStorage.getItem('best_score_py');
  best_score_py
    ? (document.getElementById('scorePy')!.textContent =
        'your best score : ' + localStorage.getItem('best_score_py'))
    : localStorage.setItem('best_score_py', '0');

  let punishement_ts = localStorage.getItem('PUNISHEMENT_TS');
  !punishement_ts && localStorage.setItem('PUNISHEMENT_TS', '0');

  let punishement_mongo = localStorage.getItem('PUNISHEMENT_Mongo');
  !punishement_mongo && localStorage.setItem('PUNISHEMENT_Mongo', '0');

  let punishement_py = localStorage.getItem('PUNISHEMENT_PY');
  !punishement_py && localStorage.setItem('PUNISHEMENT_PY', '0');
};
