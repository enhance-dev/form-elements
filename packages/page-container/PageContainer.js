export default function PageContainer({ html }) {
    return html`
<style>
  :host {
    --_fore: var(--fore, currentColor);
    color: var(--_fore);
    background-color: var(--back)
  }
</style>
<div class="p0">
  <slot></slot>
</div>
`
  }
