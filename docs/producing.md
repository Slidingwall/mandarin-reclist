---
nav_order: 3
---

# 录制与标注 Recording and Labeling

## 录音 Recording

{: .highlight }
>  此处以最新的录制软件[`RecStar`](https://github.com/sdercolin/RecStar)的Windows版本，以及[`いつほし式8モーラガイドBGM`](https://bowlroll.net/file/50209)做示范。  
>  This is an example of the Windows version of the latest recording software [`RecStar`](https://github.com/sdercolin/RecStar) and the [`いつほし式8モーラガイドBGM`](https://bowlroll.net/file/50209).    
>
> 您也可以使用您熟悉的传统录音软件，例如`OREMO`。  
> You can also use traditional recording software that you are familiar with, such as `OREMO`.  
  
![Importing](/assets/RS1.png)  
首先，点击`文件`->`导入录音表`，以及`文件`->`导入BGM`，来导入录音表与BGM文件。  
First, click `File` ->`Import Reclist`, and `File`->`Import Guide BGM` to import the reclist and GuideBGM file.  
  
![Create new session](/assets/RS2.png)  
其次，点击右下角的`+`按钮，选择导入的录音表及注释，以新建录音会话。  
Second, click the `+` button in the bottom right corner and select the imported recording sheet and comments to create a new recording session. 
  
{: .note }
> 如果您选择导入注释，请在设置中选择带有注释的标题栏样式。  
> If you choose to import comments, select a title bar style with comments in the settings.   
> ![Create new session](/assets/RS2-1.png)
  
![Choose BGM](/assets/RS3.png)  
再次，点击右侧的音符符号以选择BGM文件。  
Then, click on the note symbol on the right side to select the BGM file.  
  
![Recording](/assets/RS4.png)  
最后，点击红色按钮或按下回车键即可开始您的录制。红色按钮的两侧箭头或者键盘的左右箭头可以切换录音。  
Last, click the red button or press enter to start your recording. The arrows on either side of the red button or the left and right arrows on the keyboard can switch recordings.  

{: .important }
> 请注意，由于开头音与结尾音包含在Extra表内，因此Extra表为必录项。您也可以对其进行适当改造，以支持气泡音等采样。  
> Please note that since the beginning and ending notes are included in the Extra Reclist, the Extra Reclist is mandatory. You can also modify it appropriately to support samples such as vocal fry.  

## 标注 Labeling

{: .highlight }
>  此处以最新的制作软件[`vLabeler`](https://github.com/sdercolin/vlabeler)的Windows版本做示范。  
>  This is an example of the Windows version of the latest production software [`vLabeler`](https://github.com/sdercolin/vlabeler)  
> 
> 您也可以使用您熟悉的传统标注软件，例如`setParam`。  
> You can also use traditional labeling software that you are familiar with, such as `setParam`.  

模板中CV/VC/Extra部分分开设定，设定完成后请合并回同一文件中。建议您保留合并前的文件，以备后续可能的修改。  
CV/VC/Extra parts are seperated in OTO templates, merge them while OTO labeling are done. It is recommended that you keep the pre-merge files for possible future modifications.  

首先，新建项目，在目录设置中，选择在RecStar中录制完成的文件夹。  
First, create a new project, and in the directory settings, select the folder where you want to record in RecStar.  
![Create new project](/assets/VL1.png) 

其次，在标注器设置中，选择`UTAU oto 标注器`。  
Second, in the labeler settings, select `UTAU oto labeler`.  
![Choose labeler](/assets/VL2.png) 

再次，在数据源设置中，选择`文件`，然后导入录音表所对应的oto模板。  
Then, in the data source settings, select `File` and import the OTO template corresponding to the Reclist.  
![Choose template](/assets/VL3.png)

{: .note }
> 如果vLabeler提示您导入出错，尝试将oto模板移动到C盘并重新导入。  
> If vLabeler prompts you that there is an import error, try moving the oto template to C: and re-importing it.  

最后，您可以看到vLabeler的标注界面，开始进行标注。  
Finally, you can see the labeling interface of vLabeler and start labeling.  
![Labeling interface](/assets/VL4.png)

对于不同类型的采样，您的标注应如下：  
For different types of sampling, your should label like this:  

### 对于CV而言：  For CV samples:  
 
当其声母为爆破音时(b,p,d,t,g,k,j,q,zh,ch,z,c)，黄线（左边界）与`重`应该重合。  
When the initials are plosives (b,p,d,t,g,k,j,q,zh,ch,z,c), the yellow line (left boundary) should coincide with `Ovl`.  
![Plosives](/assets/CV1.png)  

当其声母为其他辅音时(m,f,n,l,h,x,sh,r,s)，`重`应位于声母波形稳定处。  
When the initials are other consonants (m,f,n,l,h,x,sh,r,s), `Ovl` should be located at the stable initial waveform.  
![Other consonants](/assets/CV2.png)  

以上两种情况下，黄线（左边界）位于波形开始处，`先`位于辅音元音交界处。  
In both cases, the yellow line (left boundary) is at the beginning of the waveform and the `Preu` is at the junction of the consonant vowels.  
 
当其声母为半元音(y,w)或不含声母为纯元音时，黄线（左边界）、`重`、`先`应该重合。  
When the initials are semi-vowels (y, w) or pure vowels without initials, the yellow line (left boundary), `Ovl`, and `Preu` should coincide.   
![semi-vowels](/assets/CV3.png)  

`固`和白线（右边界）分别位于韵腹（波形稳定处）的开头与结尾。当介音(i-,u-,ü-)存在时，它应该位于蓝色区域内。当韵尾(-i,-u,-n,-ng)存在时，它应该位于白色区域内。  
The `fixed` and white lines (right boundary) are located at the beginning and end of the Nucleus (where the waveform is stable). When a Medial (i-, u-, ü-) is present, it should be within the blue area. When the Ending (-i, -u, -n, -ng) are present, it should be within the white area.  
![Rhyme](/assets/CV4.png)  
  
  

### 对于VC而言：  For VC samples:  
  
请将`先`放在元音与辅音的交界处。一般情况下，不用移动黄线（左边界）和`重`的位置。  
Place `Preu` at the junction of vowels and consonants. In general, there is no need to move the yellow line (left boundary) and the `Ovl` position.   
但当韵尾(-i,-u,-n,-ng)存在时，请确保`重`位于韵尾开始处。   
But when the Ending (-i, -u, -n, -ng) is present, make sure that the `Ovl` is at the beginning of the rhyme.  
如果第二个音素是元音，请参照CV进行标注。  
If the second phoneme is a vowel, please refer to the CV for labeling.  
![Ending](/assets/VC1.png)  

对于爆破音(b,p,d,t,g,k,j,q,zh,ch,z,c)，请将`固`和白线（右边界）放在空白处。  
For plosives (b,p,d,t,g,k,j,q,zh,ch,z,c), place the `Ovl` and the white line (right boundary) in the blank.  
![Plosives](/assets/VC2.png)  

对于其他辅音(m,f,n,l,h,x,sh,r,s,y,w)，请将`固`放在辅音波形稳定的地方，白线（右边界）放在辅音结束处。  
For other consonants (m, f, n, l, h, x, sh, r, s, y, w), place `Ovl` where the consonant waveform is stable and the white line (right boundary) at the end of the consonant.  
![Other consonants](/assets/VC3.png)  
  
  

### 对于Extra而言：  For Extra samples:  

您可以按照自己的需求来设置开头音、长元音、结束吸气、结束吐气等采样。  
You can set the Beginning, long vowel, ending breath-in, ending breath-out, and other samples according to your needs.    
开头音可以看作没有元音的VC，而其他采样可以看作没有辅音的VC。  
The Beginning can be seen as a VC without a vowel, while the other samples can be seen as a VC without a consonant.  
  
标注完成后，选择`文件`->`导出标注文件`以保存标注好的oto.ini。  
After labeling completed, select `File` -> `Export Label File` to save the labeled oto.ini.  
![Export](/assets/VL5.png) 

{: .important }
> 请注意，录音表模板的数值参考120BPM的[`いつほし式8モーラガイドBGM`](https://bowlroll.net/file/50209)设定。  
> Please note that the value of thetemplate refers to the [`いつほし式8モーラガイドBGM`](https://bowlroll.net/file/50209) setting of 120BPM.  
> 
> 如果您采用其他的BGM，可以通过标注各模板内前1个音频（VC为前2个音频），并通过查找与替换来快速调整模板。或者，您也可以采用[生成器](/mandarin-reclist/generator)来生成模板。  
> If you use other BGMs, you can mark the first audio in each template (the first two audio in VC) and quickly adjust the template by finding and replacing it. Alternatively, you can also use a [generator](/mandarin-reclist/generator) to produce the template.  
>
> 以Lite模板为例：  
> Take the Lite template as an example:   
> ```ini
> #For CV
> _ba_pa_ma_fa_da_ta_na_la.wav=ba#,1450,150,-400,50,0
> _ba_pa_ma_fa_da_ta_na_la.wav=pa#,1950,150,-400,50,0
> _ba_pa_ma_fa_da_ta_na_la.wav=ma#,2450,150,-400,50,16
> _ba_pa_ma_fa_da_ta_na_la.wav=fa#,2950,150,-400,50,16
> _ba_pa_ma_fa_da_ta_na_la.wav=da#,3250,150,-400,50,0
> _ba_pa_ma_fa_da_ta_na_la.wav=ta#,3750,150,-400,50,0
> _ba_pa_ma_fa_da_ta_na_la.wav=na#,4250,150,-400,50,16
> _ba_pa_ma_fa_da_ta_na_la.wav=la#,4750,150,-400,50,16
> 
> #For VC
> _si_qi_sheng_yi_chen_yi_ci_yi.wav=i0 q#,1700,300,-350,250,100
> _si_qi_sheng_yi_chen_yi_ci_yi.wav=i sh#,2200,300,-350,250,100
> _si_qi_sheng_yi_chen_yi_ci_yi.wav=eng y#,2700,300,-350,250,100
> _si_qi_sheng_yi_chen_yi_ci_yi.wav=i ch#,3200,300,-350,250,100
> _si_qi_sheng_yi_chen_yi_ci_yi.wav=en y#,3700,300,-350,250,100
> _si_qi_sheng_yi_chen_yi_ci_yi.wav=i c#,4200,300,-350,250,100
> _si_qi_sheng_yi_chen_yi_ci_yi.wav=i0 y#,4700,300,-350,250,100
>
> #For VV
> _chi_en_e_eng_a_eng_e_ang.wav=ir @#,1700,400,-600,300,100
> _chi_en_e_eng_a_eng_e_ang.wav=en e#,2200,400,-600,300,100
> _chi_en_e_eng_a_eng_e_ang.wav=e @#,2700,400,-600,300,100
> _chi_en_e_eng_a_eng_e_ang.wav=eng a#,3200,400,-600,300,100
> _chi_en_e_eng_a_eng_e_ang.wav=a @#,3700,400,-600,300,100
> _chi_en_e_eng_a_eng_e_ang.wav=eng e#,4200,400,-600,300,100
> _chi_en_e_eng_a_eng_e_ang.wav=e A0#,4700,400,-600,300,100
> ```
> 不难注意到每个标注后边都有一个`#`，这是方便后续替换音阶后缀的地方。  
> It's not hard to notice that each annotation is followed by a `#`, which is where the pitch suffix can be replaced later.  
> 当您完成一个音阶的标注后，可以将其作为下一个音阶标注的模板。  
> When you have finished labeling a pitch, you can use it as a template for labeling the next pitch.  
