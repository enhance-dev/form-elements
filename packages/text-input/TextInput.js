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
    background-color: var(--light);
    border-color: var(--grey-300);
    border-width: 1px;
    user-select: none;
  }
  :host label input:focus {
    outline: none;
    border-color: var(--grey-700);
    transition: border-color 0.15s ease-in;
  }
  :host .errors {
    color: var(--crimson);
    border-color: var(--crimson);
  }
</style>
<label
  for="${name}"
  class="
   radius1
  "
>
  <p class="pb-3 ${errors ? 'errors' : ''}">
    ${label}
  </p>
  <input
    class="p-2 flex-grow w-full font-light text0 radius1 border-solid mb-2 ${errors ? 'errors' : ''}"
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
   ${errors ? `<p class="mb-3 errors">
❌ ${errors}
</p>` : ''}
  ${description ? `<p class="mb-3">
${description}
</p>` : ''}
</label>
  `
}
