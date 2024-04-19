const ul_userList = document.getElementById('UserList');

console.log(ul_userList);
// git fetch data from GITHUB API
fetch('https://randomuser.me/api/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let users = data.results;
    console.log(users);

    return users.map((user) => {
      let li = document.createElement('li');
      let img = document.createElement('img');
      let span = document.createElement('span');

      img.src = user.picture.large;
      img.classList =
        'rounded-full w-25 h-25 border-8 border-gray-300 justify-center text-center';

      span.className = 'text-gray-700 justify-center text-center';
      span.innerHTML = `${user.name.first} ${user.name.last}`;

      li.appendChild(img);
      li.appendChild(span);
      ul_userList.appendChild(li);
    });
  })
  .catch((error) => {
    console.log('Error:', error);
  });

console.log();
