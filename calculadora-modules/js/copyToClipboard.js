export default function (ev) {
    const button = ev.currentTarget
    if (button.innerText === "Copy") {
        button.innerText = "Copied!" 
        button.classList.add("success")
        navigator.clipboard.writeText(document.querySelector('#result').value)
    } else {
        button.innerText = "Copy"
        button.classList.remove("success")
    }
}

// com o export default, não há necessidade de nomear a função
// o nome será dinâmicamente atribuído na hora da importação 