const userIdInput = document.getElementById('userId');
        const getDataButton = document.getElementById('getDataButton');
        const userDataDiv = document.getElementById('userData');

        function fetchUserData() {
            const userId = userIdInput.value;
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response => response.json())
                .then(data => {
                    const { name, username, phone } = data;
                    userDataDiv.innerHTML = `
                        <p>Name: ${name}</p>
                        <p>Username: ${username}</p>
                        <p>Phone: ${phone}</p>
                    `;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    userDataDiv.innerHTML = 'Ошибка при загрузке данных';
                });
        }

        getDataButton.addEventListener('click', fetchUserData);

        userIdInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                fetchUserData();
            }
        });