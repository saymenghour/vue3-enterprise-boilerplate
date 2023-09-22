import type { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import queryString from "query-string";
import { HttpRequest } from "./HttpRequest";

class BaseService {

	private async sendRequest(
		method: string,
		url: string,
		data?: Record<string, any>,
		extraHeaders?: AxiosRequestHeaders,
		extraConfig?: Partial<AxiosRequestConfig>
	) {
		try {
			return await HttpRequest.send(method, url, data, extraHeaders, extraConfig);
		} catch (error: any) {
			console.error(error);
			const { data, status, statusText } = error.response;
			throw data != ""
				? data
				: {
					message: `${status} ${statusText}`,
				};
		}
	}

	async get(
		url: string,
		queryParams?: any,
		extraHeaders?: AxiosRequestHeaders,
		extraConfig?: AxiosRequestConfig
	) {
		if (queryParams) {
			const query = queryString.stringify(queryParams);
			url = url.indexOf("?") == -1 ? `${url}?${query}` : `${url}&${query}`;
		}
		return this.sendRequest("GET", url, undefined, extraHeaders, extraConfig);
	}

	async post(url: string, data: Record<string, any>, extraHeaders?: AxiosRequestHeaders) {
		return this.sendRequest("POST", url, data, extraHeaders);
	}

	async put(url: string, data: Record<string, any>) {
		return this.sendRequest("PUT", url, data);
	}

	async delete(url: string, data?: Record<string, any>) {
		return this.sendRequest("DELETE", url, data);
	}

}

export default new BaseService();