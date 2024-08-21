function formatFloat(num) {  
        const dotIndex = num.toString().indexOf('.');  
        if (dotIndex === -1 || (dotIndex !== -1 && num.toString().slice(dotIndex + 1).length <= 3)) {  
            return num;  
        }   
        return num.toFixed(3);
    }
async function generateOTO() {  
    const blank = parseInt(document.getElementById('blank').value, 10);    
    const note = (60000 / parseFloat( document.getElementById('BPM').value));  
    const type = document.getElementById('type').value;  
    const output = document.getElementById('output');  
    let result = [];  
  
    try {  
        const response = await fetch("https://slidingwall.github.io/mandarin-reclist/assets/oto.json");  
        if (!response.ok) throw new Error('Network response was not ok');  
        const oto = await response.json();  
        const processWavs = (wavsObj) => {  
            const generateLine = (wavsKey, line, i, blank, type) => {  
                if (!line) return [];  
                const base = `${wavsKey}.wav=${line}#`;  
                if (type === 'cv') {  
                    const pattern = /^[bpdtgkjqzc]/.test(line) ? ',50,0' : ',50,16';  
                    return [`${base}${formatFloat(blank - 50 + note * i)},${formatFloat(note * 0.3)},-${formatFloat(note * 0.8)}${pattern}`];  
                } else if (type === 'vc') {  
                    const otoKey = ["a", "A0", "e", "@", "er", "ei"].includes(line.split(" ")[1]) ?  
                        `${formatFloat(note * 0.8)},-${formatFloat(note * 1.2)},${formatFloat(note * 0.6)}` :  
                        `${formatFloat(note * 0.6)},-${formatFloat(note * 0.7)},${formatFloat(note * 0.5)}`;  
                    return [`${base}${formatFloat(blank + note * (i + 0.4))},${otoKey},${formatFloat(note * 0.2)}`];  
                }  
                return [];  
            };  
            return Object.entries(wavsObj).flatMap(([wavsKey, wavs]) => {  
                const cvLines = (wavs.cv || []).flatMap((line, i) => generateLine(wavsKey, line, i, blank, 'cv'));  
                const vcLines = (wavs.vc || []).flatMap((line, i) => generateLine(wavsKey, line, i, blank, 'vc'));  
                return [...cvLines, ...vcLines];  
            });  
        };   
        switch (type) {  
            case "Lite":  
                result = processWavs(oto.CVVC_Lite);  
                break;  
            case "Full":  
                result = processWavs(oto.CVVC_Full);  
                break;  
            case "VCV":  
                for (const [wavsKey, wavs] of Object.entries(oto.VCV)) {  
                    if (Array.isArray(wavs)) {  
                        wavs.forEach((line, i) => {  
                            if (line) {  
                                result.push(`${wavsKey}.wav=${line}#,${formatFloat(blank + note * (i + 0.4))},${formatFloat(note * 0.8)},-${formatFloat(note * 1.2)},${formatFloat(note * 0.6)},${formatFloat(note * 0.2)}`);  
                            }  
                        });  
                    }  
                }  
                break;
        }  
        output.textContent = result.join('\n');  
    } catch (error) {  
        output.textContent = `There was a problem with your fetch operation: ${error}`;  
    }  
}
function downloadResult() {  
    const blob = new Blob([document.getElementById('output').value], { type: 'text/plain' });  
    const downloadLink = document.createElement('a');  
    const type = document.getElementById('type').value;
    downloadLink.href = URL.createObjectURL(blob);  
    downloadLink.download = `oto_${type}.ini`;  
    downloadLink.click();  
    URL.revokeObjectURL(downloadLink.href);  
}