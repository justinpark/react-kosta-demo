import path from 'path';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import { configure } from '@storybook/react';

import '../src/App.css';

function requireComponent(srcFile, requireFn) {
  const componentName = path.basename(srcFile, path.extname(srcFile));
  const componentPath = path.dirname(srcFile).slice(2);

  interopRequireDefault(requireFn(srcFile));
}

function importAll(requireContext) {
  requireContext.keys().forEach((srcFile) => {
    requireComponent(srcFile, requireContext);
  });
}

function loadStories() {
  const stories = require.context('../src/stories', true, /Story\.jsx$/);
  importAll(stories);
}

configure(loadStories, module);
