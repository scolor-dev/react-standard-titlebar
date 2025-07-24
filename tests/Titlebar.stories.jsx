import React from 'react';
import { Titlebar } from '../src';
import { ThemeProvider } from '../src';
import '../src/styles/index.scss';

export default {
  title: 'Components/Titlebar',
  component: Titlebar,
};

export const Light = () => (
  <>
    <ThemeProvider
      theme="light"
    >
        <Titlebar title="test"/>
    </ThemeProvider>
    <main>
        aaa
    </main>
  </>
);

export const Dark = () => (
  <ThemeProvider
    theme="dark"
  >
      <Titlebar title="test"/>
      <main>
          aaa
      </main>
  </ThemeProvider>
);