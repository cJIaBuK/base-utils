// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const remoteMain = require('@electron/remote/main')
remoteMain.initialize()

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({ //создаем новое окно и задаем ему параметры
    width: 500,
    height: 650,
    webPreferences: { //доп параметры поведения логики в браузерном окне
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: path.join(__dirname, 'static/icons/flaticon.png'), //иконка приложения
    autoHideMenuBar: true, //прячем менюшку браузера
    resizable: false, //убираем возможность изменения размера окна
    minimizable: false, //убираем кнопку "свернуть" в меню окна (вроде как не работает на Linux)
    maximizable: false //убираем кнопку "во весь экран" в меню окна (вроде как не работает на Linux)
  })
  
  mainWindow.loadFile('static/pages/index.html')  //файл, который будет загружаться в главном окне

  remoteMain.enable(mainWindow.webContents)

  // mainWindow.webContents.openDevTools()

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
