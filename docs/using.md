---
nav_order: 6
---

# 测试与使用 Testing and Using

将录制好的声库组装，并让它在软件中正常发声，是一件振奋人心的事情。现在我们有录音和标注文件了，再需要一点点操作便能得到一个正常使用的声库了。  
It's exciting to assemble a recorded voicebank and let it sound properly in the software. Now, we have the recordings and annotation files, it takes a little more manipulation to get a working voicebank.  

## 为UTAU和OpenUTAU组装声库

这两个软件需要`presamp.ini` `character.txt`和`prefix.map`。  
Both of these software require `presamp.ini` `character.txt` and `prefix.map`.  
- `presamp.ini`用于向软件提供元音辅音信息以便拼接。   
  `presamp.ini` is used to provide the software with vowel consonant information for splicing.  
- `character.txt`用于向软件提供声库名称和图像等信息。  
  `character.txt` is used to provide the software with information such as library names and images.  
- 而`prefix.map`向软件提供不同的音高采用何种采样。  
  And `prefix.map` provides the software with which samples are used for different pitches.  

您可以参考已有的其他声库设置后两者。  
You can refer to the other sound banks you already have to set up the latter two.  

在项目的`UTAU`文件夹中，提供了与录音表相匹配的`presamp.ini`。  
In the `UTAU` folder of the project, a `presamp.ini` file that matches the recording sheet is provided.  
因为OpenUTAU中的`ZH CVVC`音素器不支持`presamp.ini`文件中的`[REPLACE]`项，所以您需要通过复制来补充被合并的CV项。  
Since the `ZH CVVC` phonemeizer in OpenUTAU does not support the `[REPLACE]` section in the `presamp.ini` file, you need to supplement the merged CV entries by copying them.  

我们已经提交了使`ZH CVVC`音素器支持`[REPLACE]`项的[合并请求](https://github.com/stakira/OpenUtau/pull/1796)。在该请求被批准前，您可以手动替换[`OpenUtau.Plugin.Builtin.dll`](https://github.com/Slidingwall/mandarin-reclist/blob/main/UTAU/OpenUtau.Plugin.Builtin.dll)。其更改的源代码位于文件夹中的[`ZH_CVVC_with_replace.cs`](https://github.com/Slidingwall/mandarin-reclist/blob/main/UTAU/ZH_CVVC_with_replace.cs)。  
We have submitted a [pull request](https://github.com/stakira/OpenUtau/pull/1796) to enable the `ZH CVVC` phonemizer to support the `[REPLACE]` item. Before this request is approved, you can manually replace [`OpenUtau.Plugin.Builtin.dll`](https://github.com/Slidingwall/mandarin-reclist/blob/main/UTAU/OpenUtau.Plugin.Builtin.dll). The modified source code is located in [`ZH_CVVC_with_replace.cs`](https://github.com/Slidingwall/mandarin-reclist/blob/main/UTAU/ZH_CVVC_with_replace.cs) in the folder.  

{: .highlight-title }
> 对于复制 / For copying :
>
> 您可以使用[KiraOtoToolbox](https://github.com/shine5402/KiraOtoToolbox)，选择`根据别名复制/替换`，选择`oto_CV.ini`并点击`加载`，点击右侧蓝色图标并导入`Copy_****.json`并进行复制。复制完成后的其他步骤同上。  
> You can use [KiraOtoToolbox](https://github.com/shine5402/KiraOtoToolbox), Select `Copy/Replace by Alias` choose `oto_CV.ini` and click `Load` Then, click the blue icon on the right to import the `Copy_****.json` file and perform the copy. The subsequent steps after copying are the same as above.  
> ![Toolbox](/assets/KO1.webp) ![Load](/assets/KO2.webp)   

## 在UTAU和OpenUTAU中使用

## 将声库移植到Deepvocal和Vocalsharp