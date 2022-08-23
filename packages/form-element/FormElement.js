export default function FormElement({ html, state }) {
    const { attrs={} } = state
    const { action = '', method = '' } = attrs

    return html`
<style>
    :host form {
        min-width: 20rem;
        max-width: 40rem;
    }
</style>
<form class="flex flex-col gap-1 m-auto" action="${action}" method="${method}">
  <slot></slot>
</form>
`
  }
