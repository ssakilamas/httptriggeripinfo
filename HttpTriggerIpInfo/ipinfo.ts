import fetch from 'node-fetch';

interface IpInfoResponse {
  ip: string
  hostname: string
  city: string
  region: string
  country: string
  loc: string
  org: string
  postal: string
  timezone: string
}

export async function getIpInfo(ip: string): Promise<IpInfoResponse> {
  
  const url = `http://ipinfo.io/${ip}?token=32f99ed81cb8f8`;

  const res = await fetch(url);
  const json = res.json();

  return json;

}

