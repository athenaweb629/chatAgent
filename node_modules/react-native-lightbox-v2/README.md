# react-native-lightbox-v2

👀 0.8.9-beta.0 is coming!

> *Fork this project to do some updates, because the original library seems to be out of maintenance！*
> *Thanks Joel Arvidsson*

## Installation

*I changed the name in order to publish to npm, it is not actually a new version, it just fixed some problems based on the original！*

```shell
yarn add react-native-lightbox-v2
```

## Usage

> Note: react-native-lightbox-v2 will no longer support navigator after version 0.8.9.

`navigator` property is optional but recommended on iOS, see next section for `Navigator` configuration.

```js
import Lightbox from 'react-native-lightbox-v2';

const LightboxView = ({ navigator }) => (
  <Lightbox navigator={navigator}>
    <Image
      style={{ height: 300 }}
      source={{ uri: 'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg' }}
    />
  </Lightbox>
);
```

### can long press to save image?

`longPressCallback` can resolve it!

```js
const uri = 'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg'
const longPress = (uri) => {
  CameraRoll.saveToCameraRoll(uri)
}
<Lightbox longPressCallback={() => longPress(uri)}>
    <Image
      style={{ height: 300 }}
      source={{ uri }}
    />
  </Lightbox>
```

### Navigator setup/Android support

> Note: react-native-lightbox-v2 will no longer support navigator after version 0.8.9.

For android support you must pass a reference to a `Navigator` since it does not yet have the `Modal` component and is not on the official todo list. See the `Example` project for a complete example.

```js
const renderScene = (route, navigator) => {
  const Component = route.component;

  return (
    <Component navigator={navigator} route={route} {...route.passProps} />
  );
};

const MyApp = () => (
  <Navigator
    ref="navigator"
    style={{ flex: 1 }}
    renderScene={renderScene}
    initialRoute={{
      component: LightboxView,
    }}
  />
);
```

## Properties

| Prop | Type | Description |
|---|---|---|
|**`activeProps`**|`object`|Optional set of props applied to the content component when in lightbox mode. Usable for applying custom styles or higher resolution image source.|
|**`renderHeader(close)`**|`function`|Custom header instead of default with X button|
|**`renderContent`**|`function`|Custom lightbox content instead of default child content|
|**`willClose`**|`function`|Triggered before lightbox is closed|
|**`onClose`**|`function`|Triggered when lightbox is closed|
|**`onOpen`**|`function`|Triggered when lightbox is opened|
|**`didOpen`**|`function`|Triggered after lightbox is opened|
|**`onLongPress`**|`function`|Triggered after lightbox is long pressed|
|**`onLayout`**|`function`|Triggered after lightbox layout complete|
|**`doubleTapCallback`**|`function`|Triggered after double taped|
|**`doubleTapZoomEnabled`**|`boolean`|Enable double-tap to zoom , defaults to true|
|**`doubleTapGapTimer`**|`number`|Determine the time interval of double-tap, defaults 500ms|
|**`longPressGapTimer`**|`number`|Determine the time interval of long-press, defaults 2000ms|
|**`longPressCallback`**|`function`|Triggered after the content is long pressed|
|**`doubleTapZoomToCenter`**|`boolean`|Zoom to center when double-tap trigger|
|**`doubleTapMaxZoom`**|`number`|Maximum magnification factor, defaults to 2|
|**`doubleTapZoomStep`**|`number`|The zoom ratio of each double-tap, defaults to 0.5|
|**`underlayColor`**|`string`|Color of touchable background, defaults to `black`|
|**`backgroundColor`**|`string`|Color of lightbox background, defaults to `black`|
|**`swipeToDismiss`**|`bool`|Enables gestures to dismiss the fullscreen mode by swiping up or down, defaults to `true`.|
|**`disabled`**|`bool`|disable the lightbox. defaults to `false`.|
|**`style`**|`object`|lightbox view wrapper's style.|
|**`dragDismissThreshold`**|`number`|threshold distance for sliding exit. defaults to `150`.|
|**`modalProps`**|`object`|any other modal props you need. defaults to `{}`.|
|**`useNativeDriver`**|`bool`|wether use native driver. defaults to `false`.|
|**`springConfig`**|`object`|[`Animated.spring`](https://facebook.github.io/react-native/docs/animations.html) configuration, defaults to `{ tension: 30, friction: 7 }`.|

## Demo

![Demo](https://cloud.githubusercontent.com/assets/378279/9074360/16eac5d6-3b09-11e5-90af-a69980e9f4be.gif)

## Example

Check full example in the `Example` folder.

## Changelog

[Changelog](./CHANGELOG.md)

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Joel Arvidsson
