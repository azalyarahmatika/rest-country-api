import React from 'react';
import CountryDetail from '../components/CountryDetail';
import BackButton from '../components/BackButton';
import { getCountryName } from '../utils/api';
import { useParams } from "react-router-dom";

function DetailPage() {
  const { name } = useParams();
  const [detailCountry, setDetailCountry] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getCountryName(name).then(({ data }) => {
        setDetailCountry(data); 
        setIsLoading(false);
    });
  },[name]);
  
  if (isLoading){
    return <div className='loading'>Loading...</div>
  }
  
  return (
    <div className='detail_page'>
      <BackButton />
      <CountryDetail country={detailCountry}/>
    </div>
  );
}

export default DetailPage;