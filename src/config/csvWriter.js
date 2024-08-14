const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');


const csvFileData=async function(data){
    try {
        const {name,capital,population}=data
   const cvsWrtiter=createCsvWriter({
    path:'output.csv',
    header: [
        { id: 'country', title: 'Country' },
        { id: 'latitute', title: 'Latitude' },
        { id: 'longitute', title: 'Longitute' }
      ]
   })
   
   const records = [
    {country: name, latitude: capital, longitude:population}
];

  csvWriter.writeRecords(records)
  .then(() => {
    console.log('CSV file was written successfully');
  })
  .catch(err => {
    console.error('Error writing CSV file:', err);
  });
  
  
    } catch (error) {
        throw error
    }
}

module.exports=csvFileData