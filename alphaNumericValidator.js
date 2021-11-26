function alphaNumericChecker(value)
{
 pattern = /^[A-Za-z0-9]+$/;
  
        if (pattern.test(value))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(alphaNumericChecker("37828sad")); //It will return true

console.log(alphaNumericChecker("3243#$sew")); //It will return false