// SSLChecker.tsx

import React from "react";

interface SSLCheckerProps {
  sslInfo: {
    subject: string;
    issuer: string;
    valid_from: string;
    valid_until: string;
    expires_in_days: number;
    fingerprint: string;
    fingerprint256: string;
    serial_number: string;
    pem: string;
    protocol: string;
    cipher_name: string;
    cipher_standard_name: string;
    cipher_version: string;
    ocsp_uri: string;
    ca_issuers_uri: string;
  } | null;
}

const SSLChecker: React.FC<SSLCheckerProps> = ({ sslInfo }) => {
  return (
    <div className="redirect-tracker-container">
      {sslInfo && (
        <div className="mt-10 ssl-results text-center">
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate underline">
            SSL Certificate Information
          </h3>
          <div className="text-gradient_blue-purple flex flex-col items-center mt-4">
            <div>
              <span className="font-bold">Subject: </span>
              {sslInfo.subject}
            </div>
            <div>
              <span className="font-bold">Issuer: </span>
              {sslInfo.issuer}
            </div>
            <div>
              <span className="font-bold">Valid From: </span>
              {sslInfo.valid_from}
            </div>
            <div>
              <span className="font-bold">Valid Until: </span>
              {sslInfo.valid_until}
            </div>
            <div>
              <span className="font-bold">Expires in Days: </span>
              {sslInfo.expires_in_days}
            </div>
            <div>
              <span className="font-bold">Fingerprint: </span>
              {sslInfo.fingerprint}
            </div>
            <div>
              <span className="font-bold">Fingerprint256: </span>
              {sslInfo.fingerprint256}
            </div>
            <div>
              <span className="font-bold">Serial Number: </span>
              {sslInfo.serial_number}
            </div>
            <div>
              <span className="font-bold">Protocol: </span>
              {sslInfo.protocol}
            </div>
            <div>
              <span className="font-bold">Cipher Name: </span>
              {sslInfo.cipher_name}
            </div>
            <div>
              <span className="font-bold">Cipher Standard Name: </span>
              {sslInfo.cipher_standard_name}
            </div>
            <div>
              <span className="font-bold">Cipher Version: </span>
              {sslInfo.cipher_version}
            </div>
            <div>
              <span className="font-bold">OCSP URI: </span>
              {sslInfo.ocsp_uri}
            </div>
            <div>
              <span className="font-bold">CA Issuers URI: </span>
              {sslInfo.ca_issuers_uri}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SSLChecker;
