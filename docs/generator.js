const flt = num => num.toFixed(3).replace(/\.?0+$/, '');
const output = document.getElementById('output');
async function generateOTO() {  
    const blank = parseInt(document.getElementById('blank').value, 10);
    const dur = 60000 / parseFloat(document.getElementById('BPM').value);
    const type = document.getElementById('type').value;
    const suffix = document.getElementById('suffix').value;
    try {  
        const oto = await fetch("https://slidingwall.github.io/mandarin-reclist/assets/oto.json").then(res => res.ok ? res.json() : { error: 'Network response was not ok' });
        const process = obj => 
            Object.entries(obj).flatMap(([name, wavs]) => 
                [].concat(
                    (wavs.cv || []).flatMap((line, i) => 
                        line ? `${name}.wav=${line}${suffix},${flt(blank - 50 + dur * i)},${flt(dur * 0.3)},-${flt(dur * 0.8)},${/^[bpdtgkjqzc]/.test(line) ? '50,0' : '50,16'}` : []
                    ),
                    (wavs.vc || []).flatMap((line, i) => {
                        if (!line) return [];
                        const key = ["a", "A0", "e", "@", "er", "ei"].includes(line.split(" ")[1]) ?
                            `${flt(dur * 0.8)},-${flt(dur * 1.2)},${flt(dur * 0.6)}` :
                            `${flt(dur * 0.6)},-${flt(dur * 0.7)},${flt(dur * 0.5)}`;
                        return `${name}.wav=${line}${suffix},${flt(blank + dur * (i + 0.4))},${key},${flt(dur * 0.2)}`
                    })
                )
            );
        const processVCV = data => 
            Object.entries(data).flatMap(([name, wavs]) =>
                (Array.isArray(wavs) ? wavs : []).filter(Boolean).map((line, i) =>
                `${name}.wav=${line}${suffix},${flt(blank + dur * (i + 0.4))},${flt(dur * 0.8)},-${flt(dur * 1.2)},${flt(dur * 0.6)},${flt(dur * 0.2)}`
                )
            );
        const result = {
            Nano: process(oto.CVVC_Nano),
            Lite: process(oto.CVVC_Lite),
            Full: process(oto.CVVC_Full),
            VCV: processVCV(oto.VCV),
            VCV_Nano: processVCV(oto.VCV_Nano).concat(process(oto.VCV_Nano_CVVC))
        }[type] || [];
            output.textContent = result.join('\n')
    } catch (e) {output.textContent = `There was a problem with your fetch operation: ${e}`}
}
async function generateVSDFMX() {  
    const blank = parseInt(document.getElementById('blank').value, 10);
    const dur = 60000 / parseFloat(document.getElementById('BPM').value);
    const type = document.getElementById('type').value;
    try {  
        const oto = await fetch("https://slidingwall.github.io/mandarin-reclist/assets/vsdfmx.json").then(res => res.ok ? res.json() : { error: 'Network response was not ok' });
        const process = obj => 
            Object.entries(obj).flatMap(([name, wavs]) => 
                [].concat(
                    (wavs.cv || []).flatMap((line, i) => 
                        line ? `${line},${name}.wav,${flt(blank - 50 + dur * i)},${flt(blank + dur * i)},${flt(blank - 50 + dur * (i + 0.3))},${flt(blank - 50 + dur * (i + 0.8))},${/^[bpdtgkjqzc]/.test(line) ? flt(blank - 50 + dur * i) : flt(blank - 34 + dur * i)}` : []
                    ),
                    (wavs.vc || []).flatMap((line, i) => {
                        if (!line) return [];
                        const key = ["a", "ao", "e", "ou", "er", "ei"].includes(line.split(" ")[1]) ?
                            `${flt(blank + dur * (i + 1))},${flt(blank + dur * (i + 1.2))},${flt(blank + dur * (i + 1.6))}` :
                            `${flt(blank + dur * (i + 0.9))},${flt(blank + dur * (i + 1))},${flt(blank + dur * (i + 1.1))}`;
                        return `${line},${name}.wav,${flt(blank + dur * (i + 0.4))},${key},${flt(blank + dur * (i + 0.6))}`
                    })
                )
            );
        const result = {
            Nano: process(oto.CVVC_Nano),
            Lite: process(oto.CVVC_Lite),
            Full: process(oto.CVVC_Full)
        }[type] || [];
            output.textContent = result.join('\n')
    } catch (e) {output.textContent = `There was a problem with your fetch operation: ${e}`}
}
async function generateDVCFG() {
    const blank = parseInt(document.getElementById('blank').value, 10) / 1000;
    const dur = 60 / parseFloat(document.getElementById('BPM').value);
    const type = document.getElementById('type').value;
    const f17 = num => num.toFixed(17).replace(/\.?0+$/, '');
    const suffix = document.getElementById('suffix').value;
    const updateTime = new Date().toJSON().slice(0,19).replace(/T|-/g, m => m === 'T' ? ' ' : '-');
    try {
        const oto = await fetch("https://slidingwall.github.io/mandarin-reclist/assets/dvcfg.json").then(res => res.ok ? res.json() : { error: 'Network response was not ok' });
        const process = obj => { 
            const res = {};
            Object.entries(obj).forEach(([name, wavs]) => {
                (wavs.cv || []).forEach((line, i) => {
                    if (!line) return;
                    res[`${suffix}->${line}`] = {
                        connectPoint: 0.05999999865889549,
                        endTime: f17(blank + dur * (i + 0.8) + 0.00999999865889549),
                        pitch: suffix,
                        preutterance: 0.10999999865889549,
                        srcType: "CV",
                        startTime: f17(blank - 0.10999999865889549 + dur * i),
                        symbol: line,
                        tailPoint: f17(dur * 0.8 + 0.11499999865889549),
                        updateTime: updateTime,
                        vowelEnd: f17(dur * 0.8 + 0.05999999865889549),
                        vowelStart: f17(dur * 0.3 + 0.05999999865889549),
                        wavName: `${name}.wav`
                    };
                }); 
                (wavs.vc || []).forEach((line, i) => {
                    if (!line) return;
                    const key = ["a", "ao", "e", "ou", "er", "ei"].includes(line.split(" ")[1]) ? 0.8:0.6;
                    res[`${suffix}->${line}`] = {
                        connectPoint: 0.05999999865889549,
                        endTime: f17(blank + dur * (i + 0.4 + key) + 0.05999999865889549),
                        pitch: suffix,
                        srcType: "VX",
                        startTime: f17(blank + dur * (i + 0.6) - 0.05999999865889549),
                        symbol: line,
                        tailPoint: f17(dur * (key - 0.2) + 0.05999999865889549),
                        updateTime: updateTime,
                        wavName: `${name}.wav`
                    };
                }); 
            }); 
            return res; 
        }; 
        const result = {
            Nano: process(oto.CVVC_Nano),
            Lite: process(oto.CVVC_Lite),
            Full: process(oto.CVVC_Full)
        }[type] || {};
        output.textContent = JSON.stringify(result, null, 2); 
    } catch (e) {output.textContent = `There was a problem with your fetch operation: ${e}`;} 
} 
function downloadResult() {
    const blob = new Blob([output.textContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = {
        utau:`oto_${document.getElementById('type').value}_${document.getElementById('suffix').value}.ini`,
        deepvocal:`voice_${document.getElementById('type').value}_${document.getElementById('suffix').value}.dvcfg`,
        vocalsharp:`${document.getElementById('suffix').value}_${document.getElementById('type').value}.vsdfmx`
    }[document.getElementById('program').value];
    link.click();
    URL.revokeObjectURL(link.href)
}