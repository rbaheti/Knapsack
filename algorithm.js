const fs = require('fs');

fs.readFile('./data/small1.txt', (err, data) => {
	if(err) {
		console.error("no file");
		process.exit(1);
	}
	const dataArray = data 
		.toString()
		.split('\n')
		.reduce((res, item, i) => {
			if(!item) {
				return res;
			}
			const line = item.split(' ') //1, 42, 81
			res[i] = { item: line[0], size: Number(line[1]), val: Number(line[2]) }
			return res;
		}, [])
		console.log(dataArray);
});