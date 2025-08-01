import React from 'react';
import { Titlebar } from '../src';
import { TitlebarProvider } from '../src';
import '../src/styles/index.scss';

export default {
  title: 'Components/Titlebar',
  component: Titlebar,
};

export const Light = () => (
  <>
    <TitlebarProvider
      theme="light"
    layout="standard"
    >
        <Titlebar title="light standard"/>
    </TitlebarProvider>
    <main>
        theme = light
    </main>
  </>
);

export const HideLight = () => (
  <>
    <TitlebarProvider
      theme="hide-light"
    layout="standard"
    >
        <Titlebar title="hide light standard"/>
    </TitlebarProvider>
    <main>
        theme = light
    </main>
  </>
);

export const HideDarkSlim = () => (
  <TitlebarProvider
    theme="hide-dark"
    layout="slim"
  >
      <Titlebar title="hide dark slim"/>
      <main>
        theme = hide-dark
        layout = slim
      </main>
  </TitlebarProvider>
);