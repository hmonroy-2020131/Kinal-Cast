export const validateEmail = (email) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/
    return regex.test(email)
}

export const emailValidationMessage = 'Por favor ingresa una direccion de correo electronico valido'