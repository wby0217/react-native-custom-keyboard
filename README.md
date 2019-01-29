# the custom nemeric keyboard

> A custom nemeric keyboard for react native

## install

```json
// package.json
"react-native-custom-Keyboard": "git+https://gitlab.kosun.net/frontend/react-native-custom-keyboard#master"

```
## Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| isOpen | false | `bool` | hide/show the custom keyboard|
| keyboardType | float | `string` | type of keyboard using `float` or `number` or `identity`|
| buttonLabel | - | `string` | the title of the button , example `confirm` |
| underlayColor | #EFEFEF | `string` | background color of the keyboard when 
activity |
| defaultValue | - | `string` | the default value will be showed when render，is must be required |
| buttonBgColor | #0284d8 | `string` | the background color for button |
| buttonColor | #FFFFFF | `string` | the text color for button |
| animationDuration | 400 | `number` | Duration of the animation when show 
and hide |


## Event

| Prop  | Params  | Description |
| :------------ |:---------------:| :---------------:|
| onButtonPress | Function(value: string) | The callback triggered when press the button |
| onTextChange | Function(value: string) | The callback triggered when the value is changed |
| onClosedHandle | - | When the keyboard is hide and the animation is done |

## Methods
These methods are optional, you can use the isOpen property instead   

| Prop  | Params  | Description |
| :------------ |:---------------:| :---------------:|
| open | - | Open the keyboard |
| close | - | Close the keyboard |

[See Example](./Example/index.ios.js)