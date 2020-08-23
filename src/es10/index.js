// array.flat
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
let depth = 2;
console.log(array.flat(depth));

// flatmap
let array = [1, 2, 3, 4, 5];
console.log(
	array.flatMap( value =>
		[value, value * 2]
	)
);

// trim start
let hello = '           hello world!'
console.log(hello);
console.log(hello.trimStart());

// trim end
let hello = 'hello world!           '
console.log(hello);
console.log(hello.trimEnd());

// fromEntries array to object
let entries = [["name", "Alex"], ["age", 26]];
console.log(Object.fromEntries(entries));

// symbol
let mySymbl = `My symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);