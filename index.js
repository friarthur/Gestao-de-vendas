function validateLogin() {
      var emailInput = document.getElementById('email');
      var passwordInput = document.getElementById('password');

      var email = emailInput.value;
      var password = passwordInput.value;

      if (validateEmail(email) && validatePassword(password)) {
        // Ambos email e senha estão corretos, você pode redirecionar para a página principal ou realizar outras ações aqui.
        alert('Login bem-sucedido! Redirecionando para a página principal.');
        window.location.href = 'pageP.html';
      } else {
        // Caso contrário, você pode exibir uma mensagem de erro ou realizar outras ações aqui.
        alert('Email ou senha incorretos. Por favor, tente novamente.');
      }
    }

    function validateEmail(email) {
      return true; 
  }
  
  function validatePassword(password) {
      return true; 
  }
  
