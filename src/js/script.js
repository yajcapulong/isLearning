function uidValidator(uidInput){

    var uid = document.getElementById("uidInput").value;
    let uppercaseCount = 0;
    let digitCount = 0;

    /* It must contain at least 2 uppercase English alphabet characters. 
     It must contain at least 3 digits (0 - 9).
     It should only contain alphanumeric characters (a - z, A - Z & 0 - 9).
     No character should repeat.
     There must be exactly 10 characters in a valid UID.
    */

    if (uid.length != 10){
        return false;
    }
    for (var i = 0; i < uid.length; i++){
        var char = uid[i];

        if (char >= 'A' && char <= 'Z'){
            uppercaseCount++;

        }else if (char >= '1' && char <= '9'){
            digitCount++;
        }
    }

    if (uppercaseCount < 2 || digitCount < 3){
        return false;
    }

    let uidRegex = /^[a-zA-Z0-9]{10}$/;
    return uidRegex.test(uid);

}

var uidInput = document.getElementById("uidInput").value;
var result = document.getElementById("uidResult");

if (uidValidator(uidInput)) {
  result.textContent = "Valid";
} else {
  result.textContent = "Invalid";
}