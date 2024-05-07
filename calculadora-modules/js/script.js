import calculate from "./calculate.js" // <- lembrar de adicionar o .js ao final
import copyToCilpboard from "./copyToClipboard.js" 
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"


document.querySelectorAll(".charKey").forEach(function (charKeyBtn){
    charKeyBtn.addEventListener("click", handleButtonPress)
})


document.getElementById("clear").addEventListener("click", handleClearButton)
input.addEventListener("keydown", handleTyping)
document.getElementById("equal").addEventListener("click", calculate)
document.getElementById("copyToCilpboard").addEventListener("click", copyToCilpboard)
document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher )