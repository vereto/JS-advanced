function subtract() {

    const firstNum = document.getElementById('firstNumber');
    const secondNum = document.getElementById('secondNumber');
    const result = document.getElementById('result');

    const final = Number(firstNum.value) - Number(secondNum.value);
    result.textContent = final;

    console.log(final);
}