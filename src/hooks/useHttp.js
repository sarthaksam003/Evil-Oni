import { useState, useCallback } from "react";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? requestConfig.body : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      console.log('data from usehttp: '+data);
      console.log("data is : " + data);
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setLoading(false);
  }, []);
  return { loading, error, sendRequest };
};

export default useHttp;
