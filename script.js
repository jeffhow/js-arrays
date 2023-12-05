let x = 1;

console.log(x);

let a = [56,76,89,2,0];

console.log(a)
console.log(a.length)

a.push(100);
console.log(a);

console.log(a[100]) // undefined

let b = ["car", 'truck', "bike"];
console.log(b)

console.log(b[1]);

for (let i = 0; i<b.length; i++) {
    console.log('foo', i, b[i]);
}