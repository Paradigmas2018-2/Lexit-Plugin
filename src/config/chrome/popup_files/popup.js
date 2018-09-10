'use strict';

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
      type: "POST",
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