import type { RSASettingsModel } from "../../models/RSA";
// import { RSA_ALGORITHM_LABELS } from "../../models/RSA";
import AutoExpandingTextarea from "../AutoExpandingTextarea/AutoExpandingTextarea";
import Button from "../Button/Button";
import CustomRadio from "../CustomRadio/CustomRadio";

interface RSASettingsProps {
  settings: RSASettingsModel;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onGenerate: () => Promise<void>;
  onEncrypt: () => Promise<void>;
  onDecrypt: () => Promise<void>;
}

const RSASettings = ({
  settings,
  handleChange,
  onGenerate,
  onEncrypt,
  onDecrypt,
}: RSASettingsProps) => {
  return (
    <div className="settings rsa-settings">
      <CustomRadio
        name="inputEncoding"
        label="Input Encoding:"
        value={settings.inputEncoding}
        options={[
          { label: "UTF-8", value: "utf8" },
          { label: "Hex", value: "hex" },
          { label: "Base64", value: "base64" },
        ]}
        onChange={(value) =>
          handleChange({
            target: { name: "inputEncoding", value },
          } as React.ChangeEvent<HTMLInputElement>)
        }
      />

      <CustomRadio
        name="outputEncoding"
        label="Output Encoding:"
        value={settings.outputEncoding}
        options={[
          { label: "Hex↓", value: "hex-lower" },
          { label: "Hex↑", value: "hex-upper" },
          { label: "Base64", value: "base64" },
        ]}
        onChange={(value) =>
          handleChange({
            target: { name: "outputEncoding", value },
          } as React.ChangeEvent<HTMLInputElement>)
        }
      />

      <CustomRadio
        name="algorithm"
        label="Algorithm:"
        value={settings.algorithm}
        options={[
          { label: "PCKS#1", value: "PCKS#1" },
          { label: "SHA-1", value: "SHA-1" },
          { label: "SHA-224", value: "SHA-224" },
          { label: "SHA-256", value: "SHA-256" },
          { label: "SHA-384", value: "SHA-384" },
          { label: "SHA-512", value: "SHA-512" },
        ]}
        onChange={(value) =>
          handleChange({
            target: { name: "algorithm", value },
          } as React.ChangeEvent<HTMLInputElement>)
        }
      />

      <AutoExpandingTextarea
        title="Public Key"
        name="publicKey"
        id="publicKey"
        showCopy
        value={settings.publicKey}
        onChange={handleChange}
        minHeight={144}
        maxHeight={144}
        placeholder="Enter your public key here.."
      />

      <AutoExpandingTextarea
        title="Private Key"
        name="privateKey"
        id="privateKey"
        showCopy
        value={settings.privateKey}
        onChange={handleChange}
        minHeight={144}
        maxHeight={144}
        placeholder="Enter your private key here..."
      />

      <div className="rsa-actions">
        <Button title="Generate" text="Generate" onClick={onGenerate} />
        <Button title="Encrypt" text="Encrypt" onClick={onEncrypt} />
        <Button title="Decrypt" text="Decrypt" onClick={onDecrypt} />
      </div>
    </div>
  );
};

export default RSASettings;
