import type Tentative from 'src/interfaces/tentative-payload';

export const tentativeCounter = (): void => {
  const current_context: string = localStorage.getItem('context')!;
  if (current_context === 'TS') {
    localStorage.setItem(
      'TS_TENTATIVE',
      (parseInt(localStorage.getItem('TS_TENTATIVE')!) + 1).toString(),
    );
  } else if (current_context === 'PY') {
    localStorage.setItem(
      'PY_TENTATIVE',
      (parseInt(localStorage.getItem('PY_TENTATIVE')!) + 1).toString(),
    );
  } else if (current_context === 'Mongo') {
    localStorage.setItem(
      'Mongo_TENTATIVE',
      (parseInt(localStorage.getItem('Mongo_TENTATIVE')!) + 1).toString(),
    );
  }
};

export const tentativeInitialisation = (): void => {
  let tentatives: Tentative[] = [
    { moduleName: 'TS_TENTATIVE', tentativeNumber: 0 },
    { moduleName: 'PY_TENTATIVE', tentativeNumber: 0 },
    { moduleName: 'Mongo_TENTATIVE', tentativeNumber: 0 },
  ];

  for (const tentative of tentatives) {
    !localStorage.getItem(tentative.moduleName) &&
      localStorage.setItem(
        tentative.moduleName,
        tentative.tentativeNumber.toString(),
      );
  }
};
