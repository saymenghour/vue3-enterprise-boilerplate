import CryptoJS from 'crypto-js';

const iv = process.env.AES_IV ?? '';
const secretKey = process.env.AES_SECRET_KEY ?? '';

class AESCipher {
  /**
   * Generates a random string using CryptoJS library.
   *
   * @return {string} the randomly generated string
   */
  generateRandomString() {
    const secretPhrase = CryptoJS.lib.WordArray.random(16);
    return secretPhrase.toString();
  }

  /**
   * Encrypts the given plain text using a secret key.
   *
   * @param {string} plainText - the plain text to be encrypted
   * @return {type} the encrypted text
   */
  encrypt(plainText: string) {
    return this.encryptWithKey(plainText, secretKey);
  }

  /**
   * Decrypts the given cipher text using a secret key.
   *
   * @param {string} cipherText - the text to be decrypted
   * @return {type} the decrypted result
   */
  decrypt(cipherText: string) {
    return this.decryptWithKey(cipherText, secretKey);
  }

  /**
   * Encrypts the plain text using the provided secret key.
   *
   * @param {string} plainText - the text to be encrypted
   * @param {string} secretKey - the secret key used for encryption
   * @return {string} the encrypted cipher text
   */
  encryptWithKey(plainText: string, secretKey: string) {
    const data = CryptoJS.enc.Utf8.parse(plainText);
    const cipherText = CryptoJS.AES.encrypt(data, this.generateKey(secretKey), {
      iv: this.generateIv(),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return cipherText.toString();
  }

  /**
   * Decrypts the given encrypted text using the provided secret key.
   *
   * @param {string} encryptedText - the text to be decrypted
   * @param {string} secretKey - the key used for decryption
   * @return {string} the decrypted plain text
   */
  decryptWithKey(encryptedText: string, secretKey: string) {
    const cipherText = CryptoJS.AES.decrypt(encryptedText, this.generateKey(secretKey), {
      iv: this.generateIv(),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return cipherText.toString(CryptoJS.enc.Utf8);
  }

  /**
   * Generates a key using the provided secret key.
   *
   * @param {string} secretKey - the secret key used to generate the key
   * @return {object} the generated key
   */
  private generateKey(secretKey: string) {
    return CryptoJS.enc.Utf8.parse(secretKey.substring(0, 32));
  }

  /**
   * Generates the initialization vector for encryption.
   *
   * @return {type} the initialization vector for encryption
   */
  private generateIv() {
    return CryptoJS.enc.Utf8.parse(iv.substring(0, 16));
  }
}

export default new AESCipher();
