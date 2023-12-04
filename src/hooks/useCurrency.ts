import { useQuery, UseQueryOptions } from "react-query";
import apiClient from "../services/api-client";

interface CurrencyData {
  conversion_rates: Record<string, number>;
}

const useCurrency = (currency: string) => {
  const getCurrency = () => {
    return apiClient.get<CurrencyData>(currency).then((res) => res.data);
  };

  const queryOptions: UseQueryOptions<CurrencyData, Error, CurrencyData> = {
    queryKey: ["currency", currency],
    queryFn: getCurrency,
    enabled: !!currency,
  };

  return useQuery<CurrencyData, Error, CurrencyData>(queryOptions);
};

export default useCurrency;
