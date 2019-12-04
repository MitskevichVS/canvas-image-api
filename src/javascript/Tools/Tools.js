export default class ToolsSelection {
  highlight(e) {
    const element = document.getElementById(e);
    const parentElement = element.parentNode;
    const parentElementChildArray = [...parentElement.children];
    parentElementChildArray.forEach((item) => { item.classList.remove('selected_tools'); });
    element.classList.add('selected_tools');
    return this;
  }

  colorPickerTool() {
    const eyedropper = document.querySelector('.colorpick-eyedropper-input-trigger');
    eyedropper.click();
  }

  changeColors(app, primary, secondary) {
    const primaryIndicator = primary;
    const secondaryIndicator = secondary;

    primaryIndicator.value = app.primaryColor;
    secondaryIndicator.style.backgroundColor = app.secondaryColor;
    return this;
  }
}
