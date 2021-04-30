import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { getIpInfo } from './ipinfo';
import {  FunctionResponse, responseFactory } from './util/responseFactory';

const httpTrigger: AzureFunction = async function (context: Context): Promise<FunctionResponse> {

  const ip = context.req.body && context.req.body.ip;

  if (ip) {
    const ipInfo = await getIpInfo(ip);
    return responseFactory({ city:  ipInfo.city, state: ipInfo.region})
  } else {
      let responseMessage = 'Input validation failed. Please pass ip address in the request payload';
      return responseFactory({responseMessage: responseMessage}, 400)
  }

};

export default httpTrigger;