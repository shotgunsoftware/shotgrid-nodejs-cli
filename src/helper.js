const Table = require('cli-table3');

function parseColonKeyValue(input) {

	let [ key, value ] = input.split(':', 2);

	key = (key) ? key.trim() : '';
	value = (value) ? value.trim() : null;

	if (typeof value === 'string' && (value.startsWith('\'') && value.endsWith('\'') || value.startsWith('"') && value.endsWith('"'))) {
		value = value.slice(1, -1);
	} else if (value === 'true') {
		value = true;
	} else if (value === 'false') {
		value = false;
	} else if (!isNaN(value)) {
		value = parseFloat(value);
	}

	return { key, value };
}

function parseColonKeyValue(input) {

	let [ key, value ] = input.split(':', 2);

	key = (key) ? key.trim() : '';
	value = (value) ? value.trim() : null;

	if (typeof value === 'string' && (value.startsWith('\'') && value.endsWith('\'') || value.startsWith('"') && value.endsWith('"'))) {
		value = value.slice(1, -1);
	} else if (value === 'true') {
		value = true;
	} else if (value === 'false') {
		value = false;
	} else if (!isNaN(value)) {
		value = parseFloat(value);
	}

	return { key, value };
}

function generateTable(paginatedRecordResponse) {

	let { data } = paginatedRecordResponse;

	let head = ['id'];
	head = head.concat(data[0] && Object.keys(data[0].attributes) || []);
	head = head.concat(data[0] && Object.keys(data[0].relationships) || []);

	let table = new Table({ head });
	for (let row of data) {
		let values = [row.id];
		values = values.concat(Object.values(row.attributes) || []);

		let relationshipValues = Object.values(row.relationships) || [];
		relationshipValues = relationshipValues.map(v => {
			let { data } = v;
			if (!data) return;
			if (!Array.isArray(data)) return data.id;
			return data.map(data2 => {
				return (typeof data2 !== 'object' || !data2)
					? data2
					: data2.id;
			}).join(', ');
		});
		values = values.concat(relationshipValues);

		table.push(values);
	}

	return table.toString();
}

module.exports = {
	parseColonKeyValue,
	generateTable,
};
