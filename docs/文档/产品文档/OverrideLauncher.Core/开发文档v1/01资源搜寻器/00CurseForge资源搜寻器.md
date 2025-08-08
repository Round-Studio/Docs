# CurseForge 资源搜寻器

:::warning 先决条件
在使用此功能前，请确保您申请了 CurseForge Api Key
:::  
:::success 提示
如果您发现无法请求，请检查您的 CurseForge Api Key 是否有效，如果以上均没问题，也许需要 VPN？
:::  

好的相信大家非常想在启动器里面加上资源搜索功能，本章节就教会您如何使用本启动核心来搜索资源  

```C
CurseForgeSearch.Search(new CurseForgeSearchInfo(){
    ApiKey = "{APIKEY}",
    SearchName = "资源的名称",
    GameVersion = "游戏版本",
    PageSize = 50, // 页面大小
    Index = 0, // 页面
    ModLoader = 0, // 模组加载器
    ClassID = 0, // 资源类型
});
```  

下面是一些类型变量：  
```C
public static class CurseForgeSearchClassID
{
    public const int Mod = 6;
    public const int Modpacks = 4471;
    public const int ResourcePacks = 12;
    public const int LightAndShadowPacks = 6552;
}

public static class ModLoaderTypeID
{
    public const int Any = 0;
    public const int Forge = 1;
    public const int Cauldron = 2;
    public const int LiteLoader = 3;
    public const int Fabric = 4;
    public const int Quilt = 5;
    public const int NeoForge = 6;
}
```

本章节涉及到的相关代码：[CurseForgeSearch.cs](https://github.com/Round-Studio/OverrideLauncher.Core/blob/master/OverrideLauncher.Core/Modules/Classes/Download/Assets/CurseForge/CurseForgeSearch.cs)