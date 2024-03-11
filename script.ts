// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    const span: HTMLElement = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const closeButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("close");
// const i;
for (i = 0; i < closeButtons.length; i++) {
    let closeButton = closeButtons[i];
    closeButton.addEventListener("click", function(e) {
        const li = closeButton.parentElement;

        if (li) {
            li.style.display = "none";
        }
    });
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function (ev) {
        let target: HTMLElement = <HTMLElement>ev.target;
        if (target && target.tagName === 'LI') {
            target.classList.toggle('checked');
        }
    }, false);
}

// Create a new list item when clicking on the "Add" button
function newElement(): void {
    const li: HTMLLIElement= document.createElement("li");
    const input: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
    if (!input) return;
    const inputValue = input.value;
    const textNode: Text = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        const ul: HTMLElement | null = document.getElementById("myUL");
        if (ul) {
            ul.appendChild(li);
        }
    }
    input.value = "";

    const span: HTMLElement = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.addEventListener("click", function(e) {
        const li = span.parentElement;

        if (li) {
            li.style.display = "none";
        }
    })
}

const addBtn: HTMLElement | null = document.querySelector("#addBtn")
addBtn?.addEventListener("click", function() {
    newElement();
})
