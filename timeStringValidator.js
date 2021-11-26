function timeStringChecker(string)
{
 pattern = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;
  
        if (pattern.test(string))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(timeStringChecker("11:17:17")); // It will return true

console.log(timeStringChecker("25:17:17")); // It will return false