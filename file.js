
function updateOutput() {
    // Get the values from the textareas
    let htmlcode = document.getElementById("html-code").value;
    let csscode = document.getElementById("css-code").value;
    let js = document.getElementById("javascript-code").value;
    let output = document.getElementById("output");

    // Update the iframe with HTML and CSS
    output.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode + "</style>";
    
    // Evaluate the JavaScript in the iframe
    output.contentWindow.eval(js);
}



