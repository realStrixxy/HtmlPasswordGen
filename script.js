function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

function GenerateNewPass() {
    if(document.getElementById("noLength") !== null){
        let newPDiv = document.getElementById("NewPasswordDiv");
        let elem = document.querySelector("#noLength");
        newPDiv.removeChild(elem);
    }
    if(document.getElementById("newP") !== null){
        let newPDiv = document.getElementById("NewPasswordDiv");
        let elem = document.querySelector("#newP");
        newPDiv.removeChild(elem);
    }

    let Length = document.getElementById("Plen").value;
    let Alphanumerical = document.getElementById("Alphanum");
    let Symbols = document.getElementById("Symbols");

    if(Length > 16) {
        Length = 16;
    }

    if(Length == 0) {
        let tag = document.createElement("p");
        tag.append("No Password Length");
        tag.setAttribute("id", "noLength");
        let element = document.getElementById("NewPasswordDiv");
        element.appendChild(tag);
    }

    if(!Alphanumerical.checked && !Symbols.checked) {
        let tag = document.createElement("p");
        let text = randomString(Length, '0123456789');
        tag.append(text);
        tag.setAttribute("id", "newP");
        let element = document.getElementById("NewPasswordDiv");
        element.appendChild(tag);
    }

    if(Alphanumerical.checked && !Symbols.checked) {
        let tag = document.createElement("p");
        let text = randomString(Length, '0123456789abcdekpqrstuvwxyzFGHIJKLMNOPQRSTYZ');
        tag.append(text);
        tag.setAttribute("id", "newP");
        let element = document.getElementById("NewPasswordDiv");
        element.appendChild(tag);
    }

    if(!Alphanumerical.checked && Symbols.checked) {
        let tag = document.createElement("p");
        let text = randomString(Length, '0123456789!$&%#*');
        tag.append(text);
        tag.setAttribute("id", "newP");
        let element = document.getElementById("NewPasswordDiv");
        element.appendChild(tag);
    }

    if(Alphanumerical.checked && Symbols.checked) {
        let tag = document.createElement("p");
        let text = randomString(Length, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!$&');
        tag.append(text);
        tag.setAttribute("id", "newP");
        let element = document.getElementById("NewPasswordDiv");
        element.appendChild(tag);
    }
}