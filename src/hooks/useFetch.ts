"use client";

import { useEffect, useState } from "react";

/**
 * A custom hook for fetching data with TypeScript support
 * @template T The type of data being fetched
 * @param {string} url The URL to fetch data from
 * @returns {Object} An object containing the data, loading state, and error
 */
export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  async function fetching() {
    try {
      setLoading(true);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error instanceof Error ? error.message : "Internal server error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetching();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};