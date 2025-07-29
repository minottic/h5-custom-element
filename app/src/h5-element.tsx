import React from 'react';
import ReactDOM from 'react-dom/client';
import H5Wrapper from './h5-wrapper';
import h5webCss from '@h5web/app/dist/styles.css';

export class H5WebViewer extends HTMLElement {
  private root?: ReactDOM.Root;
  private shadow?: ShadowRoot;
  private container?: HTMLDivElement;
  private _file?: File;

  static get observedAttributes() {
    return [];
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      this.shadow = this.attachShadow({ mode: 'open', delegatesFocus: true });

      const styleEl = document.createElement('style');
      styleEl.textContent = h5webCss;

      this.container = document.createElement('div');
      this.shadow.appendChild(styleEl);
      this.shadow.appendChild(this.container);
    } else {
      this.shadow = this.shadowRoot;
    }

    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
  }

  set file(file: File) {
    this._file = file;
    this.mount();
  }

  private mount() {
    if (!this.container || !this.isConnected) return;

    if (!this.root) {
      this.root = ReactDOM.createRoot(this.container);
    }

    this.root.render(React.createElement(H5Wrapper, { file: this._file }));
  }

  private unmount() {
    this.root?.unmount();
    this.root = undefined;
  }
}
