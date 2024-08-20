async function generateOTO() {  
    const blank = parseInt(document.getElementById('blank').value, 10);  
    const bpm = parseInt(document.getElementById('BPM').value, 10);  
    const note = 60000 / bpm;  
    const type = document.getElementById('type').value;  
    const output = document.getElementById('output');  
    let result = [];  
  
    try {  
        const response = await fetch("https://slidingwall.github.io/mandarin-reclist/assets/oto.json");  
        if (!response.ok) throw new Error('Network response was not ok');  
        const oto = await response.json();  
        const processWavs = (wavsObj) => {  
            for (const [wavsKey, wavs] of Object.entries(wavsObj)) {  
                if (wavs.cv && Array.isArray(wavs.cv)) {  
                    wavs.cv.forEach((line, i) => {  
                        if (line && /^[bpdtgkjqzc]/.test(line)) {  
                            result.push(`${wavsKey}.wav=${line}#,${blank - 50 + note * i},${note * 0.3},-${note * 0.8},50,0`);  
                        } else if (line) {  
                            result.push(`${wavsKey}.wav=${line}#,${blank - 50 + note * i},${note * 0.3},-${note * 0.8},50,16`);  
                        }  
                    });  
                }  
                if (wavs.vc && Array.isArray(wavs.vc)) {  
                    wavs.vc.forEach((line, i) => {  
                        if (line) {  
                            const parts = line.split(" ");  
                            const otoKey = ["a", "A0", "e", "@", "er", "ei"].includes(parts[1]) ?  
                                `${note * 0.8},-${note * 1.2},${note * 0.6}` :  
                                `${note * 0.6},-${note * 0.7},${note * 0.5}`;  
                            result.push(`${wavsKey}.wav=${line}#,${blank + note * (i + 0.6)},${otoKey},${note * 0.2}`);  
                        }  
                    });  
                }  
            }  
        };  
        switch (type) {  
            case "Lite":  
                processWavs(oto.CVVC_Lite);  
                break;  
            case "Full":  
                processWavs(oto.CVVC_Full);  
                break;  
                case "VCV":  
                for (const [wavsKey, wavs] of Object.entries(oto.VCV)) {  
                    if (Array.isArray(wavs)) {  
                        wavs.forEach((line, i) => {  
                            if (line) {  
                                result.push(`${wavsKey}.wav=${line}#,${blank + note * (i + 0.6)},${note * 0.8},-${note * 1.2},${note * 0.6},${note * 0.2}`);  
                            }  
                        });  
                    } else {  
                        console.error(`Expected an array but got ${typeof wavs} for key ${wavsKey}`);  
                    }  
                }  
                break;
        }  
        output.textContent = result.join('\n');  
    } catch (error) {  
        output.textContent = `There was a problem with your fetch operation: ${error}`;  
    }  
}