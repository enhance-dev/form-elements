import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const elements = [
    { name: 'CheckBox', tag: 'enhance-checkbox'},
    { name: 'FieldSet', tag: 'enhance-fieldset'},
    { name: 'FormElement', tag: 'enhance-form'},
    { name: 'LinkElement', tag: 'enhance-link-element'},
    { name: 'PageContainer', tag: 'enhance-page-container'},
    { name: 'SubmitButton', tag: 'enhance-submit-button'},
    { name: 'TextInput', tag: 'enhance-text-input'}
]

function main() {
    const cwd = process.cwd()
    const elementsFolder = join(cwd, 'app', 'elements')

    if (!existsSync(elementsFolder)){
        mkdirSync(elementsFolder, { recursive: true });
    }

    elements.map(element => writeFileSync(join(elementsFolder, `${element.tag}.mjs`), `import { ${element.name} } from '@enhance/form-elements'
export default ${element.name}`))
}

main()


