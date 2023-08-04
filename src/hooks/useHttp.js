//useHttp.js
import React, { useState } from "react";
//요청을 보낼 때 들어가는 설정값 : requestConfig(+url,method,body,headers)
//data를 적용해주는 함수 추가 : applyData
const useHttp = (requsetConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //모든 HTTP 요청을 보낼 때 쓸 수 있도록 수정
  const sendRequest = async () => {
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
      //fetch는 data를 받아오고나서 return을 해주던지 적용해주는 함수 필요
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };
  //커스텀 훅 사용하기 위해서는 return
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
