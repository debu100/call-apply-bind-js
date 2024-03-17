const obj = {
  name: "pq",
  price: 100,
};

const anyFun = function (city, state) {
  console.log(
    `The name is ${this.name} and price is ${this.price} and city ${city} and ${state}`
  );
};

//? call apply and bind is a concept of function borrowing
//? no need of  ${this.city} as it's a func parameter and it's not inside obj
anyFun.call(obj, "nowhere", "somewhere"); //The name is pq and price is 100 and city nowhere and somewhere

anyFun.apply(obj, ["nowhere", "somewhere"]); //The name is pq and price is 100 and city nowhere and somewhere

//? for apply() we need to use an array list

console.log(anyFun.bind(obj, "nowhere", "somwhere")); //*returns a function
const resBind = anyFun.bind(obj, "nowhere", "somwhere");
resBind(); //The name is pq and price is 100 and city nowhere and somwhere
