// Import stylesheets
import "./style.css";

//ARRAY OF ITEMS
const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
  { name: "Mouse", price: 10 }
];

//FUNCTION TO DISPLAY DEFINED ITEMS
const displayItems = (arr, code, method) => {
  let html = `<h3><span class='method-name'>${method}</span> Method</h3>
  <h4>Code Sample:</h4>
  <div class="mark">${code}</div>
  <ul>`;

  arr.map(item => {
    html += `<li>`;
    if (item.price === undefined) {
      html += `<span class="name">${item}</span>`;
    } else {
      html += `<span class="name">${item.name}</span>`;
      html += `<span class="price">${item.price}</span>`;
    }
    html += `</li>`;
  });
  html += `</ul>`;
  return html;
};

//FILTER METHOD
const filteredItems = items.filter(item => item.price > 100);

const filterCode = `const filteredItems = items.filter( item => item.price > 100);`;

const filterItems = displayItems(filteredItems, filterCode, "filter");

document.getElementById("app").innerHTML = `${filterItems}`;

//MAP METHOD
const mappedItems = items.map(item => item.name);

const mapCode = `const mappedItems = items.map( item=> item.name )`;

const mapItems = displayItems(mappedItems, mapCode, "map");

document.getElementById("map").innerHTML = `${mapItems}`;

//FIND METHOD
const foundItems = items.find(item => item.name === "Mouse");

const findCode = `items.find( item => item.name === "Mouse" );`;

// const findItems = displayItems(foundItems, findCode, "find Method");

document.getElementById("find").innerHTML = `
<h3><span class='method-name'>find</span> Method</h3>
<h4>Code Sample:</h4>
<div class="mark">${findCode}</div>
 <ul><li><span class="name">${foundItems.name}
<span class="price">${foundItems.price}</span></li></ul>
`;

//FOR EACH METHOD
let eachCode = `items.forEach(item=>console.log(item));`;

const forE = arr => {
  let html = `
<h3><span class='method-name'>forEach</span> Method</h3>
<h4>Code Sample:</h4>
<div class="mark">${eachCode}</div>
<ul>`;
  arr.forEach(item => {
    html += `<li>
    <span class="name">${item.name}</span>
    <span class="price">${item.price}</span>
</li>
`;
  });
  html += `</ul>`;
  return html;
};

document.getElementById("each").innerHTML = forE(items);

//SOME Method
const hasCheapItems = items.some(item => item.price < 100);

const someCode = `items.some( item => item.price < 100 );`;

document.getElementById("some").innerHTML = `
<h3><span class='method-name'>some</span> Method</h3>
<h4>Code Sample:</h4>
<div class="mark">${someCode}</div>
 <ul><li><span class="name">${hasCheapItems}
</li></ul>
`;

//EVERY Method
const everyItems = items.every(item => item.price < 100);

const everyCode = `items.every( item => item.price < 100 );`;

document.getElementById("every").innerHTML = `
<h3><span class='method-name'>every</span> Method</h3>
<h4>Code Sample:</h4>
<div class="mark">${everyCode}</div>
 <ul><li><span class="name">${everyItems}
</li></ul>
`;

//REDUCE Method
const totalPrice = items.reduce((total, item) => {
  return item.price + total;
}, 0);

const reduceCode = `items.reduce((total, item) => {
  return item.price + total;
}, 0);`;

document.getElementById("reduce").innerHTML = `
<h3><span class='method-name'>reduce</span> Method</h3>
<h4>Code Sample:</h4>
<div class="mark">${reduceCode}</div>
 <ul><li>Total Price:<span class="price">${totalPrice}
</li></ul>
`;

//INCLUDES method
const array = [1, 2, 3, 4, 5];
const includesTwo = array.includes(2);
const includesSeven = array.includes(7);

const includesCode = `
const array = [1, 2, 3, 4, 5];<br>
const includesTwo = array.includes(2);<br>
const includesSeven = array.includes(7);<br>
console.log("array includes 2: ", includesTwo);<br>
console.log("array includes 7: ", includesSeven);
`;

document.getElementById("include").innerHTML = `
<h3><span class='method-name'>includes</span> Method</h3>
<h4>Code Sample:</h4>
<div class="mark">${includesCode}</div>
 <ul>
 <li>array includes 2: <span class="name">${includesTwo}</li>
 <li>array includes 7: <span class="name">${includesSeven}</li>
</ul>
`;

//INCLUDES method
const fruits = ["mango", "apple", "orange", "banana", "Avocado"];
const includesApple = fruits.includes("apple");
const includesBerry = fruits.includes("berry");
console.log(includesApple);
console.log(includesBerry);

const includesCode2 = `
const fruits = ["mango", "apple", "orange", "banana", "Avocado"];<br>
const includesApple = fruits.includes("apple");<br>
const includesBerry = fruits.includes("berry");<br>
console.log("fruits includes Apple: ", includesApple);<br>
console.log("fruits includes Berry: ", includesBerry);
`;

document.getElementById("include2").innerHTML = `
<h3><span class='method-name'>includes</span> Method</h3>
<h4>Code Sample:</h4>
<div class="mark">${includesCode2}</div>
 <ul>
 <li>fruits includes 2: <span class="name">${includesApple}</li>
 <li>fruits includes 7: <span class="name">${includesBerry}</li>
</ul>
`;
