import CryptoJS from "crypto-js";

const iv = "cC7wkLpS/YLBr6O3YULovAL9vs7y6QF3vWscK8xETAM=";
const secretKey = "8BRfqyQMf5SGMCqrCWZeetVvyCrUBQ4KR8Jf/KBfbmI=";

const secretUtf = CryptoJS.enc.Utf8.parse(secretKey.substring(0, 32));
const ivUtf = CryptoJS.enc.Utf8.parse(iv.substring(0, 16));

class AESUtils {
	generateRandomByteArray(n = 32) {
		const secretPhrase = CryptoJS.lib.WordArray.random(n);
		const salt = CryptoJS.lib.WordArray.random(128 / 8);
		//aes key 128 bits (16 bytes) long
		const secretKey = CryptoJS.PBKDF2(secretPhrase.toString(), salt, {
			keySize: 128 / 32,
			iterations: 999,
		}).toString();
		return this.encode(secretKey);
	}

	encode(value: string) {
		return CryptoJS.enc.Utf8.parse(value);
	}

	encrypt(plainText: string) {
		return this.encryptWithKey(plainText, secretUtf);
	}

	decrypt(cipherText: string) {
		return this.decryptWithKey(cipherText, secretUtf);
	}

	encryptWithKey(plainText: string, secretKey: CryptoJS.lib.WordArray) {
		const message = CryptoJS.enc.Utf8.parse(plainText);
		const cipherText = CryptoJS.AES.encrypt(message, secretKey, {
			iv: ivUtf,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7,
		});
		return cipherText.toString();
	}

	decryptWithKey(cipherText: string, secretKey: CryptoJS.lib.WordArray) {
		const plainText = CryptoJS.AES.decrypt(cipherText, secretKey, {
			iv: ivUtf,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7,
		});
		return plainText.toString(CryptoJS.enc.Utf8);
	}
}

export default new AESUtils();
