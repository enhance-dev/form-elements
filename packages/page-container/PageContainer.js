export default function PageContainer({ html }) {
    return html`
<style>
  :host {
    color: var(--dark);
    background-color: var(--light)
  }
</style>
<div class="p0">
  <slot></slot>
</div>
`
  }
