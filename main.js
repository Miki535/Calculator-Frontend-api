function checkForm() {
    const firstNumber = parseFloat(document.getElementById('firstnumber').value);
    const secondNumber = parseFloat(document.getElementById('secondnumber').value);
    const sign = document.getElementById('sign').value;

    let apiUrl;
    let postData;

    const basicSigns = ["+", "-", "*", "/"];

    if (basicSigns.includes(sign)) {
        apiUrl = 'http://localhost:8080/getRequestCalc';
        postData = {
            firstnumber: firstNumber,
            secondnumber: secondNumber,
            sign: sign
    };
    } else {
        apiUrl = 'http://localhost:8080/getRequestMath';
        postData = {
            number: firstNumber,
            secondnum: secondNumber,
            type: sign
        };
    }

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        const output = document.getElementById("output");

        if (data.result) {
            output.style.display = "block";
            output.textContent = "Result: " + data.result;
        } else {
            output.style.display = "none";
        }

        console.log("Success:", data);
    })
    .catch(error => console.error('Error:', error));

    return false;
}
