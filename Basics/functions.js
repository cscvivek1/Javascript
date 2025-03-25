
/*  let arr= [10,20,30,40,50]

    function sum(array) {  //function declaration( function funName(args){ })
        console.log(array)    
    }
    sum(arr);  */


/* for-each loop in arrays (Higher Order Functions OR Method) */

/* functions can be passed as arguments in another fun, its called callback function
   and called higher order function or method */
let arr= [1,2,3,4,5]
let name=["vivek", "sisodia"]

arr.forEach(function printVal(val){     //val from array
  console.log(val);
})

// for each using arrow function =>
arr.forEach((val)=>{
    console.log(val);
})
name.forEach((val)=>{
    console.log(val.toUpperCase());
})
arr.forEach((val,ind)=>{    //give index also
    console.log(val, ind);
})
arr.forEach((val,ind,arr)=>{    //give array also
    console.log(val, ind,arr);
})

/* Map in function same as forEach (return a new array) */

let data = [10,23,30,41]
let newArr= data.map((val=>{
    return val*val;
}))
console.log(newArr);

let evenarr = data.filter((val)=>{
    return val%2===0;
})
console.log(evenarr);