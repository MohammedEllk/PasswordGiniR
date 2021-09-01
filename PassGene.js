
function generate(e){
e.preventDefault();
document.getElementById("passhash").innerHTML = "";
console.log("test1");
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
  document.getElementById("passhash").innerHTML = htmlEncode(Afunctionthatdosomething(lengthPass,isSymb,isNumb,isMajes));
  var textpass = document.getElementById("passhash").innerHTML;
  document.getElementById("lengtext").innerHTML = Afunctionthatdosomething(lengthPass,isSymb,isNumb,isMajes).length;
  ChangeTexte(textpass);

console.log(isMajes);
console.log(lengthPass);
console.log(isSymb);
console.log(isNumb);


}
function ChangeTexte(textpass,lengthPass,isSymb,isNumb,isMajes){
	
	console.log(document.getElementById("passhash").innerHTML);
	$('#passhash').val(textpass);
	console.log(document.getElementById("passhash").innerHTML);
	
	console.log("test 2");

}
function fallbackCopyTextToClipboard(text) {
	console.log("test 3");
	var textArea = document.createElement("textarea");
	textArea.value = text;
  
	// Avoid scrolling to bottom
	textArea.style.top = "0";
	textArea.style.left = "0";
	textArea.style.position = "fixed";

	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		console.log('Fallback: Copying text command was ' + msg);
	} catch (err) {
		console.error('Fallback: Oops, unable to copy', err);
	}
	console.log("test 4");
	document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
	console.log("test 5");
	if (!navigator.clipboard) {
		fallbackCopyTextToClipboard(text);
		console.log("7midaaa");
		return;
  }
	console.log("test 6");
	navigator.clipboard.writeText(text).then(function() {
	console.log("test 7mida");
	setTimeout(showsuccess, 100);
	setTimeout(hidesuccess, 1500);

	
	}, function(err) {
		console.error('Async: Could not copy text: ', err);
  });
}
function Resolve(function1,time) {
  
   return new Promise(resolve => {
    setTimeout(function1, time);
  });

}
function StopSucc(func) {
  
   return new Promise(resolve => {
    clearTimeout(func);
  });

}

var copyPassword = document.querySelector('.js-copy-password-btn');
copyPassword.addEventListener('click', function(event) {
console.log(document.getElementById("passhash").textContent.length);
copyTextToClipboard(document.getElementById("passhash").textContent);
});

function showsuccess(){
	document.getElementById("success").style.visibility = "visible";
	document.getElementById("success").style.width =  "400px";
	document.getElementById("success").style.height =  "30px";
	document.getElementById("success").style.backgroundColor = "green";
	document.getElementById("success").innerHTML = "Password copied successfully!! sa longeur est "+document.getElementById("passhash").textContent.length; 
}
function hidesuccess(){
	document.getElementById("success").style.visibility = "hidden";
	document.getElementById("success").style.width =  "0px";
	document.getElementById("success").style.height =  "0px";
	document.getElementById("success").innerHTML = ""; 
}

$('#passhash').on('input', function (evt) {
	var value = evt.target.value;
	console.log(document.getElementById("passhash").innerHTML);
	$('#passhash').val(value);
	document.getElementById("lengtext").innerHTML = value.length;
})
$('#passhash').on('change', function (evt) {
	evt.preventDefault();
	var value = evt.target.value;
	$('#passhash').val(value);
})


function htmlEncode(str){
  return String(str).replace(/[^\w. ]/gi, function(c){
     return '&#'+c.charCodeAt(0)+';';
  });
}
function Afunctionthatdosomething(nu,isSym,isNumber,isMajes){
  console.log("FIX ERREUR");
  let str = "";
  let breaker = 0;
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
	  breaker++;
      break;
    case 1 : 
      if(isSym){
      str = str + symbol[getRandomInt(0,symbol.length)];
	  breaker++;
	  break;
      }
      str = str + minialphabet[getRandomInt(0,minialphabet.length)];
	  breaker++;
      break;
    case 2 :
      if(isNumber){
      str = str + numberarr[getRandomInt(0,numberarr.length)];
	  breaker++;
	  break;
      }
      str = str + minialphabet[getRandomInt(0,minialphabet.length)];
	  breaker++;
	  break;
    case 3 :
      if(isMajes){
      str   = str + alphabet[getRandomInt(0,alphabet.length)];
	  breaker++;
	  break;
      }
      str = str + minialphabet[getRandomInt(0,minialphabet.length)];
	  breaker++;
      break;
    }
	if(breaker==200){
		str = str.substring(0, str.length - 1);
		str = str + '\n';
		breaker = 0;
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

