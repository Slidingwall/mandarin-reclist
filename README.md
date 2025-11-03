# mandarin-reclist

适用于中文拼接语音库(UTAU, DeepVocal, VocalSharp)的极简录音表.  
A minimal reclist for Mandarin stitching voickbank(UTAU, DeelVocal, Vocalsharp).

## Reclist Comparison

| 版本<br/>Version | 录音条数<br/>Recording Lines | 元音设定条数<br/>OTO lines | 每行音节<br/>Syllables in each line |
| :--------------------: | :--------------------------------: | :------------------------------: | :---------------------------------------: |
| **CVVC_Full** | 88 | 826 | 8 |
| **CVVC_Lite** | 62 | 595 | 8 |
| **CVVC_Nano** | 60 | 571 | 8 |
| **CVVC_Extra[^1]** | 23 | 110 | 4 |
| **VCV[^2]** | 609 | 3899 | 8 |
| **VCV_Nano[^3]** | 420 | 2924 | 8 |

[^1]: `CVVC_Extra`主要录制开头或语尾音素。  
      `CVVC_Extra` is mainly for beginning or ending notes.  

[^2]: `VCV`与`CVVC_Lite`的简化规则相同。  
      The simplification rules for `VCV` and `CVVC_Lite` are same.  

[^3]: `VCV_Nano`与`CVVC_Nano`的简化规则相同。此外，对于69个低频CV组合，以CVVC形式收录。  
      The simplification rules for `VCV_Nano` and `CVVC_Nano` are same. Additionally, the 69 low-frequency CV combinations are included in the CVVC format.  

## oto.ini & presamp.ini

模板中CV/VC/Extra部分分开设定. 设定完成后请合并回同一文件中.  
CV/VC/Extra parts are seperated in templates. Merge them while OTO are done.

## DeepVocal & Vocalsharp

仍在开发中.  
Still in development.
