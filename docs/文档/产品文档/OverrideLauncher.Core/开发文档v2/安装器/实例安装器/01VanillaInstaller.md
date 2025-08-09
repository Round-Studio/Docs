# Vanilla 安装器

## 设置镜像源

```c
// 设置下载镜像源（可选）
DictionaryDownloadHost.SwitchMirror("official"); // 或 "bmclapi"
```

## 开始安装

```c
// 安装原版 Minecraft
string version = "1.20.1";
string installPath = ".minecraft";

var manifest = await InstallHelper.TryingFindVersion(version);
var installer = new InstallClient(manifest);

// 监听下载进度
installer.DownloadStatusChanged += (sender, entry) =>
{
    Console.WriteLine($"[{entry.FileType}] {entry.Status} - 进度: {entry.Progress:F}%");
};

// 执行安装
await installer.Install(new ClientRootInfo()
{
    ClientName = version,
    ClientRootPath = installPath
});
```

## 参数解译

`ClientName` 客户端名称，用于区分不同的客户端，例如 `1.20.1-vanilla`  
`ClientRootPath` 客户端根目录，用于存储客户端的文件，例如 `C:\Users\Administrator\.minecraft`