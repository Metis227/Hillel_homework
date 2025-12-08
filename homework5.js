var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"

};

services['Розбити скло'] = "200 грн";



function price() {
    let count = 0
    const numSer = {}
    for (let key in services) {
        const onlyNumber = parseInt(services[key])
        count += onlyNumber

    }
    return count
}
console.log("Загальна сумма: ", price() + " грн")


function minPrice() {
    const priceTotal = price()

    let min = Infinity
    for (let key in services) {
        const num = parseInt(services[key])
        if (num < min) {
            min = num
        }
    }
    return min
}
console.log("Минимальная цена: ", minPrice() + " грн");

function maxPrice() {
    const priceTotal = price()

    let max = 0
    for (let key in services) {
        const num = parseInt(services[key])
        if (num > max) {
            max = num
        }
    }
    return max
}
console.log("Максимальная цена: ", maxPrice() + " грн");