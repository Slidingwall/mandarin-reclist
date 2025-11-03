async function generateOTO() {  
    const blank = parseInt(document.getElementById('blank').value, 10);    
    const dur = 60000 / parseFloat(document.getElementById('BPM').value);  
    const type = document.getElementById('type').value;   
    const float = num => num.toFixed(3).replace(/\.?0+$/, '');
    try {  
        const oto = await fetch("https://slidingwall.github.io/mandarin-reclist/assets/oto.json").then(res => res.ok ? res.json() : { error: 'Network response was not ok' });
        const process = obj => 
            Object.entries(obj).flatMap(([name, wavs]) => 
                [].concat(
                    (wavs.cv || []).flatMap((line, i) => 
                        line ? `${name}.wav=${line}#,${float(blank - 50 + dur * i)},${float(dur * 0.3)},-${float(dur * 0.8)},${/^[bpdtgkjqzc]/.test(line) ? '50,0' : '50,16'}` : []
                    ),
                    (wavs.vc || []).flatMap((line, i) => {
                        if (!line) return [];
                        const key = ["a", "A0", "e", "@", "er", "ei"].includes(line.split(" ")[1]) ?
                            `${float(dur * 0.8)},-${float(dur * 1.2)},${float(dur * 0.6)}` :
                            `${float(dur * 0.6)},-${float(dur * 0.7)},${float(dur * 0.5)}`;
                        return `${name}.wav=${line}#,${float(blank + dur * (i + 0.4))},${key},${float(dur * 0.2)}`
                    })
                )
            );
        const processVCV = data => 
            Object.entries(data).flatMap(([name, wavs]) =>
                (Array.isArray(wavs) ? wavs : []).filter(Boolean).map((line, i) =>
                `${name}.wav=${line}#,${float(blank + dur * (i + 0.4))},${float(dur * 0.8)},-${float(dur * 1.2)},${float(dur * 0.6)},${float(dur * 0.2)}`
                )
            );
        const result = type === "Nano" ? process(oto.CVVC_Nano) : type === "Lite" ? process(oto.CVVC_Lite) : type === "Full" ? process(oto.CVVC_Full) : 
            type === "VCV" ? processVCV(oto.VCV) : type === "VCV_Nano" ? processVCV(oto.VCV_Nano).concat(process(oto.VCV_Nano_CVVC)) : [];
            document.getElementById('output').textContent = result.join('\n')
    } catch (e) {document.getElementById('output').textContent = `There was a problem with your fetch operation: ${e}`}
}
function downloadResult() {
    const blob = new Blob([document.getElementById('output').textContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `oto_${document.getElementById('type').value}.ini`;
    link.click();
    URL.revokeObjectURL(link.href)
}