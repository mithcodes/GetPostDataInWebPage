document.addEventListener('DOMContentLoaded', function () {
    
    axios.get('https://crudcrud.com/api/9e3ec5db431c44a68fd6cb3319e4ffdd/mentdata')
        .then(function (response) {
            
            const existingData = response.data;
    
            displayData(existingData);
        })
        .catch(function (error) {
            // Handle errors
            console.error('Error fetching existing data:', error);
        });
});

const submit = document.getElementById('submit');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const div = document.getElementById('div');

submit.addEventListener('click', function () {
    const data = {
        name: name.value,
        phone: phone.value,
        address: address.value
    };

    const list = document.createElement('li');
    list.textContent = `${data.name}, ${data.phone}, ${data.address}`;

    const remove = document.createElement('button');
    remove.textContent = 'remove';

    list.appendChild(remove);
    div.appendChild(list);

    // Add the new data to the API using Axios
    axios.post('https://crudcrud.com/api/9e3ec5db431c44a68fd6cb3319e4ffdd/mentdata', data)
        .then(function (response) {
            // Handle success
            console.log('Data submitted successfully:', response.data);
        })
        .catch(function (error) {
            // Handle errors
            console.error('Error submitting data:', error);
        });

    remove.addEventListener('click', function () {
        div.removeChild(list);
    });
});

function displayData(data) {
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const list = document.createElement('li');
        list.textContent = `${item.name}, ${item.phone}, ${item.address}`;

        const remove = document.createElement('button');
        remove.textContent = 'remove';

        list.appendChild(remove);
        div.appendChild(list);

        remove.addEventListener('click', function () {
            div.removeChild(list);
        });
    }
}