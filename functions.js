let bandNumber = 1

const takeNumber =  (bandName) => {
  
    return(`<p>${bandNumber} ${bandName}</p>`);  
};

const printToDom = (disp)=>
{
   document.getElementById('output').innerHTML = disp; 
}

printToDom('Hello Programming');