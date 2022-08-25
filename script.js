function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

function GenerateNewPass() {
    if(document.getElementById("newP") !== null){
        console.log("newp being deleted");
        let elem = document.querySelector("#newP");
        elem.parentNode.removeChild(elem);
    }

    let Length = document.getElementById("Plen").value;
    let Alphanumerical = document.getElementById("Alphanum");

    if(Length > 16) {
        Length = 16;
    }

    if(Length == 0) {
        let tag = document.createElement("p");
        let text = "No Password Length";
        tag.append(text);
        tag.setAttribute("id", "newP");
        let element = document.getElementById("NewPasswordDiv");
        element.appendChild(tag);
    }

    if(!Alphanumerical.checked) {
        let tag = document.createElement("p");
        let text = randomString(Length, '0123456789');
        tag.append(text);
        tag.setAttribute("id", "newP");
        let element = document.getElementById("NewPasswordDiv");
        element.appendChild(tag);
    }

    if(Alphanumerical.checked) {
        let tag = document.createElement("p");
        let text = randomString(Length, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        tag.append(text);
        tag.setAttribute("id", "newP");
        let element = document.getElementById("NewPasswordDiv");
        element.appendChild(tag);
    }
}