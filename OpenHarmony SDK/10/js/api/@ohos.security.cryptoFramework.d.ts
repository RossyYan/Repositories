/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { AsyncCallback } from './@ohos.base';
/**
 * Provides a set of encryption and decryption algorithm library framework, shields the underlying differences,
 * encapsulate the relevant algorithm library, and provides a unified functional interface upward.
 *
 * @namespace cryptoFramework
 * @syscap SystemCapability.Security.CryptoFramework
 * @since 9
 */
declare namespace cryptoFramework {
    /**
     * Enum for result code.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    enum Result {
        /**
         * Indicates that input parameters is invalid.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        INVALID_PARAMS = 401,
        /**
         * Indicates that function or algorithm is not supported.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        NOT_SUPPORT = 801,
        /**
         * Indicates the memory error.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        ERR_OUT_OF_MEMORY = 17620001,
        /**
         * Indicates that runtime error.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        ERR_RUNTIME_ERROR = 17620002,
        /**
         * Indicates that crypto operation error.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        ERR_CRYPTO_OPERATION = 17630001
    }
    /**
     * Provides the data blob type.
     *
     * @typedef DataBlob
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface DataBlob {
        /**
         * Indicates the content of data blob.
         *
         * @type { Uint8Array }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        data: Uint8Array;
    }
    /**
     * Provides the ParamsSpec type, including the algorithm name.
     *
     * @typedef ParamsSpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface ParamsSpec {
        /**
         * Indicates the algorithm name. Should be set before initialization of a cipher object.
         *
         * @type { string }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        algName: string;
    }
    /**
     * Provides the IvParamsSpec type, including the parameter iv.
     *
     * @typedef IvParamsSpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface IvParamsSpec extends ParamsSpec {
        /**
         * Indicates the algorithm parameters such as iv.
         *
         * @type { DataBlob }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        iv: DataBlob;
    }
    /**
     * Provides the GcmParamsSpec type, including the parameter iv, aad and authTag.
     *
     * @typedef GcmParamsSpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface GcmParamsSpec extends ParamsSpec {
        /**
         * Indicates the GCM algorithm parameters such as iv.
         *
         * @type { DataBlob }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        iv: DataBlob;
        /**
         * Indicates the additional Authenticated Data in GCM mode.
         *
         * @type { DataBlob }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        aad: DataBlob;
        /**
         * Indicates the output tag from the encryption operation. The tag is used for integrity check.
         *
         * @type { DataBlob }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        authTag: DataBlob;
    }
    /**
     * Provides the CcmParamsSpec type, including the parameter iv, aad and authTag.
     *
     * @typedef CcmParamsSpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface CcmParamsSpec extends ParamsSpec {
        /**
         * Indicates the GCM algorithm parameters such as IV.
         *
         * @type { DataBlob }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        iv: DataBlob;
        /**
         * Indicates the Additional Authenticated Data in CCM mode.
         *
         * @type { DataBlob }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        aad: DataBlob;
        /**
         * Indicates the output tag from the encryption operation. The tag is used for integrity check.
         *
         * @type { DataBlob }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        authTag: DataBlob;
    }
    /**
     * Enum for obtain the crypto operation.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    enum CryptoMode {
        /**
         * The value of encryption operation for AES, 3DES and RSA.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        ENCRYPT_MODE = 0,
        /**
         * The value of decryption operation for AES, 3DES and RSA.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        DECRYPT_MODE = 1
    }
    /**
     * Provides the Key type, which is the common parent class of keys.
     *
     * @typedef Key
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface Key {
        /**
         * Encode the key object to binary data.
         *
         * @returns { DataBlob } the binary data of the key object.
         * @throws { BusinessError } 801 - this operation is not supported.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getEncoded(): DataBlob;
        /**
         * Indicates the format of the key object.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly format: string;
        /**
         * Indicates the algorithm name of the key object.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName: string;
    }
    /**
     * Provides the SymKey type, which is used for symmetric cryptography.
     *
     * @typedef SymKey
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface SymKey extends Key {
        /**
         * Reset the key data to zero in the memory.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        clearMem(): void;
    }
    /**
     * Provides the private key type.
     *
     * @typedef PriKey
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface PriKey extends Key {
        /**
         * Clear memory of private key.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        clearMem(): void;
        /**
         * Get the specified parameter of the private key.
         *
         * @param { AsyKeySpecItem } itemType - indicates the specified parameters type.
         * @returns { bigint | string | number } the specified parameters value.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        getAsyKeySpec(itemType: AsyKeySpecItem): bigint | string | number;
    }
    /**
     * Provides the public key interface for asymmetric keys.
     *
     * @typedef PubKey
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface PubKey extends Key {
        /**
         * Get the specified parameter of the public key.
         *
         * @param { AsyKeySpecItem } itemType - indicates the specified parameters type.
         * @returns { bigint | string | number } the specified parameters value.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        getAsyKeySpec(itemType: AsyKeySpecItem): bigint | string | number;
    }
    /**
     * Provides the keypair interface for asymmetric keys. A keyPair object contains both private key and public key.
     *
     * @typedef KeyPair
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface KeyPair {
        /**
         * KeyPair's private key.
         *
         * @type { PriKey }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly priKey: PriKey;
        /**
         * KeyPair's public key.
         *
         * @type { PubKey }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly pubKey: PubKey;
    }
    /**
     * Provides the random interface.
     *
     * @typedef Random
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface Random {
        /**
         * Generate random DataBlob by given length.
         *
         * @param { number } len - indicates the length of random DataBlob.
         * @param { AsyncCallback<DataBlob> } callback - the callback used to return random DataBlob.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        generateRandom(len: number, callback: AsyncCallback<DataBlob>): void;
        /**
         * Generate random DataBlob by given length.
         *
         * @param { number } len - indicates the length of random DataBlob.
         * @returns { Promise<DataBlob> } the promise used to return the generated random blob.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        generateRandom(len: number): Promise<DataBlob>;
        /**
         * Generate random DataBlob by given length synchronously.
         *
         * @param { number } len - indicates the length of random DataBlob.
         * @returns { DataBlob } return the generated random blob.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        generateRandomSync(len: number): DataBlob;
        /**
         * Set seed by given DataBlob.
         *
         * @param { DataBlob } seed - indicates the seed DataBlob.
         * @throws { BusinessError } 17620001 - memory error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        setSeed(seed: DataBlob): void;
        /**
         * Indicates the random generation algorithm name.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        readonly algName: string;
    }
    /**
     * Create a random generator instance.
     *
     * @returns { Random } returns the created rand instance.
     * @throws { BusinessError } 17620001 - memory error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createRandom(): Random;
    /**
     * The AsyKeyGenerator provides the ability to generate or convert keyPair.
     *
     * @typedef AsyKeyGenerator
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface AsyKeyGenerator {
        /**
         * Used to generate asymmetric keypair.
         *
         * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        generateKeyPair(callback: AsyncCallback<KeyPair>): void;
        /**
         * Used to generate asymmetric keypair.
         *
         * @returns { Promise<KeyPair> } the promise used to return keypair.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        generateKeyPair(): Promise<KeyPair>;
        /**
         * Used to convert asymmetric key data to keypair object.
         *
         * @param { DataBlob } pubKey - the public key data blob.
         * @param { DataBlob } priKey - the private key data blob.
         * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        convertKey(pubKey: DataBlob, priKey: DataBlob, callback: AsyncCallback<KeyPair>): void;
        /**
         * Used to convert asymmetric key data to keypair object.
         *
         * @param { DataBlob | null } pubKey - the public key data blob.
         * @param { DataBlob | null } priKey - the private key data blob.
         * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        convertKey(pubKey: DataBlob | null, priKey: DataBlob | null, callback: AsyncCallback<KeyPair>): void;
        /**
         * Used to convert asymmetric key data to keypair object.
         *
         * @param { DataBlob } pubKey - the public key data blob.
         * @param { DataBlob } priKey - the private key data blob.
         * @returns { Promise<KeyPair> } the promise used to return keypair.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        convertKey(pubKey: DataBlob, priKey: DataBlob): Promise<KeyPair>;
        /**
         * Used to convert asymmetric key data to keypair object.
         *
         * @param { DataBlob | null } pubKey - the public key data blob.
         * @param { DataBlob | null } priKey - the private key data blob.
         * @returns { Promise<KeyPair> } the promise used to return keypair.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        convertKey(pubKey: DataBlob | null, priKey: DataBlob | null): Promise<KeyPair>;
        /**
         * The algName of the AsyKeyGenerator.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName: string;
    }
    /**
     * Provides the SymKeyGenerator type, which is used for generating symmetric key.
     *
     * @typedef SymKeyGenerator
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface SymKeyGenerator {
        /**
         * Generate a symmetric key object randomly.
         *
         * @param { AsyncCallback<SymKey> } callback - the callback of generateSymKey.
         * @throws { BusinessError } 17620001 - memory error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        generateSymKey(callback: AsyncCallback<SymKey>): void;
        /**
         * Generate a symmetric key object randomly.
         *
         * @returns { Promise<SymKey> } the promise returned by the function.
         * @throws { BusinessError } 17620001 - memory error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        generateSymKey(): Promise<SymKey>;
        /**
         * Generate a symmetric key object according to the provided binary key data.
         *
         * @param { DataBlob } key - the key data blob.
         * @param { AsyncCallback<SymKey> } callback - the callback of generateSymKey.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        convertKey(key: DataBlob, callback: AsyncCallback<SymKey>): void;
        /**
         * Generate a symmetric key object according to the provided binary key data.
         *
         * @param { DataBlob } key - the key data blob.
         * @returns { Promise<SymKey> } the promise returned by the function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        convertKey(key: DataBlob): Promise<SymKey>;
        /**
         * Indicates the algorithm name of the SymKeyGenerator object.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName: string;
    }
    /**
     * Create the asymmetric key generator instance according to the given algorithm name.
     *
     * @param { string } algName - indicates the algorithm name.
     * @returns { AsyKeyGenerator } the asymmetric key generator instance.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createAsyKeyGenerator(algName: string): AsyKeyGenerator;
    /**
     * Create a symmetric key generator according to the given algorithm name.
     *
     * @param { string } algName - indicates the algorithm name.
     * @returns { SymKeyGenerator } the symmetric key generator instance.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createSymKeyGenerator(algName: string): SymKeyGenerator;
    /**
     * Provides the Mac type, which is used for Mac generation.
     *
     * @typedef Mac
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface Mac {
        /**
         * Init hmac with given SymKey.
         *
         * @param { SymKey } key - indicates the SymKey.
         * @param { AsyncCallback<void> } callback - the callback of the init function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        init(key: SymKey, callback: AsyncCallback<void>): void;
        /**
         * Init hmac with given SymKey.
         *
         * @param { SymKey } key - indicates the SymKey.
         * @returns { Promise<void> } the promise returned by the function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        init(key: SymKey): Promise<void>;
        /**
         * Update hmac with DataBlob.
         *
         * @param { DataBlob } input - indicates the DataBlob.
         * @param { AsyncCallback<void> } callback - the callback of the update function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(input: DataBlob, callback: AsyncCallback<void>): void;
        /**
         * Update hmac with DataBlob.
         *
         * @param { DataBlob } input - indicates the DataBlob.
         * @returns { Promise<void> } the promise returned by the function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(input: DataBlob): Promise<void>;
        /**
         * Output the result of hmac calculation.
         *
         * @param { AsyncCallback<DataBlob> } callback - the callback of the doFinal function.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        doFinal(callback: AsyncCallback<DataBlob>): void;
        /**
         * Output the result of hmac calculation.
         *
         * @returns { Promise<DataBlob> } the promise returned by the function.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        doFinal(): Promise<DataBlob>;
        /**
         * Output the length of hmac result.
         *
         * @returns { number } returns the length of the hmac result.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getMacLength(): number;
        /**
         * Indicates the algorithm name.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName: string;
    }
    /**
     * Provides the mac create func.
     *
     * @param { string } algName - indicates the mac algorithm name.
     * @returns { Mac } returns the created mac instance.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 17620001 - memory error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createMac(algName: string): Mac;
    /**
     * Provides the Md type, which is used for Md generation.
     *
     * @typedef Md
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface Md {
        /**
         * Update md with DataBlob.
         *
         * @param { DataBlob } input - indicates the DataBlob.
         * @param { AsyncCallback<void> } callback - the callback of the update function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(input: DataBlob, callback: AsyncCallback<void>): void;
        /**
         * Update md with DataBlob.
         *
         * @param { DataBlob } input - indicates the DataBlob.
         * @returns { Promise<void> } the promise returned by the function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(input: DataBlob): Promise<void>;
        /**
         * Output the result of md calculation.
         *
         * @param { AsyncCallback<DataBlob> } callback - the callback of the digest function.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        digest(callback: AsyncCallback<DataBlob>): void;
        /**
         * Output the result of md calculation.
         *
         * @returns { Promise<DataBlob> } the promise returned by the function.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        digest(): Promise<DataBlob>;
        /**
         * Output the length of md result.
         *
         * @returns { number } returns the length of the hmac result.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getMdLength(): number;
        /**
         * Indicates the algorithm name.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName: string;
    }
    /**
     * Provides the md create func.
     *
     * @param { string } algName - indicates the md algorithm name.
     * @returns { Md } returns the created md instance.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 17620001 - memory error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createMd(algName: string): Md;
    /**
     * Enum for encryption specified parameters.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    enum CipherSpecItem {
        /**
         * Indicates the algorithm name of the message digest function. It is used during RSA encryption.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        OAEP_MD_NAME_STR = 100,
        /**
         * Indicates the algorithm name for the mask generation function. It is used during RSA encryption.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        OAEP_MGF_NAME_STR = 101,
        /**
         * Indicates the message digest parameter for the MGF1 mask generation function. It is used during RSA encryption.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        OAEP_MGF1_MD_STR = 102,
        /**
         * Indicates the source of the encoding input P. It is used during RSA encryption.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        OAEP_MGF1_PSRC_UINT8ARR = 103
    }
    /**
     * Enum for signature specified parameters, also used for verification.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    enum SignSpecItem {
        /**
         * Indicates the algorithm name of the message digest function. It is used in RSA signing and verifying process.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        PSS_MD_NAME_STR = 100,
        /**
         * Indicates the algorithm name of the mask generation function. It is used in RSA signing and verifying process.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        PSS_MGF_NAME_STR = 101,
        /**
         * Indicates the message digest parameter for the MGF1 mask generation function.
         * It is used in RSA signing and verifying process.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        PSS_MGF1_MD_STR = 102,
        /**
         * Indicates the salt length in bits. It is used in RSA signing and verifying process.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        PSS_SALT_LEN_NUM = 103,
        /**
         * Indicates the value for the trailer field. It is used in RSA signing and verifying process.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        PSS_TRAILER_FIELD_NUM = 104
    }
    /**
     * Provides the Cipher type, which is used for encryption and decryption operations.
     *
     * @typedef Cipher
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface Cipher {
        /**
         * Init the crypto operation with the given crypto mode, key and parameters.
         *
         * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
         * @param { Key } key - indicates the symmetric key or the asymmetric key.
         * @param { ParamsSpec } params - indicates the algorithm parameters such as IV.
         * @param { AsyncCallback<void> } callback - the callback of the init function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        init(opMode: CryptoMode, key: Key, params: ParamsSpec, callback: AsyncCallback<void>): void;
        /**
         * Init the crypto operation with the given crypto mode, key and parameters.
         *
         * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
         * @param { Key } key - indicates the symmetric key or the asymmetric key.
         * @param { ParamsSpec | null } params - indicates the algorithm parameters such as IV.
         * @param { AsyncCallback<void> } callback - the callback of the init function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        init(opMode: CryptoMode, key: Key, params: ParamsSpec | null, callback: AsyncCallback<void>): void;
        /**
         * Init the crypto operation with the given crypto mode, key and parameters.
         *
         * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
         * @param { Key } key - indicates the symmetric key or the asymmetric key.
         * @param { ParamsSpec } params - indicates the algorithm parameters such as IV.
         * @returns { Promise<void> } the promise returned by the function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        init(opMode: CryptoMode, key: Key, params: ParamsSpec): Promise<void>;
        /**
         * Init the crypto operation with the given crypto mode, key and parameters.
         *
         * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
         * @param { Key } key - indicates the symmetric key or the asymmetric key.
         * @param { ParamsSpec | null } params - indicates the algorithm parameters such as IV.
         * @returns { Promise<void> } the promise returned by the function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        init(opMode: CryptoMode, key: Key, params: ParamsSpec | null): Promise<void>;
        /**
         * Update the crypto operation with the input data, and feed back the encrypted or decrypted data
         * this time. RSA is not supported in this function.
         *
         * @param { DataBlob } data - indicates the data to be encrypted or decrypted.
         * @param { AsyncCallback<DataBlob> } callback - the callback of the update function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(data: DataBlob, callback: AsyncCallback<DataBlob>): void;
        /**
         * Update the crypto operation with the input data, and feed back the encrypted or decrypted data
         * this time. RSA is not supported in this function.
         *
         * @param { DataBlob } data - indicates the data to be encrypted or decrypted.
         * @returns { Promise<DataBlob> } the promise returned by the function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(data: DataBlob): Promise<DataBlob>;
        /**
         * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
         * Data cannot be updated after the crypto operation is finished.
         *
         * @param { DataBlob } data - indicates the data to be finally encrypted or decrypted.
         * @param { AsyncCallback<DataBlob> } callback - the callback of the doFinal function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        doFinal(data: DataBlob, callback: AsyncCallback<DataBlob>): void;
        /**
         * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
         * Data cannot be updated after the crypto operation is finished.
         *
         * @param { DataBlob | null } data - indicates the data to be finally encrypted or decrypted.
         * @param { AsyncCallback<DataBlob> } callback - the callback of the doFinal function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>): void;
        /**
         * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
         * Data cannot be updated after the crypto operation is finished.
         *
         * @param { DataBlob } data - indicates the data to be finally encrypted or decrypted.
         * @returns { Promise<DataBlob> } the promise returned by the function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        doFinal(data: DataBlob): Promise<DataBlob>;
        /**
         * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
         * Data cannot be updated after the crypto operation is finished.
         *
         * @param { DataBlob | null } data - indicates the data to be finally encrypted or decrypted.
         * @returns { Promise<DataBlob> } the promise returned by the function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        doFinal(data: DataBlob | null): Promise<DataBlob>;
        /**
         * Set the specified parameter to the cipher object.
         * Currently, only the OAEP_MGF1_PSRC_UINT8ARR parameter in RSA is supported.
         *
         * @param { CipherSpecItem } itemType - indicates the specified parameter type.
         * @param { Uint8Array } itemValue - the value of the specified parameter.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 801 - this operation is not supported.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        setCipherSpec(itemType: CipherSpecItem, itemValue: Uint8Array): void;
        /**
         * Get the specified parameter from the cipher object.
         * Currently, only OAEP parameters in RSA is supported.
         *
         * @param { CipherSpecItem } itemType - indicates the specified parameter type.
         * @returns { string | Uint8Array } the value of the specified parameter.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 801 - this operation is not supported.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        getCipherSpec(itemType: CipherSpecItem): string | Uint8Array;
        /**
         * Indicates the algorithm name of the cipher object.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName: string;
    }
    /**
     * Create a cipher object for encryption and decryption operations according to the given specifications.
     * Two different Cipher objects should be created when using RSA encryption and decryption,
     * even with the same specifications.
     *
     * @param { string } transformation - indicates the description to be transformed to cipher specifications.
     * @returns { Cipher } the cipher object returned by the function.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createCipher(transformation: string): Cipher;
    /**
     * Provides the Sign type, which is used for generating signatures.
     *
     * @typedef Sign
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface Sign {
        /**
         * Used to init environment.
         *
         * @param { PriKey } priKey - the private key.
         * @param { AsyncCallback<void> } callback - the call back function return nothing.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        init(priKey: PriKey, callback: AsyncCallback<void>): void;
        /**
         * Used to init environment.
         *
         * @param { PriKey } priKey - the private key.
         * @returns { Promise<void> } return nothing.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        init(priKey: PriKey): Promise<void>;
        /**
         * Used to append the message need to be signed.
         *
         * @param { DataBlob } data - the data need to be signed.
         * @param { AsyncCallback<void> } callback - the call back function return nothing.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(data: DataBlob, callback: AsyncCallback<void>): void;
        /**
         * Used to append the message need to be signed.
         *
         * @param { DataBlob } data - the data need to be signed.
         * @returns { Promise<void> } return nothing.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(data: DataBlob): Promise<void>;
        /**
         * Used to sign message, include the update data.
         *
         * @param { DataBlob } data - the data need to be signed.
         * @param { AsyncCallback<DataBlob> } callback - return the signed message.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        sign(data: DataBlob, callback: AsyncCallback<DataBlob>): void;
        /**
         * Used to sign message, include the update data.
         *
         * @param { DataBlob | null } data - the data need to be signed.
         * @param { AsyncCallback<DataBlob> } callback - return the signed message.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        sign(data: DataBlob | null, callback: AsyncCallback<DataBlob>): void;
        /**
         * Used to append the message need to be signed.
         *
         * @param { DataBlob } data - the private key.
         * @returns { Promise<DataBlob> } return the signed message.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        sign(data: DataBlob): Promise<DataBlob>;
        /**
         * Used to append the message need to be signed.
         *
         * @param { DataBlob | null } data - the private key.
         * @returns { Promise<DataBlob> } return the signed message.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        sign(data: DataBlob | null): Promise<DataBlob>;
        /**
         * Set the specified parameter to the sign object.
         * Currently, only the PSS_SALT_LEN parameter in RSA is supported.
         *
         * @param { SignSpecItem } itemType - indicates the specified parameter type.
         * @param { number } itemValue - the value of the specified parameter.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 801 - this operation is not supported.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        setSignSpec(itemType: SignSpecItem, itemValue: number): void;
        /**
         * Get the specified parameter from the sign object.
         * Currently, only PSS parameters in RSA is supported.
         *
         * @param { SignSpecItem } itemType - indicates the specified parameter type.
         * @returns { string | number } the value of the specified parameter.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 801 - this operation is not supported.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        getSignSpec(itemType: SignSpecItem): string | number;
        /**
         * Indicates the algorithm name of the sign object.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName: string;
    }
    /**
     * Provides the Verify interface, which is used for verifying signatures.
     *
     * @typedef Verify
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface Verify {
        /**
         * Used to init environment.
         *
         * @param { PubKey } pubKey - the public key.
         * @param { AsyncCallback<void> } callback - return nothing.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        init(pubKey: PubKey, callback: AsyncCallback<void>): void;
        /**
         * Used to init environment.
         *
         * @param { PubKey } pubKey - the public key.
         * @returns { Promise<void> } return nothing.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        init(pubKey: PubKey): Promise<void>;
        /**
         * Used to append the message need to be verified.
         *
         * @param { DataBlob } data - the data need to be verified.
         * @param { AsyncCallback<void> } callback - return nothing.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(data: DataBlob, callback: AsyncCallback<void>): void;
        /**
         * Used to append the message need to be verified.
         *
         * @param { DataBlob } data - the data need to be verified.
         * @returns { Promise<void> } return nothing.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(data: DataBlob): Promise<void>;
        /**
         * Used to verify message, include the update data.
         *
         * @param { DataBlob } data - the data need to be verified.
         * @param { DataBlob } signatureData - the signature data.
         * @param { AsyncCallback<boolean> } callback - return the verify result.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        verify(data: DataBlob, signatureData: DataBlob, callback: AsyncCallback<boolean>): void;
        /**
         * Used to verify message, include the update data.
         *
         * @param { DataBlob | null } data - the data need to be verified.
         * @param { DataBlob } signatureData - the signature data.
         * @param { AsyncCallback<boolean> } callback - return the verify result.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        verify(data: DataBlob | null, signatureData: DataBlob, callback: AsyncCallback<boolean>): void;
        /**
         * Used to verify message, include the update data.
         *
         * @param { DataBlob } data - the data need to be verified.
         * @param { DataBlob } signatureData - the signature data.
         * @returns { Promise<boolean> } return the verify result.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        verify(data: DataBlob, signatureData: DataBlob): Promise<boolean>;
        /**
         * Used to verify message, include the update data.
         *
         * @param { DataBlob | null } data - the data need to be verified.
         * @param { DataBlob } signatureData - the signature data.
         * @returns { Promise<boolean> } return the verify result.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        verify(data: DataBlob | null, signatureData: DataBlob): Promise<boolean>;
        /**
         * Set the specified parameter to the verify object.
         * Currently, only the PSS_SALT_LEN parameter in RSA is supported.
         *
         * @param { SignSpecItem } itemType - indicates the specified parameter type.
         * @param { number } itemValue - the value of the specified parameter.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 801 - this operation is not supported.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        setVerifySpec(itemType: SignSpecItem, itemValue: number): void;
        /**
         * Get the specified parameter from the verify object.
         * Currently, only PSS parameters in RSA is supported.
         *
         * @param { SignSpecItem } itemType - indicates the specified parameter type.
         * @returns { string | number } the value of the specified parameter.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 801 - this operation is not supported.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        getVerifySpec(itemType: SignSpecItem): string | number;
        /**
         * Indicates the algorithm name of the verify object.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName: string;
    }
    /**
     * Create a sign object for generating signatures.
     *
     * @param { string } algName - indicates the algorithm name and params.
     * @returns { Sign } the sign class.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createSign(algName: string): Sign;
    /**
     * Create a verify object for verifying signatures.
     *
     * @param { string } algName - indicates the algorithm name and the parameters.
     * @returns { Verify } the verify class.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createVerify(algName: string): Verify;
    /**
     * Provides key agreement function.
     *
     * @typedef KeyAgreement
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface KeyAgreement {
        /**
         * Used to generate secret.
         *
         * @param { PriKey } priKey - the private key.
         * @param { PubKey } pubKey - the public key.
         * @param { AsyncCallback<DataBlob> } callback - return the secret.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        generateSecret(priKey: PriKey, pubKey: PubKey, callback: AsyncCallback<DataBlob>): void;
        /**
         * Used to generate secret.
         *
         * @param { PriKey } priKey - the private key.
         * @param { PubKey } pubKey - the public key.
         * @returns { Promise<DataBlob> } the promise used to return secret.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17620002 - runtime error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        generateSecret(priKey: PriKey, pubKey: PubKey): Promise<DataBlob>;
        /**
         * Indicates the algorithm name.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName: string;
    }
    /**
     * Create a key agreement object.
     *
     * @param { string } algName - indicates the algorithm name and params.
     * @returns { KeyAgreement } the key agreement object.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createKeyAgreement(algName: string): KeyAgreement;
    /**
     * Enum for algorithm specified parameters.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    enum AsyKeySpecItem {
        /**
         * Indicates the DSA prime p.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        DSA_P_BN = 101,
        /**
         * Indicates the DSA sub-prime q.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        DSA_Q_BN = 102,
        /**
         * Indicates the DSA base g.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        DSA_G_BN = 103,
        /**
         * Indicates the DSA private key.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        DSA_SK_BN = 104,
        /**
         * Indicates the DSA public key.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        DSA_PK_BN = 105,
        /**
         * Indicates the prime p of an elliptic curve (EC) prime finite field.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        ECC_FP_P_BN = 201,
        /**
         * Indicates the first coefficient a of this elliptic curve.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        ECC_A_BN = 202,
        /**
         * Indicates the second coefficient b of this elliptic curve.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        ECC_B_BN = 203,
        /**
         * Indicates the affine x-coordinate of base point g.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        ECC_G_X_BN = 204,
        /**
         * Indicates the affine y-coordinate of base point g.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        ECC_G_Y_BN = 205,
        /**
         * Indicates the order of the base point g.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        ECC_N_BN = 206,
        /**
         * Indicates the cofactor of the elliptic curve.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        ECC_H_NUM = 207,
        /**
         * Indicates the private value of the ECC private key.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        ECC_SK_BN = 208,
        /**
         * Indicates the affine x-coordinate of a point, which is the public point of an ECC public key.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        ECC_PK_X_BN = 209,
        /**
         * Indicates the affine y-coordinate of a point, which is the public point of an ECC public key.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        ECC_PK_Y_BN = 210,
        /**
         * Indicates an elliptic curve finite field type.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        ECC_FIELD_TYPE_STR = 211,
        /**
         * Indicates the field size in bits.
         * For Fp field (an elliptic curve prime finite field with prime p), the field size is the size of prime p.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        ECC_FIELD_SIZE_NUM = 212,
        /**
         * Indicates the curve name according to SECG (Standards for Efficient Cryptography Group).
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        ECC_CURVE_NAME_STR = 213,
        /**
         * Indicates the modulus n of RSA algorithm.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        RSA_N_BN = 301,
        /**
         * Indicates the private exponent d of RSA algorithm.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        RSA_SK_BN = 302,
        /**
         * Indicates the public exponent e of RSA algorithm.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        RSA_PK_BN = 303
    }
    /**
     * Enum for algorithm specified parameters type.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    enum AsyKeySpecType {
        /**
         * Indicates the common specified parameters.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        COMMON_PARAMS_SPEC = 0,
        /**
         * Indicates the specified parameters of private key.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        PRIVATE_KEY_SPEC = 1,
        /**
         * Indicates the specified parameters of public key.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        PUBLIC_KEY_SPEC = 2,
        /**
         * Indicates the specified parameters of keypair.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        KEY_PAIR_SPEC = 3
    }
    /**
     * Provides a base interface for specifying asymmetric key parameters.
     *
     * @typedef AsyKeySpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface AsyKeySpec {
        /**
         * Indicates the algorithm name of the asymmetric key object.
         *
         * @type { string }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        algName: string;
        /**
         * Indicates the type of the specified parameters.
         *
         * @type { AsyKeySpecType }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        specType: AsyKeySpecType;
    }
    /**
     * Specifies the set of parameters used in the DSA algorithm.
     *
     * @typedef DSACommonParamsSpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface DSACommonParamsSpec extends AsyKeySpec {
        /**
         * Indicates the DSA prime p.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        p: bigint;
        /**
         * Indicates the DSA sub-prime q.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        q: bigint;
        /**
         * Indicates the DSA base g.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        g: bigint;
    }
    /**
     * Specifies the DSA public key with its associated parameters.
     *
     * @typedef DSAPubKeySpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface DSAPubKeySpec extends AsyKeySpec {
        /**
         * Indicates the DSA common parameters.
         *
         * @type { DSACommonParamsSpec }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        params: DSACommonParamsSpec;
        /**
         * Indicates the DSA public key.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        pk: bigint;
    }
    /**
     * Specifies the DSA keypair with its associated parameters.
     *
     * @typedef DSAKeyPairSpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface DSAKeyPairSpec extends AsyKeySpec {
        /**
         * Indicates the DSA common parameters.
         *
         * @type { DSACommonParamsSpec }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        params: DSACommonParamsSpec;
        /**
         * Indicates the DSA private key.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        sk: bigint;
        /**
         * Indicates the DSA public key.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        pk: bigint;
    }
    /**
     * Specifies an elliptic curve finite field.
     *
     * @typedef ECField
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface ECField {
        /**
         * Indicates the type of an elliptic curve finite field.
         * Currently, only Fp (elliptic curve prime finite field) is supported.
         *
         * @type { string }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        fieldType: string;
    }
    /**
     * Specifies an elliptic curve finite field with the prime p.
     *
     * @typedef ECFieldFp
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface ECFieldFp extends ECField {
        /**
         * Indicates the prime p.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        p: bigint;
    }
    /**
     * Represents a point on an elliptic curve in affine coordinates.
     *
     * @typedef Point
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface Point {
        /**
         * Indicates the affine x-coordinate.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        x: bigint;
        /**
         * Indicates the affine y-coordinate.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        y: bigint;
    }
    /**
     * Specifies the set of common parameters used in the ECC algorithm.
     *
     * @typedef ECCCommonParamsSpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface ECCCommonParamsSpec extends AsyKeySpec {
        /**
         * Indicates an elliptic curve finite field.
         *
         * @type { ECField }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        field: ECField;
        /**
         * Indicates the first coefficient a of the elliptic curve.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        a: bigint;
        /**
         * Indicates the second coefficient b of the elliptic curve.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        b: bigint;
        /**
         * Indicates the base point g.
         *
         * @type { Point }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        g: Point;
        /**
         * Indicates the order of the base point g.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        n: bigint;
        /**
         * Indicates the cofactor h.
         *
         * @type { number }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        h: number;
    }
    /**
     * Specifies the ECC private key with its associated parameters.
     *
     * @typedef ECCPriKeySpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface ECCPriKeySpec extends AsyKeySpec {
        /**
         * Indicates the ECC common parameters.
         *
         * @type { ECCCommonParamsSpec }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        params: ECCCommonParamsSpec;
        /**
         * Indicates the private value of the ECC private key.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        sk: bigint;
    }
    /**
     * Specifies the ECC public key with its associated parameters.
     *
     * @typedef ECCPubKeySpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface ECCPubKeySpec extends AsyKeySpec {
        /**
         * Indicates the ECC common parameters.
         *
         * @type { ECCCommonParamsSpec }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        params: ECCCommonParamsSpec;
        /**
         * Indicates the public point of the ECC public key.
         *
         * @type { Point }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        pk: Point;
    }
    /**
     * Specifies the ECC keypair with its associated parameters.
     *
     * @typedef ECCKeyPairSpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface ECCKeyPairSpec extends AsyKeySpec {
        /**
         * Indicates the ECC common parameters.
         *
         * @type { ECCCommonParamsSpec }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        params: ECCCommonParamsSpec;
        /**
         * Indicates the private value of the ECC private key.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        sk: bigint;
        /**
         * Indicates the public point of the ECC public key.
         *
         * @type { Point }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        pk: Point;
    }
    /**
     * Specifies the set of common parameters used in the RSA algorithm.
     *
     * @typedef RSACommonParamsSpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface RSACommonParamsSpec extends AsyKeySpec {
        /**
         * Indicates the modulus n.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        n: bigint;
    }
    /**
     * Specifies the RSA public key with its associated parameters.
     *
     * @typedef RSAPubKeySpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface RSAPubKeySpec extends AsyKeySpec {
        /**
         * Indicates the RSA common parameters.
         *
         * @type { RSACommonParamsSpec }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        params: RSACommonParamsSpec;
        /**
         * Indicates the public exponent e.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        pk: bigint;
    }
    /**
     * Specifies the RSA keypair with its associated parameters.
     *
     * @typedef RSAKeyPairSpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface RSAKeyPairSpec extends AsyKeySpec {
        /**
         * Indicates the RSA common parameters.
         *
         * @type { RSACommonParamsSpec }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        params: RSACommonParamsSpec;
        /**
         * Indicates the private exponent d.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        sk: bigint;
        /**
         * Indicates the public exponent e.
         *
         * @type { bigint }
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        pk: bigint;
    }
    /**
     * The AsyKeyGeneratorBySpec provides the ability to generate key with its associated parameters.
     *
     * @typedef AsyKeyGeneratorBySpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    interface AsyKeyGeneratorBySpec {
        /**
         * Generate an asymmetric keypair.
         *
         * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        generateKeyPair(callback: AsyncCallback<KeyPair>): void;
        /**
         * Generate an asymmetric keypair.
         *
         * @returns { Promise<KeyPair> } the promise used to return keypair.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        generateKeyPair(): Promise<KeyPair>;
        /**
         * Generate a private key instance.
         *
         * @param { AsyncCallback<PriKey> } callback - the callback used to return PriKey.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        generatePriKey(callback: AsyncCallback<PriKey>): void;
        /**
         * Generate a private key instance.
         *
         * @returns { Promise<PriKey> } the promise used to return PriKey.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        generatePriKey(): Promise<PriKey>;
        /**
         * Generate a public key instance.
         *
         * @param { AsyncCallback<PubKey> } callback - the callback used to return PubKey.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        generatePubKey(callback: AsyncCallback<PubKey>): void;
        /**
         * Generate a public key instance.
         *
         * @returns { Promise<PubKey> } the promise used to return PubKey.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 17620001 - memory error.
         * @throws { BusinessError } 17630001 - crypto operation error.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        generatePubKey(): Promise<PubKey>;
        /**
         * Indicates the algorithm name of the generator.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 10
         */
        readonly algName: string;
    }
    /**
     * Create an asymmetric key generator with the specified parameters.
     *
     * @param { AsyKeySpec } asyKeySpec - indicates the associated parameters of algorithm.
     * @returns { AsyKeyGeneratorBySpec } the generator obj create by asyKeySpec.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    function createAsyKeyGeneratorBySpec(asyKeySpec: AsyKeySpec): AsyKeyGeneratorBySpec;
}
export default cryptoFramework;
