# Validador de Senha

## Descrição

Este projeto fornece uma API para validar senhas de acordo com critérios específicos.

## Como usar

Faça uma requisição POST para a API `/validar-senha`. No corpo da requisição, envie a senha como JSON:

```json
{
  "senha": "SuaSenhaAqui"
}
```

## A API retornara um JSON como resposta:
### Exemplo:

```json
{
    "senha": "Abacate",
    "erro": [
        "A senha deve conter entre 8 e 16 caracteres.",
        "A senha digitada deve conter pelo menos um número",
        "A senha digitada deve conter pelo menos um caractere especial"
    ]
}
```

## Validações
### A API realiza as seguintes validações:

A senha deve ter entre 8 e 16 caracteres.  
A senha deve conter pelo menos uma letra maiúscula.  
A senha deve conter pelo menos uma letra minúscula.  
A senha deve conter pelo menos um número.  
A senha deve conter pelo menos um caractere especial.  

## Exemplos de uso

Validar a senha de um usuário durante o cadastro.  
Validar a senha de um usuário ao fazer login.  
Validar a senha de um usuário ao alterar sua senha.

## 🛠️Tecnologia Utilizadas
<div style="display: inline-block"><br>
<img align="center" alt="Crivelaro-JavaScript" height="40" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />  
<img align="center" alt="Crivelaro-Express" height="40" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
</div>          
          
