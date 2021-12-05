const remote = require('@electron/remote')

const thisWindow = remote.getCurrentWindow()

document.getElementById("button-close").addEventListener("click", function (e) {
  thisWindow.close()
})