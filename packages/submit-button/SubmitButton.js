export default function SubmitButton({ html, state }) {
  const { attrs={} } = state
  const booleanAttr = (attrs, attr) => Object.keys(attrs).includes(attr) ? attr : ''
  const disabled = booleanAttr(attrs, 'disabled')
  const cursor = disabled
    ? 'cursor-not-allowed'
    : 'cursor-pointer'

    return html`
<style>
  :host {
    --_accent: var(--accent, royalblue);
    --_fore: var(--fore, black);
    --_back: var(--back, white);
  }
  :host button {
    color: var(--_back);
    background-color: var(--_accent, var(--_fore));
    border: 1px solid transparent;
  }
  :host button:active {
    color: var(--_fore);
    background-color: var(--_accent, var(--_back));
    border: 1px solid var(--_fore);
  }
  :host button:disabled {
    color: var(--_accent, var(--_fore));
    background-color: var(--_fore);
    border: 1px solid var(--_accent, var(--_back));
  }
</style>
<button
  class="
   whitespace-no-wrap
   pb-3
   pi0
   font-semibold
   radius0
   ${cursor}
  "
  ${disabled ? 'disabled' : ''}
>
  <slot name="label"></slot>
</button>
    `
  }
