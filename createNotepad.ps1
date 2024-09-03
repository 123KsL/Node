$date = Get-Date -Format "yyyy-MM-dd"
$filePath = [System.IO.Path]::Combine([System.Environment]::GetFolderPath("Desktop"), "$date.txt")

if (-Not (Test-Path $filePath)) {
    # 如果文件不存在，则创建文件
    New-Item -Path $filePath -ItemType File
}

# 使用记事本打开文件
Start-Process notepad $filePath
