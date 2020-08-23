const obj = {
	name: 'Alex',
	age: 26,
	country: 'MX'
}

// spread operator
let { name, ...all } = obj;
console.log(name, all);

const obj = {
	name: 'Alex',
	age: 26,
}

const obj1 = {
	...obj,
	country: 'MX',
}

console.log(obj1);

// Promise finally
const helloWorld = () => {
	return new Promise((resolve, reject) => {
		(true)
			? resolve('Hello World!')
			: reject(new Error('Test error'));
	});
};

helloWorld()
	.then(response => console.log(response))
	.catch(error => console.log(error))
	.finally(() => console.log('Promise end'));

// Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);