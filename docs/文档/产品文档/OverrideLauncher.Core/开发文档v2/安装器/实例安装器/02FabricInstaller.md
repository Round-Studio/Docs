# Fabric 安装器

## 安装 Fabric

```c
using OverrideLauncher.Core.Classes.Install.Installer;

// 获取 Fabric 版本
var fabricManifests = await InstallHelper.GetVersionFabricManifest("1.20.1");
var fabricInstaller = new InstallerFabric(fabricManifests.First());

fabricInstaller.DownloadStatusChanged += (sender, entry) =>
{
    Console.WriteLine($"下载进度: {entry.Progress:F}%");
};

await fabricInstaller.Install(new ClientRootInfo()
{
    ClientName = "1.20.1-fabric",
    ClientRootPath = installPath
});
```  

## 参数解译

`ClientName` 客户端名称，用于区分不同的客户端，例如 `1.20.1-fabric`  
`ClientRootPath` 客户端根目录，用于存储客户端的文件，例如 `C:\Users\Administrator\.minecraft`
