//useHttp.js
import React, { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //useHttp 커스텀 훅 함수가 매번 호출이 될 때마다 매번 새롭게 생성 => 굳이 매번 생성될 필요가 있을까?
  //requsetConfig, applyData는 안에서만 쓰이는 중 => 쓰이는 곳에서만 쓰이도록
  const sendRequest = useCallback(async (requsetConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requsetConfig.url, {
        method: requsetConfig?.method ? requsetConfig.method : "GET",
        headers: requsetConfig?.hearders ? requsetConfig.hearders : {},
        body: requsetConfig?.body ? requsetConfig.body : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
