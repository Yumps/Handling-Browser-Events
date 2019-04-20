//the container to slap everything to DOMo genesis
const inputField = document.getElementById("message");
const textNode = document.createTextNode("Place text here => ");
inputField.appendChild(textNode);

//text input boi thing idk
const input = document.createElement("input");
input.setAttribute("type", "text");
input.addEventListener("keyup", event => {
  articleDOM.textContent = event.target.value;
  articleDOM2.textContent = event.target.value;
});
inputField.appendChild(input);

//articles for the input to reflect to
const articleBOX = document.createElement("div");
articleBOX.setAttribute("id", "articleBOX");
const articleDOM = document.createElement("article");
articleDOM.setAttribute("id", "article1");
const articleDOM2 = document.createElement("article");
articleDOM2.setAttribute("id", "article2");

articleBOX.appendChild(articleDOM);
articleBOX.appendChild(articleDOM2);
inputField.appendChild(articleBOX);
