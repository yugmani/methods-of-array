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
  <mark>${code}</mark>
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

console.log("find:", foundItems);

const findCode = `items.find( item => item.name === "Mouse" );`;

// const findItems = displayItems(foundItems, findCode, "find Method");

document.getElementById("find").innerHTML = `
<h3><span class='method-name'>find</span> Method</h3>
<h4>Code Sample:</h4>
<mark>${findCode}</mark>
 <ul><li><span class="name">${foundItems.name}
<span class="price">${foundItems.price}</span></li></ul>
`;

//FOR EACH METHOD
let eachCode = `items.forEach(item=>console.log(item.name));`;

const forE = arr => {
  let html = `
<h3><span class='method-name'>forEach</span> Method</h3>
<h4>Code Sample:</h4>
<mark>${eachCode}</mark>
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

const someCode = `items.some( item => item.name < 100 );`;

document.getElementById("some").innerHTML = `
<h3><span class='method-name'>some</span> Method</h3>
<h4>Code Sample:</h4>
<mark>${someCode}</mark>
 <ul><li><span class="name">${hasCheapItems}
</li></ul>
`;

//EVERY Method
const everyItems = items.every(item => item.price < 100);

const everyCode = `items.every( item => item.price < 100 );`;

document.getElementById("every").innerHTML = `
<h3><span class='method-name'>every</span> Method</h3>
<h4>Code Sample:</h4>
<mark>${everyCode}</mark>
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
<mark>${reduceCode}</mark>
 <ul><li>Total Price:<span class="price">${totalPrice}
</li></ul>
`;
