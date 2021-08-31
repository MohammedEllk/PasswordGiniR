function generate(e){
e.preventDefault();
var lengthPass = Number(document.getElementById('passlen').value);
var majes = document.getElementsByName('majes');
var symb = document.getElementsByName('symb');
var numb = document.getElementsByName('numb');
var isMajes = false ;
var isSymb = false;
var isNumb = false;


  if (majes[0].checked) {
    isMajes= true;
  }
  if (symb[0].checked) {
    isSymb= true;
  }
  if (numb[0].checked) {
    isNumb= true;
  }


console.log(isMajes);
console.log(lengthPass);
console.log(isSymb);
console.log(isNumb);
document.getElementById("demo").innerHTML = htmlEncode(Afunctionthatdosomething(lengthPass,isSymb,isNumb,isMajes));


}
function htmlEncode(str){
  return String(str).replace(/[^\w. ]/gi, function(c){
     return '&#'+c.charCodeAt(0)+';';
  });
}
function Afunctionthatdosomething(nu,isSym,isNumber,isMajes){
  let str = "";
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const minialphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
  const numberarr = Array.from(Array(10).keys());
  const symbol = [">","<","^","$","*","'","&","!","-","+","/","|","@","#",'"',"\\"];
  
  for(let i = 0 ; i < nu ; i++) {
    const choose = getRandomInt(0,4);
    switch (choose) {
      
    case 0:
      str = str + minialphabet[getRandomInt(0,minialphabet.length)];
      break;
    case 1 : 
      if(isSym){
      str = str + symbol[getRandomInt(0,symbol.length)];
	  break;
      }
      str = str + minialphabet[getRandomInt(0,minialphabet.length)];
      break;
    case 2 :
      if(isNumber){
      str = str + numberarr[getRandomInt(0,numberarr.length)];
	  break;
      }
      str = str + minialphabet[getRandomInt(0,minialphabet.length)];
	  break;
    case 3 :
      if(isMajes){
      str   = str + alphabet[getRandomInt(0,alphabet.length)];
	  break;
      }
      str = str + minialphabet[getRandomInt(0,minialphabet.length)];
      break;
    }
  }
   /** if(i%2==0){
    str = str + minialphabet[getRandomInt(0,minialphabet.length)];
    }
    else{
    if(isSym){
      str = str + symbol[getRandomInt(0,symbol.length)];
    }
    else if(isNumber){
      str = str + numberarr[getRandomInt(0,numberarr.length)];
    }
    }
  }*/
  console.log(str.length);
  return str;
  
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

