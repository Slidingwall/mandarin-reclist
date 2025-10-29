---
nav_order: 2
---

# 简化 Simplification

在中文里，每个音节均由 `首音`和 `韵`组成。`首音`分为 `声母`和 `韵头(介音)`，`韵`分为 `韵腹(核音)`和 `韵尾(尾音)`。[*参考来源*](http://jpk.pku.edu.cn/course/llyyx/script/142.pdf)  
In Mandarin, each syllable is composed of `Onset` and `Rhyme`. The `Onset` is divided into `Initial` and `Medial`, while `Rhyme` is divided into `Nucleus` and `Ending`. [*Reference source*](http://jpk.pku.edu.cn/course/llyyx/script/142.pdf)  

CVVC和VCV语音库的特性是，在元音延长部分的末尾，即韵腹韵尾的交界处进行一次拼接。  
The characteristic of both CVVC and VCV voice libraries is that splicing occurs once at the end of the vowel extension part, i.e., at the junction of the syllable's Nucleus and Ending.  

- 对于CVVC语音库而言，可以将音节分成**CV(辅音-元音)**、**前一个音的结尾**、**后一个音的开头**三部分，分别简化。  
  For the CVVC voice library, a syllable can be divided into three parts — **CV (consonant-vowel)**, **the ending of the previous sound**, and **the beginning of the next sound** — each of which is simplified separately.  

- 对于VCV语音库而言，可以将音节分成**CV(辅音-元音)**、**前一个音的结尾**两部分简化，简化原理与CVVC语音库相同。  
  For the VCV voice library, a syllable can be divided into two parts — **CV (consonant-vowel)** and **the ending of the previous sound** — for simplification, following the same simplification principle as the CVVC voice library.  

## CV部分 The CV Part

- 由于CV部分实际不包含韵尾，去掉韵尾后发音相同的音节可合并，如`a`, `ai`, `an`合并为`a`，减少冗余。  
  Since the CV part does not actually contain Endings, syllables that have the same pronunciation after removing the Ending can be merged. For example, `a`, `ai`, and `an` are merged into `a`, which reduces redundancy.  

{: .important-title }
> 元音组合 Vowel Combanations:
> 
> {: .opaque }
> <div markdown="block">
> {: .highlight }
> > - a, ia, ua, A, iA, uA;
> > - @, i@, u@, ong, iong;
> > - ei, ui, ie, ue, ian, uan;
> > - e, er, i, i0, ir, u, o/uo, ü
> </div>
> 其中，`a`, `ai`, `an`合并为`a`；`ao`, `ang`合并为`A`；`ou`, `en`, `eng`合并为`@`；`o`并入`uo`。  
> Among them, `a`, `ai`, and `an` are merged into `a`; `ao` and `ang` are merged into `A`; `ou`, `en`, and `eng` are merged into `@`; and `o` is merged into `uo`.

- 简化并与辅音结合后，Full版的CV总数为274。  
  After simplification and combination with consonants, the total number of CVs in the Full list is 274.
- Lite、Nano版将`ian`，`uan`并入`ie`，`ue`，CV总数为259个。  
  For the Lite and Nano lists, `ian` and `uan` are merged into `ie` and `ue` respectively, resulting in a total of 259 CVs.

## VC部分，后一个音的开头 The VC Part, Beginning of the Next Sound

- 以送气爆破音替代不送气爆破音，不区分介母，合并零声母元音。  
  Replace aspirated plosives with unaspirated plosives, do not distinguish between Medials, and merge zero-initial vowels.

- 简化后，辅音总数为17个(`c` `ch` `f` `h` `k` `l` `m` `n` `p` `q` `r` `s` `sh` `t` `w` `x` `y`)，零声母元音总数为7个(`a` `A` `e` `ei` `@` `er` `v`)，共计24个。  
  After simplification, the total number of consonants is 17 (`c` `ch` `f` `h` `k` `l` `m` `n` `p` `q` `r` `s` `sh` `t` `w` `x` `y`), and the total number of zero-initial vowels is 7 (`a` `A` `e` `ei` `@` `er` `v`), totaling 24.

## VC部分，前一个音的结尾 The VC Part, Ending of the Previous Sound

- Full版：与CVVChinse的23个韵尾一致，不进行简化。VC总计为23*24=552条。  
  Full list: Aligns with the 23 codas of CVVChinse and no simplification is applied. The total number of VCs is 23 * 24 = 552.

{: .important-title }
> 结尾组合 Ending Combanations:
> 
> {: .opaque }
> <div markdown="block">
> {: .highlight }
> > - *ai*/*ei* -> **:i**, *ao*/*ou* -> **:u**;
> > - *an*/*en*/*in*/*en0*/*ün* -> **n**;
> > - *ang*/*eng*/*ing*/*ong* -> **ng**;
> > - a, o, e, e0, er, i, i0, ir, u, ü
> </div>

- Lite版：合并双元音及鼻音的韵尾为 `:i` ，`:u`， `n`，`ng`，韵尾总数减少至14个。VC减少至14*24=336条。  
  Lite list: Merge the Endings of diphthongs and nasals into `:i`, `:u`, `n`, and `ng`; the total number of Endings is reduced to 14. The number of VCs is reduced to 14 * 24 = 336.
- Nano版：将`:u`与`u`合并，总数减少至13个。VC减少至13*24=312条。  
  Nano list: Merge `:u` with `u`; the total number of codas is reduced to 13. The number of VCs is reduced to 13 * 24 = 312.


## 元音表 Vowel Chart

| 可能的韵头<br/>Possible Medials | 韵腹(X-SAMPA)<br/>Nuclei in X-SAMPA | 可能的韵尾<br/>Possible Endings | 可组合的韵母<br/> Possible Vowels |
| :---: | :---: | :---: | :---: |
| ∅, i-, u- | a | ∅, -i, -n | a, ai, an, ia, ua, uai, uan |
| ∅, i-, u- | A | -u, -ng | ao, ang, iao, iang, uang |
| u- | o | ∅ | o/uo |
| ∅, i- | U | -ng | ong, iong |
| ∅ | 7 | ∅ | e |
| ∅, i-, u-, ü- | e | ∅, -i | ê, ei, ui, ie, üe |
| i-, ü- | E | -n | ian, üan |
| ∅, i-, u- | @ | -u, -n, -ng | ou, en, eng, iu, un, ueng |
| ∅ | @\` | ∅ | er |
| ∅ | i | ∅, -n, -ng | i, in, ing |
| ∅ | i\ | ∅ | i (z c s) |
| ∅ | i\` | ∅ | i (zh ch sh r) |
| ∅ | u | ∅ | u |
| ∅ | y | ∅,-n | ü, ün |
