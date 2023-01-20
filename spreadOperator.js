//Day6
//Spread Operator practice

//Uses of spread operator:
//1.Add elements of one array into another array, you'll obeserve that in the first case the entire array is added into another array while with spread operator only the elements of the array are added into another array.
const arr=['taher','shaunak','ankit','dvip','harsh'];

const listOfFriends=['ashish','shivam','azhar','utsav', arr];

console.log(listOfFriends);

//with spread operator
const listOfFriends2=['ashish','shivam','azhar','utsav', ...arr];

console.log(listOfFriends2);

//2. Pass an array as an argument to a function

const arrr=[1,2,3];

const sum=(a,b,c)=>{
  return a+b+c;
}

console.log(sum(...arrr));
