import React, { Component } from 'react';
import './App.css';
import HeaderSearch from './HeaderSearch';
import axios from 'axios'


class App extends Component {
  state = {
    weather: []
  }

  componentDidMount() {
    // var cityname = '';
    // axios.get('https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/search/?query=' + cityname).then(Response => {
    //   const search = Response.data;
    //   this.setState({ search });
    //   console.log(search)
    // })
  }
  render() {
    return (
      <div>
        <HeaderSearch />
      </div>
      //   <div className="container">


      //     <div id="Display">
      //       <div className="row">
      //         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 location">
      //           <h1>San Fransisco</h1>, <a href=""></a>
      //         </div>
      //         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="times">
      //           <dl className="dl-horizontal pull-right">
      //             <dt>Time</dt>
      //             <dd></dd>
      //             <dt>Sunrise</dt>
      //             <dd></dd>
      //             <dt>Sunset</dt>
      //             <dd></dd>
      //           </dl>
      //         </div>
      //       </div>
      //       <div className="row weather weather-lrg">
      //         <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4 " data-date="2020-7-4">
      //           <h2>
      //             <a href="/2487956/2020/7/4/">
      //               Today
      //       </a>
      //           </h2>
      //           <dl>
      //             <dt>Weather</dt>
      //             <dd className="weatherstate" data-title="Forecasts" data-original-title="" title="">
      //               <div className="state-icon-lrg state-c"></div>
      //               <span className="hidden-xs hidden-sm">Clear</span>
      //             </dd>
      //             <dt>Temperature</dt>
      //             <dd>
      //               Max: 20°C<br />
      //             Min: 13°C
      //         </dd>
      //             <dt>Wind</dt>
      //             <dd className="wind">
      //               <span className="dir dir-w" title="W"></span>
      //               6mph
      //           </dd>
      //             <dt className="humidity">Humidity</dt>
      //             <dd>57%</dd>
      //             <dt className="visibility">Visibility</dt>
      //             <dd>15.0 miles</dd>
      //             <dt className="dewpoint">Pressure</dt>
      //             <dd>1018mb</dd>
      //             <dt className="predictability">Confidence</dt>
      //             <dd>68%</dd>
      //           </dl>
      //         </div>
      //         <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4  tomorrow" data-date="2020-7-5">
      //           <h2>
      //             <a href="/2487956/2020/7/5/">
      //               Tomorrow
      //       </a>
      //           </h2>
      //           <dl>
      //             <dt>Weather</dt>
      //             <dd className="weatherstate" data-title="Forecasts" data-original-title="" title="">
      //               <div className="state-icon-lrg state-c"></div>
      //               <span className="hidden-xs hidden-sm">Clear</span>
      //             </dd>
      //             <dt>Temperature</dt>
      //             <dd>
      //               Max: 19°C<br />
      //             Min: 12°C
      //         </dd>
      //             <dt>Wind</dt>
      //             <dd className="wind">
      //               <span className="dir dir-w" title="W"></span>
      //               8mph
      //           </dd>
      //             <dt className="humidity">Humidity</dt>
      //             <dd>60%</dd>
      //             <dt className="visibility">Visibility</dt>
      //             <dd>14.5 miles</dd>
      //             <dt className="dewpoint">Pressure</dt>
      //             <dd>1016mb</dd>
      //             <dt className="predictability">Confidence</dt>
      //             <dd>58%</dd>
      //           </dl>
      //         </div>
      //         <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4 " data-date="2020-7-6">
      //           <h2>
      //             <a href="/2487956/2020/7/6/">
      //               Mon 6 Jul
      //       </a>
      //           </h2>
      //           <dl>
      //             <dt>Weather</dt>
      //             <dd className="weatherstate" data-title="Forecasts" data-original-title="" title="">
      //               <div className="state-icon-lrg state-c"></div>
      //               <span className="hidden-xs hidden-sm">Clear</span>
      //             </dd>
      //             <dt>Temperature</dt>
      //             <dd>
      //               Max: 17°C<br />
      //             Min: 12°C
      //         </dd>
      //             <dt>Wind</dt>
      //             <dd className="wind">
      //               <span className="dir dir-w" title="W"></span>
      //               11mph
      //           </dd>
      //             <dt className="humidity">Humidity</dt>
      //             <dd>67%</dd>
      //             <dt className="visibility">Visibility</dt>
      //             <dd>14.6 miles</dd>
      //             <dt className="dewpoint">Pressure</dt>
      //             <dd>1015mb</dd>
      //             <dt className="predictability">Confidence</dt>
      //             <dd>48%</dd>
      //           </dl>
      //         </div>
      //         <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4 " data-date="2020-7-7">
      //           <h2>
      //             <a href="/2487956/2020/7/7/">
      //               Tue 7 Jul
      //       </a>
      //           </h2>
      //           <dl>
      //             <dt>Weather</dt>
      //             <dd className="weatherstate" data-title="Forecasts" data-original-title="" title="">
      //               <div className="state-icon-lrg state-c"></div>
      //               <span className="hidden-xs hidden-sm">Clear</span>
      //             </dd>
      //             <dt>Temperature</dt>
      //             <dd>
      //               Max: 18°C<br />
      //             Min: 12°C
      //         </dd>
      //             <dt>Wind</dt>
      //             <dd className="wind">
      //               <span className="dir dir-w" title="W"></span>
      //               9mph
      //           </dd>



      //             <dt className="humidity">Humidity</dt>
      //             <dd>65%</dd>



      //             <dt className="visibility">Visibility</dt>
      //             <dd>14.6 miles</dd>



      //             <dt className="dewpoint">Pressure</dt>
      //             <dd>1014mb</dd>


      //             <dt className="predictability">Confidence</dt>
      //             <dd>38%</dd>

      //           </dl>


      //         </div>



      //         <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4 " data-date="2020-7-8">
      //           <h2>
      //             <a href="/2487956/2020/7/8/">
      //               Wed 8 Jul
      //       </a>
      //           </h2>
      //           <dl>
      //             <dt>Weather</dt>
      //             <dd className="weatherstate" data-title="Forecasts" data-original-title="" title="">
      //               <div className="state-icon-lrg state-lc"></div>
      //               <span className="hidden-xs hidden-sm">Light Cloud</span>
      //             </dd>
      //             <dt>Temperature</dt>
      //             <dd>
      //               Max: 17°C<br />
      //             Min: 12°C
      //         </dd>
      //             <dt>Wind</dt>
      //             <dd className="wind">
      //               <span className="dir dir-w" title="W"></span>
      //               7mph
      //           </dd>
      //             <dt className="humidity">Humidity</dt>
      //             <dd>71%</dd>
      //             <dt className="visibility">Visibility</dt>
      //             <dd>14.0 miles</dd>
      //             <dt className="dewpoint">Pressure</dt>
      //             <dd>1013mb</dd>
      //             <dt className="predictability">Confidence</dt>
      //             <dd>30%</dd>
      //           </dl>
      //         </div>
      //         <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4 " data-date="2020-7-9">
      //           <h2>
      //             <a href="/2487956/2020/7/9/">
      //               Thu 9 Jul
      //       </a>
      //           </h2>
      //           <dl>
      //             <dt>Weather</dt>
      //             <dd className="weatherstate" data-title="Forecasts" data-original-title="" title="">
      //               <div className="state-icon-lrg state-c"></div>
      //               <span className="hidden-xs hidden-sm">Clear</span>
      //             </dd>

      //             <dt>Temperature</dt>
      //             <dd>
      //               Max: 18°C<br />
      //             Min: 12°C
      //         </dd>
      //             <dt>Wind</dt>
      //             <dd className="wind">
      //               <span className="dir dir-w" title="W"></span>
      //               8mph
      //           </dd>
      //             <dt className="humidity">Humidity</dt>
      //             <dd>77%</dd>
      //             <dt className="visibility">Visibility</dt>
      //             <dd>10.0 miles</dd>
      //             <dt className="dewpoint">Pressure</dt>
      //             <dd>1015mb</dd>
      //             <dt className="predictability">Confidence</dt>
      //             <dd>18%</dd>
      //           </dl>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
    )
  }
}

export default App;
