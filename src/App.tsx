import './app.css';
import { Header, Map, PropertyList } from './components';
import { useGetAllListingsQuery } from './api';

export const App = () => {
  const { data: properties, isLoading } = useGetAllListingsQuery({});

  if (isLoading) {
    return <div>Loading ... Show Skeleton</div>;
  }

  return (
    <div className='app'>
      <Header/>
      <div style={{ display: 'flex', height: 'calc(100vh - 78px)' }}>
        <Map/>
        <PropertyList properties={properties}/>
      </div>
    </div>
  );
}