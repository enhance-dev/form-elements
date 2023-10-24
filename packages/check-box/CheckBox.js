export default function CheckBox({ html, state }) {
    const { attrs={} } = state
    const {
      description='',
      errors='',
      form='',
      id='',
      label='',
      name='',
      value='',
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
      :host label input[type='checkbox'] {
        appearance: none;
        -webkit-appearance: none;
        gap: 0.5rem;
        margin: 0;
        display: flex;
        background: var(--back);
        color: currentColor;
        aspect-ratio: 1/1;
        width: 1rem;
      }

      :host label input[type="checkbox"]::before {
        content: "";
        aspect-ratio: 1/1;
        width: 100%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1rem 1rem var(--accent);
        background-color: CanvasText;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      }

      :host label input[type="checkbox"]:checked::before {
        transform: scale(1);
      }

      :host label input:focus {
        transition: outline 0.15s ease-in;
      }

      :host .errors {
        color: var(--negative-500);
        border-color: var(--negative-500);
      }
    </style>
    <label
      class="
        leading1
        flex
        gap-3
        align-items-center
        radius0
        cursor-pointer
      "
    >
      <input
        class="
          border-current
          border-solid
          border1
          select-none
          text1
          radius0
          cursor-pointer
          ${errors ? 'errors' : ''}
        "
        type='checkbox'
        ${form ? `form="${form}"` : ''}
        ${id ? `id="${id}"` : ''}
        ${name || id ? `name="${name || id}"` : ''}
        ${value ? `value="on"` : ''}
        ${autocomplete ? 'autocomplete' : ''}
        ${autofocus ? 'autofocus' : ''}
        ${checked || value.toString() === 'true' ? 'checked' : ''}
        ${disabled ? 'disabled' : ''}
        ${readonly ? 'readonly' : ''}
        ${required ? 'required' : ''}
       >
       <span class="mb-2 ${errors ? 'errors' : ''}">
         ${label}
       </span>
    </label>
      `
  }
