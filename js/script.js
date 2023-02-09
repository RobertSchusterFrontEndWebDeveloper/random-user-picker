const randomFolks = document.querySelector(".random-peeps");

// connect to api to get user list
const getData = async function () {
  const usersRequest = await fetch ("https://randomuser.me/api?results=5");
  const data = await usersRequest.json(); 
  // console.log(data);  // confirm connection to api

  // output user result
  const userResults = data.results;
  console.log(userResults);

  
};

getData();

