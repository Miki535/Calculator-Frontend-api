const apiUrl = 'http://localhost:8080/getRequest';

const postData = {
    firstnumber: 50.6,
    secondnumber: 12.4,
    sign: "/"
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
