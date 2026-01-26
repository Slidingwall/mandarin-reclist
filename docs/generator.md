---
layout: default
title: Oto模板生成器 Oto Generator
nav_order: 7
--- 
# Oto模板生成器 Oto Generator

{: .new}
> 对于不同的BGM，此处提供一个模板生成器，以便根据不同的节奏与空白值来生成oto文件模板。请注意，空白值的单位为毫秒(msec)。  
> 由于程序会自动扣除辅音发声的时间，**此处的空白值是指第一个元音发声的时刻**。  
> 后缀将直接显示在别名后，不添加空格。  
> 
> For different BGMs, a template generator is provided here to generate oto file templates based on different rhythms and blank values. Please note that the unit of the blank value is milliseconds (msec).   
> Since the program automatically deducts the duration of consonant sounds, **the blank value here refers to the moment when the first vowel is pronounced**.  
> The suffix will be displayed directly after the alias without adding a space.  

<form id="myForm">  
  <label for="program">选择软件:</label>
  <select id="program" onchange="
    const isUTAU = this.value==='utau';
    document.querySelectorAll('.utau-only').forEach(o=>o.hidden=!isUTAU)
  ">
    <option value="utau">UTAU</option>
    <option value="deepvocal">DeepVocal</option>
    <option value="vocalsharp">VocalSharp</option>
  </select>
  <label>BPM:</label>  
  <input type="text" id="BPM" placeholder="请输入BPM">   
  <label>Blank:</label>  
  <input type="text" id="blank" placeholder="请输入空白值(msec)"> 
  <label>Suffix:</label>  
  <input type="text" id="suffix" placeholder="请输入后缀"> 
  <label>选择录音表:</label>  
  <select id="type">  
    <option value="Nano">CVVC_Nano</option> 
    <option value="Lite">CVVC_Lite</option>  
    <option value="Full">CVVC_Full</option>  
    <option value="VCV_Nano" class="utau-only">VCV_Nano</option>  
    <option value="VCV" class="utau-only">VCV</option>  
  </select>  

  <input type="submit" class="btn" onclick="
    event.preventDefault();
    ({utau:generateOTO, vocalsharp:generateVSDFMX, deepvocal:generateDVCFG})[document.getElementById('program').value]()
  " value="提交">  
</form>

## 生成结果 OTO Result
<button type="button" name="button" class="btn" onclick="downloadResult()">Download 下载</button>{: .btn .btn-green }
<pre id="output"></pre>  
<script src="generator.js"></script> 