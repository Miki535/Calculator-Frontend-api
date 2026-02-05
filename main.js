function checkForm(el) {
    var firstNumber = parseFloat(document.getElementById('firstnumber').value);
    var secondNumber = parseFloat(document.getElementById('secondnumber').value);
    var sign = document.getElementById('sign').value;

    let apiUrl;

    if (sign != "+" && sign != "-" && sign != "*" && sign != "/") {
        apiUrl = 'http://localhost:8080/getRequestMath';
    }else {
        apiUrl = 'http://localhost:8080/getRequestCalc';
    }

    console.log(firstNumber, secondNumber, sign);

    const postData = {
        firstnumber: firstNumber,
        secondnumber: secondNumber,
        sign: sign
    };

    const postDataMath = {
        number: firstNumber,
        secondNum: secondNumber,
        type: sign
    }

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postDataMath)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        const output = document.getElementById("output");

        if (data.result !== undefined && data.result !== null && data.result !== "") {
            output.style.display = "block";
            output.textContent = "Result: " + data.result;
        } else {
            output.style.display = "none";
        }
        console.log("Success:", data);
    })
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));

    return false;
}
