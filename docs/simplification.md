---
nav_order: 2
---

# 简化 Simplification

在中文里，每个音节均由 `首音`和 `韵`组成。`首音`分为 `声母`和 `韵头(介音)`，`韵`分为 `韵腹(核音)`和 `韵尾(尾音)`。[*参考来源*](http://jpk.pku.edu.cn/course/llyyx/script/142.pdf)  
In Mandarin, each syllable is composed of `Onset` and `Rhyme`. The `Onset` is divided into `Initial` and `Medial`, while `Rhyme` is divided into `Nucleus` and `Ending`. [*Reference source*](http://jpk.pku.edu.cn/course/llyyx/script/142.pdf)  

CVVC和VCV语音库的特性是，在元音延长部分的末尾，即韵腹韵尾的交界处进行一次拼接。  
The characteristic of both CVVC and VCV voice libraries is that splicing occurs once at the end of the vowel extension part, i.e., at the junction of the syllable's Nucleus and Ending.  

- 对于CVVC语音库而言，可以将音节分成**CV(辅音-元音)**、**前一个音的结尾(V)**和**后一个音的开头(C)**三部分，分别简化。  
  For the CVVC voice library, a syllable can be divided into three parts — **CV (consonant-vowel)**, **the ending of the previous sound (V)**, and **the beginning of the next sound (C)** — each of which is simplified separately.  
- 对于VCV语音库而言，可以将音节分成**前一个音的结尾**和**CV(辅音-元音)**两部分简化，简化原理与CVVC语音库相同。  
  For the VCV voice library, a syllable can be divided into two parts — **the ending of the previous sound (V)** and **CV (consonant-vowel)** — for simplification, following the same simplification principle as the CVVC voice library.  

## CV部分 The CV Part

- 由于CV部分实际不包含韵尾，去掉韵尾后发音相同的音节可合并，如`a`, `ai`, `an`合并为`a`，减少冗余。  
  Since the CV part does not actually contain Endings, syllables that have the same pronunciation after removing the Ending can be merged. For example, `a`, `ai`, and `an` are merged into `a`, which reduces redundancy.  

{: .important-title }
> 元音组合 Vowel Combanations:
>
> <table style="text-align: center"><tr><td><b>元音<br/>Vowels</b></td><td><b>简化后<br/>Simplified</b></td><td><b>元音<br/>Vowels</b></td><td><b>简化后<br/>Simplified</b></td></tr><tr><td>a,ai,an</td><td>a</td><td>ua,uai,uan</td><td>ua</td></tr><tr><td>ao,ang</td><td>A</td><td>iao,iang</td><td>iA</td></tr><tr><td>ou,en,eng</td><td>@</td><td>i,in,ing</td><td>i</td></tr><tr><td>uo,o</td><td>uo</td><td>ü,ün</td><td>ü</td></tr><tr><td>ie,ian</td><td>ie*</td><td>ue(üe),uan(üan)</td><td>ue*</td></tr><tr><td colspan="4">e,i0,ir,u,ei,ui,iu,er,ia,un,uang,ong,iong</td></tr></table>

- 简化并与辅音结合后，Full表的CV总数为274。  
  After simplification and combination with consonants, the total number of CVs in the Full list is 274.
- *: Lite、Nano表将`ian`，`uan`并入`ie`，`ue`，CV总数为259个。  
  *: For the Lite and Nano lists, `ian` and `uan` are merged into `ie` and `ue` respectively, resulting in a total of 259 CVs.  
- VCV表与Lite、Nano所采用的CV总数一致，VCV_Nano表在此基础上，将69个低频CV以CVVC形式收录，其余190个CV以VCV形式收录。  
  The VCV list shares the same total number of CVs as the Lite and Nano versions. Building on this, the VCV_Nano list includes 69 low-frequency CVs in the CVVC format, while the remaining 190 CVs are included in the VCV format.  

## VC部分，前一个音的结尾(V) The VC Part, Ending of the Previous Sound(V)

{: .important-title }
> 结尾组合 Ending Combanations:
> 
> <table style="text-align: center"><tr><td><b>结尾<br>Endings</b></td><td><b>简化后<br>Simplified</b></td><td><b>结尾<br>Endings</b></td><td><b>简化后<br>Simplified</b></td></tr><tr><td>ai,uai</td><td rowspan=2>:i</td><td>ao,iao</td><td rowspan=2>:u</td></tr><tr><td>ei,ui(uei)</td><td>ou,iu(iou)</td></tr><tr><td>an,uan</td><td rowspan=5>n</td><td>ang,iang,uang</td><td rowspan=4>ng</td></tr><tr><td>ian,uan(üan)</td><td>eng,ueng</td></tr><tr><td>en,un(uen)</td><td>ing</td></tr><tr><td>in</td><td>ong</td></tr><tr><td>ün</td><td>ie,ue(üe)</td><td>e0</td></tr><tr><td>a,ia,ua</td><td>a</td><td>o,uo</td><td>o</td></tr><tr><td colspan=4>e,i,i0,ir,u,ü,er</td></tr></table>

- Full表：与CVVChinse的23个韵尾一致，不进行简化。  
  Full list: Aligns with the 23 codas of CVVChinse and no simplification is applied. 
- Lite表：合并双元音及鼻音的韵尾为 `:i` ，`:u`， `n`，`ng`，韵尾总数减少至14个。VCV表与Lite表的韵尾一致。  
  Lite list: Merge the Endings of diphthongs and nasals into `:i`, `:u`, `n`, and `ng`; the total number of Endings is reduced to 14. VCV list has the same Endings as Lite list.  
- Nano表：将`:u`与`u`合并，总数减少至13个。VCV_Nano表与Nano表的韵尾一致。  
  Nano list: Merge `:u` with `u`; the total number of codas is reduced to 13. VCV_Nano list has the same Endings as Nano list.  

## VC部分，后一个音的开头(C) The VC Part, Beginning of the Next Sound (C)

- 由于爆破音的VC中实际不包含辅音，因此以送气爆破音替代不送气爆破音，且不区分介母，合并开头相同的零声母元音。  
  Since the VCs of plosive sounds does not actually contain consonants, aspirated plosives are used as a substitute for unaspirated plosives. Additionally, Medials are not distinguished, and zero-initial vowels with the same initial segment are merged.

- 简化后，辅音总数为18个(`c` `ch` `f` `h` `k` `l` `m` `n` `p` `q` `r` `s` `sh` `t` `v` `w` `x` `y`)，零声母元音总数为6个(`a` `A` `e` `ei` `@` `er`)，共计24个。  
  After simplification, the total number of consonants is 18 (`c` `ch` `f` `h` `k` `l` `m` `n` `p` `q` `r` `s` `sh` `t` `v` `w` `x` `y`), and the total number of zero-initial vowels is 6 (`a` `A` `e` `ei` `@` `er`), totaling 24.

