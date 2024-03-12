module.exports = function validarSenha(senha) {
    const erro = []
    if (senha.length < 8 || senha.length > 16) {
        
        erro.push("A senha deve conter entre 8 e 16 caracteres.")
    }

    const regexMaiuscula = /[A-Z]/
    const regexMinuscula = /[a-z]/
    const regexNumero = /[0-9]/
    const regexCaractereEspecial = /[\W]/


    if (!regexMaiuscula.test(senha)) { 
        erro.push(`A senha digitada deve conter pelo menos uma letra maíuscula.`)
    }

    if (!regexMinuscula.test(senha)) {
        erro.push(`A senha digitada deve conter pelo menos uma letra minúscula.`)
    }

    if (!regexNumero.test(senha)) { 
        erro.push(`A senha digitada deve conter pelo menos um número`)
    }

    if (!regexCaractereEspecial.test(senha)) {
        erro.push(`A senha digitada deve conter pelo menos um caractere especial`)
    }

    return {
        valido: erro.length === 0,
        erro,
    };
}