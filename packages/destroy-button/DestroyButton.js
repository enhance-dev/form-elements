export default function DestroyButton({ html, state }) {
  const { attrs={} } = state
  const booleanAttr = (attrs, attr) => Object.keys(attrs).includes(attr) ? attr : ''
  const disabled = booleanAttr(attrs, 'disabled')
  return html`
<style>
  :host button {
    color: black;
    background-color: var(--negative-300)
  }
  :host button:hover {
    background-color: var(--negative-200)
  }
  :host button:active {
    background-color: var(--negative-400)
  }
  :host button:disabled {
    background-color: var(--negative-100)
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
