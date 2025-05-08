
**Q. What are some differences between interfaces and types in TypeScript?**

We can define object structure in typeScript in 2 ways, interface and type. Though they do almost the same tasks but there are some difference.

*Declaration:* 

<pre lang="markdown">```interface Student {
    id:number;
    name:"string";
}```</pre>pre>

This is how we can declare interface.

type Student = {
    id:number;
    name:"string";
}
This is how we can declare type.

Now if we want to merge Student using interface:
interface Student {
    id:number;
    name:"string";
}
interface Student {
    age:number;
}

But if we want to do the same thing with type it will give us error. It won't assign same name.


*Type Support (Union, Tuple, Primitive type) :*

Multiple types like union, tulpe, primitive type is supported by types but interface doesn't support this. 
type Status = "success" | "error";
type Point = [number, number];
type ID = number;


*Advanced logic or combinations:*

We can easily handle advance logic and combination using Type. it would be hard to handle using interface.

So we will use Interface when we need to work with class and if we need to extend it or merge it. And we will use Type when there are advance logic and combination and if we need to use multiple type like Union, Tuple, Primitive. 



** Q. Explain the difference between any, unknown, and never types in TypeScript. **

*any Type :*

When we use any type typeScript stop checking type for that variable. So we can assign anything (number, string,boolean etc) to that variable and we can directly use it without type checking. But it is dangerous for type safety.

let something : any ="kichu ekta";
something = 10;

something.toUpperCase();
even here it won't show us the error.

*unknown type :*

unknown type is a safe alternative to any type. we can assign anything but we can't use it without type checking.

let something : any ="kichu ekta";
something = 10;
something.toUpperCase(); //error

here it will give us error. before use it we have to check its type

if(typeof something === "string") something.toUpperCase();

So we will use unknown type when the actual type is unknown. For example the data is comming from the external sources like API. but we will check type, narrow down the type before using it.

*never type:*

We use never type when it return nothing (no value). never mainly uses in:
when a function throw error, when there is a infinity loop and checking type in switch case.

function throwError(msg: string): never {
  throw new Error(msg);
}
the function will throw nothing but error.

function DouraboShudhu(): never {
  while (true) {
    console.log("Running");
  }
}
the function is in infinity loop.

type PH = "module" | "support" | "conceptual session";

function shikteHbe(ph: PH) {
  switch (ph) {
    case "module":
      return "Learned Quickly";
    case "support":
      return "Took advantage";
    default:
      const nothingParticipated: never = ph; // error
  }
}

it will show us error, cause case : "conceptual session" is not handled. So never type provide switch type-safety. If we forget to handle a case it will give us error.

