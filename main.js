const apiUrl = 'http://localhost:8080/getRequest';

function checkForm(el) {
    var firstNumber = parseFloat(document.getElementById('firstnumber').value);
    var secondNumber = parseFloat(document.getElementById('secondnumber').value);
    var sign = document.getElementById('sign').value;

    console.log(firstNumber, secondNumber, sign);

    const postData = {
        firstnumber: firstNumber,
        secondnumber: secondNumber,
        sign: sign
    };

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
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));

    return false;
}
