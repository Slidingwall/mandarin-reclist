---
layout: default
title: OTO Generator(Test)
nav_order: 5
--- 

<input type="text" name="BPM" id="BPM" placeholder="请输入BPM">
<input type="text" name="blank" id="blank" placeholder="请输入blank">
<form>  
  <label for="type">选择录音表:</label>  
  <select id="type" name="type">  
    <option value="Lite">CVVC_Lite</option> 
    <option value="Full">CVVC_Full</option>  
    <option value="VCV">VCV</option>  
  </select>   
  <input type="submit" onclick=generateOTO() value="提交">  
</form>
<pre id="output"></pre>
<script src="converter.js"></script>