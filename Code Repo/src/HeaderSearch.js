/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import axios from 'axios';
import './HeaderSearch.css';

class HeaderSearch extends Component {

    constructor(props) {
        super(props);
        this.searchResult =
        {
            city: '',
            result: {},
            message: ''
        }
        this.cancel = '';
        // this.handleOnLoad();
    };

    handleOnInputChange = (event) => {
        debugger;
        event.preventDefault();
        const city = event.target[0].value;

        if (!city) {
            this.setState({ city, result: {}, message: '' });
        }
        else {
            this.setState({ city, message: '' }, () => { this.fetchSearchResult(city) });
        }
    };

    componentWillMount() {
        debugger;
        this.setState({ city: 'New Delhi', result: undefined, message: '' }, () => { this.fetchSearchResult('New Delhi') });
    };

    componentDidUpdate(prevProps, prevState) {
        debugger;
        console.log("Old: " + prevState);
        console.log("New: " + this.state);
        console.log("Old: " + prevProps);
        console.log("New: " + this.props);
    }

    fetchSearchResult = (city) => {
        debugger;
        this.setState({ city: '', result: undefined, message: '' });
        const searchUrlCity = 'https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/search/?query=' + city;
        var searchUrl = 'https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/';


        // if (this.cancel) {
        //     this.cancel.cancel();
        // }


        axios
            .get(searchUrlCity, { cancelToken: this.cancel.token })
            .then(CityResponse => {
                debugger;
                console.log(CityResponse.data);
                if (CityResponse.data.length == 1) {
                    searchUrl = searchUrl + CityResponse.data[0].woeid;
                    axios
                        .get(searchUrl, { cancelToken: this.cancel.token })
                        .then(Response => {
                            debugger;
                            const resultNotFound = !Response
                                ? 'No record found for this city. Please try a different city.'
                                : '';
                            this.setState({ result: Response.data, message: resultNotFound, city: city }, () => { this.render() });
                        })
                        .catch(error => {
                            debugger;
                            if (axios.isCancel(error) || error) {
                                this.setState({ message: 'Failed to fetch data. Please check withthe administrator.', result: {} })
                            }
                        })
                }
                else if (CityResponse.data.length > 1) {
                    debugger;
                    var list = '';
                    CityResponse.data.forEach(d => {
                        list += "'" + d.title + "' ";
                    });
                    this.setState({ message: 'There are more than one city with this name : ' + list }, () => { this.render() });
                }
                else {
                    debugger;
                    this.setState({ message: 'There is no city with the specified name in our database. Please try a different city.' }, () => { this.render() });
                }
            })
            .catch(error => {
                debugger;
                if (axios.isCancel(error) || error) {
                    this.setState({ message: 'Failed to fetch data. Please check withthe administrator.', result: {} })
                }
            })
        // axios
        //     .get(searchUrl, { cancelToken: this.cancel.token })
        //     .then(Response => {
        //         debugger;
        //         const resultNotFound = !Response
        //             ? 'No record found for this city. Please try a different city.'
        //             : '';
        //         this.setState({ result: Response.data, message: resultNotFound, city: city }, () => { this.render() });
        //     })
        //     .catch(error => {
        //         debugger;
        //         if (axios.isCancel(error) || error) {
        //             this.setState({ message: 'Failed to fetch data. Please check withthe administrator.' })
        //         }
        //     })
        //this.cancel = axios.CancelToken.source();
    };

    renderSearchResult = () => {
        debugger;
        if (this.state != null) {
            if (this.state.result != undefined) {
                debugger;
                const { result } = this.state;
                console.log(result.consolidated_weather);
                //if (Object.keys(result).consolidated_weather.length && result.consolidated_weather.length) {
                return (
                    <div id="Display">
                        <div className="row centre">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 location">
                                <h1>{result.title}</h1>, <a href=""></a>
                                <dl className="dl-horizontal pull-right">
                                    <dt>Time</dt>
                                    <dd>{result.time.split('T')[0] + ' ' + result.time.split('T')[1].split('.')[0]}</dd>
                                    <dt>Sunrise</dt>
                                    <dd>{result.sun_rise.split('T')[0] + ' ' + result.sun_rise.split('T')[1].split('.')[0]}</dd>
                                    <dt>Sunset</dt>
                                    <dd>{result.sun_set.split('T')[0] + ' ' + result.sun_set.split('T')[1].split('.')[0]}</dd>
                                </dl>
                            </div>
                        </div>
                        <hr />
                        <div className="row weather weather-lrg">
                            {this.state.result.consolidated_weather.map((cw, i) => {
                                return (
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4 ">
                                        <h2>
                                            <a>
                                                {cw.applicable_date}
                                            </a>
                                        </h2>
                                        <dl>
                                            <dt className="humidity">Weather</dt>
                                            <dd className="weatherstate" data-title="Forecasts" data-original-title="" title="">
                                                <span className="hidden-xs hidden-sm">{cw.weather_state_name}</span>
                                            </dd>
                                            <dt>Temperature</dt>
                                            <dd>
                                                Max: {cw.weather_state_name}°C
                                                     <br />
                                                    Min: {cw.weather_state_name}°C
                                            </dd>
                                            <dt className="humidity">Wind Speed</dt>
                                            <dd>{Math.floor(cw.wind_speed)}mph</dd>
                                            <dt className="humidity">Humidity</dt>
                                            <dd>{cw.humidity}%</dd>
                                            <dt className="visibility">Visibility</dt>
                                            <dd>{Math.floor(cw.visibility)} miles</dd>
                                            <dt className="dewpoint">Pressure</dt>
                                            <dd>{cw.air_pressure}mb</dd>
                                            <dt className="predictability">Confidence</dt>
                                            <dd>{cw.predictability}%</dd>
                                        </dl>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
                //}
            }
            else {
                debugger;
                return (
                    <div id="Display">
                        <div className="row">
                            <h1>
                                {this.state.message}
                            </h1>
                        </div>
                    </div>
                )
            }
        }
    }
    render() {
        debugger;
        return (
            <div className="container">
                <div className="fixed-top wrap">
                    <div id="top">
                        <ul id="navigation">
                            <li><a className="logo" href="./index.html" target="_self"><input type="button" value="WEATHERMAN" /></a>
                            </li>
                            <form className="example" onSubmit={this.handleOnInputChange}>
                                <input id="txtsearch" type="text" placeholder="Search..." name="search2" />
                                <button id="btnSearch" type="submit" ><i className="fa fa-search"></i></button>
                            </form>
                        </ul>
                    </div>
                </div>
                {this.renderSearchResult()}
            </div>
        )
    }
}

export default HeaderSearch;