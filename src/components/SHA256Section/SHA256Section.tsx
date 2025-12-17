import SettingsWrapper from "../SettingsWrapper/SettingsWrapper";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { generateSHA256 } from "../../utils/generateSHA256";
import { useHash } from "../../hooks/UseHash";
import type { Settings } from "../../models/Settings";

const SHA256Section = () => {
  const initialSettings: Settings = {
    input: "",
    output: "",
    inputEncoding: "",
    outputEncoding: "",
    keyEncoding: "",
    key: "",
  };

  const { settingsData, handleChange } = useHash(
    generateSHA256,
    initialSettings
  );

  return (
    <section className="sha256">
      <SettingsWrapper
        settingsData={settingsData}
        handleChange={handleChange}
      />

      <ContentWrapper settingsData={settingsData} handleChange={handleChange} />
    </section>
  );
};

export default SHA256Section;
