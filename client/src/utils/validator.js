const regex = {
    password : /^[a-zA-Z0-9]{6,12}$/
} 


export const isPassword = (testPassword) => {
    return regex.password.test(testPassword);
}