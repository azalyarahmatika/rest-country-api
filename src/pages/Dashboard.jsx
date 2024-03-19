import React from 'react';
import PropTypes from 'prop-types';
import { getCountries, getCountryName, getCountryRegion } from '../utils/api';
import CountryCardContainer from '../components/CountryCardContainer';
import InputContainer from '../components/InputContainer';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      originalCountries: [],
      error: null,
      country: '',
      regions: [],
      region: '',
      loading: true 
    };
  
    this.onSearch = this.onSearch.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  componentDidMount() {
    getCountries()
      .then(({ data, error }) => {
        if (error) {
          this.setState({ error: error.message, loading: false });
        } else {
          const uniqueRegions = [];
          data.forEach(country => {
            if (!uniqueRegions.includes(country.region)) {
              uniqueRegions.push(country.region);
            }
          });
          this.setState({
            countries: data,
            originalCountries: data,
            regions: uniqueRegions,
            loading: false 
          });
        }
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false});
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.country !== this.state.country ||
      prevState.region !== this.state.region
    ) {
      this.setState({ loading: true });
      if (this.state.country === '' && this.state.region === '') {
        getCountries()
          .then(({ data, error }) => {
            if (error) {
              this.setState({ error: error.message });
            } else {
              this.setState({ countries: data });
            }
          })
          .catch(error => {
            this.setState({ error: error.message });
          });
      } else {
        if (this.state.region !== '' && this.state.country === '') {
          getCountryRegion(this.state.region)
            .then(({ data, error }) => {
              if (error) {
                this.setState({ error: error.message });
              } else {
                this.setState({ countries: data });
              }
            })
            .catch(error => {
              this.setState({ error: error.message });
            });
        }

        if(this.state.region === '' && this.state.country !== '') {
          getCountryName(this.state.country)
            .then(({ data, error }) => {
              if (error) {
                this.setState({ error: error.message });
              } else {
                this.setState({ countries: data });
              }
            })
            .catch(error => {
              this.setState({ error: error.message });
            });
        } 

        if (this.state.region !== '' && this.state.country !== '') {
          const filteredCountries = this.state.originalCountries.filter(country =>
            country.region.toLowerCase() === this.state.region.toLowerCase() &&
            country.name.common.toLowerCase().includes(this.state.country.toLowerCase())
          );
          
          this.setState({ countries: filteredCountries });
        }
      }
    }
  }
   
  onSearch(term) {
    this.setState({ country: term });
  }

  onRegionChange(region) {
    this.setState({ region: region });
  }

  render() {  
    if (this.state.loading) {
      return <div className='loading'>Loading...</div>; 
    } else if(this.state.countries.length > 0) {
      return (
        <>
          <InputContainer onSearch={this.onSearch} regions={this.state.regions} onRegionChange={this.onRegionChange}/>
          <CountryCardContainer countries={this.state.countries} />
        </>
      );
    } else {
      return (
        <>
          <InputContainer onSearch={this.onSearch} regions={this.state.regions} onRegionChange={this.onRegionChange} />
          <div className='not_found'>Not Found</div>
        </>
      )
    }
  }
}

Dashboard.propTypes = {
  onSearch: PropTypes.func
};

export default Dashboard;