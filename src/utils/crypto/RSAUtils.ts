import { JSEncrypt } from "jsencrypt";

class RSAUtils {
	encrypt(plainText: string, publicKey: string): string {
		const jsEncrypt = new JSEncrypt();
		jsEncrypt.setPublicKey(publicKey);
		return jsEncrypt.encrypt(plainText) as string;
	}

	decrypt(encryptedText: string, privateKey: string): string {
		const jsEncrypt = new JSEncrypt();
		jsEncrypt.setPrivateKey(privateKey);
		return jsEncrypt.decrypt(encryptedText) as string;
	}
}

export default new RSAUtils();
