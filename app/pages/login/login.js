document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      let rememberMe = document.querySelector('input[name="remember-me"]').checked;
      if (username === 'pedro' && password === '1234') {
        if (rememberMe) {
            document.cookie = "username=" + encodeURIComponent(username) + "; expires=" + new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
            document.cookie = "password=" + encodeURIComponent(password) + "; expires=" + new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
          }
        window.location.href = '/index.html'
      } else {
        alert('Usuário ou senha inválidos!');
      }
    });
  });
  