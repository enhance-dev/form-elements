export default function FieldSet({ html, state }) {
    const { attrs={} } = state
    const { legend = '' } = attrs

    return html`
<style>
    :host fieldset {
        border-color: var(--dark)
    }
</style>
<fieldset class="radius0 boder-solid border1 pr0 pl0 pt1 pb1">
  <legend class="font-semibold text3 pl-1 pr-1">${legend}</legend>
  <slot></slot>
</fieldset>
`
  }
