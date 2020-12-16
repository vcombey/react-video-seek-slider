import * as React from "react";
import SeekSlider from "@yay2008/react-video-seek-slider";
import "./App.less";

export type AppStates = {
    currentTime: number;
    progress: number;
    test: boolean;
};

export default class App extends React.Component<{}, AppStates> {

    private video: HTMLVideoElement | null;
    public constructor(props: {}) {
        super(props);
        this.state = {
            currentTime: 10,
            progress: 0,
            test: false,
        };
    }

    private setSeeking = ( evt: React.MouseEvent): void => {
        // evt.preventDefault();
        evt.stopPropagation();
        evt.nativeEvent.stopImmediatePropagation();
    }

    public componentDidMount(): void {
        setInterval(() => {
            this.setState({
                currentTime: this.state.currentTime < 11150 ? this.state.currentTime + 10 : 0,
            });
        }, 100);
        setInterval(() => {
            this.setState({
                progress: this.state.progress < 11150 ? this.state.progress + 20 : 0,
            });
        }, 100);
        // setInterval(() => {
        //     this.setState({
        //         progress: this.state.progress < 11150 ? this.state.progress + 20 : 0,
        //     });
        // }, 100);
    }

    private getSlider(): React.ReactNode {
        return <SeekSlider
            fullTime={this.video ? this.video.duration : 11150}
            thumbColor={"black"}
            bufferColor={"#D8D8D8"}
            sliderColor={"pink"}
            // sliderHoverColor={"red"}
            currentTime={this.video ? this.video.currentTime : this.state.currentTime}
            // bufferProgress={this.state.progress}
            onChange={(time: number) => {
                this.setState({
                    currentTime: time,
                });
                if (this.video) {
                    this.video.currentTime = this.state.currentTime;
                }
            }}
            onChangeCurTime={(mtime: number) => console.log(mtime)}
            limitTimeTooltipBySides={true}
        />;
    }

    public render(): React.ReactNode {
        return (
            <div className="container"
            >
                <h1>React slider</h1>
                <video width={480} height={360} ref={ref => this.video = ref} muted={true} controls={false}
                       src={"http://ykd-vod.yunkaodian.com/13.mp4"} preload="preload"/>
                {this.video &&
                 this.getSlider()
                }
            </div>
        );
    }
}
