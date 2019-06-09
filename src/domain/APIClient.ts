import axios from "axios";

type RESTMethods = "delete" | "get" | "head" | "post" | "put";

const restMethods: Readonly<{ [key in RESTMethods]: RESTMethods }> = {
  delete: "delete",
  get: "get",
  head: "head",
  post: "post",
  put: "put"
};

const DEFAULT_TIMEOUT = 5000;

type APIOption = {
  data?: { [key: string]: any };
  headers?: { [key: string]: string };
  queryParams?: string;
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
      { Accept: "application/json" },
      (options && options.headers) || {}
    );
    const data = Object.assign({}, (options && options.data) || {});
    const query = Object.assign({}, (options && options.queryParams) || {});

    const fetchParams = {
      method: restMethods[method],
      baseURL: this.endpoint,
      url: path,
      params: query,
      cache: isSensitive ? "no-cache" : "default",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      data: JSON.stringify(data),
      timeout: this.timeout
    };

    return axios(fetchParams);
  }

  delete(path: string, options: APIOption): Promise<any> {
    return this.request("delete", path, options);
  }

  get(path: string, options: APIOption): Promise<any> {
    return this.request("get", path, options);
  }

  head(path: string, options: APIOption): Promise<any> {
    return this.request("head", path, options);
  }

  put(path: string, options: APIOption): Promise<any> {
    return this.request("put", path, options);
  }

  post(path: string, options: APIOption): Promise<any> {
    return this.request("post", path, options);
  }
}
