export default function FormElement({ html, state }) {
    const { attrs={} } = state
    const { action = '', method = '' } = attrs

    return html`
<form
  action="${action}"
  method="${method}"
>
  <slot></slot>
</form>
`
  }
