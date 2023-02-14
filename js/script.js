const randomFolks = document.querySelector(".random-peeps");

// connect to api to get user list
const getData = async function () {
  const usersRequest = await fetch ("https://randomuser.me/api?results=5");
  const data = await usersRequest.json(); // parse the api result
  // console.log(data);  // test out the api output

  // output user result
  const userResults = data.results; // map the property
  // console.log(userResults);  // test out the map
  displayUsers(userResults);
};

getData();

 // displayUser function
const displayUsers = function(userResults) {
  randomFolks.innerHTML = ""; // empty the randomFolks

  for (const user of userResults) {
    // assign values to users data
    const country = user.location.country; 
    const name = user.name.first;
    const imageUrl = user.picture.medium;
    const userDiv = document.createElement("div"); // create display div

    // display div for DOM
    userDiv.innerHTML = `
      <h3>${name}</h3>
      <p>${country}</p>
      <img src=${imageUrl} alt="User avatar" />
      `;
    randomFolks.append(userDiv);
  }
};

