const fs = require('fs');
const path = require('path');

// Cria o arquivo .nojekyll na pasta out
const outDir = path.join(process.cwd(), 'out');
try {
  fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
  console.log('✅ Arquivo .nojekyll criado com sucesso na pasta out');
} catch (err) {
  console.error('❌ Erro ao criar arquivo .nojekyll:', err);
}
