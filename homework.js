rnd();

function rnd() {
    let count = 0
    let pair = 0
    let notPair = 0
    let ratio = 0

    for (let i = 0; i < 100; i++) {
        let n = Math.floor(Math.random() * 900) + 100;

        count++;

        if (n % 2 === 0) {
            pair++;
        }
        else {
            notPair++;
        }

        ratio = (pair / notPair) * 100

    }
    ratio = Math.min(ratio, 100);
    console.log("Сумма всех чисел: ", count);
    console.log("Парные: ", pair);
    console.log("Не парные: ", notPair);
    console.log("Ration: ", ratio.toFixed(0) + "%")
}