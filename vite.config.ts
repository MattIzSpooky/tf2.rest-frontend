import type { UserConfig } from 'vite';

import eslintPlugin from './vite-eslint';
import reactPlugin from 'vite-plugin-react';

const config: UserConfig = {
  jsx: 'react',
  plugins: [eslintPlugin(), reactPlugin]
};

export default config;
