const words: string[] = ["hello", "world", "typescript"];

const capitalizedWords: string[] = words.map(str => str.charAt(0).toUpperCase() + str.slice(1));

console.log(capitalizedWords);

/*
function capitalizeArray (list: string[]): string[] {
    return list.map(item => item.charAt(0).toUpperCase() + item.slice(1));
}
*/