import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { tsvParse } from  'd3-dsv';
import { timeParse } from 'd3-time-format';

import './App.css';

import Api from './Api';
import configureStore from './configureStore';
import logo from './logo.svg';
import Button from './components/Button';
import Chart from './Chart';

const parseData = (parse) => {
	return function(d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
};

const parseDate = timeParse("%Y-%m-%d");

function getData() {
  const promiseMSFT = Api.get("https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv")
    .then(({ data }) => data)
    .then(data => tsvParse(data, parseData(parseDate)))
  return promiseMSFT;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore({
      user: { name: 'test' },
    });
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
		getData().then(data => {
			this.setState({ data });
    })
    Api.get('coins')
      .then(({ data }) => data)
      .then(json => {
        // setTimeout(_ => {
        //   this.setState({
        //     data: json
        //   });
        // }, 2000);
      });
	}
  render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          <nav className="blue darken-2">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                글로벌 소프트웨어 3강
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
            </div>
          </nav>
          {this.state.data && <Chart data={this.state.data} />}
          <table className="centered">
            <thead>
              <tr>
                  <th>코인</th>
                  <th>시가총액</th>
                  <th>실시간 시세</th>
                  <th>매수/매도</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>비트코인</td>
                <td>142조 130억</td>
                <td>8,234,100 원</td>
                <td>
                  <Button primary>
                    매수
                  </Button>
                </td>
              </tr>
              <tr>
                <td>이더리움</td>
                <td>14조 520억</td>
                <td>322,500 원</td>
                <td>
                  <Button primary>
                    매수
                  </Button>
                </td>
              </tr>
              <tr>
                <td>리플</td>
                <td>12조 30억</td>
                <td>375 원</td>
                <td>
                  <Button primary>
                    매수
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Provider>
    );
  }
}

export default App;
