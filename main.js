const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: 'src/assets/key.png'
    })

    win.loadFile('./src/index.html')

    const templateMenu = []
    const menu = new Menu.buildFromTemplate(templateMenu)
    Menu.setApplicationMenu(menu)

}

app.whenReady().then(()=>{
    createWindow()
})