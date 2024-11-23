function format(num) {return num.toFixed(3).replace(/\.?0+$/, '')};
async function generateOTO() {  
    const blank = parseInt(document.getElementById('blank').value, 10);    
    const note = 60000 / parseFloat(document.getElementById('BPM').value);  
    const type = document.getElementById('type').value;  
    const output = document.getElementById('output').textContent;   
    try {  
        const response = await fetch("https://slidingwall.github.io/mandarin-reclist/assets/oto.json");  
        if (!response.ok) output = 'Network response was not ok';  
        const oto = await response.json();  
        const process = (obj) => 
            Object.entries(obj).flatMap(([name, wavs]) => 
                [].concat(
                    (wavs.cv || []).flatMap((line, i) => 
                        line ? `${name}.wav=${line}#,${format(blank - 50 + note * i)},${format(note * 0.3)},-${format(note * 0.8)},${/^[bpdtgkjqzc]/.test(line) ? '50,0' : '50,16'}` : []
                    ),
                    (wavs.vc || []).flatMap((line, i) => {
                        if (!line) return [];
                        const key = ["a", "A0", "e", "@", "er", "ei"].includes(line.split(" ")[1]) ?
                            `${format(note * 0.8)},-${format(note * 1.2)},${format(note * 0.6)}` :
                            `${format(note * 0.6)},-${format(note * 0.7)},${format(note * 0.5)}`;
                        return `${name}.wav=${line}#,${format(blank + note * (i + 0.4))},${key},${format(note * 0.2)}`;
                    })
                )
            );
        const result = type === "Lite" ? process(oto.CVVC_Lite) : type === "Full" ? process(oto.CVVC_Full) : 
            type === "VCV"  ? Object.entries(oto.VCV).flatMap(([name, wavs]) =>
                (Array.isArray(wavs) ? wavs : []).filter(Boolean).map((line, i) =>
                    `${name}.wav=${line}#,${format(blank + note * (i + 0.4))},${format(note * 0.8)},-${format(note * 1.2)},${format(note * 0.6)},${format(note * 0.2)}`
                )
            ) : [];
        output = result.join('\n');
    } catch (error) {output = `There was a problem with your fetch operation: ${error}`};  
}
function downloadResult() {
    const blob = new Blob([document.getElementById('output').textContent], { type: 'text/plain' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `oto_${document.getElementById('type').value}.ini`;
    downloadLink.click();
    URL.revokeObjectURL(downloadLink.href);
}