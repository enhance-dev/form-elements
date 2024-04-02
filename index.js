import CheckBox from './packages/check-box/CheckBox.js'
import LinkElement from './packages/link-element/LinkElement.js'
import FieldSet from './packages/field-set/FieldSet.js'
import FormElement from './packages/form-element/FormElement.js'
import PageContainer from './packages/page-container/PageContainer.js'
import SubmitButton from './packages/submit-button/SubmitButton.js'
import TextInput from './packages/text-input/TextInput.js'

const elements = {
    "enhance-checkbox": CheckBox,
    "enhance-link": LinkElement,
    "enhance-fieldset": FieldSet,
    "enhance-form": FormElement,
    "enhance-page-container": PageContainer,
    "enhance-submit-button": SubmitButton,
    "enhance-text-input": TextInput,
}

export default elements

export {
    CheckBox,
    FieldSet,
    FormElement,
    LinkElement,
    PageContainer,
    SubmitButton,
    TextInput
}
