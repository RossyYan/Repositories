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
import cryptoFramework from '@ohos.security.cryptoFramework';
/**
 * Provides a series of capabilities related to certificates,
 * which supports parsing, verification, and output of certificates, extensions, and CRLs.
 *
 * @namespace cert
 * @syscap SystemCapability.Security.Cert
 * @since 9
 */
declare namespace cert {
    /**
     * Enum for result code
     *
     * @enum { number }
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    enum CertResult {
        /**
         * Indicates that input parameters is invalid.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        INVALID_PARAMS = 401,
        /**
         * Indicates that function or algorithm is not supported.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        NOT_SUPPORT = 801,
        /**
         * Indicates the memory error.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        ERR_OUT_OF_MEMORY = 19020001,
        /**
         * Indicates that runtime error.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        ERR_RUNTIME_ERROR = 19020002,
        /**
         * Indicates the crypto operation error.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        ERR_CRYPTO_OPERATION = 19030001,
        /**
         * Indicates that the certificate signature verification failed.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        ERR_CERT_SIGNATURE_FAILURE = 19030002,
        /**
         * Indicates that the certificate has not taken effect.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        ERR_CERT_NOT_YET_VALID = 19030003,
        /**
         * Indicates that the certificate has expired.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        ERR_CERT_HAS_EXPIRED = 19030004,
        /**
         * Indicates a failure to obtain the certificate issuer.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        ERR_UNABLE_TO_GET_ISSUER_CERT_LOCALLY = 19030005,
        /**
         * The key cannot be used for signing a certificate.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        ERR_KEYUSAGE_NO_CERTSIGN = 19030006,
        /**
         * The key cannot be used for digital signature.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        ERR_KEYUSAGE_NO_DIGITAL_SIGNATURE = 19030007
    }
    /**
     * Provides the data blob type.
     *
     * @typedef DataBlob
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    interface DataBlob {
        /**
         * Indicates the content of data blob.
         *
         * @type { Uint8Array }
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        data: Uint8Array;
    }
    /**
     * Provides the data array type.
     *
     * @typedef DataArray
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    interface DataArray {
        /**
         * Indicates the content of data array.
         *
         * @type { Array<Uint8Array> }
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        data: Array<Uint8Array>;
    }
    /**
     * Enum for supported cert encoding format.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    enum EncodingFormat {
        /**
         * The value of cert DER format.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        FORMAT_DER = 0,
        /**
         * The value of cert PEM format.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        FORMAT_PEM = 1
    }
    /**
     * Enum for the certificate item type.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.Cert
     * @since 10
     */
    enum CertItemType {
        /**
         * Indicates to get certificate TBS(to be signed) value.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        CERT_ITEM_TYPE_TBS = 0,
        /**
         * Indicates to get certificate public key.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        CERT_ITEM_TYPE_PUBLIC_KEY = 1,
        /**
         * Indicates to get certificate issuer unique id value.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        CERT_ITEM_TYPE_ISSUER_UNIQUE_ID = 2,
        /**
         * Indicates to get certificate subject unique id value.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        CERT_ITEM_TYPE_SUBJECT_UNIQUE_ID = 3,
        /**
         * Indicates to get certificate extensions value.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        CERT_ITEM_TYPE_EXTENSIONS = 4
    }
    /**
     * Enumerates for the certificate extension object identifier (OID) types.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.Cert
     * @since 10
     */
    enum ExtensionOidType {
        /**
         * Indicates to obtain all types of OIDs, including critical and uncritical types.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        EXTENSION_OID_TYPE_ALL = 0,
        /**
         * Indicates to obtain OIDs of the critical type.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        EXTENSION_OID_TYPE_CRITICAL = 1,
        /**
         * Indicates to obtain OIDs of the uncritical type.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        EXTENSION_OID_TYPE_UNCRITICAL = 2
    }
    /**
     * Enum for the certificate extension entry type.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.Cert
     * @since 10
     */
    enum ExtensionEntryType {
        /**
         * Indicates to get extension entry.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        EXTENSION_ENTRY_TYPE_ENTRY = 0,
        /**
         * Indicates to get extension entry critical.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        EXTENSION_ENTRY_TYPE_ENTRY_CRITICAL = 1,
        /**
         * Indicates to get extension entry value.
         *
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        EXTENSION_ENTRY_TYPE_ENTRY_VALUE = 2
    }
    /**
     * Provides the cert encoding blob type.
     *
     * @typedef EncodingBlob
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    interface EncodingBlob {
        /**
         * The data input.
         *
         * @type { Uint8Array }
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        data: Uint8Array;
        /**
         * The data encoding format.
         *
         * @type { EncodingFormat }
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        encodingFormat: EncodingFormat;
    }
    /**
     * Provides the cert chain data type.
     *
     * @typedef CertChainData
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    interface CertChainData {
        /**
         * The data input.
         *
         * @type { Uint8Array }
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        data: Uint8Array;
        /**
         * The number of certs.
         *
         * @type { number }
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        count: number;
        /**
         * The data encoding format.
         *
         * @type { EncodingFormat }
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        encodingFormat: EncodingFormat;
    }
    /**
     * Provides the x509 cert type.
     *
     * @typedef X509Cert
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    interface X509Cert {
        /**
         * Verify the X509 cert.
         *
         * @param { cryptoFramework.PubKey } key - public key to verify cert.
         * @param { AsyncCallback<void> } callback - the callback of verify.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>): void;
        /**
         * Verify the X509 cert.
         *
         * @param { cryptoFramework.PubKey } key - public key to verify cert.
         * @returns { Promise<void> } the promise returned by the function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        verify(key: cryptoFramework.PubKey): Promise<void>;
        /**
         * Get X509 cert encoded data.
         *
         * @param { AsyncCallback<EncodingBlob> } callback - the callback of getEncoded.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getEncoded(callback: AsyncCallback<EncodingBlob>): void;
        /**
         * Get X509 cert encoded data.
         *
         * @returns { Promise<EncodingBlob> } the promise of X509 cert encoded data.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getEncoded(): Promise<EncodingBlob>;
        /**
         * Get X509 cert public key.
         *
         * @returns { cryptoFramework.PubKey } X509 cert pubKey.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getPublicKey(): cryptoFramework.PubKey;
        /**
         * Check the X509 cert validity with date.
         *
         * @param { string } date - indicates the cert date.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @throws { BusinessError } 19030003 - the certificate has not taken effect.
         * @throws { BusinessError } 19030004 - the certificate has expired.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        checkValidityWithDate(date: string): void;
        /**
         * Get X509 cert version.
         *
         * @returns { number } X509 cert version.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getVersion(): number;
        /**
         * Get X509 cert serial number.
         *
         * @returns { number } X509 cert serial number.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         * @deprecated since 10
         * @useinstead ohos.security.cert.X509Cert.getCertSerialNumber
         */
        getSerialNumber(): number;
        /**
         * Get X509 cert serial number.
         *
         * @returns { bigint } X509 cert serial number.
         * @throws { BusinessError } 19020002 - runtime error.
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        getCertSerialNumber(): bigint;
        /**
         * Get X509 cert issuer name.
         *
         * @returns { DataBlob } X509 cert issuer name.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getIssuerName(): DataBlob;
        /**
         * Get X509 cert subject name.
         *
         * @returns { DataBlob } X509 cert subject name.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getSubjectName(): DataBlob;
        /**
         * Get X509 cert not before time.
         *
         * @returns { string } X509 cert not before time.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getNotBeforeTime(): string;
        /**
         * Get X509 cert not after time.
         *
         * @returns { string } X509 cert not after time.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getNotAfterTime(): string;
        /**
         * Get X509 cert signature.
         *
         * @returns { DataBlob } X509 cert signature.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getSignature(): DataBlob;
        /**
         * Get X509 cert signature's algorithm name.
         *
         * @returns { string } X509 cert signature's algorithm name.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getSignatureAlgName(): string;
        /**
         * Get X509 cert signature's algorithm oid.
         *
         * @returns { string } X509 cert signature's algorithm oid.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getSignatureAlgOid(): string;
        /**
         * Get X509 cert signature's algorithm name.
         *
         * @returns { DataBlob } X509 cert signature's algorithm name.
         * @throws { BusinessError } 801 - this operation is not supported.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getSignatureAlgParams(): DataBlob;
        /**
         * Get X509 cert key usage.
         *
         * @returns { DataBlob } X509 cert key usage.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getKeyUsage(): DataBlob;
        /**
         * Get X509 cert extended key usage.
         *
         * @returns { DataArray } X509 cert extended key usage.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getExtKeyUsage(): DataArray;
        /**
         * Get X509 cert basic constraints path len.
         *
         * @returns { number } X509 cert basic constraints path len.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getBasicConstraints(): number;
        /**
         * Get X509 cert subject alternative name.
         *
         * @returns { DataArray } X509 cert subject alternative name.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getSubjectAltNames(): DataArray;
        /**
         * Get X509 cert issuer alternative name.
         *
         * @returns { DataArray } X509 cert issuer alternative name.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getIssuerAltNames(): DataArray;
        /**
         * Get certificate item value.
         *
         * @param { CertItemType } itemType
         * @returns { DataBlob } cert item value.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        getItem(itemType: CertItemType): DataBlob;
    }
    /**
     * Provides to create X509 certificate object.
     * The returned object provides the data parsing or verification capability.
     *
     * @param { EncodingBlob } inStream - indicate the input cert data.
     * @param { AsyncCallback<X509Cert> } callback - the callback of createX509Cert.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 19020001 - memory error.
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    function createX509Cert(inStream: EncodingBlob, callback: AsyncCallback<X509Cert>): void;
    /**
     * Provides to create X509 certificate object.
     * The returned object provides the data parsing or verification capability.
     *
     * @param { EncodingBlob } inStream - indicate the input cert data.
     * @returns { Promise<X509Cert> } the promise of X509 cert instance.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 19020001 - memory error.
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    function createX509Cert(inStream: EncodingBlob): Promise<X509Cert>;
    /**
     * The CertExtension interface is used to parse and verify certificate extension.
     *
     * @typedef CertExtension
     * @syscap SystemCapability.Security.Cert
     * @since 10
     */
    interface CertExtension {
        /**
         * Get certificate extension encoded data.
         *
         * @returns { EncodingBlob } cert extension encoded data.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        getEncoded(): EncodingBlob;
        /**
         * Get certificate extension oid list.
         *
         * @param { ExtensionOidType } valueType
         * @returns { DataArray } cert extension OID list value.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        getOidList(valueType: ExtensionOidType): DataArray;
        /**
         * Get certificate extension entry.
         *
         * @param { ExtensionEntryType } valueType
         * @param { DataBlob } oid
         * @returns { DataBlob } cert extension entry value.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        getEntry(valueType: ExtensionEntryType, oid: DataBlob): DataBlob;
        /**
         * Check whether the certificate is a CA(The keyusage contains signature usage and the value of cA in BasicConstraints is true).
         * If not a CA, return -1, otherwise return the path length constraint in BasicConstraints.
         * If the certificate is a CA and the path length constraint does not appear, then return -2 to indicate that there is no limit to path length.
         *
         * @returns { number } path length constraint.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 10
         */
        checkCA(): number;
    }
    /**
     * Provides to create certificate extension object.
     * The returned object provides the data parsing or verification capability.
     *
     * @param { EncodingBlob } inStream - indicate the input cert extensions data.
     * @param { AsyncCallback<CertExtension> } callback - the callback of of certificate extension instance.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 19020001 - memory error.
     * @syscap SystemCapability.Security.Cert
     * @since 10
     */
    function createCertExtension(inStream: EncodingBlob, callback: AsyncCallback<CertExtension>): void;
    /**
     * Provides to create certificate extension object.
     * The returned object provides the data parsing or verification capability.
     *
     * @param { EncodingBlob } inStream - indicate the input cert extensions data.
     * @returns { Promise<CertExtension> } the promise of certificate extension instance.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 19020001 - memory error.
     * @syscap SystemCapability.Security.Cert
     * @since 10
     */
    function createCertExtension(inStream: EncodingBlob): Promise<CertExtension>;
    /**
     * Interface of X509CrlEntry.
     *
     * @typedef X509CrlEntry
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    interface X509CrlEntry {
        /**
         * Returns the ASN of this CRL entry 1 der coding form, i.e. internal sequence.
         *
         * @param { AsyncCallback<EncodingBlob> } callback - the callback of getEncoded.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getEncoded(callback: AsyncCallback<EncodingBlob>): void;
        /**
         * Returns the ASN of this CRL entry 1 der coding form, i.e. internal sequence.
         *
         * @returns { Promise<EncodingBlob> } the promise of crl entry blob data.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getEncoded(): Promise<EncodingBlob>;
        /**
         * Get the serial number from this x509crl entry.
         *
         * @returns { number } serial number of crl entry.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getSerialNumber(): number;
        /**
         * Get the issuer of the x509 certificate described by this entry.
         *
         * @returns { DataBlob } DataBlob of issuer.
         * @throws { BusinessError } 801 - this operation is not supported.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getCertIssuer(): DataBlob;
        /**
         * Get the revocation date from x509crl entry.
         *
         * @returns { string } string of revocation date.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getRevocationDate(): string;
    }
    /**
     * Interface of X509Crl.
     *
     * @typedef X509Crl
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    interface X509Crl {
        /**
         * Check if the given certificate is on this CRL.
         *
         * @param { X509Cert } cert - input cert data.
         * @returns { boolean } result of Check cert is revoked or not.
         * @throws { BusinessError } 401 - invalid parameters.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        isRevoked(cert: X509Cert): boolean;
        /**
         * Returns the type of this CRL.
         *
         * @returns { string } string of crl type.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getType(): string;
        /**
         * Get the der coding format.
         *
         * @param { AsyncCallback<EncodingBlob> } callback - the callback of getEncoded.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getEncoded(callback: AsyncCallback<EncodingBlob>): void;
        /**
         * Get the der coding format.
         *
         * @returns { Promise<EncodingBlob> } the promise of crl blob data.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getEncoded(): Promise<EncodingBlob>;
        /**
         * Use the public key to verify the signature of CRL.
         *
         * @param { cryptoFramework.PubKey } key - input public Key.
         * @param { AsyncCallback<void> } callback - the callback of getEncoded.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>): void;
        /**
         * Use the public key to verify the signature of CRL.
         *
         * @param { cryptoFramework.PubKey } key - input public Key.
         * @returns { Promise<void> } the promise returned by the function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        verify(key: cryptoFramework.PubKey): Promise<void>;
        /**
         * Get version number from CRL.
         *
         * @returns { number } version of crl.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getVersion(): number;
        /**
         * Get the issuer name from CRL. Issuer means the entity that signs and publishes the CRL.
         *
         * @returns { DataBlob } issuer name of crl.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getIssuerName(): DataBlob;
        /**
         * Get lastUpdate value from CRL.
         *
         * @returns { string } last update of crl.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getLastUpdate(): string;
        /**
         * Get nextUpdate value from CRL.
         *
         * @returns { string } next update of crl.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getNextUpdate(): string;
        /**
         * This method can be used to find CRL entries in specified CRLs.
         *
         * @param { number } serialNumber - serial number of crl.
         * @returns { X509CrlEntry } next update of crl.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getRevokedCert(serialNumber: number): X509CrlEntry;
        /**
         * This method can be used to find CRL entries in specified cert.
         *
         * @param { X509Cert } cert - cert of x509.
         * @returns { X509CrlEntry } X509CrlEntry instance.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getRevokedCertWithCert(cert: X509Cert): X509CrlEntry;
        /**
         * Get all entries in this CRL.
         *
         * @param { AsyncCallback<Array<X509CrlEntry>> } callback - the callback of getRevokedCerts.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getRevokedCerts(callback: AsyncCallback<Array<X509CrlEntry>>): void;
        /**
         * Get all entries in this CRL.
         *
         * @returns { Promise<Array<X509CrlEntry>> } the promise of X509CrlEntry instance.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getRevokedCerts(): Promise<Array<X509CrlEntry>>;
        /**
         * Get the CRL information encoded by Der from this CRL.
         *
         * @returns { DataBlob } DataBlob of tbs info.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getTbsInfo(): DataBlob;
        /**
         * Get signature value from CRL.
         *
         * @returns { DataBlob } DataBlob of signature.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getSignature(): DataBlob;
        /**
         * Get the signature algorithm name of the CRL signature algorithm.
         *
         * @returns { string } string of signature algorithm name.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getSignatureAlgName(): string;
        /**
         * Get the signature algorithm oid string from CRL.
         *
         * @returns { string } string of signature algorithm oid.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getSignatureAlgOid(): string;
        /**
         * Get the der encoded signature algorithm parameters from the CRL signature algorithm.
         *
         * @returns { DataBlob } DataBlob of signature algorithm params.
         * @throws { BusinessError } 801 - this operation is not supported.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        getSignatureAlgParams(): DataBlob;
    }
    /**
     * Provides to create X509 CRL object.
     * The returned object provides the data parsing or verification capability.
     *
     * @param { EncodingBlob } inStream - indicates the input CRL data.
     * @param { AsyncCallback<X509Crl> } callback - the callback of createX509Crl to return x509 CRL instance.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 19020001 - memory error.
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    function createX509Crl(inStream: EncodingBlob, callback: AsyncCallback<X509Crl>): void;
    /**
     * Provides to create X509 CRL object.
     * The returned object provides the data parsing or verification capability.
     *
     * @param { EncodingBlob } inStream - indicates the input CRL data.
     * @returns { Promise<X509Crl> } the promise of x509 CRL instance.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 19020001 - memory error.
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    function createX509Crl(inStream: EncodingBlob): Promise<X509Crl>;
    /**
     * Certification chain validator.
     *
     * @typedef CertChainValidator
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    interface CertChainValidator {
        /**
         * Validate the cert chain.
         *
         * @param { CertChainData } certChain - indicate the cert chain validator data.
         * @param { AsyncCallback<void> } callback - the callback of validate.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @throws { BusinessError } 19030002 - the certificate signature verification failed.
         * @throws { BusinessError } 19030003 - the certificate has not taken effect.
         * @throws { BusinessError } 19030004 - the certificate has expired.
         * @throws { BusinessError } 19030005 - failed to obtain the certificate issuer.
         * @throws { BusinessError } 19030006 - the key cannot be used for signing a certificate.
         * @throws { BusinessError } 19030007 - the key cannot be used for digital signature.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        validate(certChain: CertChainData, callback: AsyncCallback<void>): void;
        /**
         * Validate the cert chain.
         *
         * @param { CertChainData } certChain - indicate the cert chain validator data.
         * @returns { Promise<void> } the promise returned by the function.
         * @throws { BusinessError } 401 - invalid parameters.
         * @throws { BusinessError } 19020001 - memory error.
         * @throws { BusinessError } 19020002 - runtime error.
         * @throws { BusinessError } 19030001 - crypto operation error.
         * @throws { BusinessError } 19030002 - the certificate signature verification failed.
         * @throws { BusinessError } 19030003 - the certificate has not taken effect.
         * @throws { BusinessError } 19030004 - the certificate has expired.
         * @throws { BusinessError } 19030005 - failed to obtain the certificate issuer.
         * @throws { BusinessError } 19030006 - the key cannot be used for signing a certificate.
         * @throws { BusinessError } 19030007 - the key cannot be used for digital signature.
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        validate(certChain: CertChainData): Promise<void>;
        /**
         * The cert chain related algorithm.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.Cert
         * @since 9
         */
        readonly algorithm: string;
    }
    /**
     * Provides to create certificate chain object. The returned object provides the verification capability.
     *
     * @param { string } algorithm - indicates the cert chain validator type.
     * @returns { CertChainValidator } the cert chain validator instance.
     * @throws { BusinessError } 401 - invalid parameters.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 19020001 - memory error.
     * @throws { BusinessError } 19020002 - runtime error.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9
     */
    function createCertChainValidator(algorithm: string): CertChainValidator;
}
export default cert;
