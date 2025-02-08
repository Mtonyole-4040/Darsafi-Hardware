$(document).ready(function() {
    // Populate regions dynamically
    let regions = {
        "Dar es Salaam": ["Ilala", "Kinondoni", "Temeke"],
        "Arusha": ["Arusha City", "Meru", "Monduli"],
        "Mwanza": ["Ilemela", "Nyamagana", "Sengerema"]
    };

    $.each(regions, function(region, districts) {
        $("#region").append(<option value="${region}">${region}</option>);
    });

    // Load districts based on selected region
    $("#region").change(function() {
        let selectedRegion = $(this).val();
        $("#district").empty().append('<option value="">Select District</option>');

        if (selectedRegion) {
            $.each(regions[selectedRegion], function(index, district) {
                $("#district").append(<option value="${district}">${district}</option>);
            });
        }
    });

    // Form validation
    $("#registrationForm").submit(function(event) {
        event.preventDefault();
        let isValid = true;

        // Validate Full Name
        let fullName = $("#fullName").val();
        if (!/^[A-Za-z\s]+$/.test(fullName)) {
            $("#nameError").text("Enter a valid full name.");
            isValid = false;
        } else {
            $("#nameError").text("");
        }

        // Validate Registration Number
        let regNumber = $("#regNumber").val();
        if (!/^BCS-\d{2}-\d{4}-\d{4}$/.test(regNumber)) {
            $("#regError").text("Invalid format! Use BCS-00-0000-0000.");
            isValid = false;
        } else {
            $("#regError").text("");
        }

        // Validate Email
        let email = $("#email").val();
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            $("#emailError").text("Enter a valid email.");
            isValid = false;
        } else {
            $("#emailError").text("");
        }

        // Validate Password
        let password = $("#password").val();
        if (password.length < 8 || !/[!@#$%^&*]/.test(password)) {
            $("#passwordError").text("Must be at least 8 characters and include a special character.");
            isValid = false;
        } else {
            $("#passwordError").text("");
        }

        // Confirm Password
        let confirmPassword = $("#confirmPassword").val();
        if (password !== confirmPassword) {
            $("#confirmPasswordError").text("Passwords do not match.");
            isValid = false;
        } else {
            $("#confirmPasswordError").text("");
        }

        // Submit if valid
        if (isValid) {
            alert("Registration Successful!");
        }
    });
});