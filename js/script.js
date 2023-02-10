const randomFolks = document.querySelector(".random-peeps");

// connect to api to get user list
const getData = async function () {
  const usersRequest = await fetch ("https://randomuser.me/api?results=5");
  const data = await usersRequest.json(); 
  // console.log(data);  // confirm connection to api

  // output user result
  const userResults = data.results;
  // console.log(userResults); 
  displayUsers(userResults);
};

getData();

 // displayUser function
const displayUsers = function(userResults) {
  
  // First empty the randomFolks constant
  randomFolks.innerHTML = "";

  // assign random user profile to constants to variables
  for (const user of userResults) {
    const country = user.location.country; 
    const name = user.name.first;
    const imageUrl = user.picture.medium;
    const userDiv = document.createElement("div");

    // set up display of above objects
    userDiv.innerHTML = `
      <h3>${name}</h3>
      <p>${country}</p>
      <img src=${imageUrl} alt="User avatar" />
      `;
    randomFolks.append(userDiv);
  }
};

