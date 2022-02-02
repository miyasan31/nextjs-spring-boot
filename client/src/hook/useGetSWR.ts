import useSWR from "swr";

export const useGetSWR = <T>(url: string, options?: any) => {
  const { data, error } = useSWR<T>(url, options);

  return {
    data: data,
    isError: error,
    isLoading: !error && !data,
  };
};
