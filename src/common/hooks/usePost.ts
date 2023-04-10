import { useQuery } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import { useErrorHandler } from 'react-error-boundary';
import { api } from '../utils/HttpClient';

export const usePost = <TResponseData, TRequestBody>({
  queryKey = [],
  url,
  data,
  config,
}: {
  queryKey: string[];
  url: string;
  data: TRequestBody;
  config?: AxiosRequestConfig<TResponseData>;
}) => {
  const handler = useErrorHandler();

  const { isLoading, data: response } = useQuery({
    queryKey,
    retry: false,
    queryFn: () => api.post<TResponseData>(url, data, config)
      .then((res) => res.data)
      .catch((e) => handler(e)),
  });

  return {
    isLoading,
    response: response as TResponseData,
  };
};
