# mandarin-reclist

适用于中文拼接语音库(UTAU, DeepVocal, VocalSharp)的极简录音表.  
A minimal reclist for Mandarin stitching voickbank(UTAU, DeelVocal, Vocalsharp).  

## 录音表音标详解  

汉语普通话的韵母共有韵头、韵腹、韵尾三部分组成，韵母再与声母组合为新的音节。  
其中，韵头有`无韵头`、`i-`、`u-`、`ü-`四种情况，韵尾有`无韵尾`、`-i`、`-u`、`-n`、`-ng`五种情况。去掉韵头、韵尾后，韵腹共有14个。可整合为下表： 

| 可能的韵头<br/>Possible Meditals| 韵腹(X-SAMPA)<br/> Rhymes in X-SAMPA| 可能的韵尾<br/>Possible Coda|可组合的韵母<br /> Possible Vowels|
| ------ | ------ | ------ | ------ |
| ∅, i-, u- | a | ∅, -i, -n | a, ai, an, ia, ua, uai, uan |
| ∅, i-, u- | A | -u, -ng | ao, ang, iao, iang, uang |
| u- | o | ∅ | o, uo |
| ∅ | 7 | ∅ | e |
| ∅ | i | ∅-n, -ng | i, in, ing |
| ∅ | u | ∅ | u |
| ∅ | y | ∅,-n | ü, ün |
| ∅, i-, u-, ü- | e | ∅, -i | ê, ei, ui, ie, üe |
| ∅, i-, u- | @ | -u, -n, -ng | ou, en, eng, iu, un, ueng |
| ∅ | @` | ∅ | er |
| i-, ü- | E| -n | ian, üan |
| ∅ | i\ | ∅ | i (z c s) |
| ∅ | i` | ∅ | i (zh ch sh r) |
| ∅, i-| U | -ng | ong, iong |

韵头韵腹组合整理如下：  
a, ia, ua; A, iA, uA; @, i@, u@; ei, ui, ie, ue; ian, uan; ong, iong; o/uo, e, i, u, ü, er, i0, ir  
共25个，与声母结合后可产生274个CV组合，录音表收录了其中的273个读音。  

韵腹韵尾组合整理如下：  
a, *ai*, *an*; *ao*, *ang*; i, *in*, *ing*; ou, en, eng; ü, *ün*; e0, ei; o, e, u, er, i0, ir; *en0*, *ong*  
共23个。Full表与中文CVVC韵尾一致，Lite表则会将斜体的韵尾并入ou, en, eng中，整合后个数14个，制作时需将Overlap放在韵腹韵尾的交界处。 

## 制作指南
模板中CV/VC/Extra部分分开设定. 设定完成后请合并回同一文件中.   
CV/VC/Extra parts are seperated in templates. Merge them while OTO are done.  

剩下的在写了 / In progressing.
