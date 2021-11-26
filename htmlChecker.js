function htmlValidator(string)
{
 pattern = /<([a-z]+) *[^/]*?>/;
  
        if (pattern.test(string))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(htmlValidator('<main>Hello world</main>')); //It will return true

console.log(htmlValidator('hello world')); //It will return false

