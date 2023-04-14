// Aguardar a página ser carregada
document.addEventListener("DOMContentLoaded", function() {

    // Selecionar o formulário
    const form = document.querySelector("form");
  
    // Selecionar o botão de enviar
    const submitButton = document.querySelector("input[type='submit']");
  
    // Adicionar um ouvinte para o evento submit
    form.addEventListener("submit", function(event) {
  
      // Prevenir que a página seja recarregada
      event.preventDefault();
  
      // Desabilitar o botão de enviar
      submitButton.disabled = true;
  
      // Selecionar o valor escolhido
      const valorSelecionado = document.querySelector("input[name='valor']:checked").value;
  
      // Exibir mensagem de sucesso com o valor selecionado e a forma de pagamento
      alert(`Recarga de R$ ${valorSelecionado},00 realizada com sucesso via PIX`);
      
      setTimeout(function() {
        // Habilitar o botão de enviar novamente
        submitButton.disabled = false;
      }, 5000);
  
    });
  
  });
  