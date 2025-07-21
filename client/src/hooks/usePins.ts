import { useEffect, useState } from 'react';
import type { Pin } from '../types/pin';

export const usePins = () => {
  const [pins, setPins] = useState<Pin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  const fetchPins = async () => {
    try {
      const response = await fetch('http://localhost:3000/admin/get');

      if (!response.ok) {
        throw new Error('Failed to fetch pins');
      }

      const data = await response.json();
      setPins(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  fetchPins();
}, []);


  return { pins, loading, error };
};
