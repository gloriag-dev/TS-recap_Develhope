//Primitives. string, number, boolean

let students: string[] = ['Anna', 'Alessio']
let play: number[] = [4, 2, 98]


//parameter type annotation
let greet = (name: string) =>{
console.log("Hello, " + name.toUpperCase() + "!!");
}

//return type annotations
let getFavouriteNum = ():number =>{
    return 24
}


//optional params
function printName(obj: { first: string; last?: string }) {
    // ...
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson"
});

//union types
function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
//   printId({ myID: 22342 });

//type aliases
type User ={
    name: string,
    surname: string,
    age: number
}

interface IProduct {
productId: string,
productName: string,
dateCreated: Date,
dateModified: Date
}

interface IProductV2 extends IProduct {
    associatedConsumers?: string[],
    isAvailable: boolean
}
//forced type
let getAgeProp = (age: any) => {
    return age as number
}
//function types
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
  }

//type void = function that does not return values
function voidFn() : void {
    // return 8;
  }


  //return type throwns an exception
  function fail(msg: string): never {
    throw new Error(msg);
  }

  interface Person {
    name: string;
    age: number;
  }

  function greeting(person: Person) {
    return "Hello " + person.name;
  }

//tuple types
type StringNumberPair = [string, number];

//Enum types
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }
//Partial
//Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type
interface Todo {
    title: string;
    description: string;
  }
   
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }
   
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };
   
  const todo2 = updateTodo(todo1, {
    description: "throw out trash",
  });

//   Required<Type>
//   Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
  
  interface Props {
    a?: number;
    b?: string;
  }
   
  const obj: Props = { a: 5 };
   
//  const obj2: Required<Props> = { a: 5 };
//  Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'


//Readonly<Type>

//Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

interface Todo1 {
  title: string;
}
 
const myTodo: Readonly<Todo1> = {
  title: "Delete inactive users",
};
 
// myTodo.title = "Hello";
// Cannot assign to 'title' because it is a read-only property


//Record
interface CatInfo {
    age: number;
    breed: string;
  }
   
  type CatName = "miffy" | "ares" | "mordred";
   
  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    ares: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
  };

//Pick
//Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

interface Todo3 {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview1 = Pick<Todo3, "title" | "completed">;
 
const mytodo: TodoPreview1 = {
  title: "Clean room",
  completed: false,
};
 
//Omit
interface Todo4 {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }
   
  type TodoPreview2 = Omit<Todo4, "description">;
   
  const mytodo1: TodoPreview2 = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
  };
   