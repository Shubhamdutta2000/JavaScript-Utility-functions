function genRandomPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    const password = "";
   for (let i = 0; i <= passwordLength; i++) {
     const randomNumber = Math.floor(Math.random() * chars.length);
     password += chars.substring(randomNumber, randomNumber + 1);
    }
    
    return password;
}