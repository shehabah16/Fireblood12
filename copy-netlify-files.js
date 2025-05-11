import { promises as fs } from 'fs';
import path from 'path';

async function copyNetlifyFiles() {
  try {
    // Ensure the dist/public directory exists
    const distDir = path.resolve(process.cwd(), 'dist/public');
    
    console.log('Copying Netlify configuration files...');
    
    // Copy _redirects file
    const redirectsSource = path.resolve(process.cwd(), 'client/public/_redirects');
    const redirectsDest = path.resolve(distDir, '_redirects');
    await fs.copyFile(redirectsSource, redirectsDest);
    console.log('✓ _redirects file copied');
    
    // Copy 404.html file
    const notFoundSource = path.resolve(process.cwd(), 'client/public/404.html');
    const notFoundDest = path.resolve(distDir, '404.html');
    await fs.copyFile(notFoundSource, notFoundDest);
    console.log('✓ 404.html file copied');
    
    console.log('All Netlify files copied successfully!');
  } catch (error) {
    console.error('Error copying Netlify files:', error);
    process.exit(1);
  }
}

copyNetlifyFiles();