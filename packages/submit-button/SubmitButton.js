export default function SubmitButton({ html, state }) {
  const { attrs={} } = state
  const booleanAttr = (attrs, attr) => Object.keys(attrs).includes(attr) ? attr : ''
  const disabled = booleanAttr(attrs, 'disabled')

    return html`
<style>
  :host button {
    color: var(--light);
    background-color: var(--primary-500)
  }
  :host button:hover {
    background-color: var(--primary-400)
  }
  :host button:active {
    background-color: var(--primary-600)
  }
  :host button:disabled {
    background-color: var(--primary-200)
  }
</style>
<button
  class="
   whitespace-no-wrap
   pb-3
   pi0
   font-semibold
   ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
   radius0
  "
  ${disabled ? 'disabled' : ''}
>
  <slot name="label"></slot>
</button>
    `
  }
