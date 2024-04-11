import {html, css} from 'lit';

import {App, TiniComponent} from '@tinijs/core';

@App()
export class AppRoot extends TiniComponent {
  protected render() {
    return html`
      <h1>Hello! 👋</h1>
      <p>Thank you for using the TiniJS <strong>Bare</strong> template.</p>
      <p>Get started from <code>./app/app.ts</code>.</p>
      <p>
        For more detail, please visit
        <a href="https://tinijs.dev/" target="_blank">tinijs.dev</a>.
      </p>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0 auto;
      padding: 1rem;
      max-width: 768px;
      font-family: sans-serif;
    }

    code {
      background-color: #f4f4f4;
      padding: 0.1rem 0.2rem;
      border-radius: 0.2rem;
    }
  `;
}
