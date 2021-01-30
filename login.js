var attempt = 3;

function validate() {
    var password = document.getElementById("password").value;
    if (password == "2w3e4r") {;


        window.location = "emilyliiu.github.io/projects/5FBiXSAOsDYyll0JvhCeSAU.html";
        return false;
    } else {
        attempt--;
        document.getElementById("errorMessage").textContent = "Incorrect password 😕";

        if (attempt == 0) {
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            document.getElementById("disableMessage").textContent = " Please reach out to me for the password";
            return false;
        }
    }
}