'use strict';

// let changeColor = document.getElementById('changeColor');
let buttonFormact = document.getElementById('formact');

let nameInput = document.getElementById('name-input');
let linkInput = document.getElementById('link-input');
let bodyInput = document.getElementById('body-input');

let responseOutput = document.getElementById('response-output');

buttonFormact.onclick = function(element) {
  console.log('teste')
  if (ValidatesNameInput() && ValidatesLinkInput() && ValidatesBodyInput()) {

    $.ajax({
      url: 'http://192.168.43.39:4000/convert_text',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      type: "POST", /* or type:"GET" or type:"PUT" */
      dataType: "json",
      data: 
      {
        "data": {
          "lexicon":{
            "name": nameInput.value, 
            "link": linkInput.value
          }, 
          "text":{
            "content": bodyInput.value
          }
        }
      },
      success: function (result) {
          console.log(result); 
          responseOutput.value = result.result  
      },
      error: function () {
          console.log("error");
      }
    });
  }
}
  
function ValidatesNameInput() {

  if( nameInput.value == "" ) {
	  alert (" Por favor, forneça o NOME.\n O campo NOME é de preenchimento obrigatório.");
      return false;
    } else {
		var padrao = /[\\\/\?"<>:|]/;
		var nOK = padrao.exec(nameInput.value);
		if (nOK) {
			window.alert ("O nome não pode conter nenhum dos seguintes caracteres:   / \\ : ? \" < > |");
			linkInput.focus();
			return false;
    }
    return true;
	}
}

function ValidatesLinkInput() {

  if( linkInput.value == "" ) {
	  alert (" Por favor, forneça o LINK.\n O campo LINK é de preenchimento obrigatório.");
      return false;
    } else {
    return true;
	}
}

function ValidatesBodyInput() {

  if( bodyInput.value == "" ) {
	  alert (" Por favor, forneça o TEXTO.\n O campo TEXTO é de preenchimento obrigatório.");
      return false;
    } else {
    return true;
	}
}

// function addSinonimo() {
//   var listSinonimo = document.forms[1].elements['listSinonimo[]'];

//   if(document.forms[1].sinonimo.value == "")
//   	return;

//   var sinonimo = document.forms[1].sinonimo.value;
//   var padrao = /[\\\/\?"<>:|]/;
//   var nOK = padrao.exec(sinonimo);
//   if (nOK) {
//   	window.alert ("O sin�nimo do l�xico n�o pode conter nenhum dos seguintes caracteres:   / \\ : ? \" < > |");
//   	document.forms[1].sinonimo.focus();
//   	return;
//   }

//   listSinonimo.options[listSinonimo.length] = new Option(document.forms[1].sinonimo.value, document.forms[1].sinonimo.value);

//   document.forms[1].sinonimo.value = "";

//   document.forms[1].sinonimo.focus();

// }

// function delSinonimo() {
//   var listSinonimo = document.forms[1].elements['listSinonimo[]'];

//   if(listSinonimo.selectedIndex == -1)
//     return;
//   else

//   listSinonimo.options[listSinonimo.selectedIndex] = null;

//   delSinonimo();
// }


// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//    let color = element.target.value;
//    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//      chrome.tabs.executeScript(
//          tabs[0].id,
//          {code: 'document.body.style.backgroundColor = "' + color + '";'
//
//
//           }
//
//       );
//    });
//  };
//
// var e = document.createElement('span');
// e.innerHTML = htmldata;
// element.appendChild(e);
