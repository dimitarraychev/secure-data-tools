import SettingsWrapper from "../SettingsWrapper/SettingsWrapper";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { generateSHA1 } from "../../utils/generateSHA1";
import { useHasher } from "../../hooks/useHasher";
import type { HashingSettings } from "../../models/Hasher";

const SHA1Section = () => {
  const initialSettings: HashingSettings = {
    input: "",
    output: "",
    inputEncoding: "utf8",
    outputEncoding: "hex-lower",
    keyEncoding: "utf8",
    key: "",
  };

  const { settingsData, handleChange } = useHasher(
    generateSHA1,
    initialSettings
  );

  return (
    <section className="sha1 section">
      <h2 className="section-header">Hash SHA1</h2>

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

export default SHA1Section;
