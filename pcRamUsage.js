const os = require("os");

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os;

  const tRam = parseFloat(totalmem() / 1024 / 1024/1024);
  const fRam = parseInt(freemem() / 1024 / 1024);
  const usage = ((tRam / fRam)*100)*100

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRam: `${tRam.toFixed(2)} GB`,
    FreeRam: `${fRam} MB`,
    Usage: `${usage.toFixed()}%`
  };

  console.clear();
  console.table(stats);
  exports.stats = stats;
}, 1500);
