---
nav_order: 3
---

# 录制与标注 Recording and Labeling

## 录音 Recording

此处以最新的录制软件[`RecStar`](https://github.com/sdercolin/RecStar)的Windows版本，以及[`いつほし式8モーラガイドBGM`](https://bowlroll.net/file/50209)做示范。  
This is an example of the Windows version of the latest recording software [`RecStar`](https://github.com/sdercolin/RecStar) and the [`いつほし式8モーラガイドBGM`](https://bowlroll.net/file/50209).    

![Importing](/assets/RS1.png)  
首先，点击`文件`->`导入录音表`，以及`文件`->`导入BGM`，来导入录音表与BGM文件。  
First, click `File` ->`Import Reclist`, and `File`->`Import Guide BGM` to import the reclist and GuideBGM file.  

![Create new session](/assets/RS2.png)  
其次，点击右下角的`+`按钮，选择导入的录音表及注释，以新建录音会话。  
Second, click the '+' button in the bottom right corner and select the imported recording sheet and comments to create a new recording session. 

{: .note }
> 如果您选择导入注释，请在设置中选择带有注释的标题栏样式。  
> If you choose to import comments, select a title bar style with comments in the settings.   
> ![Create new session](/assets/RS2-1.png)

![Choose BGM](/assets/RS3.png)  
再次，点击右侧的音符符号以选择BGM文件。  
Then, click on the note symbol on the right side to select the BGM file.  

<details>
<summary>The following has been fixed in the latest version of Recstar. 以下内容在最新版的Recstar中已修复。</summary>
  
{: .warning-title }  
> 过时信息 / Outdated  
>  
> 如果您在设置中选择`连续录音(基于BGM设置)`或`裁剪录音(基于BGM设置)`，以120BPM的BGM为例，我们建议您将10,11行的更改为：  
> If you select `Continuous Recording (Based on the guide BGM)` or `Trim Recording (Based on the guide BGM)` in the settings, taking a BGM of 120BPM as an example, we recommend that you change the 10,11 lines to:  
>```
>   5, 7.5,	0, 1, 0, 0, 録音停止  
>   6, 7.5,	0, 0, 1, 1, 録音を保存し次へ  
>```
> 对于其它节奏的BGM，您可能需要手动调节他们的动作时间，以保证录音完整。对于已经导入的BGM，您可以在`帮助`->`打开内容目录`中，找到`bgms`文件夹，调整`*.config.json`文件中的动作时间(`"timeMS"`，以毫秒为单位)。调整完成后，保存文件并重启RecStar。  
> For BGMs of other speeds, you may need to manually adjust their movement time to ensure that the recording is complete. For BGMs that have already been imported, you can find the 'bgms' folder in `Help`->`Open Content Directory` and adjust the action time (`"timeMS"`, in milliseconds) in the `*.config.json` file. Once the adjustment is complete, save the file and restart RecStar.  
  
</details>


![Recording](/assets/RS4.png)  
最后，点击红色按钮或按下回车键即可开始您的录制。红色按钮的两侧箭头或者键盘的左右箭头可以切换录音。  
Last, click the red button or press enter to start your recording. The arrows on either side of the red button or the left and right arrows on the keyboard can switch recordings.

## 标注 Labeling

此处以最新的制作软件[`vLabeler`]()的Windows版本做示范。  

模板中CV/VC/Extra部分分开设定. 设定完成后请合并回同一文件中.  
CV/VC/Extra parts are seperated in OTO templates. Merge them while OTO labeling are done.

首先，新建项目，在目录设置中，选择在RecStar中录制完成的文件夹。  

其次，在标注器设置中，选择`UTAU oto 标注器`。  

再次，在数据源设置中，选择`文件`，然后导入录音表所对应的oto模板。  

{: .note }
> 如果vLabeler提示您导入出错，尝试将oto模板移动到C盘并重新导入。

最后，您可以看到vLabeler的标注界面，开始进行标注。  

对于不同类型的采样，您的标注应如下：  

{: .new-title }
> 对于CV而言：  
>  
> 当其声母为爆破音时(b,p,d,t,g,k,j,q,zh,ch,z,c)，黄线（左边界）与`重`应该重合。  
> 当其声母为其他辅音时(m,f,n,l,h,x,sh,r,s)，`重`应位于声母波形稳定处。  
> 以上两种情况下，黄线（左边界）位于波形开始处，`先`位于辅音元音交界处。  
> 当其声母为半元音(y,w)或不含声母为纯元音时，黄线（左边界）、`重`、`先`应该重合。  
> `固`和白线（右边界）分别位于韵腹（波形稳定处）的开头与结尾。当介音(i-,u-,ü-)存在时，它应该位于蓝色区域内。当韵尾(-i,-u,-n,-ng)存在时，它应该位于白色区域内。  
  
  
{: .important-title }
> 对于VC而言：  
>   
>  
  
  
{: .highlight-title }
> 对于Extra而言：  
>  
>   
  
标注完成后，选择`文件`->`导出`以保存标注好的oto.ini。

