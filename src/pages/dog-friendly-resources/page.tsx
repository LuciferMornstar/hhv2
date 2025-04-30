'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import apiService from '@/lib/apiService';
import LoadingSpinner from '@/components/LoadingSpinner';

interface DogFriendlyResource {
  DogFriendlyResourceID: number;
  Name: string;
  Description: string;
  Address?: string;
  City?: string;
  State?: string;
  ZipCode?: string;
  Phone?: string;
  Website?: string;
  ServicesOffered?: string;
  Restrictions?: string;
  Notes?: string;
}

const DogFriendlyResourcesPage: React.FC = () => {
  const [resources, setResources] = useState<DogFriendlyResource[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await apiService.get('/dog-friendly-resources');
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching dog friendly resources:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1>Dog Friendly Resources</h1>
      <ul>
        {resources.map(resource => (
          <li key={resource.DogFriendlyResourceID}>
            <h2>{resource.Name}</h2>
            <p>{resource.Description}</p>
            {resource.Address && <p>Address: {resource.Address}</p>}
            {resource.City && resource.State && resource.ZipCode && (
              <p>
                Location: {resource.City}, {resource.State} {resource.ZipCode}
              </p>
            )}
            {resource.Phone && <p>Phone: {resource.Phone}</p>}
            {resource.Website && (
              <p>
                Website: <Link href={resource.Website}>{resource.Website}</Link>
              </p>
            )}
            {resource.ServicesOffered && <p>Services Offered: {resource.ServicesOffered}</p>}
            {resource.Restrictions && <p>Restrictions: {resource.Restrictions}</p>}
            {resource.Notes && <p>Notes: {resource.Notes}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogFriendlyResourcesPage;
