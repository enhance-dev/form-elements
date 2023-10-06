export default function PageContainer({ html }) {
    return html`
<style>
  :host {
    color: var(--fore);
    background-color: var(--back)
  }
</style>
<div class="p0">
  <slot></slot>
</div>
`
  }
