const { app, BrowserWindow, Menu } = require('electron')
var win;

function createWindow() {
  //隐藏菜单 
  Menu.setApplicationMenu(null);

  // 创建浏览器窗口
  win = new BrowserWindow({
    minHeight: 600,
    minWidth: 480,
    frame: false,
    resizable: true,
   //transparent: true,
    webPreferences: {
      nodeIntegration: true,
      webSecurity:false,
    }
  })

  // 并且为你的应用加载index.html
  win.loadFile('index.html')

  // 打开开发者工具
  win.webContents.openDevTools()
}

// Electron会在初始化完成并且准备好创建浏览器窗口时调用这个方法
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow)

//当所有窗口都被关闭后退出
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


let ipcMain = require('electron').ipcMain;
//接收最小化命令
ipcMain.on('window-min', function () {
  win.minimize();
})
//接收最大化命令
ipcMain.on('window-max', function () {
  console.log(win.isMaximized());
  if (win.isMaximized()) {
    win.unmaximize();
  }else{
    win.maximize();
  }
})
//接收关闭命令
ipcMain.on('window-close', function () {
  win.close();
})