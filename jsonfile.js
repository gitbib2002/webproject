const b={
    name:"Bibek",
    age:21,
}//is written in json format
const jd=JSON.stringify(b);//to convert the json data in string position
const ob=JSON.parse(jd)//to conver that into object
console.log(jd)
console.log(b.name)//to get any value using that key
console.log(ob)
console.log(ob.age);//to get data from key from object of json

 