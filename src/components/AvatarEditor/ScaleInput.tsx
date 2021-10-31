import { HTMLAttributes } from "react";
import styles from "./styles.module.css";

export interface ScaleEditorProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  onChangeScale: (value: number) => void;
}

const ScaleInput: React.FC<ScaleEditorProps> = (props) => {
  const { value, onChangeScale, ...divProps } = props;

  return (
    <div className={styles.scaleEditor} {...divProps}>
      <h6>Изменить размер</h6>
      <input
        type="range"
        min="10"
        max="30"
        onChange={(e) => onChangeScale(parseInt(e.target.value))}
        value={value}
        step="1"
      />
    </div>
  );
};

export default ScaleInput;
