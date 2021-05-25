import { loadJSON } from '../utils/jsonLoader.mjs';

class View {

    static html (element) {
        element.innerHTML = "";
    }
}

class MainView extends View {

    static html (element) {
        loadJSON("./static/js/json/book.json", (data) => {
            element.innerHTML = `<h2><a class="book" href="${data.link}">${data.title}</a> (${data.author})</h2>`
        }, (error) => {console.log(error)})
    }
}

export { MainView };