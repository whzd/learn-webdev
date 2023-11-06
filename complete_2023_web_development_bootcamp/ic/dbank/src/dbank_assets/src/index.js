import { dbank } from "../../declarations/dbank"

window.addEventListener("load", async () => {
    const currentAmount = await dbank.checkBalance();
    document.getElementById("value").innerText = currentAmount.toFixed(2);
})

document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitBtn = event.target.querySelector("#submit-btn");

    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("withdraw-amount").value);

    submitBtn.setAttribute("disabled", true);

    if (document.getElementById("input-amount").value.length != 0) {
        const updatedAmount = await dbank.topUp(inputAmount);
        document.getElementById("value").innerText = updatedAmount.toFixed(2);
        document.getElementById("input-amount").value = "";
    }

    if (document.getElementById("withdraw-amount").value.length != 0) {
        const updatedAmount = await dbank.withdraw(outputAmount);
        document.getElementById("value").innerText = updatedAmount.toFixed(2);
        document.getElementById("withdraw-amount").value = "";
    }


    submitBtn.removeAttribute("disabled");

})