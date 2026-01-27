---
nav_order: 6
---

# 测试与使用 Testing and Using

将录制好的声库组装，并让它在软件中正常发声，是一件振奋人心的事情。现在我们有录音和标注文件了，再需要一点点操作便能得到一个正常使用的声库了。  
It's exciting to assemble a recorded voicebank and let it sound properly in the software. Now, we have the recordings and annotation files, it takes a little more manipulation to get a working voicebank.  

## 在UTAU和OpenUTAU中使用

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

请使用高于OpenUTAU 0.1.566Beta的版本，以使`ZH CVVC`音素器支持`presamp.ini`文件中的`[REPLACE]`项。若您偏好使用之前的版本，您可以手动替换[`OpenUtau.Plugin.Builtin.dll`](https://github.com/Slidingwall/mandarin-reclist/blob/main/UTAU/OpenUtau.Plugin.Builtin.dll)。其更改的源代码位于文件夹中的[`ZH_CVVC_with_replace.cs`](https://github.com/Slidingwall/mandarin-reclist/blob/main/UTAU/ZH_CVVC_with_replace.cs)。  
Please use OpenUTAU higher than version 0.1.566Beta, to enable the `ZH CVVC` phonemizer support the `[REPLACE]` in the `presamp.ini` file. If you prefer to use former version, you can manually replace [`OpenUtau.Plugin.Builtin.dll`](https://github.com/Slidingwall/mandarin-reclist/blob/main/UTAU/OpenUtau.Plugin.Builtin.dll). The modified source code is located in [`ZH_CVVC_with_replace.cs`](https://github.com/Slidingwall/mandarin-reclist/blob/main/UTAU/ZH_CVVC_with_replace.cs) in the folder.  

## 将声库移植到Deepvocal和Vocalsharp

对于DeepVocal，您需要`*.dvtb`和`voice.dvcfg`。对于VocalSharp，您需要`*.lsd`和`*.vsdxmf`。它们的作用类似于UTAU中的`presamp.ini`和`oto.ini`。  
For DeepVocal, you need `*.dvtb` and `voice.dvcfg`. For VocalSharp, you need `*.lsd` and `*.vsdxmf`. They function similarly to `presamp.ini` and `oto.ini` in UTAU.  

[生成器](/mandarin-reclist/generator)能够支持直接生成`voice.dvcfg`和`*.vsdxmf`的模板。oto.ini的转换工具正在计划开发中。  
[Generator](/mandarin-reclist/generator) can directly generate `voice.dvcfg` and `*.vsdxmf` templates. A conversion tool for `oto.ini` is planned for development.  

对于DeepVocal的模板，CV部分需要进行手动复制。一键复制工具正在计划开发中。  
For DeepVocal templates, the CV section needs to be copied manually. A one-click copy tool is planned for development.  

对于VocalSharp的模板，其末尾有软链接自动复制可复用的标记。生成器目前暂时没有加入软链接的功能，您可以手动复制这些内容。  
For VocalSharp templates, there are symbolic links at the end that automatically copy reusable markers. The generator has not incorporated the symbolic link function for the time being, so you can copy these contents manually.  
