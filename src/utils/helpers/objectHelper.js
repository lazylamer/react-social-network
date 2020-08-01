//HELPERS
export const updateObjectInArray = (items, id, property, newObjProps) => {
    return items.map(item => {
        console.log(item)
        if (item[property] === id) {
            console.log({...item, ...newObjProps})
            return {...item, ...newObjProps}
        } else {
            return item;
        }
    })
}
