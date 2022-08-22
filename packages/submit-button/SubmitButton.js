export default function SubmitButton({ html, state }) {
    return html`
<style>
  enhance-submit-button button {
    color: var(--light);
    background-color: var(--primary-500)
  }
  enhance-submit-button button:focus, enhance-submit-button button:hover {
    outline: none;
    background-color: var(--primary-400)
  }
</style>
<button class="whitespace-no-wrap pb-3 pt-3 pl0 pr0 font-medium text0 cursor-pointer radius1 "><slot name="label"></slot></button>
    `
  }
