const { invoke } = window.__TAURI__.tauri;

let label;

async function sayHello() {
  label.textContent = await invoke("say_hello");
}

window.sayHello = sayHello;

// Event to DOM Content Loaded
window.addEventListener("DOMContentLoaded", () => {
  label = document.querySelector("#label");
});
