import { MainView } from './view/View.mjs';

async function initContent() {
    let element = document.getElementById("content");
    MainView.html(element);
}

// Call Init
initContent();
