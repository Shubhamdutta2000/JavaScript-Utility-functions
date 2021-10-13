function hexadecimalValidator(hexa)
{
    pattern = /^[0-9a-fA-F]+$/;
  
        if (pattern.test(hexa))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(hexadecimalValidator("ffffff")); // It will return true

console.log(hexadecimalValidator("fz5500")); // It will return false