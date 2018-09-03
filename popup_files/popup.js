'use strict';

// let changeColor = document.getElementById('changeColor');
let buttonScenario = document.getElementById('buttonScenario');
let buttonLexicon = document.getElementById('buttonLexicon');

buttonScenario.onclick = function(element) {
  document.getElementById("scenario").style.display = "block";
  document.getElementById("lexicon").style.display = "none";
}

buttonLexicon.onclick = function(element) {
  document.getElementById("lexicon").style.display = "block";
  document.getElementById("scenario").style.display = "none";
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
