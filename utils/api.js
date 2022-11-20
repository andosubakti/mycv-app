import axios from "axios";
import Cookies from "js-cookie";

export const apiRequest = async ({
  url,
  method,
  timeout,
  headers,
  data,
  params,
  path,
  apiVersion = "v1",
}) => {
  const baseUrl = url
    ? `${url}/${apiVersion}`
    : `http://pretest-qa.dcidev.id/api/${apiVersion}`;
  const defaultParams = {};
  const mergedParams = { ...defaultParams, ...params };
  let token = Cookies.get("token");

  const config = {
    method,
    url: baseUrl + path,
    params: mergedParams,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      Authorization: token ? token : "",
    },
  };

  if (headers) {
    config.headers = { ...config.headers, ...headers };
  }

  if (data) {
    config.data = data;
  }

  if (timeout) {
    config.timeout = timeout;
  }

  return axios(config)
    .then((res) => res)
    .catch((err) => {
      console.info("[ERROR] Api Request: ", err);
      throw err;
    });
};
