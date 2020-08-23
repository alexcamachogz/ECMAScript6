const data = {
	frontend: 'Alex',
	backend: 'Samuel',
	design: 'Mariana'
}

// Object entries
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object values
const values = Object.values(data);
console.log(values);
console.log(values.length);

// Padding
const string = 'Hello';
let maxLength = 8;
let addStart = 'Hi ';
let addEnd = "!!!"
console.log(string.padStart(maxLength, addStart));
console.log(string.padEnd(maxLength, addEnd));

// Trailing commas
const names = {
	name: 'Alex',
}

// Async await
const helloWorld = () => {
	return new Promise((resolve, reject) => {
		(true) 
			? setTimeout(() => resolve('Hello World!'), 3000)
			: reject(new Error('Test error'));
	});
};

const helloAsync = async () => {
	const hello = await helloWorld();
	console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
	try {
		const hello = await helloWorld();
		console.log(hello);
	} catch (err) {
		console.log(err);
	}
}

anotherFunction();