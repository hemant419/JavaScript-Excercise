//Write a JavaScript program to converts a comma - separated values(CSV) string to a 2D array.
const csv_to_array = (data, delimiter = ',', omitFirstRow = false) =>
    data
        .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
        .split('\n')
        .map(v => v.split(delimiter));

console.log(csv_to_array('a,b\nc,d'));
console.log(csv_to_array('a;b\nc;d', ';'));
console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true));

// Write a JavaScript program to convert a comma - separated values(CSV) string to a 2D array of objects.The first row of the string is used as the title row.
const CSV_to_JSON = (data, delimiter = ',') => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    return data
        .slice(data.indexOf('\n') + 1)
        .split('\n')
        .map(v => {
            const values = v.split(delimiter);
            return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
        });
};
console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];

//Write a JavaScript program to convert an array of objects to a comma - separated values(CSV) string that contains only the columns specified.
const JSON_to_CSV = (arr, columns, delimiter = ',') =>
    [
        columns.join(delimiter),
        ...arr.map(obj =>
            columns.reduce(
                (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
                ''
            )
        )
    ].join('\n');

console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));
console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'], ';'));