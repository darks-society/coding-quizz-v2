import * as SMS from './utils/setup_module_score';
import * as TL from './utils/tentative_limiter';
import * as P from './utils/punishement';

const main = (): void => {
  SMS.setupModuleScore();
  TL.tentativeInitialisation();
  document.getElementById('TS')!.addEventListener('click', () => {
    if (P.isPunished('TS')) {
      alert('banned');
    } else {
      localStorage.setItem('context', 'TS');
      window.location.href = './test.html';
      TL.tentativeCounter();
      parseInt(localStorage.getItem('TS_TENTATIVE')!) > 2 &&
        P.punishement('TS');
    }
  });
  document.getElementById('PY')!.addEventListener('click', () => {
    if (P.isPunished('PY')) {
      alert('banned');
    } else {
      localStorage.setItem('context', 'PY');
      window.location.href = './test.html';
      TL.tentativeCounter();
      parseInt(localStorage.getItem('PY_TENTATIVE')!) > 2 &&
        P.punishement('PY');
    }
  });
  document.getElementById('Mongo')!.addEventListener('click', () => {
    if (P.isPunished('Mongo')) {
      alert('banned');
    } else {
      localStorage.setItem('context', 'Mongo');
      window.location.href = './test.html';
      TL.tentativeCounter();
      parseInt(localStorage.getItem('Mongo_TENTATIVE')!) > 2 &&
        P.punishement('Mongo');
    }
  });
};

main();
