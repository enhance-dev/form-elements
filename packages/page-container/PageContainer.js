export default function PageContainer({ html }) {
    return html`
<style>
  :host {
    color: var(--dark);
    background-color: var(--light)
  }
</style>
<div class="font-sans p-1">
  <slot></slot>
</div>
`
  }
