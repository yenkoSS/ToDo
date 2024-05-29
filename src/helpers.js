class idGenerator {
    constructor () {
        this.idsList = [0]
    }
    
    idGenerator () {
        const lastID = this.idsList[this.idsList.length-1]
        const newId = lastID + 1
        this.idsList.push(newId);
        return newId;
    }
}

const generator = new idGenerator();
const newId = generator.idGenerator();

console.log(newId)