

// localStorage.setItem('todos', todos);
// $('#todos').html(localStorage.getItem('todos'));
// window.localStorage.clear();
// location.reload();

 var viewModelLogin = kendo.observable({
        email: '', //"siri@gespim.com"
        password: '', //"hdd"
        savepassword: true,
        // email: "stockwow@gmail.com",
        // password:"hddsgdhd",
        logIn: function() {



            // checkAppVersion();
            var email = this.get("email").toLowerCase().trim();
            var password = this.get("password");
            var savepassword = this.get("savepassword");

            console.log("login");
            app.navigate("#profile");



            if (email == "" && gUsername != "") {
                email = gUsername;
            }
            if (password == "" && gPassword != "") {
                password = gPassword;
            }

            kendo.ui.progress($("#login_waiting"), true);
            Parse.Config.get().then(function(config) {
                gAppConfig = Parse.Config.current();
                gMinAppVerion = gAppConfig.get("gMinAppVersion");
                if (gAppVersion < gMinAppVerion) {
                    // Parse.User.logOut();
                    // app.navigate("#login");
                    console.log("You need to upgrade your app now");
                    upgradeAppMust();
                } else {
                    console.log("version check done..." + email);


                    Parse.User.logIn(email, password, {
                        success: function(user) {


                            loadConfig();

                            //save it for next login without typing
                            if (savepassword) {
                                localStorage.setItem('vi', CryptoJS.AES.encrypt(email, "classmadellc2015"));
                                localStorage.setItem('qi', CryptoJS.AES.encrypt(password, "classmadellc2015"));
                            } else {
                                localStorage.setItem('vi', '');
                                localStorage.setItem('qi', '');
                            }


                        },
                        error: function(user, error) {
                            kendo.ui.progress($("#login_waiting"), false);
                            gNotification.show({
                                title: "Login failed!",
                                message: "check password/email or internet connection"
                            }, "error");

                            return;
                        }
                    });

                }
            }, function(error) {
                // Something went wrong (e.g. request timed out)
            });



        }

    });
    kendo.bind($("#login"), viewModelLogin);
   


    function register() {
        app.navigate("#signup", "slide:left");
    }


    function loginFacebook() {
        // FB.getLoginStatus(function(response) {
        //   if (response.status === 'connected') {
        //     console.log('Logged in.');
        //   }
        //   else {
        //     FB.login();
        //   }
        // });

        Parse.FacebookUtils.logIn(null, {
            // FB.init({
            success: function(user) {
                if (!user.existed()) {
                    alert("User signed up and logged in through Facebook!");
                } else {
                    alert("User logged in through Facebook!");
                }
            },
            error: function(user, error) {
                alert("User cancelled the Facebook login or did not fully authorize.");
            }
        });
    }