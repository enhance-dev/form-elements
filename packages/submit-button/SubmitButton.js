export default function SubmitButton({ html, state }) {
    return html`
<style>
  :host button {
    color: var(--fe-light, var(--light));
    background-color: var(--fe-button-color, var(--primary-500));
  }
  :host button:focus, :host button:hover {
    outline: none;
    background-color: var(--fe-button-color-hover, var(--primary-400));
  }
</style>
<button class="whitespace-no-wrap pb-3 pi0 font-semibold cursor-pointer radius0"><slot name="label"></slot></button>
    `
  }
