function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

function GenerateNewPass() {
    let Length = document.getElementById("Plen").value;
    let Alphanumerical = document.getElementById("Alphanum");
    let Symbols = document.getElementById("Symbols");
    let showNewPass = document.getElementById("newPassword");

    if(Length > 16) {
        Length = 16;
    }

    if(!Alphanumerical.checked && !Symbols.checked) {
        let text = randomString(Length, '0123456789');
        showNewPass.value = text;
    }

    if(Alphanumerical.checked && !Symbols.checked) {
        let text = randomString(Length, '0123456789abcdekpqrstuvwxyzFGHIJKLMNOPQRSTYZ');
        showNewPass.value = text;
    }

    if(!Alphanumerical.checked && Symbols.checked) {
        let text = randomString(Length, '0123456789!$&%#*');
        showNewPass.value = text;
    }

    if(Alphanumerical.checked && Symbols.checked) {
        let text = randomString(Length, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!$&');
        showNewPass.value = text;
    }
}

function CopyNewPass() {
    let showNewPass = document.getElementById("newPassword");
    showNewPass.focus();
    showNewPass.select();
    document.execCommand('copy');
}