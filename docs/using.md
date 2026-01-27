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

请使用高于OpenUTAU 0.1.566Beta的版本，以使`ZH CVVC`音素器支持`presamp.ini`文件中的`[REPLACE]`项。若您想使用之前的版本，您可以手动替换[`OpenUtau.Plugin.Builtin.dll`](https://github.com/Slidingwall/mandarin-reclist/blob/main/UTAU/OpenUtau.Plugin.Builtin.dll)。其更改的源代码位于文件夹中的[`ZH_CVVC_with_replace.cs`](https://github.com/Slidingwall/mandarin-reclist/blob/main/UTAU/ZH_CVVC_with_replace.cs)。  
Please use OpenUTAU higher than version 0.1.566Beta, to enable the `ZH CVVC` phonemizer support the `[REPLACE]` in the `presamp.ini` file. If you prefer to use former version, you can manually replace [`OpenUtau.Plugin.Builtin.dll`](https://github.com/Slidingwall/mandarin-reclist/blob/main/UTAU/OpenUtau.Plugin.Builtin.dll). The modified source code is located in [`ZH_CVVC_with_replace.cs`](https://github.com/Slidingwall/mandarin-reclist/blob/main/UTAU/ZH_CVVC_with_replace.cs) in the folder.  

## 在UTAU和OpenUTAU中使用

WIP

## 将声库移植到Deepvocal和Vocalsharp

对于DeepVocal，您需要`*.dvtb`和`voice.dvcfg`。对于VocalSharp，您需要`*.lsd`和`*.vsdxmf`。

{: .note}
> 对于DeepVocal，由于其别名规则，音头的`A` `@`被重命名为`ao` `ou`，作为半元音的`v`(ü)被重命名为`V`，韵尾`:i` `:u` `n`被重命名为`-i` `-u` `-n`。  
> For DeepVocal, due to its alias rules, the initials `A` and `@` are renamed to `ao` and `ou`; the semi-vowel `v` (ü) is renamed to `V`; and the Endings `:i`, `:u`, and `n` are renamed to `-i`, `-u`, and `-n` respectively.
>
> 对于VocalSharp，由于其别名规则，音头的`A` `@`被重命名为`ao` `ou`，作为半元音的`v`(ü)被重命名为`V`，韵尾`:i` `:u` `n` `ng`被重命名为`ei` `ou` `en` `eng`。作为介母的`i` `u` `v`(ü)从与元音结合改为与辅音结合，因此辅音数量有所增加。  
> For VocalSharp, due to its alias rules, the initials `A` and `@` are renamed to `ao` and `ou`; the semi-vowel `v` (ü) is renamed to `V`; and the Endings `:i`, `:u`, `n`, and `ng` are renamed to `ei`, `ou`, `en`, and `eng` respectively. The medials `i`, `u` and `v` (ü) are shifted from combining with vowels to consonants, resulting in an increase in the number of consonants.