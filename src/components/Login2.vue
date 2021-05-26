<template>
  <div>
    <div class="content-w3ls">
      <div class="text-center icon">
        <span class="fa fa-book"></span>
      </div>
      <div class="content-bottom">
        <div class="wthree-field">
          <label>Already have an account ?</label>
          <button
            type="submit"
            class="btn"
            @click="signIn(google)"
            style="background-color:#DB4437"
          >
            <span class="fa fa-google"></span>
            Continue with Google
          </button>
          <button
            type="submit"
            class="btn"
            @click="signIn(facebook)"
            style="background-color:#3b5998"
          >
            <span class="fa fa-facebook"></span>
            Continue with Facebook
          </button>
          <button
            type="submit"
            @click="signOut"
            class="btn"
            style="background-color:#3b5998"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VFacebookLogin from "vue-facebook-login-component-next";
import { VFBLoginScope as VFacebookLoginScope } from "vue-facebook-login-component-next";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import store from "../store";
import firebase from "firebase";
import { db } from "../firebaseDb.js";

export default {
  components: {
    MenuIcon,
    VFacebookLogin,
    VFacebookLoginScope,
  },
  store,
  data() {
    return {
      loginState: false,
      email: "",
      userName: "", // DisplayName
      profileImage: "", // photoURL
    };
  },
  methods: {
    signIn(social) {
      let provider = null;
      if (social == "facebook") {
        provider = new firebase.auth.FacebookAuthProvider();
      } else {
        provider = new firebase.auth.GoogleAuthProvider();
      }
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
          let isNewUser = result.user.isAnonymous;
          console.log("Token: ", token); // Token
          console.log("Is this new user ?", isNewUser);
          console.log(user); // User that was authenticated
          if (isNewUser) {
            this.createDocument(user);
          }
          this.loginState = true;
          this.$router.push("Personal");
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Signed out successfully");
          this.loginState = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createDocument(user) {
      db.collection("user")
        .add({ email: user.email, userName: user.displayName, profileImage: user.photoURL })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
        
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
        console.log(user.isAnonymous);
        console.log("User logged in");
      } else {
        console.log("User is not logging in");
      }
    });
  },
};
</script>

<style>
/*
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
*/

/*--reset--*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
dl,
dt,
dd,
ol,
nav ul,
nav li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*--start editing from here--*/

a {
  text-decoration: none;
}

.txt-rt {
  text-align: right;
}

/* text align right */

.txt-lt {
  text-align: left;
}

/* text align left */

.txt-center {
  text-align: center;
}

/* text align center */

.float-rt {
  float: right;
}

/* float right */

.float-lt {
  float: left;
}

/* float left */

.clearfix {
  clear: both;
}

/* clear float */

.pos-relative {
  position: relative;
}

/* Position Relative */

.pos-absolute {
  position: absolute;
}

/* Position Absolute */

.vertical-base {
  vertical-align: baseline;
}

/* vertical align baseline */

.vertical-top {
  vertical-align: top;
}

/* vertical align top */

nav.vertical ul li {
  display: block;
}

/* vertical menu */

nav.horizontal ul li {
  display: inline-block;
}

/* horizontal menu */

img {
  max-width: 100%;
}

/*--end reset--*/
body a:hover {
  text-decoration: none;
}

.clearfix {
  clear: both;
}

/* content */

/*
  Responsive form elements
  Flexbox layout
*/

/*/////////////// GLOBAL STYLES ////////////////////*/

body {
  font-family: "Mukta", sans-serif;
}

.layer {
  padding: 2em 0;
}
.text-center {
  text-align: center;
}

/*/////////////// FONT STYLES ////////////////////*/

