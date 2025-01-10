import { mount } from "svelte";
import App from "./App.svelte";
import "../firebase.js";

const app = mount(App, {
  target: document.getElementById("app"),
});

export default app;
