// это файл со скриптами, который подтягивается в index.html 

// так как я решил по нажатию кнопки открывать отдельное окно,
// нужно вешать создание окна на кнопки через ивент листенер инициализированный тут
// потому что кнопки внутри html-файлов изначально не имеют сюда доступа


const remote = require('@electron/remote')
const { BrowserWindow } = require('@electron/remote')
const path = require('path')

const thisWindow = remote.getCurrentWindow() //получаем обьект текущего активного окна

function createInfoWindow () {
  const infoWindow = new BrowserWindow({
    width: 400,
    height: 600,
    parent: thisWindow, //присваиваем новому окну родителя, чтобы оно всегда отображалось поверх него
    modal: true, //делаем дочернее окно модальным -> нельзя взять родительское окно в фокус
    icon: path.join(__dirname, 'static/icons/flaticon.png'),
    autoHideMenuBar: true, //прячем менюшку браузера
    resizable: false, //убираем возможность изменения размера окна
    minimizable: false, //убираем кнопку "свернуть" в меню окна (вроде как не работает на Linux)
    maximizable: false //убираем кнопку "во весь экран" в меню окна (вроде как не работает на Linux)
  })
  infoWindow.loadFile('static/pages/info.html')
  // infoWindow.webContents.openDevTools()  // при создании окна открывает панельку разработчика(оставил закомменченым)
}

function createFileManagerWindow () {
  const fileManagerWindow = new BrowserWindow({
    width: 650,
    height: 600,
    parent: thisWindow,
    modal: true,
    icon: path.join(__dirname, 'static/icons/flaticon.png'),
    autoHideMenuBar: true,
    resizable: false,
    minimizable: false,
    maximizable: false
  })
  fileManagerWindow.loadFile('static/pages/filemanager.html')
  // fileManagerWindow.webContents.openDevTools()
}

function createScreenWindow () {
  const screenWindow = new BrowserWindow({
    width: 650,
    height: 600,
    parent: thisWindow,
    modal: true,
    icon: path.join(__dirname, 'static/icons/flaticon.png'),
    autoHideMenuBar: true,
    resizable: false,
    minimizable: false,
    maximizable: false
  })
  screenWindow.loadFile('static/pages/screen.html')
  // screenWindow.webContents.openDevTools()
}

function createFileEditorWindow () {
  const fileEditorWindow = new BrowserWindow({
    width: 650,
    height: 600,
    parent: thisWindow,
    modal: true,
    icon: path.join(__dirname, 'static/icons/flaticon.png'),
    autoHideMenuBar: true,
    resizable: false,
    minimizable: false,
    maximizable: false
  })
  fileEditorWindow.loadFile('static/pages/fileeditor.html')
  // fileEditorWindow.webContents.openDevTools()
}

function createFindWindow () {
  const findWindow = new BrowserWindow({
    width: 650,
    height: 600,
    parent: thisWindow,
    modal: true,
    icon: path.join(__dirname, 'static/icons/flaticon.png'),
    autoHideMenuBar: true,
    resizable: false,
    minimizable: false,
    maximizable: false
  })
  findWindow.loadFile('static/pages/find.html')
  // findWindow.webContents.openDevTools()
}

function createProcessWindow () {
  const processWindow = new BrowserWindow({
    width: 650,
    height: 600,
    parent: thisWindow,
    modal: true,
    icon: path.join(__dirname, 'static/icons/flaticon.png'),
    autoHideMenuBar: true,
    resizable: false,
    minimizable: false,
    maximizable: false
  })
  processWindow.loadFile('static/pages/process.html')
  // findWindow.webContents.openDevTools()
}

// здесь мы находим кнопки из scr/pages/index.html по параметру Id и вешаем на них обработчик нажатия
// по клику кнопка запускает функцию создания окна

document.getElementById("button-info").addEventListener("click", function (e) {
  createInfoWindow()
})

document.getElementById("button-manager").addEventListener("click", function (e) {
  createFileManagerWindow()
})

document.getElementById("button-screen").addEventListener("click", function (e) {
  createScreenWindow()
})

document.getElementById("button-edit").addEventListener("click", function (e) {
  createFileEditorWindow()
})

document.getElementById("button-find").addEventListener("click", function (e) {
  createFindWindow()
})

document.getElementById("button-process").addEventListener("click", function (e) {
  createProcessWindow()
})

document.getElementById("button-close").addEventListener("click", function (e) {
  thisWindow.close()
})
