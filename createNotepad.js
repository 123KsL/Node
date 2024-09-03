// const { exec } = require('child_process');
// const path = require('path');

// const date = new Date().toISOString().split('T')[0];
// const filePath = path.join(require('os').homedir(), 'Desktop', `${date}.txt`);

// // 检查文件是否存在并创建
// exec(`powershell -Command "if (-Not (Test-Path '${filePath}')) { New-Item -Path '${filePath}' -ItemType File }"`, (err, stdout, stderr) => {
//     if (err) {
//         console.error(`Error creating file: ${err}`);
//         return;
//     }

//     // 打开文件
//     exec(`powershell -Command "Start-Process notepad '${filePath}'"`, (err, stdout, stderr) => {
//         if (err) {
//             console.error(`Error opening file: ${err}`);
//         }
//     });
// });

const { exec } = require('child_process');
const path = require('path');
const os = require('os');

const date = new Date().toISOString().split('T')[0];
const desktopDir = path.join(os.homedir(), 'Desktop');
const folderPath = path.join(desktopDir, 'Notepads');
const filePath = path.join(folderPath, `${date}.txt`);

// 创建 Notepads 文件夹（如果不存在）
exec(`powershell -Command "if (-Not (Test-Path '${folderPath}')) { New-Item -Path '${folderPath}' -ItemType Directory }"`, (err) => {
    if (err) {
        console.error(`Error creating folder: ${err}`);
        return;
    }

    // 创建文件（如果不存在）
    exec(`powershell -Command "if (-Not (Test-Path '${filePath}')) { New-Item -Path '${filePath}' -ItemType File }"`, (err) => {
        if (err) {
            console.error(`Error creating file: ${err}`);
            return;
        }

        // 打开文件
        exec(`powershell -Command "Start-Process notepad '${filePath}'"`, (err) => {
            if (err) {
                console.error(`Error opening file: ${err}`);
            }
        });
    });
});

