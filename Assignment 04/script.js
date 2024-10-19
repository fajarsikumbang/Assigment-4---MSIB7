function editProfile() {
    document.getElementById('profileForm').style.display = 'block';
}

function saveProfile() {
    var name = document.getElementById('name').value;
    var role = document.getElementById('role').value;
    var availability = document.getElementById('availability').value;
    var age = document.getElementById('age').value;
    var location = document.getElementById('location').value;
    var yoe = document.getElementById('yoe').value;
    var email = document.getElementById('email').value;

   
    document.getElementById('profileName').innerText = name;
    document.getElementById('profileRole').innerText = role;
    document.getElementById('profileAvailability').innerText = availability;
    document.getElementById('profileAge').innerText = age;
    document.getElementById('profileLocation').innerText = location;
    document.getElementById('profileYoe').innerText = yoe;
    document.getElementById('profileEmail').innerText = email;

  
    document.getElementById('profileForm').style.display = 'none';
}


//function loadImage(event) {
//    var image = document.getElementById('profileImage');
//    image.src = URL.createObjectURL(event.target.files[0]);
//}

