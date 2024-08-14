const axios=require('axios');
require('dotenv').config();


const mapboxAccessToken = process.env.MAPBOX_ACCESS_TOKEN

const mapBoxApi = async function (query) {
    try {
        if (!query) {
            return ({message:'Query is required',status:401});
        }

        const response = await axios.get(process.env.MAPBOX_GEOCODING_API_ENDPOINT + encodeURIComponent(query) + '.json', {
            params: {
                access_token: process.env.MAPBOX_ACCESS_TOKEN,
                limit: 5, // Number of results to return
                
            },
        });
       // console.log(`response ${JSON.stringify(response)}`);
        return response.data

    } catch (error) {
        console.error(error);
        return ({message:'Failed to fetch data',status:500});

    }
}


//fetch country list

const fetchCountryList = async function () {
    try {
       

        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countries = response.data.map(country => ({
            name: country.name.common,
            code: country.cca2, // ISO 3166-1 alpha-2 country code
            capital: country.capital ? country.capital[0] : 'N/A',
            region: country.region,
            population: country.population,
            flag: country.flags.png
        }));
        return countries;

    } catch (error) {
        console.error(error);
        return ({message:'Failed to fetch data',status:500});

    }
}




const fetchCountriesStates = async function (countryName) {
    try {
       
        const countryResponse = await axios.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}`);
        if (countryResponse.data.length > 0) {
            const countryData = countryResponse.data[0];

            // Get the subdivisions (if available)
            const states = countryData.subdivisions ? countryData.subdivisions : 'Subdivisions data not available';

            console.log('Country Name:', countryData.name.common);
            console.log('Subdivisions (States/Provinces):', states);
            return countryData
        } else {
            console.log('Country not found');
        }

       
    } catch (error) {
        console.error(error);
        return ({message:'Failed to fetch data',status:500});

    }
}

const fetchCountryDetail = async (countryName) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}`);
      const countryData = response.data;
  
      // If the country data is returned as an array, you can access the first element
      if (Array.isArray(countryData) && countryData.length > 0) {
        const country = countryData[0];
        
        // Extract and display relevant information
        const countryInfo = {
          name: country.name.common,
          capital: country.capital ? country.capital[0] : 'N/A',
          region: country.region,
          subregion: country.subregion,
          population: country.population,
          languages: Object.values(country.languages).join(', '),
          currencies: Object.values(country.currencies).map(c => c.name).join(', '),
          flag: country.flags[1]  // Use the larger version of the flag image
        };
  
        console.log('Country Information:', countryInfo);
        return countryInfo
      } else {
        console.log('Country not found');
      }
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };


  const poiData=async function(location,types=[]){
    try {
        const encodedLocation = encodeURIComponent(location);
        const categories = types.join(',');
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${categories}.json?proximity=${encodedLocation}&access_token=${mapboxAccessToken}&limit=10`;
        const response = await axios.get(url);
        console.log(`poi data===${response}`);
        return response.data.features;
    } catch (error) {
        console.error("Error fetching POIs:", error);
        return [];
    }
  }
module.exports = {mapBoxApi, fetchCountryList,poiData, fetchCountriesStates,fetchCountryDetail}