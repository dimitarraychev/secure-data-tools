import { useEffect, useState } from "react";
import "./Sha256.css";

import { generateSha256 } from "../../utils/sha256";
import { encodeHash } from "../../utils/encodeHash";
import type { Settings } from "../../models/Settings";
import SettingsWrapper from "../SettingsWrapper/SettingsWrapper";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

const Sha256 = () => {
  const [formData, setFormData] = useState<Settings>({
    input: "",
    output: "",
    inputEncoding: "",
    outputEncoding: "",
    keyEncoding: "",
    key: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };

  useEffect(() => {
    const computeHash = async () => {
      if (!formData.input) {
        setFormData((prev) => ({ ...prev, output: "" }));
        return;
      }

      try {
        const rawHash = await generateSha256(
          formData.input,
          formData.key || undefined
        );

        const encodedHash = encodeHash(
          rawHash,
          formData.outputEncoding || "hex"
        );

        setFormData((prev) => ({ ...prev, output: encodedHash }));
      } catch (err) {
        console.error(err);
        setFormData((prev) => ({ ...prev, output: "Error computing hash" }));
      }
    };

    computeHash();
  }, [formData.input, formData.key, formData.outputEncoding]);

  return (
    <section className="sha256">
      <SettingsWrapper formData={formData} handleChange={handleChange} />

      <ContentWrapper formData={formData} handleChange={handleChange} />
    </section>
  );
};

export default Sha256;
