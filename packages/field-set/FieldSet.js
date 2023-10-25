export default function FieldSet({ html, state }) {
    const { attrs={} } = state
    const { legend = '' } = attrs

    return html`
<style>
    :host fieldset {
      border-color: var(--gray-500, currentColor)
    }
</style>
<fieldset class="radius0 boder-solid border1 pi0 pb1 mb0">
  <legend class="font-semibold text3 pi-1">${legend}</legend>
  <slot></slot>
</fieldset>
`
  }
