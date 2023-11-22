const str = "\"{\\\"inbound\\\": \\\"inbound_value\\\"}\"";

console.log(str);
const a = JSON.parse(str);
console.log(typeof a);
console.log("a : " + a);
const b = JSON.parse(a);
console.log(typeof b)
console.log("b : " + b);
console.log("b.inbound : " + b.inbound);

