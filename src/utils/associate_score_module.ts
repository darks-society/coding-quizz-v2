export const associateScore = (final_score: number): void => {
  if (localStorage.getItem('context') === 'TS') {
    localStorage.setItem('best_score_ts', final_score.toString());
  } else if (localStorage.getItem('context') === 'PY') {
    localStorage.setItem('best_score_py', final_score.toString());
  } else if (localStorage.getItem('context') === 'Mongo') {
    localStorage.setItem('best_score_mongo', final_score.toString());
  }
};

export const getScoreTypeUsingContext = (context: string): string => {
  if (context === 'TS') {
    return 'best_score_ts';
  } else if (context === 'PY') {
    return 'best_score_py';
  } else if (context === 'Mongo') {
    return 'best_score_mongo';
  } else {
    return '';
  }
};
