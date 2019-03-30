var xhr = new XMLHttpRequest(),
    btn = document.getElementById('list-load'),
    userContainer = document.getElementById('users-container');

var currentLabel;

btn.onclick = function(event) {
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();
};

xhr.onload = function (event) {
     if (xhr.status !== 200) {
         var statusMessage = document.createElement('div');
         statusMessage.textContent = xhr.status + ' error';
         statusMessage.classList.add('error-message');
         userContainer.appendChild(statusMessage);
     } else {
         try {
             if (localStorage.getItem('usersList') && (localStorage.getItem('usersList') !== xhr.responseText)) {
                 localStorage.setItem('usersList', xhr.responseText);
                 userContainer.innerHTML = '';
                 generateUserCards();
             } else if (!localStorage.getItem('usersList')) {
                 localStorage.setItem('usersList', xhr.responseText);
                 generateUserCards();
             }
         } catch (e) {
             var errMessage = document.createElement('div');
             errMessage.textContent = e.name + ' error';
             errMessage.classList.add('error-message');
             userContainer.appendChild(errMessage);
         }
     }
};

document.addEventListener('DOMContentLoaded', showUsers);

document.getElementById('users-container').onclick = function(event) {
    var element = event.target;

    if (element.classList.contains('user-label')) {
        currentLabel.classList.remove('current');
        currentLabel.parentElement.classList.remove('current');

        currentLabel = element;

        element.classList.add('current');
        element.parentElement.classList.add('current');
    }
};

function generateUserCards() {
    var users = JSON.parse(localStorage.getItem('usersList')).data,
        labelPosition = 0;

    for (var k = 0; k < users.length; k++) {
        var label = document.createElement('div');

        label.textContent = 'User ' + users[k].id;
        label.classList.add('user-label');
        label.style.left = labelPosition + 'px';
        labelPosition += 105;
        if (k === 0) {
            label.classList.add('current');
            currentLabel = label;
        }

        var userContent = document.createElement('div'),
            userAvatar = document.createElement('img'),
            userName = document.createElement('div'),
            userFirstName = document.createElement('div'),
            userSureName = document.createElement('div');

        userFirstName.textContent = 'First name: ' + users[k].first_name;
        userSureName.textContent = 'Last name: ' + users[k].last_name;
        userName.appendChild(userFirstName);
        userName.appendChild(userSureName);
        userName.classList.add('user-name');
        userAvatar.setAttribute('src', users[k].avatar);
        userContent.appendChild(userAvatar);
        userContent.appendChild(userName);
        userContent.appendChild(label);
        userContent.classList.add('user-card');
        k === 0 && userContent.classList.add('current');
        userContainer.appendChild(userContent);
    }
}

function showUsers() {
    if (localStorage.getItem('usersList')) {
        try {
            generateUserCards();
        } catch (e) {
            var errMessage = document.createElement('div');
            errMessage.textContent = e.name + ' error';
            errMessage.classList.add('error-message');
            userContainer.appendChild(errMessage);
        }
    }
}