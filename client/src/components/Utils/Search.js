export const Search = (value, details, key) => {
    const newArray = [];
    details.forEach(detail => {
        if(detail[key].includes(value)){ 
            newArray.push(detail);
        }
    })
    return newArray;
}
