document.getElementById('loadDataBtn').addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];

        // Виведення інформації на сторінку
        document.getElementById('userPicture').src = user.picture.large;
        document.getElementById('userCity').textContent = 'Місто: ' + user.location.city;
        document.getElementById('userPostcode').textContent = 'Поштовий індекс: ' + user.location.postcode;
        document.getElementById('userEmail').textContent = 'Email: ' + user.email;
        document.getElementById('userCoordinates').textContent = 'Координати: ' + 
          `Lat: ${user.location.coordinates.latitude}, Long: ${user.location.coordinates.longitude}`;

        // Показуємо інформацію
        document.getElementById('userInfo').style.display = 'block';
      })
      .catch(error => console.error('Помилка при завантаженні даних:', error));
  });