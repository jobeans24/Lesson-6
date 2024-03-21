fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation. 
// 1. The URL of the API we are fetching data from
// 2. The number of issues we want to retrieve
// 3. The state of the issues we want to retrieve
// 4. The order in which the issues are sorted
// 5. The direction in which the issues are sorted
