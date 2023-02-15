const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector(".num-users");
let numUsers = "1";  // set initial value 

// connect to api to get user list
const getData = async function (numUsers) {
  const usersRequest = await fetch (`https://randomuser.me/api?results=${numUsers}`);
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

// add choose quantity of profiles to load
selectUserNumber.addEventListener("change", function (e) {
  if (e.key === "5") {
    numUsers = Number(e.target.value);
  } else if (e.key === "3") {
    numUsers = Number(e.target.value);
  } else {
    numUsers = Number(e.target.value);
  }
  getData(numUsers) //pass the number of users selected into the getdata function
});

