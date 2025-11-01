import BaseStyle from '@primevue/core/base/style'

const style = `
.p-doublebutton {
    width: fit-content;
}
    
.p-doublebutton-container {
    display: flex;
    background-color: dt('doublebutton.backgroundColor');
    border: 1px solid dt('doublebutton.borderColor');
    border-radius: dt('doublebutton.borderRadius');
    align-items: center;
    justify-content: center;
    gap: dt('doublebutton.buttonSpacing');
    flex-wrap: wrap;
    padding: dt('doublebutton.containerPadding');
}

.p-doublebutton-first-button {
    // Styles for the first button can be added here
}

.p-doublebutton-second-button {
    // Styles for the second button can be added here
}
`

const classes = {
  root: ['p-doublebutton p-component'],
  buttonContainer: 'p-doublebutton-container',
  pcFirstButton: 'p-doublebutton-first-button',
  pcSecondButton: 'p-doublebutton-second-button',
}

// @ts-expect-error Primevue does not export this method
export default BaseStyle.extend({
  name: 'doublebutton',
  style,
  classes,
})
