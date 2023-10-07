import axios from "axios";
import type { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

export class HttpRequest {

	static async send(
		method: string,
		url: string,
		data?: Record<string, any>,
		extraHeaders?: Record<string, any>,
		extraConfig?: Partial<AxiosRequestConfig>
	) {
		let headers: Partial<AxiosRequestHeaders> = {
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
		};

		headers = { ...headers, ...extraHeaders };

		if ("/login" == url) {
			delete headers.Authorization;
		} else {
			const accessToken = localStorage.getItem("accessToken");
			if (accessToken) {
				headers.Authorization = `Bearer ${accessToken}`;
			}
		}

		const requestOptions: AxiosRequestConfig = {
			url,
			data,
			method,
			headers: headers as AxiosRequestHeaders,
			...extraConfig,
		};

		return axios(requestOptions);
	}

}