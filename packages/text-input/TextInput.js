export default function TextInput({ html, state }) {
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
  const disabled = booleanAttr(attrs, 'disabled')
  const readonly = booleanAttr(attrs, 'readonly')
  const required = booleanAttr(attrs, 'required')

  return html`
<style>
  :host label input {
    background-color: var(--fe-background, var(--light));
    border-color: var(--fe-border-color, var(--grey-300));
  }
  :host label input:focus {
    outline: none;
    border-color: var(--fe-border-color-focus, var(--grey-700));
    transition: border-color 0.15s ease-in;
  }
  :host .errors {
    color: var(--fe-error-color, var(--error-500));
    border-color: var(--fe-error-color, var(--error-500));
  }
  :host p:not(.errors) {
    color: var(--fe-muted, var(--muted));
  }
</style>
<label
  class="radius0"
>
  <div class="mbe-3 font-semibold ${errors ? 'errors' : ''}">
    ${label}
  </div>
  <input
    class="p-2 flex-grow si-100 font-light radius0 border-solid mbe-2 border1 select-none ${errors ? 'errors' : ''}"
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
    ${disabled ? 'disabled' : ''}
    ${readonly ? 'readonly' : ''}
    ${required ? 'required' : ''}
   >
   ${errors ? `<p class="mbe-3 errors">❌ ${errors}</p>` : ''}
   ${description ? `<p class="mbe-2 text-1">${description}</p>` : ''}
</label>
  `
}
