import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import { Header, Map, Filters, PropertyList } from '../components';
import { useGetAllListingsQuery, useGetListingsByAddressQuery } from '../api';
import './home.scss';
import {IProperty} from "../types";

export const HomesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('search');
  const filterTerm = queryParams.get('filter');

  const allListings = useGetAllListingsQuery(searchTerm ? skipToken : {});
  const listingsByAddress = useGetListingsByAddressQuery(searchTerm ? { address: searchTerm } : skipToken);
  const { data: properties, isLoading } = searchTerm ? listingsByAddress : allListings;

  const [filteredProperties, setFilteredProperties] = useState(properties || []);

  useEffect(() => {
    if (properties && properties.length && !isLoading) {
      let updatedProperties = [...properties];

      if (filterTerm) {
        switch (filterTerm) {
          case 'newest':
            updatedProperties.sort((a: IProperty, b: IProperty) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            break;
          case 'oldest':
            updatedProperties.sort((a: IProperty, b: IProperty) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
            break;
          case 'active':
          case 'sold':
            updatedProperties = updatedProperties.filter((property: IProperty) => property.status === filterTerm);
            break;
          default:
            break;
        }
      }

      setFilteredProperties(updatedProperties);
    }
  }, [filterTerm, isLoading, properties]);

  if (!properties || isLoading) {
    return <div>Loading ... Show Skeleton</div>;
  }

  return (
    <div className='homes'>
      <Header />
      <div className='homes-content'>
        <Map />
        <div className='right-panel'>
          <Filters propertyCount={filteredProperties.length}/>
          <PropertyList properties={filteredProperties} />
        </div>
      </div>
    </div>
  );
}
