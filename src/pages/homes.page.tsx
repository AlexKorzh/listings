import {useEffect, useState} from 'react';
import './home.scss';

import {useLocation} from 'react-router-dom';
import {skipToken} from '@reduxjs/toolkit/query';
import {
  Header,
  Map,
  Filters,
  PropertyList,
  ViewSwitcher,
  FiltersSkeleton,
  PropertyItemSkeleton
} from '../components';

import {useGetAllListingsQuery, useGetListingsByAddressQuery} from '../api';
import {IProperty, View} from "../types";

export const HomesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('search');
  const filterTerm = queryParams.get('filter');

  const allListings = useGetAllListingsQuery(searchTerm ? skipToken : {});
  const listingsByAddress = useGetListingsByAddressQuery(searchTerm ? { address: searchTerm } : skipToken);

  const { data: properties, isLoading } = searchTerm ? listingsByAddress : allListings;
  const [filteredProperties, setFilteredProperties] = useState(properties || []);
  const [isMobileViewPort, setIsMobileViewPort] = useState(false);
  const [view, setView] = useState(View.map);

  const onViewChange = (view: View) => {
    setView(view);
  }

  useEffect(() => {
    const updateItemHeight = () => {
      if (window.innerWidth < 870) {
        setIsMobileViewPort(true);
      } else {
        setIsMobileViewPort(false);
      }
    };

    updateItemHeight();

    window.addEventListener('resize', updateItemHeight);

    return () => {
      window.removeEventListener('resize', updateItemHeight);
    };
  }, []);

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

  if (!properties && isLoading) {
    return <div className='homes'>
      <Header isSearchHidden={true}/>
      <div className='homes-content'>
        <Map />
        <div className='right-panel'>
          <FiltersSkeleton/>
          <div className='list-wrapper'>
            <PropertyItemSkeleton/>
            <PropertyItemSkeleton/>
            <PropertyItemSkeleton/>
            <PropertyItemSkeleton/>
            <PropertyItemSkeleton/>
            <PropertyItemSkeleton/>
          </div>
        </div>
      </div>
    </div>;
  }

  if (isMobileViewPort) {
    return (
      <div className='homes'>
        <Header isSearchHidden={isMobileViewPort && view === View.map}/>
        <div className='homes-content'>
          {view === View.map ? <Map /> : <div className='right-panel'>
            <Filters propertyCount={filteredProperties.length}/>
            <PropertyList properties={filteredProperties} />
          </div>}
        </div>
        <ViewSwitcher onChange={onViewChange} view={view}/>
      </div>
    );
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
