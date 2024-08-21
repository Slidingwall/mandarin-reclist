---
layout: default
title: Oto模板生成器 Oto Generator
nav_order: 5
--- 
# Oto模板生成器 Oto Generator

对于不同的BGM，此处提供一个模板生成器，以便根据不同的节奏与空白值来生成oto文件模板。请注意，空白值的单位为毫秒(msec)。  
由于程序会自动扣除辅音发声的时间，**此处的空白值是指第一个元音发声的时刻**。  

For different BGMs, a template generator is provided here to generate oto file templates based on different rhythms and blank values. Please note that the unit of the blank value is milliseconds (msec).   
Since the program automatically deducts the duration of consonant sounds, **the blank value here refers to the moment when the first vowel is pronounced**.  

<form id="myForm">  
  <label for="BPM">BPM:</label>  
  <input type="text" name="BPM" id="BPM" placeholder="请输入BPM">    
  <label for="blank">Blank:</label>  
  <input type="text" name="blank" id="blank" placeholder="请输入空白值(msec)">  
  <label for="type">选择录音表:</label>  
  <select id="type" name="type">  
    <option value="Lite">CVVC_Lite</option>  
    <option value="Full">CVVC_Full</option>  
    <option value="VCV">VCV</option>  
  </select>  
  <input type="submit" class="btn" onclick="event.preventDefault(); generateOTO();" value="提交">{: .btn .btn-green }  
</form>  

## 生成结果 OTO Result
<button type="button" name="button" class="btn" onclick="downloadResult()">Download 下载</button>{: .btn .btn-purple }
<pre id="output"></pre>  
<script src="converter.js"></script> 