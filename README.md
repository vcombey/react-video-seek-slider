# @zeklouis/react-video-seek-slider forked from @yay2008

> a video seek slider

[![NPM](https://img.shields.io/npm/v/@yay2008/react-video-seek-slider.svg)](https://www.npmjs.com/package/@yay2008/react-video-seek-slider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)



## 1. Description

This project is using：`React` `Typescript`

Packaging tools are： `rollup`  



## 2. Installation

```bash
npm install --save @zeklouis/react-video-seek-slider

or

yarn add @zeklouis/react-video-seek-slider
```



## 3. API

| Parameter                       | Description               | Type                                         | Default |
| :------------------------- | :----------------- | :------------------------------------------- | :----: |
| fullTime                | Total time    | number                                  |        |
| currentTime             | Current time | number |        |
| onChange | Change callback | (time: number, offsetTime: number) => void |        |
| offset | Offset | number | 0 |
| bufferProgress? | buffer | number          |        |
| hideHoverTime? | Whether to enable hover display time function | boolen         | false |
| secondsPrefix? | Second display | string         | "00:" |
| minutesPrefix? | Points display | string          | "00:" |
| limitTimeTooltipBySides? | Where to insert the three-way button | boolean         |        |
| sliderColor? | Progress bar color | string          |        |
| sliderHoverColor? | The color of the progress bar displayed by hover | string          |        |
| thumbColor? | thumb color | string          |        |
| bufferColor? | buffer color | string          |        |



## 4. Usage overview

```tsx
import * as React from "react";
import ToolBox from "@netless/react-tool-box";

export default class ToolBoxExample extends React.Component<{}, {}> 
  render () {
    return (
      <SeekSlider
         fullTime={player.timeDuration}
         currentTime={this.getCurrentTime(this.state.currentTime)}
         onChange={(time: number, offsetTime: number) => {
             if (this.state.player) {
                 this.setState({currentTime: time});
                this.state.player.seekToScheduleTime(time);
             }
         }}
         hideHoverTime={true}
         limitTimeTooltipBySides={true}
        />
    )
  }
}
```

## 5. Start the project

1. Get the source code

    ```bash
    git clone https://github.com/zeklouis/react-video-seek-slider.git
    ```

2. Enter the project and install library file dependencies

    ```bash
    cd react-video-seek-slider
    yarn
    ```

3. Start library file project

    ```bash
        yarn start
    ```

4. And installed into the project examplefile dependencies

    ```bash
        cd example
        yarn
    ```

5. Start exampleproject

    ```bash
        yarn start
    ```

## 6. Project screenshot

![slider](https://ohuuyffq2.qnssl.com/WeChat9c5904e21b183e907841753055f7d650.png)

## License

MIT © [zeklouis](https://github.com/zeklouis)
