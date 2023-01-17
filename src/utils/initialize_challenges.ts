import Challenge from '../models/Challenge';

const initializeTypescript = (): Challenge[] => {
  let challenges: Challenge[] = [];
  challenges.push(
    new Challenge(
      'What is the correct way to define a string variable in TypeScript?',
      'let myString: string = "hello";',
      [
        'let myString = "hello";',
        'var myString: string = "hello";',
        'const myString: string = "hello";',
      ],
      20,
    ),
    new Challenge(
      'What is the correct way to define a boolean variable in TypeScript?',
      'let myBoolean: boolean = true;',
      [
        'let myBoolean = true;',
        'var myBoolean: boolean = true;',
        'const myBoolean: boolean = true;',
      ],
      30,
    ),
    new Challenge(
      'What is the correct way to define a number variable in TypeScript?',
      'let myNumber: number = 42;',
      [
        'let myNumber = 42;',
        'var myNumber: number = 42;',
        'const myNumber: number = 42;',
      ],
      10,
    ),
    new Challenge(
      'What is the correct way to define an array of strings in TypeScript?',
      'let myArray: string[] = ["hello", "world"];',
      [
        'let myArray = ["hello", "world"];',
        'let myArray: Array<string> = ["hello", "world"];',
        'let myArray: [string] = ["hello", "world"];',
      ],
      20,
    ),
  );
  return challenges;
};
const initializeMongo = (): Challenge[] => {
  let challenges: Challenge[] = [];
  challenges.push(
    new Challenge(
      'What is the correct syntax for creating a new MongoDB database?',
      'use myDatabase',
      [
        'CREATE DATABASE myDatabase',
        'CREATE NEW DATABASE myDatabase',
        'NEW DATABASE myDatabase',
      ],
      20,
    ),
    new Challenge(
      'What is the correct syntax for inserting a new document into a collection in MongoDB?',
      'db.myCollection.insert({ name: "John", age: 30 })',
      [
        'INSERT INTO myCollection (name, age) VALUES ("John", 30)',
        'INSERT myCollection SET name = "John", age = 30',
        'db.myCollection.add({ name: "John", age: 30 })',
      ],
      30,
    ),
    new Challenge(
      'What is the correct syntax for updating a document in a collection in MongoDB?',
      'db.myCollection.update({ name: "John" }, { $set: { age: 31 } })',
      [
        'UPDATE myCollection SET age = 31 WHERE name = "John"',
        'db.myCollection.set({ name: "John" }, { age: 31 })',
        'db.myCollection.updateOne({ name: "John" }, { age: 31 })',
      ],
      10,
    ),
  );
  return challenges;
};

const initializePython = (): Challenge[] => {
  let challenges: Challenge[] = [];
  challenges.push(
    new Challenge(
      'What is the correct way to define a string variable in Python?',
      'my_string = "hello"',
      ['my_string = "hello"', 'myString = "hello"', 'my-string = "hello"'],
      20,
    ),
    new Challenge(
      'What is the correct way to define a boolean variable in Python?',
      'my_boolean = True',
      ['my_boolean = true', 'myBoolean = True', 'my-boolean = True'],
      30,
    ),
    new Challenge(
      'What is the correct way to define a number variable in Python?',
      'my_number = 42',
      ['my_number = 42', 'myNumber = 42', 'my-number = 42'],
      10,
    ),
    new Challenge(
      'What is the correct way to define an array of strings in Python?',
      'my_array = ["hello", "world"]',
      [
        'my_array = ["hello", "world"]',
        'myArray = ["hello", "world"]',
        'my-array = ["hello", "world"]',
      ],
      20,
    ),
    new Challenge(
      'What is the correct way to define a dictionary in Python?',
      'my_dict = {"name": "John", "age": 30}',
      [
        'my_dict = {"name": "John", "age": 30}',
        'myDict = {"name": "John", "age": 30}',
        'my-dict = {"name": "John", "age": 30}',
      ],
      30,
    ),
  );
  return challenges;
};

export { initializeMongo, initializePython, initializeTypescript };
