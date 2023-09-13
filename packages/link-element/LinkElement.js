export default function LinkElement({ html, state }) {
    const { attrs } = state
    const { href } = attrs
    return html`
<style>
  :host {
    color: var(--fe-primary, var(--primary-500));
  }
  :host a:hover {
    text-decoration: underline;
  }
</style>
<a href="${href}">
  <slot></slot>
</div>
`
  }
