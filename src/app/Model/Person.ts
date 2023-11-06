export class Person {
  id: number;
  name: string;
  firstname: string;
  age: number;
  path: string;
  description: string;
  job: string;

  constructor(id: number = 0, name: string = "try", firstname: string = "me", age: number = 90, path: string = "", description: string = "", job: string = "nothing") {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.path = path;
    this.description = description;
    this.job = job;
  }
}
