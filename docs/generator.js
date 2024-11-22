function formatFloat(num) {
    if (typeof num !== 'number' && (typeof num !== 'string' || isNaN(Number(num)))) {
        return 'Invalid number'; 
    }
    const numStr = num.toString();
    return /\.\d{4,}$/.test(numStr)
        ? num.toFixed(3).replace(/\.?0+$/, '')
        : numStr;
}

async function generateOTO() {
    const blank = parseInt(document.getElementById('blank').value, 10);
    const note = 60000 / parseFloat(document.getElementById('BPM').value);
    const type = document.getElementById('type').value;
    const output = document.getElementById('output');

    try {
        const response = await fetch("https://slidingwall.github.io/mandarin-reclist/assets/oto.json");  
        if (!response.ok) output.textContent = 'Network response was not ok';  
        const oto = await response.json();  

        const processWavs = (wavsObj) => Object.entries(wavsObj).flatMap(([wavsKey, wavs]) => {
            const generateLine = (line, i, typeSpecific) => line ? `${wavsKey}.wav=${line}#,${typeSpecific}` : [];

            const cvLines = (wavs.cv || []).flatMap((line, i) =>
                type === 'cv' ? generateLine(line, i, `${formatFloat(blank - 50 + note * i)},${formatFloat(note * 0.3)},-${formatFloat(note * 0.8)}${/^[bpdtgkjqzc]/.test(line) ? ',50,0' : ',50,16'}`) : []
            );

            const vcLines = (wavs.vc || []).flatMap((line, i) => {
                if(line){
                    const [_, sound] = line.split(" ");
                    const specific = ["a", "A0", "e", "@", "er", "ei"].includes(sound)
                    ? `${formatFloat(note * 0.8)},-${formatFloat(note * 1.2)},${formatFloat(note * 0.6)},${formatFloat(note * 0.2)}`
                    : `${formatFloat(note * 0.6)},-${formatFloat(note * 0.7)},${formatFloat(note * 0.5)},${formatFloat(note * 0.2)}`;
                    return type === 'vc' ? generateLine(line, i, `${formatFloat(blank + note * (i + 0.4))},${specific}`) : [];
                }
            });

            return [...cvLines, ...vcLines];
        });

        let result = [];
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
                        wavs.forEach((line, i) => line && result.push(`${wavsKey}.wav=${line}#,${formatFloat(blank + note * (i + 0.4))},${formatFloat(note * 0.8)},-${formatFloat(note * 1.2)},${formatFloat(note * 0.6)},${formatFloat(note * 0.2)}`));
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
    const blob = new Blob([document.getElementById('output').textContent], { type: 'text/plain' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `oto_${document.getElementById('type').value}.ini`;
    downloadLink.click();
    URL.revokeObjectURL(downloadLink.href);
}