.content-w3ls {
  max-width: 500px;
  margin: 0em auto;
}
ul.links-unordered-list li.active a {
  background: rgba(255, 255, 255, 0.05);
  padding: 5px 20px;
  color: #fff;
}
.icon span.fa {
  font-size: 60px;
  color: #eee;
}
.icon {
  margin-bottom: 3em;
}
.content-bottom {
  padding: 0em 4em;
  margin: 0 1em;
  position: relative;
  z-index: 1;
}
.logo h1 a {
  font-size: 25px;
  color: #fff;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 1px;
}
.content-w3ls ul li {
  display: inline-block;
}

li.switch-agileits {
  float: left;
}

ul.list-login li:nth-child(2) {
  float: right;
}
ul.list-login-bottom li:nth-child(2) {
  float: right;
}

.field-group label {
  font-size: 15px;
}

.check {
  margin: 0.5em 0;
}

.checkbox input,
.radio input {
  position: absolute;
  left: -9999px;
}

.checkbox i {
  position: absolute;
  bottom: 5px;
  left: 2px;
  display: block;
  width: 14px;
  height: 14px;
  outline: none;
  border: none;
  background: #fff;
}

.check label {
  margin: 0;
  font-size: 1em;
  text-transform: capitalize;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 300;
}

.checkbox {
  position: relative;
  padding-left: 28px !important;
  cursor: pointer;
}

.checkbox input:checked + i:after,
.radio input:checked + i:after {
  opacity: 1;
}

.checkbox input + i:after,
.radio input + i:after {
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s;
  -o-transition: opacity 0.1s;
  -ms-transition: opacity 0.1s;
  -moz-transition: opacity 0.1s;
  -webkit-transition: opacity 0.1s;
}

/*/////////////// FORM STYLES ////////////////////*/

form .field-group {
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  display: flex;
  display: -webkit-box;
  /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;
  /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;
  /* TWEENER - IE 10 */
  display: -webkit-flex;
  /* NEW - Chrome */
  margin-bottom: 20px;
  padding: 2px 10px 2px 0;
  border-radius: 35px;
  -webkit-border-radius: 35px;
  -moz-border-radius: 35px;
  -ms-border-radius: 35px;
  -o-border-radius: 35px;
}

form .field-group span {
  flex: 1;
  -webkit-box-flex: 1; /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 1; /* OLD - Firefox 19- */
  width: 20%; /* For old syntax, otherwise collapses. */
  -webkit-flex: 1; /* Chrome */
  -ms-flex: 1; /* IE 10 */
  color: #fff;
  background: transparent;
  line-height: 49px;
  text-align: right;
}

ul.list-login {
  margin-top: 1.5em;
  margin-bottom: 1em;
}

form .field-group .wthree-field {
  flex: 4 50%;
  -webkit-box-flex: 4 50%; /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 4 50%; /* OLD - Firefox 19- */
  -webkit-flex: 4 50%; /* Chrome */
  -ms-flex: 4 50%; /* IE 10 */
}

.wthree-field button.btn {
  background: #fc636b;
  border: none;
  color: #fff;
  padding: 11px 15px;
  text-transform: uppercase;
  font-family: "Mukta", sans-serif;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  border-radius: 35px;
  -webkit-border-radius: 35px;
  -moz-border-radius: 35px;
  -ms-border-radius: 35px;
  -o-border-radius: 35px;
}

.bottom-grid,
.bottom-grid1 {
  display: flex;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  justify-content: space-between;
  margin: 0em 10em;
}
ul.links-unordered-list li {
  display: inline-block;
  margin-right: 10px;
}
ul.links-unordered-list li a {
  font-size: 16px;
  color: #ccc;
  font-weight: normal;
  letter-spacing: 1px;
  padding: 0 5px;
  text-transform: capitalize;
}
.wthree-field input {
  padding: 10px 0 10px 15px;
  font-size: 17px;
  font-weight: 300;
  color: #ddd;
  letter-spacing: 1px;
  border: none;
  background: transparent;
  box-sizing: border-box;
  font-family: "Mukta", sans-serif;
  width: 100%;
  outline: none;
}
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #ccc;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #ccc;
}
::-ms-input-placeholder {
  /* IE 10+ */
  color: #ccc;
}
::-moz-placeholder {
  /* Firefox 18- */
  color: #ccc;
}
/* switch */

