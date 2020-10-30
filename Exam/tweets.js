var arr = ["sachin tweet1", "sehwag tweet1", "kholi tweet1", "sachin tweet1", "sachin tweet1"];

var b = {};
var max = '';
var maxim = 0;
for (let k of arr) {
    if (b[k])
        b[k]++;
    else
        b[k] = 1;
    if (maxim < b[k]) {
        max = k;
        maxim = b[k];
    }
}
console.log("User having maximum tweets =" + max);

console.log("total number of tweets");
console.log(arr.length);
