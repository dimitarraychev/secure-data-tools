import SettingsWrapper from "../SettingsWrapper/SettingsWrapper";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { generateSHA256 } from "../../utils/generateSHA256";
import { useHasher } from "../../hooks/useHasher";
import type { HashingSettings } from "../../models/Hasher";

const SHA256Section = () => {
  const initialSettings: HashingSettings = {
    input: "",
    output: "",
    inputEncoding: "utf8",
    outputEncoding: "hex-lower",
    keyEncoding: "utf8",
    key: "",
  };

  const { settingsData, handleChange } = useHasher(
    generateSHA256,
    initialSettings
  );

  return (
    <section className="sha256 section">
      <h2 className="section-header">Hash SHA256</h2>

      <div className="section-columns">
        <SettingsWrapper
          settingsData={settingsData}
          handleChange={handleChange}
        />

        <ContentWrapper
          input={settingsData.input}
          output={settingsData.output}
          handleChange={handleChange}
        />
      </div>
    </section>
  );
};

export default SHA256Section;
