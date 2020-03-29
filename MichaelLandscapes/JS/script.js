function admin_login() {

    let name = prompt("Enter username:", "");

    // Check username
    if (name == "admin" || name == "Admin") {

        // If user is admin, check password
        let pwd = prompt("Enter password:");

        // If password is correct, redirect to admin interface
        if (pwd == "Landscapes") {
            document.location.href = "admin_interface.html";
        }
        // If password is not entered, cancel
        else if (pwd == "" || !pwd) {
            document.write("Cancelled");
        }
        // If password is incorrect, show error message
        else {
            document.write("Wrong password");
        }
    }

    // If cancelled, exit
    else if (name == "" || !name) {
        document.write("Cancelled");
    }

    // If user not admin, don't allow access
    else {
        document.write("Wrong Username");
    }
}