var CryptoJS = require("crypto-js");

export default class uitls {

    //解密
    static decryptByAES(cipherText, keyInBase64Str) {
        let key = CryptoJS.enc.Base64.parse(keyInBase64Str);
        // 返回的是一个Word Array Object，其实就是Java里的字节数组
        let decrypted = CryptoJS.AES.decrypt(cipherText, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        });

        return decrypted.toString(CryptoJS.enc.Utf8);
    }

    /**
 * AES加密
 * @param plainText 明文
 * @param keyInBase64Str base64编码后的key
 * @returns {string} base64编码后的密文
 */
    public static encryptByAES(plainText, keyInBase64Str) {
        let key = CryptoJS.enc.Base64.parse(keyInBase64Str);
        let encrypted = CryptoJS.AES.encrypt(plainText, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        });
        // 这里的encrypted不是字符串，而是一个CipherParams对象
        return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    }
}
