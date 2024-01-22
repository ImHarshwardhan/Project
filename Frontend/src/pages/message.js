import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Message() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/message');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{data ? data : 'Loading...'}</h1>
    </div>
  );
}
