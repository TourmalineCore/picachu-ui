import { useQuery } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import { useErrorHandler } from 'react-error-boundary';
import { api } from '../utils/HttpClient';

export const useGet = <Type>({
  queryKey = [],
  url,
  config,
}: {
  queryKey: string[];
  url: string;
  config?: AxiosRequestConfig<Type>;
}) => {
  const handler = useErrorHandler();

  const { isLoading, data: response } = useQuery({
    queryKey,
    retry: false,
    queryFn: () => api.get<Type>(url, config)
      .then((res) => res.data)
      .catch((e) => handler(e)),
  });

  return {
    isLoading,
    response: response as Type,
  };
};
