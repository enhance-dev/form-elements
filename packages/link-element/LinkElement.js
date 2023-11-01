export default function LinkElement({ html, state }) {
    const { attrs } = state
    const { href } = attrs
    return html`
<style>
  :host {
    --_accent: var(--accent, royalblue);
    color: var(--_accent);
  }
  :host a:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
</style>
<a href="${href}">
  <slot></slot>
</div>
`
}
