
function formatString(input: string, toUpper?: boolean):string{
    if(toUpper===false){
        return input.toLowerCase();
    }
    else{
        return input.toUpperCase();
    }
}

// const result1:string = formatString("Hello");    
// const result2:string = formatString("Hello", true);
// const result3:string = formatString("Hello", false);
// console.log(result1);
// console.log(result2);
// console.log(result3);


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    
    let bookobj1 : { title: string; rating: number }[]=[];

    items.map((item)=>{
        if(item.rating>=4){
            bookobj1.push(item);
        }
    })



    return bookobj1;
}

// const books = [
//     { title: "Book A", rating: 4.5 },
//     { title: "Book B", rating: 3.2 },
//     { title: "Book C", rating: 5.0 }
// ];
// const result : { title: string; rating: number }[]=filterByRating(books); 
// console.log(result);


function concatenateArrays<T>(...arrays: T[][]): T[]{

    let array1 : T[]=[];
    arrays.map((arr:T[])=>{
        array1.push(...arr);
    })
    
    return array1;
}

// concatenateArrays(["a", "b"], ["c"]);
// concatenateArrays([1, 2], [3, 4], [5]);


class Vehicle {
    private make : string;
    private year : number;

    constructor(make : string,year : number){
        this.make=make;
        this.year=year;
    }

    getInfo(){
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    private model:string;
    constructor(make : string,year : number,model:string){
        super(make,year);
        this.model=model;
    }
    getModel(){
        console.log(`Model: ${this.model}`);
    }
}

// const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.getInfo();   
// myCar.getModel();  

function processValue(value: string | number): number {

    if(typeof value ==='string')return value.length;
    else return value*2;
}

// const result1:number= processValue("hello");
// const result2:number= processValue(10);      
// console.log(result1);
// console.log(result2);


interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length===null)return null;

    let maximum=0;
    products.map((product :Product)=>{
        if(product.price>maximum)maximum=product.price;
    })

    let product1 : Product = {name:"",price:0};
    products.map((product : Product)=>{
        if(product.price===maximum){
            product1=product;
            
        }
    })
    return product1;
}

// const products = [
//     { name: "Pen", price: 10 },
//     { name: "Notebook", price: 25 },
//     { name: "Bag", price: 50 },
// ];

// const result: Product | null =getMostExpensiveProduct(products);
// console.log(result);  


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
function getDayType(day: Day): string {
    if(day===Day.Saturday || day===Day.Sunday)return "Weekend";
    else return "Weekday";
}

// const result1:string = getDayType(Day.Monday);   
// const result2:string = getDayType(Day.Sunday);
// console.log(result1);
// console.log(result2);

async function squareAsync(n: number): Promise<number>{

    return new Promise<number>((resolve,reject)=>{
        if(n<0)reject("Negative number not allowed");
        else{
            setTimeout(()=>{resolve(n*n)},1000);
        }
    })

}

// squareAsync(4).then(console.log);
// squareAsync(-3).catch(console.error);    