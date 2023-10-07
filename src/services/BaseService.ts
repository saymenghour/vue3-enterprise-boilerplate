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
			const request = await HttpRequest.send(method, url, data, extraHeaders, extraConfig);
			return request.data;
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

	get(
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

	post(
		url: string,
		data: Record<string, any>,
		extraHeaders?: AxiosRequestHeaders,
		extraConfig?: AxiosRequestConfig
	) {
		return this.sendRequest("POST", url, data, extraHeaders, extraConfig);
	}

	put(
		url: string,
		data: Record<string, any>,
		extraHeaders?: AxiosRequestHeaders,
		extraConfig?: AxiosRequestConfig
	) {
		return this.sendRequest("PUT", url, data, extraHeaders, extraConfig);
	}

	delete(
		url: string,
		data?: Record<string, any>,
		extraHeaders?: AxiosRequestHeaders,
		extraConfig?: AxiosRequestConfig
	) {
		return this.sendRequest("DELETE", url, data, extraHeaders, extraConfig);
	}

}

export default new BaseService();