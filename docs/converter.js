async function generateOTO() {
    const blank = parseInt(document.getElementById('blank').value, 10)
    const note = 60000 / parseInt(document.getElementById('BPM').value, 10);
    const type = document.getElementById('type').value;
    const result = []
    try {  
        const response = await fetch("https://slidingwall.github.io/mandarin-reclist/assets/oto.json");  
        if (!response.ok) throw new Error('Network response was not ok');  
        const oto = await response.json(); 
        function processWavs(wavsObj) {  
            for (let wavsKey in wavsObj) {  
                const wavs = wavsObj[wavsKey]; 
                if (wavs.cv && Array.isArray(wavs.cv)) {  
                    for (let i = 0; i < wavs.cv.length; i++) {  
                        const line = wavs.cv[i];  
                        if (line != null && /^[bpdtgkjqzc]/.test(line)) {  
                            result.push(`${wavsKey}.wav=${line},${blank - 50 + note * i},${note * 0.3},-${note * 0.8},50,0`);  
                        } else if (line != null) {  
                            result.push(`${wavsKey}.wav=${line},${blank - 50 + note * i},${note * 0.3},-${note * 0.8},50,16`);  
                    }}} 
                if (wavs.vc && Array.isArray(wavs.vc)) {  
                    for (let i = 0; i < wavs.vc.length; i++) {  
                        const line = wavs.vc[i];  
                        if (line != null) {  
                            const parts = line.split(" ");  
                            const otoKey = ["a", "A0", "e", "@", "er", "ei"].includes(parts[1]) ? `${note * 0.8},-${note * 1.2},${note * 0.6}` : `${note * 0.6},-${note * 0.7},${note * 0.5}`;  
                            result.push(`${wavsKey}.wav=${line},${blank + note * (i + 0.6)},${otoKey},${note * 0.2}`);  
        }}}}} 
        switch(type){
            case "Lite":
                processWavs(oto.CVVC_Lite);
            case "Full":
                processWavs(oto.CVVC_Full); 
            case "VCV":
                for (let wavsKey in oto.VCV) {  
                    const wavs = oto.VCV[wavsKey]; // 使用const，因为wavs在后续不会被重新赋值  
                    for (let [i, line] of wavs.entries()) { // 使用for...of与entries()获取索引和值  
                        if (line != null) {  
                            result.push(`${wavsKey}.wav=${line},${blank + note * (i + 0.6)},${note * 0.8},-${note * 1.2},${note * 0.6},${note * 0.2}}`);  
            }}}}
        const output = document.getElementById('output');  
        output.textContent = result.map(row => row.join(', ')).join('\n');  
    } catch (error) {  
        output.textContent = `There was a problem with your fetch operation:, ${error}`;  
    }  
}