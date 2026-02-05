function handleSignChange() {
    const sign = document.getElementById("sign").value;
    const secondWrapper = document.getElementById("secondWrapper");

    const basicOps = ["+", "-", "*", "/", "pow"];

    if (basicOps.includes(sign)) {
        secondWrapper.style.display = "block";
    } else {
        secondWrapper.style.display = "none";
        document.getElementById("secondnumber").value = "";
    }
}
