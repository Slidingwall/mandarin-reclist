# 制作指南 Producing Guide

## 录音软件 Recording Software

此处以最新的录制软件[`RecStar`](https://github.com/sdercolin/RecStar)的Windows版本，以及[`いつほし式8モーラガイドBGM`](https://bowlroll.net/file/50209)做示范。  
This is an example of the Windows version of the latest recording software [`RecStar`](https://github.com/sdercolin/RecStar) and the [`いつほし式8モーラガイドBGM`](https://bowlroll.net/file/50209).    

![Importing](/assets/RS1.png)  
首先，点击`文件`->`导入录音表`，以及`文件`->`导入BGM`，来导入录音表与BGM文件。  
First, click `File` ->`Import Reclist`, and `File`->`Import Guide BGM` to import the reclist and GuideBGM file.  

![Create new session](/assets/RS2.png)  
其次，点击右下角的`+`按钮，选择导入的录音表及注释，以新建录音会话。  
Second, click the '+' button in the bottom right corner and select the imported recording sheet and comments to create a new recording session.  
> 如果您选择导入注释，请在设置中选择带有注释的标题栏样式。  
> If you choose to import comments, select a title bar style with comments in the settings.   
> ![Create new session](/assets/RS2-1.png)

![Choose BGM](/assets/RS3.png)  
再次，点击右侧的音符符号以选择BGM文件。  
Then, click on the note symbol on the right side to select the BGM file.  

> 如果您在设置中选择`连续录音(基于BGM设置)`或`裁剪录音(基于BGM设置)`，以120BPM的BGM为例，我们建议您将10,11行的更改为：  
> If you select `Continuous Recording (Based on the guide BGM)` or `Trim Recording (Based on the guide BGM)` in the settings, taking a BGM of 120BPM as an example, we recommend that you change the 10,11 lines to:
>```
>   5, 7.5,	0, 1, 0, 0, 録音停止  
>   6, 8.5,	0, 0, 1, 1, 録音を保存し次へ  
>```
> 对于其它节奏的BGM，您可能需要手动调节他们的动作时间，以保证录音完整。对于已经导入的BGM，您可以在`帮助`->`打开内容目录`中，找到`bgms`文件夹，调整`*.config.json`文件中的动作时间(`"timeMS"`，以毫秒为单位)。调整完成后，保存文件并重启RecStar。  
> For BGMs of other speeds, you may need to manually adjust their movement time to ensure that the recording is complete. For BGMs that have already been imported, you can find the 'bgms' folder in `Help`->`Open Content Directory` and adjust the action time (`"timeMS"`, in milliseconds) in the `*.config.json` file. Once the adjustment is complete, save the file and restart RecStar.

![Recording](/assets/RS4.png)  
最后，点击红色按钮或按下回车键即可开始您的录制。红色按钮的两侧箭头或者键盘的左右箭头可以切换录音。  
Last, click the red button or press enter to start your recording. The arrows on either side of the red button or the left and right arrows on the keyboard can switch recordings.

## 标注软件 Labeling Software 






[Back to home](/mandarin-reclist/)