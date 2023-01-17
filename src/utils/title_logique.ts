export const titleLogique = () => {
  if (localStorage.getItem('context') === 'TS') {
    document.getElementById('tech')!.textContent = 'Typescript Quizz';
  } else if (localStorage.getItem('context') === 'PY') {
    document.getElementById('tech')!.textContent = 'Python Quizz';
  } else if (localStorage.getItem('context') === 'Mongo') {
    document.getElementById('tech')!.textContent = 'MongoDB Quizz';
  }
};
