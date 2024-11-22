function formatFloat(num) {
    const numStr = num.toString();
    return /\.\d{4,}$/.test(numStr)
        ? num.toFixed(3).replace(/\.?0+$/, '')
        : numStr;
}
async function generateOTO() {  
    const blank = parseInt(document.getElementById('blank').value, 10);    
    const note = 60000 / parseFloat( document.getElementById('BPM').value);  
    const type = document.getElementById('type').value;  
    const output = document.getElementById('output');   
    try {  
        const response = await fetch("https://slidingwall.github.io/mandarin-reclist/assets/oto.json");  
        if (!response.ok) output.textContent = 'Network response was not ok';  
        const oto = await response.json();  
        const processWavs = (wavsObj) => 
            Object.entries(wavsObj).flatMap(([wavsKey, wavs]) => 
                [].concat(
                    (wavs.cv || []).flatMap((line, i) => 
                        line ? `${wavsKey}.wav=${line}#,${formatFloat(blank - 50 + note * i)},${formatFloat(note * 0.3)},-${formatFloat(note * 0.8)},${/^[bpdtgkjqzc]/.test(line) ? '50,0' : '50,16'}` : []
                    ),
                    (wavs.vc || []).flatMap((line, i) => {
                        if (!line) return [];
                        const otoKey = ["a", "A0", "e", "@", "er", "ei"].includes(line.split(" ")[1]) ?
                            `${formatFloat(note * 0.8)},-${formatFloat(note * 1.2)},${formatFloat(note * 0.6)}` :
                            `${formatFloat(note * 0.6)},-${formatFloat(note * 0.7)},${formatFloat(note * 0.5)}`;
                        return `${wavsKey}.wav=${line}#,${formatFloat(blank + note * (i + 0.4))},${otoKey},${formatFloat(note * 0.2)}`;
                    })
                )
            );
        const result = type === "Lite" ? processWavs(oto.CVVC_Lite) :
                   type === "Full" ? processWavs(oto.CVVC_Full) :
                   type === "VCV"  ? oto.VCV.flatMap(([wavsKey, wavs]) =>
                       (Array.isArray(wavs) ? wavs : []).filter(Boolean).map((line, i) =>
                           `${wavsKey}.wav=${line}#,${formatFloat(blank + note * (i + 0.4))},${formatFloat(note * 0.8)},-${formatFloat(note * 1.2)},${formatFloat(note * 0.6)},${formatFloat(note * 0.2)}`
                       )
                   ) : [];
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