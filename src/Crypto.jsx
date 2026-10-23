import { useQuery } from "@tanstack/react-query";
const fetchCrypto = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch crypto");
  }
  return response.json();
};
function Crypto() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCrypto,
    refetchInterval: 10000,
  });
  if (isPending) {
    return <p>Loading crypto prices...</p>;
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      <h2>Live Crypto Prices</h2>
      <p>Bitcoin: {data.bitcoin.usd}</p>
      <p>Ethereum: {data.ethereum.usd}</p>
      <p>Dogecoin: {data.dogecoin.usd}</p>
    </div>
  );
}
export default Crypto;