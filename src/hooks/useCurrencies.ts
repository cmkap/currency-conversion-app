import ms from "ms";
import { useQuery, UseQueryOptions } from "react-query";
import apiClient from "../services/api-client";

interface CurrencyData {
  conversion_rates: Record<string, number>;
}

const useCurrencies = () => {
  const getCurrencies = () => {
    return apiClient
      .get<CurrencyData>("USD")
      .then((res) => Object.keys(res.data.conversion_rates));
  };

  const queryOptions: UseQueryOptions<string[], Error, string[]> = {
    queryKey: ["currencies"],
    queryFn: getCurrencies,
    staleTime: ms("24h"),
  };

  return useQuery<string[], Error, string[]>(queryOptions);
};

export default useCurrencies;
