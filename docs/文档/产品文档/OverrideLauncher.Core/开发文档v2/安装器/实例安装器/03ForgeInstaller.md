# Forge 安装器

## 安装 Forge

```c
using OverrideLauncher.Core.Classes.Install.Installer;

// 获取 Forge 版本
var forgeVersions = await InstallHelper.TryGetInstallForgeMeta("1.20.1");
var forgeInstaller = new InstallerForge(forgeVersions.First());

forgeInstaller.DownloadStatusChanged += (sender, entry) =>
{
    Console.WriteLine($"下载进度: {entry.Progress:F}%");
};

await forgeInstaller.Install(new ClientRootInfo()
{
    ClientName = "1.20.1-forge",
    ClientRootPath = installPath
});
```

## 参数解译

`ClientName` 客户端名称，用于区分不同的客户端，例如 `1.20.1-forge`  
`ClientRootPath` 客户端根目录，用于存储客户端的文件，例如 `C:\Users\Administrator\.minecraft`
