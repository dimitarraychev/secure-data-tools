import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { useConvert } from "../../hooks/useConvert";
import type { ConvertSettingsModel } from "../../models/Convert";
import CustomRadio from "../CustomRadio/CustomRadio";

interface ConvertSectionProps {
  title: string;
  convertFn: (input: string, mode: "encode" | "decode") => string;
}

const ConvertSection = ({ title, convertFn }: ConvertSectionProps) => {
  const initialSettings: ConvertSettingsModel = {
    input: "",
    output: "",
    mode: "decode",
  };

  const { settings, handleChange } = useConvert(initialSettings, convertFn);

  return (
    <section className="converter-section section">
      <h2 className="section-header">{title}</h2>
      <div className="section-columns">
        <div className="settings">
          <CustomRadio
            name="mode"
            label="Mode:"
            value={settings.mode}
            options={[
              { label: "Decode", value: "decode" },
              { label: "Encode", value: "encode" },
            ]}
            onChange={(value) =>
              handleChange({
                target: { name: "mode", value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
          />
        </div>

        <ContentWrapper
          input={settings.input}
          output={settings.output}
          handleChange={handleChange}
        />
      </div>
    </section>
  );
};

export default ConvertSection;
