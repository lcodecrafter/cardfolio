import { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import customViteConfig from './vite.config.mjs';

const config: StorybookConfig = {
  stories: ['../src/**/story.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  async viteFinal(config) {
    return mergeConfig(config, customViteConfig);
  },
};
export default config;
