function provera(e) {
    var forma = document.forma;
    var ime = forma.ime;
    var email = forma.email;
    var poruka = forma.poruka;

    var obavestenje = document.getElementById("obavestenje");

    try {
        if (ime.value == "" ||
            email.value == "" ||
            poruka.value == "") {
                obavestenje.style.display = "block";
                throw "You need to fill all";
               
        }
        else {
            if (ime.value.length < 4) {
                obavestenje.style.display = "block";
                throw "You need more than 4 chars";
            } else if (ime.value.length > 10) {
                obavestenje.style.display = "block";
                throw "You need more than 10 chars";
            } else if (proveraMaila(email.value) == false) {
                obavestenje.style.display = "block";
                throw "E-mail is not correct"
            }
        }
        obavestenje.style.display = "none";
        ime.value = email.value = poruka.value = "";
        alert("Message sent");
    } catch (error) {
        obavestenje.innerHTML = error;
    }

}