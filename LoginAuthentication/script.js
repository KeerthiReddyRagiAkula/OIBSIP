document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get username and password input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Perform login/authentication check (simulate server-side validation)
    loginUser(username, password);
  });
  
  function loginUser(username, password) {
    // In a real scenario, this is where you would make a request to the server-side for authentication
    // For simplicity, let's check against hardcoded values
    if (username === 'Oasisinfobyte' && password === 'Oasisinfobyte') {
      // Successful login
      document.getElementById('loginMessage').innerText = 'Login successful! Welcome, ' + username;
      document.getElementById('loginMessage').style.color = 'green';
    } else {
      // Failed login
      document.getElementById('loginMessage').innerText = 'Incorrect username or password. Please try again.';
      document.getElementById('loginMessage').style.color = 'red';
    }
  }
  