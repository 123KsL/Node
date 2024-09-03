const { exec } = require('child_process');
const path = require('path');

const date = new Date().toISOString().split('T')[0];
const filePath = path.join(require('os').homedir(), 'Desktop', `${date}.txt`);

// 检查文件是否存在并创建
exec(`powershell -Command "if (-Not (Test-Path '${filePath}')) { New-Item -Path '${filePath}' -ItemType File }"`, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error creating file: ${err}`);
        return;
    }

    // 打开文件
    exec(`powershell -Command "Start-Process notepad '${filePath}'"`, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error opening file: ${err}`);
        }
    });
});
