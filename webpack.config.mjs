import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: './static/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/client')
  },
  devServer: {
    static: ['./static', 'node_modules/bootstrap/dist'],
    port: 5100,
    proxy: [
    {
      context: ['/api'],
      target: 'http://localhost:3000',
      changeOrigin: true, // Optional: useful for name-based virtual hosted sites
    },
  ], 
  }
}