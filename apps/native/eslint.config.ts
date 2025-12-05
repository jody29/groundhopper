import twoDigits from '@2digits/eslint-config';

export default twoDigits({
  ignores: {
    gitIgnore: {
      files: ['./.gitignore', '../../.gitignore'],
    },
    ignores: ['metro.config.js'],
  },
  tailwind: false,
});
