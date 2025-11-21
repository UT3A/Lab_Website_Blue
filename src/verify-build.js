import fs from 'fs';
import path from 'path';

const distDir = './dist';
const requiredFiles = [
  'index.html',
];

console.log('🔍 驗證建置輸出...\n');

// 檢查 dist 目錄是否存在
if (!fs.existsSync(distDir)) {
  console.error('❌ dist 資料夾不存在！請先執行 npm run build');
  process.exit(1);
}

console.log('✅ dist 資料夾存在');

// 檢查必要檔案
let allFilesExist = true;
requiredFiles.forEach(file => {
  const filePath = path.join(distDir, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`✅ ${file} 存在 (${(stats.size / 1024).toFixed(2)} KB)`);
  } else {
    console.error(`❌ ${file} 不存在！`);
    allFilesExist = false;
  }
});

// 檢查 assets 資料夾
const assetsDir = path.join(distDir, 'assets');
if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const jsFiles = files.filter(f => f.endsWith('.js'));
  const cssFiles = files.filter(f => f.endsWith('.css'));
  
  console.log(`✅ assets 資料夾存在`);
  console.log(`   📦 JavaScript 檔案: ${jsFiles.length} 個`);
  console.log(`   🎨 CSS 檔案: ${cssFiles.length} 個`);
  
  // 顯示檔案大小
  let totalSize = 0;
  files.forEach(file => {
    const filePath = path.join(assetsDir, file);
    const stats = fs.statSync(filePath);
    totalSize += stats.size;
  });
  
  console.log(`   📊 總大小: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
} else {
  console.error('❌ assets 資料夾不存在！');
  allFilesExist = false;
}

// 檢查 index.html 內容
const indexPath = path.join(distDir, 'index.html');
if (fs.existsSync(indexPath)) {
  const content = fs.readFileSync(indexPath, 'utf-8');
  
  // 檢查是否包含必要的標籤
  const checks = [
    { name: 'DOCTYPE', pattern: /<!doctype html>/i },
    { name: 'charset meta', pattern: /<meta charset/i },
    { name: 'viewport meta', pattern: /<meta name="viewport"/i },
    { name: 'root div', pattern: /<div id="root">/i },
    { name: 'script tag', pattern: /<script/i },
  ];
  
  console.log('\n📄 index.html 內容檢查:');
  checks.forEach(check => {
    if (check.pattern.test(content)) {
      console.log(`   ✅ ${check.name}`);
    } else {
      console.log(`   ⚠️  ${check.name} 未找到`);
    }
  });
}

console.log('\n' + '='.repeat(50));
if (allFilesExist) {
  console.log('✅ 建置驗證通過！專案可以部署了。');
  console.log('\n💡 下一步:');
  console.log('   1. 執行 npm run preview 本地預覽');
  console.log('   2. 將 dist/ 資料夾部署到伺服器');
  console.log('   3. 或使用 Vercel/Netlify 等平台部署');
  process.exit(0);
} else {
  console.error('❌ 建置驗證失敗！請檢查錯誤訊息。');
  process.exit(1);
}
