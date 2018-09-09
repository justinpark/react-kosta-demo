
import React from "react";
import PropTypes from "prop-types";

import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import { ChartCanvas, Chart } from "react-stockcharts";
import {
  BarSeries,
  AreaSeries,
  CandlestickSeries,
  LineSeries,
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
  CrossHairCursor,
  EdgeIndicator,
  CurrentCoordinate,
  MouseCoordinateX,
  MouseCoordinateY,
} from "react-stockcharts/lib/coordinates";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import {
  OHLCTooltip,
  MovingAverageTooltip,
} from "react-stockcharts/lib/tooltip";
import { ema, sma } from "react-stockcharts/lib/indicator";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";

import { withStyles, withStylesPropTypes } from './withStyles';

const propTypes = {
  ...withStylesPropTypes,
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

class CandleStickChartWithEdge extends React.Component {
  render() {
    const ema20 = ema()
      .id(0)
      .options({ windowSize: 20 })
      .merge((d, c) => {d.ema20 = c;})
      .accessor(d => d.ema20);

    const ema50 = ema()
      .id(2)
      .options({ windowSize: 50 })
      .merge((d, c) => {d.ema50 = c;})
      .accessor(d => d.ema50);

    const smaVolume70 = sma()
      .id(3)
      .options({ windowSize: 70, sourcePath: "volume" })
      .merge((d, c) => {d.smaVolume70 = c;})
      .accessor(d => d.smaVolume70);
    const { type, data: initialData, width, ratio } = this.props;

    const calculatedData = ema20(ema50(smaVolume70(initialData)));
    const xScaleProvider = discontinuousTimeScaleProvider
      .inputDateAccessor(d => d.date);
    const {
      data,
      xScale,
      xAccessor,
      displayXAccessor,
    } = xScaleProvider(calculatedData);

    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - 150)]);
    const xExtents = [start, end];
    const {
      css,
      styles,
    } = this.props;

    return (
      <div {...css(styles.container)}>
        <ChartCanvas height={400}
          ratio={ratio}
          width={width}
          margin={{ left: 90, right: 90, top: 70, bottom: 30 }}
          type={type}
          seriesName="BTX"
          data={data}
          xScale={xScale}
          xAccessor={xAccessor}
          displayXAccessor={displayXAccessor}
          xExtents={xExtents}
        >
          <Chart id={1}
            yPan yExtents={[d => [d.high, d.low], ema20.accessor(), ema50.accessor()]}
            padding={{ top: 10, bottom: 20 }}
          >
            <XAxis axisAt="bottom" orient="bottom" />
            <YAxis axisAt="right" orient="right" ticks={5} />
            <CandlestickSeries />
            <MouseCoordinateX
              at="top"
              orient="top"
              displayFormat={timeFormat("%Y-%m-%d")} />
            <MouseCoordinateX
              at="bottom"
              orient="bottom"
              displayFormat={timeFormat("%Y-%m-%d")} />
            <MouseCoordinateY
              at="right"
              orient="right"
              displayFormat={format(".2f")} />
            <MouseCoordinateY
              at="left"
              orient="left"
              displayFormat={format(".2f")} />

            <MovingAverageTooltip
              onClick={e => console.log(e)}
              origin={[-38, 15]}
              options={[
                {
                  yAccessor: ema20.accessor(),
                  type: ema20.type(),
                  stroke: ema20.stroke(),
                  windowSize: ema20.options().windowSize,
                },
                {
                  yAccessor: ema50.accessor(),
                  type: ema50.type(),
                  stroke: ema50.stroke(),
                  windowSize: ema50.options().windowSize,
                },
              ]}
            />
          </Chart>
          <Chart id={2}
            yExtents={[d => d.volume, smaVolume70.accessor()]}
            height={150} origin={(w, h) => [0, h - 150]}
          >
            <YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".2s")}/>
            <BarSeries yAccessor={d => d.volume} fill={d => d.close > d.open ? "#6BA583" : "#FF0000"} />
            <AreaSeries yAccessor={smaVolume70.accessor()} stroke={smaVolume70.stroke()} fill={smaVolume70.fill()}/>
          </Chart>
          <CrossHairCursor />
        </ChartCanvas>
      </div>
    );
  }
}


CandleStickChartWithEdge.propTypes = propTypes;
CandleStickChartWithEdge.defaultProps = {
  type: "svg",
};

export default withStyles(() => ({
  container: {
    textAlign: 'left',
  },
}))(fitWidth(CandleStickChartWithEdge));
