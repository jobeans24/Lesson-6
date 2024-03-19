// Import the child_process module
import { exec } from 'child_process';

// Define the curl command to send a GET request to the GitHub API
const curlCommand = 'curl https://api.github.com/';

// Execute the curl command
exec(curlCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Response: ${stdout}`);
});


 
