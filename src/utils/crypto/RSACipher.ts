import { JSEncrypt } from 'jsencrypt';

class RSACipher {
  /**
   * Encrypts the plain text using the provided public key.
   *
   * @param {string} plainText - the text to be encrypted
   * @param {string} publicKey - the public key used for encryption
   * @return {string} the encrypted text
   */
  encrypt(plainText: string, publicKey: string): string {
    const jsEncrypt = new JSEncrypt();
    jsEncrypt.setPublicKey(publicKey);
    return jsEncrypt.encrypt(plainText) as string;
  }

  /**
   * Decrypts the encrypted text using the provided private key.
   *
   * @param {string} encryptedText - the encrypted text to be decrypted
   * @param {string} privateKey - the private key used for decryption
   * @return {string} the decrypted text
   */
  decrypt(encryptedText: string, privateKey: string): string {
    const jsEncrypt = new JSEncrypt();
    jsEncrypt.setPrivateKey(privateKey);
    return jsEncrypt.decrypt(encryptedText) as string;
  }
}

export default new RSACipher();
