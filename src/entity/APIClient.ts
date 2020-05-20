import axios from "axios";

export type RESTMethods = "delete" | "get" | "head" | "post" | "put";

const restMethods: Readonly<{ [key in RESTMethods]: RESTMethods }> = {
  delete: "delete",
  get: "get",
  head: "head",
  post: "post",
  put: "put",
};

const DEFAULT_TIMEOUT = 5000;

type APIOption = {
  data?: { [key: string]: any };
  headers?: { [key: string]: string };
  queryParams?: { [key: string]: string };
};

// JS DOCS, should have a prse response method
export default class APIClient {
  endpoint: string;
  timeout?: number;

  constructor(props: { endpoint: string; timeout?: number }) {
    this.endpoint = props.endpoint;
    this.timeout = props.timeout ? props.timeout : DEFAULT_TIMEOUT;
  }

  request(
    method: RESTMethods,
    path: string,
    options: APIOption,
    isSensitive?: boolean
  ): Promise<any> {
    const headers = Object.assign(
      { Accept: "*/*" },
      (options && options.headers) || {}
    );
    const data = Object.assign({}, (options && options.data) || null);
    const query = Object.assign({}, (options && options.queryParams) || null);
    const fetchParams = {
      method: restMethods[method],
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      baseURL: this.endpoint,
      url: path,
      params: query,
      cache: isSensitive ? "no-cache" : "default",
      timeout: this.timeout,
      ...(method !== restMethods.get ? { data: JSON.stringify(data) } : {}),
    };
    return axios(fetchParams);
  }

  public methods = {
    delete: (
      path: string,
      options: APIOption,
      isSensitive?: boolean
    ): Promise<any> => {
      return this.request("delete", path, options, isSensitive);
    },
    get: (
      path: string,
      options: APIOption,
      isSensitive?: boolean
    ): Promise<any> => {
      return this.request("get", path, options, isSensitive);
    },
    head: (
      path: string,
      options: APIOption,
      isSensitive?: boolean
    ): Promise<any> => {
      return this.request("head", path, options, isSensitive);
    },
    put: (
      path: string,
      options: APIOption,
      isSensitive?: boolean
    ): Promise<any> => {
      return this.request("put", path, options, isSensitive);
    },
    post: (
      path: string,
      options: APIOption,
      isSensitive?: boolean
    ): Promise<any> => {
      return this.request("post", path, options, isSensitive);
    },
  };
}
