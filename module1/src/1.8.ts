{


const bro1: string[] = ["Raju", "Karim", "Fahim", "Mahi"]
const bro2: string[] =["Purbasha", "Joba", "Pramati"]

bro1.push(...bro2)


const Friends1 ={
    no1: "A",
    no2: "B",
    no3: "C"
}

const Friends2 ={
    no1: "D",
    no2: "E",
    no3: "F"
}

const allFriends ={
    ...Friends1,
    ...Friends2
}

console.log(allFriends);
}