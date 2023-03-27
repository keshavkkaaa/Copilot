
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("word").value;

     if (username == "user" && password == "password") {
                alert("You have successfully logged in.");
                return true;
            } 
            else {
                alert("Wrong Password!!!");
                return false;
            }
}




