$("#enviarCadastro").click(validaEnvio);
$("#enviarLogin").click(validaLogin);


function validaCampoVazio(campo){
    if(campo.trim() == ''){
        return true;
    }else{
        return false;
    }
}

        function validaLogin(){
        let podeEnviar = true
        let cpf = $("#cpfLogar").val();
        let senha = $("#senhaLogar").val();

        if(validaCampoVazio(cpf)){
        podeEnviar = false;
        }
        if(validaCampoVazio(senha)){
                podeEnviar = false;
        }
        if(podeEnviar){
        $.ajax({
        type: "POST",
        url: "/",
        cpf:cpf,
        senha:senha,


         success: function(data){
          $("#errorMessage").text("");
           if(data.sucesso){
               alert("é deu bom")
             }else{
             alert("é deu ruim")
                }
             },
            error: function(){
             $("#errorMessage").append("Deu muito ruim parça!");
             }
           });
        }
        }


        function validaEnvio() {
            let podeEnviar = true;
            let nome = $("#nome").val();
            let cpf = $("#cpf").val();
            let email = $("#email").val();
            let datanasc = $("#datanasc").val();
            let telefone = $("#telefone").val();
            let senha = $("#senha").val();


            if (validaCampoVazio(nome)) {
                podeEnviar = false;

            }
            if (validaCampoVazio(email) && validaCampoVazio(telefone)) {
                podeEnviar = false;

            }
            if (validaCampoVazio(datanasc)) {
                podeEnviar = false;

            }
            if (validaCampoVazio(senha)) {
                podeEnviar = false;
            }

            if (validaCampoVazio(cpf)) {
                podeEnviar = false;

            }

                if (podeEnviar) {
                    $.ajax({
                        type: "POST",
                        url: "/",
                        data: {
                            nome: nome,
                            cpf: cpf,
                            email: email,
                            senha: senha,
                            datanasc: datanasc,
                            telefone: telefone,
                        },
                        success: function (data) {
                            $("#errorMessage").text("");
                            if (data.sucesso) {
                                alert("é deu bom")
                            } else {
                                alert("é deu ruim")
                            }

                        },
                        error: function () {
                            $("#errorMessage").append("Deu muito ruim parça!");
                        }
                    });
                }

        }
            const signUpButton = document.getElementById('signUp');
            const signInButton = document.getElementById('signIn');
            const container = document.getElementById('container');

            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
            });

            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });


