import type { Settings } from "../../models/Settings";
import "./ContentWrapper.css";

interface ContentWrapperProps {
  formData: Settings;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

const ContentWrapper = ({ formData, handleChange }: ContentWrapperProps) => {
  return <div className="content">
        <label htmlFor="input">Input:</label>
        <textarea
          name="input"
          id="input"
          value={formData.input}
          onChange={handleChange}
        />

        <label htmlFor="output">Output:</label>
        <textarea
          readOnly
          name="output"
          id="output"
          value={formData.output}
          onChange={handleChange}
        />
      </div>;
};

export default ContentWrapper;
