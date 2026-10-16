const fs = require('fs');

function cleanSvg(svgStr) {
  if (!svgStr) return null;
  let svg = svgStr.trim();
  // Ensure xmlns
  if (!svg.includes('xmlns=')) {
    svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  // Convert JSX attributes to standard SVG attributes
  svg = svg.replace(/strokeWidth=/g, 'stroke-width=')
           .replace(/strokeDasharray=/g, 'stroke-dasharray=')
           .replace(/fillOpacity=/g, 'fill-opacity=')
           .replace(/strokeOpacity=/g, 'stroke-opacity=')
           .replace(/fontSize=/g, 'font-size=')
           .replace(/fontWeight=/g, 'font-weight=')
           .replace(/fontFamily=/g, 'font-family=')
           .replace(/textAnchor=/g, 'text-anchor=')
           .replace(/dominantBaseline=/g, 'dominant-baseline=')
           .replace(/stopColor=/g, 'stop-color=')
           .replace(/stopOpacity=/g, 'stop-opacity=');

  // Add styling & class for responsive, clean container rendering
  if (!svg.includes('class="q-diagram-svg"')) {
    svg = svg.replace('<svg', '<svg class="q-diagram-svg"');
  }
  // Check if viewBox exists, if width/height exist without viewBox, add viewBox
  if (!svg.includes('viewBox')) {
    const wMatch = svg.match(/width="(\d+)"/i);
    const hMatch = svg.match(/height="(\d+)"/i);
    if (wMatch && hMatch) {
      svg = svg.replace('<svg', `<svg viewBox="0 0 ${wMatch[1]} ${hMatch[1]}"`);
    }
  }
  return svg;
}

const files = [
  'chat_1_Force.md',
  'chat_2_WORK_ENERGY_POWER.md',
  'chat_3_MACHINES.md',
  'chat_4_REFRACTION_OF_LIGHT.md',
  'chat_5_Write_Lens_MCQ_Bank.md',
  'chat_6_Generate_Physics_MCQs.md',
  'chat_7_Create_Sound_MCQ_Bank.md',
  'chat_8_Physics_MCQ_Bank.md'
];

files.forEach(f => {
  const content = fs.readFileSync('./raw_chats/' + f, 'utf8');
  const svgMatches = content.match(/<svg[\s\S]*?<\/svg>/gi) || [];
  console.log(`\n=== ${f}: ${svgMatches.length} raw SVGs ===`);
  
  let validViewBox = 0;
  let hasLines = 0;
  let hasText = 0;
  let hasPaths = 0;

  svgMatches.forEach(raw => {
    const cleaned = cleanSvg(raw);
    if (cleaned.includes('viewBox')) validViewBox++;
    if (cleaned.includes('<line') || cleaned.includes('<polyline')) hasLines++;
    if (cleaned.includes('<text')) hasText++;
    if (cleaned.includes('<path')) hasPaths++;
  });

  console.log(`  With viewBox: ${validViewBox}/${svgMatches.length}`);
  console.log(`  With geometric lines: ${hasLines}`);
  console.log(`  With text labels: ${hasText}`);
  console.log(`  With paths/curves: ${hasPaths}`);

  if (svgMatches.length > 0) {
    const sample = cleanSvg(svgMatches[0]);
    console.log(`  Sample SVG opening tag: ${sample.substring(0, 180).replace(/\n/g, ' ')}`);
  }
});
