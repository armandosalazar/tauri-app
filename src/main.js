const { invoke } = window.__TAURI__.tauri;

let greetInputEl;
let greetMsgEl;
let sumMsg;

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  sumMsg = document.getElementById("sum");
});

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  // greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
  greetMsgEl.textContent = await invoke("str_to_hex", {
    string: greetInputEl.value,
  });
}

async function sum(a, b) {
  sumMsg.textContent = await invoke("sum", { a, b });
}

window.greet = greet;
window.sum = sum;
