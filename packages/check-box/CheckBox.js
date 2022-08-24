export default function CheckBox({ html, state }) {
    const { attrs={} } = state
    const {
      description='',
      errors='',
      form='',
      id='',
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
    const checked = booleanAttr(attrs, 'checked')
    const disabled = booleanAttr(attrs, 'disabled')
    const readonly = booleanAttr(attrs, 'readonly')
    const required = booleanAttr(attrs, 'required')

    return html`
    <style>
      :host label input {
        background-color: var(--light);
        border-color: var(--grey-300);
      }
      :host label input:focus {
        outline: 1px solid var(--grey-700);
        transition: outline 0.15s ease-in;
      }
      :host .errors {
        color: var(--error-500);
        border-color: var(--error-500);
      }
      :host p:not(.errors) {
        color: var(--muted)
      }
    </style>
    <label
      for="${name}"
      class="radius0"
    >
      <input
        class="p-2 flex-grow font-light text0 radius0 border-solid mb-2 mr-4 border1 select-none ${errors ? 'errors' : ''}"
        ${form ? `form="${form}"` : ''}
        ${id ? `id="${id}" name="${id}"` : ''}
        ${max ? `max="${max}"` : ''}
        ${maxlength ? `maxlength="${maxlength}"` : ''}
        ${min ? `min="${min}"` : ''}
        ${minlength ? `minlength="${minlength}"` : ''}
        ${pattern ? `pattern="${pattern}"` : ''}
        ${placeholder ? `placeholder="${placeholder}"` : ''}
        ${size ? `size="${size}"` : ''}
        ${step ? `step="${step}"` : ''}
        ${type ? `type="${type}"` : ''}
        ${value ? `value="${value}"` : ''}
        ${autocomplete ? 'autocomplete' : ''}
        ${autofocus ? 'autofocus' : ''}
        ${checked ? 'checked' : ''}
        ${disabled ? 'disabled' : ''}
        ${readonly ? 'readonly' : ''}
        ${required ? 'required' : ''}
       >
       <span class="mb-2 ${errors ? 'errors' : ''}">
        ${label}
      </span>
       ${errors ? `<p class="mb-3 errors">
    ❌ ${errors}
    </p>` : ''}
      ${description ? `<p class="mb-2 text-1">
    ${description}
    </p>` : ''}
    </label>
      `
  }
