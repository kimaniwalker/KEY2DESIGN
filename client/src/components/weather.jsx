import React, { Component } from 'react';
import { error } from 'util';


const Base_Url = "https://api.openweathermap.org/data/2.5/weather?zip=";
const Base_Url2 = "&mode=json&units=imperial&APIKEY=8c219e6035437fd7bcb8f4a61bab7a29";
const Base_UrlIcon = "http://openweathermap.org/img/w/"
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: '35215',
            temp: '',
            description: '',
            city: '',
            wind: '',
            icon: ''

        };

    }

    componentDidMount() {

        console.log('testing');
        console.log('here');
        let zipCode = this.state.zip;
        fetch(`${Base_Url}` + `${zipCode}` + `${Base_Url2}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                let temparature = data.main.temp;
                let forcast = data.weather[0].description;
                let name = data.name;
                let windspeed = data.wind.speed;
                let weatherIcon = `${Base_UrlIcon}` + data.weather[0].icon + '.png';



                console.log(temparature);
                console.log(forcast);
                console.log(name);
                console.log(windspeed);
                console.log(zipCode);
                console.log(weatherIcon);

                this.setState({ temp: temparature });
                this.setState({ description: forcast });
                this.setState({ city: name });
                this.setState({ wind: windspeed });
                this.setState({ icon: weatherIcon });

            }).then(data => {







                console.log(this.state.temp);
                console.log(this.state.icon);




            }).catch(error => {
                console.log(error);
            });






    }

    handleZipCode(value) {
        this.setState({ zip: value });
        console.log(value);
    }

    handleSubmit(e) {
        let zipCode = this.state.zip;
        fetch(`${Base_Url}` + `${zipCode}` + `${Base_Url2}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                let temparature = data.main.temp;
                let forcast = data.weather[0].description;
                let name = data.name;
                let windspeed = data.wind.speed;
                let weatherIcon = `${Base_UrlIcon}` + data.weather[0].icon + '.png';



                console.log(temparature);
                console.log(forcast);
                console.log(name);
                console.log(windspeed);
                console.log(zipCode);

                this.setState({ temp: temparature });
                this.setState({ description: forcast });
                this.setState({ city: name });
                this.setState({ wind: windspeed });
                this.setState({ icon: weatherIcon });

            }).then(data => {

                let weatherIconUrl = `${Base_UrlIcon}` + `${this.state.icon}` + '.png';
                console.log(weatherIconUrl);



                console.log(this.state.temp);

            }).catch(error => {
                console.log(error);
            });

    }






    render() {

        
        return (
            <div>

                <div id="WeatherContainer" className="container-fluid mb-5 mt-5 pb-5 pt-5">


                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="input-group mb-3">
                                    <input type="text"
                                        className="form-control col-4"
                                        placeholder="Zip Code"
                                        aria-label="Zip Code"
                                        aria-describedby="button-addon2"
                                        onChange={e => this.handleZipCode(e.target.value)}>
                                    </input>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary"
                                            type="button" id="button-addon2"
                                            onClick={e => this.handleSubmit(e)}

                                        >Enter</button>
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-6">
                                <h2>The Weather App</h2>
                            </div>

                        </div>


                    </div>

                    <div className="container">
                        <div className="row">

                            <div className="col-sm-4">

                                <div className="card width: 18rem;">
                                    <div id="passwordInput" className="card-body">
                                        <p className="card-title">{this.state.city}
                                           
                                        </p>
                                        <p>
                                          <img src={this.state.icon}></img>  
                                        </p>
                                        <p className="card-subtitle mb-2 text-muted">{this.state.description}
                                            
                                        </p>
                                        
                                        
                                        <p className="card-text">{this.state.temp} °F</p>
                                        <p>Wind Speed : {this.state.wind}</p>
                                        <a href="https://www.openweathermap.org"
                                         className="card-link"
                                         target="_blank">Open Weather Map API</a>
                                    
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-6">
                                <div className="row justify-content-center ml-5 pb-4">
                                <img height="75px" src="../../images/skillsbanner/openweathermap.png" alt=""/>
                                    


                                </div>
                                <div className="row justify-content-center ml-5 pb-2">
                                    <h5>Data Source: Open Weather Map API</h5>
                                </div>

                                <div className="row justify-content-center ml-5 pb-2">
                                <h5>Get Current Weather Data Here</h5>
                                </div>

                            </div>


                        </div>

                    </div>



                </div>




            </div>


        )
    }
}

export default Weather;