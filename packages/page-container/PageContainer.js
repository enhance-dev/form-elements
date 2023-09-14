export default function PageContainer({ html }) {
    return html`
<style>
  :host {
    color: var(--fe-dark, var(--dark));
  }
  :host div {
    background-color: var(--fe-light, var(--light));
  }
</style>
<div class="p0">
  <slot></slot>
</div>
`
  }
