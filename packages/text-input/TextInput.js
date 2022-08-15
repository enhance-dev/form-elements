export default function TextInput({ html, state }) {
    const { attrs={} } = state
    const {
      description='',
      form='',
      label='',
      max='',
      maxlength='',
      min='',
      minlength='',
      name='',
      pattern='',
      placeholder='',
      size='',
      step='',
      value='',
      type='',
    } = attrs

    const booleanAttr = (attrs, attr) => Object.keys(attrs).includes(attr) ? attr : ''

    const autocomplete = booleanAttr(attrs, 'autocomplete')
    const autofocus = booleanAttr(attrs, 'autofocus')
    const disabled = booleanAttr(attrs, 'disabled')
    const readonly = booleanAttr(attrs, 'readonly')
    const required = booleanAttr(attrs, 'required')

    return html`
  <label
    for="${name}"
    class="
     radius1
    "
  >
    <p class="pb-2">
      ${label}
    </p>
    <input
      class="p-3 mb-2"
      form="${form}"
      max="${max}"
      maxlength="${maxlength}"
      min="${min}"
      minlength="${minlength}"
      name="${name}"
      pattern="${pattern}"
      placeholder="${placeholder}"
      size="${size}"
      step="${step}"
      type="${type}"
      value="${value}"
      ${autocomplete}
      ${autofocus}
      ${disabled}
      ${readonly}
      ${required}
     >
    <p>
     ${description}
    </p>
  </label>
    `
  }
