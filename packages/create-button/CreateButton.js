export default function CreateButton({ html, state }) {
  const { attrs={} } = state
  const booleanAttr = (attrs, attr) => Object.keys(attrs).includes(attr) ? attr : ''
  const disabled = booleanAttr(attrs, 'disabled')
  return html`
<style>
  :host button {
    color: black;
    background-color: var(--positive-400)
  }
  :host button:hover {
    background-color: var(--positive-300)
  }
  :host button:active {
    background-color: var(--positive-500)
  }
  :host button:disabled {
    background-color: var(--positive-200)
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
