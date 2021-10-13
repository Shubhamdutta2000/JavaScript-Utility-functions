 export const fileToBase64 = file => {
       let reader = new FileReader();
       reader.readAsDataURL(file);
   reader.onload = function (e) {
        return e.target.result
    };
};