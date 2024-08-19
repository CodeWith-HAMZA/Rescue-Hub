import crypto from "crypto";
import { ADMIN_PASSKEY, ENCRYPTION_KEY } from "../constants";

const algorithm = "aes-256-gcm";
const getKey = (secretKey: string) => {
  return crypto.createHash("sha256").update(secretKey).digest();
};

// encrypts data
export function encryptData<T>(data: T): string {
  const key = getKey(ENCRYPTION_KEY);
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  const encrypted = Buffer.concat([
    cipher.update(JSON.stringify(<T>data), "utf8"),
    cipher.final(),
  ]);
  const authTag = cipher.getAuthTag();

  return JSON.stringify({
    iv: iv.toString("hex"),
    data: encrypted.toString("hex"),
    tag: authTag.toString("hex"),
  });
}

// dycrypts data
export function decryptData<T>(ciphertext: string): T {
  const { iv, data, tag } = JSON.parse(ciphertext);

  const key = getKey(ENCRYPTION_KEY);

  try {
    const decipher = crypto.createDecipheriv(
      algorithm,
      key,
      Buffer.from(iv, "hex")
    );
    decipher.setAuthTag(Buffer.from(tag, "hex"));

    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(data, "hex")),
      decipher.final(),
    ]);

    return <T>JSON.parse(decrypted.toString("utf8"));
  } catch (error) {
    return { ADMIN_PASSKEY: null };
  }
}
