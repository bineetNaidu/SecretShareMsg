var hash = window.location.hash;
var encptMsg = atob(hash.replace("#", ""));
if (encptMsg) {
    document.querySelector("#msg-form").classList.add("hide");
    document.querySelector("#msg-show").classList.remove("hide");
    document.querySelector("#msg-show h1").innerHTML = encptMsg;
}
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector("#msg-form").classList.add("hide");
    document.querySelector("#link-form").classList.remove("hide");
    var input = document.querySelector("#message-input");
    var encrypted = btoa(input.value);
    var URLinput = document.querySelector("#link-input");
    URLinput.value = window.location + "#" + encrypted;
    URLinput.select();
});
// ASCII char codes
// Base64 char Codes
