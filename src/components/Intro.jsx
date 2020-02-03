/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useLocation } from "react-router-dom";

const text = {
  symmetric: () => (
    <p>
      Symmetric-key algorithms are algorithms for cryptography that use the same
      cryptographic keys for both encryption of plaintext and decryption of
      ciphertext. The keys may be identical or there may be a simple
      transformation to go between the two keys. The keys, in practice,
      represent a shared secret between two or more parties that can be used to
      maintain a private information link. This requirement that both parties
      have access to the secret key is one of the main drawbacks of symmetric
      key encryption, in comparison to public-key encryption (also known as
      asymmetric key encryption).
      <sup>
        <a
          href="https://en.wikipedia.org/wiki/Symmetric-key_algorithm"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          wikipedia
        </a>
      </sup>
    </p>
  ),
  rsa: () => (
    <p>
      Public-key cryptography, or asymmetric cryptography, is a cryptographic
      system that uses pairs of keys: public keys which may be disseminated
      widely, and private keys which are known only to the owner.
    </p>
  )
};

const Intro = () => {
  const { pathname } = useLocation();

  return (
    <div
      css={theme =>
        css`
          background-color: ${theme.dark};
          margin: 50px 0;
          border-radius: 5px;
          padding: 20px 15px;
          box-shadow: 3px 3px 4px ${theme.dark};

          @media screen and (max-width: 999px) {
            display: none;
          }
        `
      }
    >
      {/rsa/.test(pathname) ? text.rsa() : text.symmetric()}
    </div>
  );
};

export default Intro;
