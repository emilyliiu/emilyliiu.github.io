var attempt = 3;

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "hi" && password == "123") {
        ;


        window.location = "projects/5FBiXSAOsDYyll0JvhCeSAU.html";
        return false;
    } else {
        attempt--; 
        document.getElementById("errorMessage").textContent="Incorrect username and/or password";

        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
