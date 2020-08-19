const { hash } = window.location;
const encptMsg = atob(hash.replace("#", ""));

if (encptMsg) {
    document.querySelector("#msg-form").classList.add("hide");
    document.querySelector("#msg-show").classList.remove("hide");

    document.querySelector("#msg-show h1").innerHTML = encptMsg;
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector("#msg-form").classList.add("hide");
    document.querySelector("#link-form").classList.remove("hide");
    const input: HTMLInputElement = document.querySelector("#message-input");
    const encrypted = btoa(input.value);

    const URLinput: HTMLInputElement = document.querySelector("#link-input");

    URLinput.value = `${window.location}#${encrypted}`;
    URLinput.select();
});

// ASCII char codes
// Base64 char Codes
