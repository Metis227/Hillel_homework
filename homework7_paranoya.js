// var arr = [
//     {
//         userName:"Test",
//         lastName:"Test",
//         email:"test.test@gmail.com"
//     },
//     {
//         userName:"Dmitro",
//         lastName:"Porohov",
//         <email:"dmitro.porohov@yahoo.com>"
//     },
//     {
//         userName:"Andrii",
//         lastName:"",
//         email:"andrii@mail.ru" // Нам такі не підходять
//     },
// ];

const mass = `
{
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com"
},
{
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com"
},
{
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru" // Нам такі не підходять
}
`;

let re = /[a-zA-Z0-9.]+@(gmail\.com|yahoo\.com)/g;

let result = mass.match(re);

console.log(result);