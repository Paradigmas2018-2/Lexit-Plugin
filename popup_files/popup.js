'use strict';

// let changeColor = document.getElementById('changeColor');
let buttonScenario = document.getElementById('buttonScenario');
let buttonLexicon = document.getElementById('buttonLexicon');
let buttonAddSinonimo = document.getElementById('addSinonimo');
let buttonDelSinonimo = document.getElementById('delSinonimo');
let buttonSubmitLexicon = document.getElementById('submitLexicon');

buttonScenario.onclick = function(element) {
  document.getElementById("scenario").style.display = "block";
  document.getElementById("lexicon").style.display = "none";
}

buttonLexicon.onclick = function(element) {
  document.getElementById("lexicon").style.display = "block";
  document.getElementById("scenario").style.display = "none";
}

buttonAddSinonimo.onclick = function(element) {
  addSinonimo()
}

buttonDelSinonimo.onclick = function(element) {
  delSinonimo()
}

// buttonSubmitLexicon.onclick = function(element) {
//   TestarBranco()
// }

function TestarBranco() {

  var form = document.forms[1];
  var nome  = form.nome.value;
  var nocao = form.nocao.value;

  if( nome == "" )
    {
	  alert (" Por favor, forneça o NOME do léxico.\n O campo NOME é de preenchimento obrigatório.");
      form.nome.focus();
      return false;
    }else{
		padrao = /[\\\/\?"<>:|]/;
		var nOK = padrao.exec(nome);
		if (nOK)
		{
			window.alert ("O nome do léxico não pode conter nenhum dos seguintes caracteres:   / \\ : ? \" < > |");
			form.nome.focus();
			return false;
		}
	}

   if( nocao == "" )
    { alert (" Por favor, forneça a NOÇÂO do léxico.\n O campo NOÇÂO É de preenchimento obrigatório.");
      form.nocao.focus();
      return false;
    }

}

function addSinonimo() {
  var listSinonimo = document.forms[1].elements['listSinonimo[]'];

  if(document.forms[1].sinonimo.value == "")
  	return;

  var sinonimo = document.forms[1].sinonimo.value;
  var padrao = /[\\\/\?"<>:|]/;
  var nOK = padrao.exec(sinonimo);
  if (nOK) {
  	window.alert ("O sin�nimo do l�xico n�o pode conter nenhum dos seguintes caracteres:   / \\ : ? \" < > |");
  	document.forms[1].sinonimo.focus();
  	return;
  }

  listSinonimo.options[listSinonimo.length] = new Option(document.forms[1].sinonimo.value, document.forms[1].sinonimo.value);

  document.forms[1].sinonimo.value = "";

  document.forms[1].sinonimo.focus();

}

function delSinonimo() {
  var listSinonimo = document.forms[1].elements['listSinonimo[]'];

  if(listSinonimo.selectedIndex == -1)
    return;
  else

  listSinonimo.options[listSinonimo.selectedIndex] = null;

  delSinonimo();
}


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