label.switch {
  position: relative;
  display: inline-block;
  height: 18px;
  padding-left: 3em;
  cursor: pointer;
  color: #ccc;
  font-weight: 300;
}

li:nth-child(2) a,
label.switch {
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 300;
  color: #ccc !important;
  text-transform: capitalize;
}
ul.list-login-bottom li:nth-child(1) a,
ul.list-login-bottom li:nth-child(2) a {
  font-size: 15px;
  letter-spacing: 2px;
  font-weight: normal;
  text-transform: uppercase;
  color: #fff !important;
}

li:nth-child(2) a,
li:nth-child(1) a {
  color: #fff;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 2px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 21%;
  background-color: rgba(255, 255, 255, 0.15);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  left: 4px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #fc636b;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(14px);
  -ms-transform: translateX(14px);
  transform: translateX(14px);
}

/* Rounded sliders */

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* //switch */
.copyright p {
  color: #ccc;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 300;
  word-spacing: 1px;
  text-transform: capitalize;
}
.copyright p a {
  color: #fff;
}

/* -- Responsive code -- */
@media screen and (max-width: 1280px) {
  .content-w3ls {
    margin: 4em auto;
  }
}
@media screen and (max-width: 1080px) {
  .bottom-grid,
  .bottom-grid1 {
    margin: 0em 5em;
  }
  .icon span.fa {
    font-size: 50px;
  }
}
@media screen and (max-width: 900px) {
  .bottom-grid,
  .bottom-grid1 {
    margin: 0em 2em;
  }
}
@media screen and (max-width: 800px) {
  .bottom-grid1 {
    flex-direction: column;
    text-align: center;
  }
  .copyright {
    margin-top: 1em;
  }
}
@media screen and (max-width: 768px) {
  .logo h1 a {
    font-size: 22px;
  }
}
@media screen and (max-width: 668px) {
  .content-w3ls {
    margin: 3em auto;
  }
  ul.links-unordered-list li a,
  .copyright p {
    font-size: 15px;
  }
  ul.links-unordered-list li {
    margin-right: 0px;
  }
  ul.list-login {
    margin-bottom: 0.5em;
  }
  .icon {
    margin-bottom: 2em;
  }
  .icon span.fa {
    font-size: 40px;
  }
  ul.list-login-bottom li:nth-child(1) a,
  ul.list-login-bottom li:nth-child(2) a {
    font-size: 14px;
  }
}
@media screen and (max-width: 600px) {
  .copyright p {
    color: #fff;
    letter-spacing: 1px;
  }
}
@media screen and (max-width: 568px) {
  .content-bottom {
    padding: 0em 2.5em;
  }
  .content-w3ls {
    margin: 3em auto 2em;
    max-width: 450px;
  }
}

@media screen and (max-width: 480px) {
  .logo h1 a {
    font-size: 20px;
  }
}

@media screen and (max-width: 415px) {
  .bottom-grid,
  .bottom-grid1 {
    flex-direction: column;
    text-align: center;
  }
  .logo {
    margin-bottom: 10px;
  }
  form .field-group {
    padding: 0px 10px 0px 0;
  }
  .wthree-field button.btn {
    font-size: 15px;
  }
  ul.list-login-bottom li:nth-child(1) a,
  ul.list-login-bottom li:nth-child(2) a {
    font-size: 13px;
  }
  .bottom-grid,
  .bottom-grid1 {
    margin: 0em 1em;
  }
}

@media screen and (max-width: 384px) {
  .content-bottom {
    padding: 0em 1em;
  }
  .layer {
    padding: 1em 0;
  }
  label.switch {
    padding-left: 2.5em;
  }
}

@media screen and (max-width: 375px) {
}
@media screen and (max-width: 320px) {
}
</style>
