# LiteLoader 安装器

## 安装 LiteLoader

```c
using OverrideLauncher.Core.Classes.Install.Installer;

// 获取 liteLoader 版本
var liteLoaderVersions = await InstallHelper.TryGetInstallLiteLoaderMeta("1.20.1");
var liteLoaderInstaller = new InstallerliteLoader(liteLoaderVersions.First());

liteLoaderInstaller.DownloadStatusChanged += (sender, entry) =>
{
    Console.WriteLine($"下载进度: {entry.Progress:F}%");
};

await liteLoaderInstaller.Install(new ClientRootInfo()
{
    ClientName = "1.20.1-liteLoader",
    ClientRootPath = installPath
});
```

## 参数解译

`ClientName` 客户端名称，用于区分不同的客户端，例如 `1.20.1-liteLoader`  
`ClientRootPath` 客户端根目录，用于存储客户端的文件，例如 `C:\Users\Administrator\.minecraft`
