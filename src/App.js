import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import covid19 from "./images/covid19.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  handleCountryChange = async (country) => {
    const countryData = await fetchData(country);
    console.log(countryData);
    this.setState({ data: countryData, country: country });
  };

  async componentDidMount() {
    const worldData = await fetchData();
    this.setState({ data: worldData });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={covid19} className={styles.image} alt="Covid 19" />{" "}
        <h1>Covid-19 Tracker</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;
