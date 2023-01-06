import useSWR from "swr";

const response = (url: string) => fetch(url).then((res) => res.json());
const URL="http://localhost:3000/"
export default function fetcher(endpoint:any) {
  const { data, error } = useSWR(`${URL}${endpoint}`,response);
  return{
    data,
    isLoading :!error&&!data,
    isError:error
  }
}
