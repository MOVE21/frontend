import { useRef } from "react";
import ReactAvatarEditor from "react-avatar-editor";
import { useGesture } from "react-use-gesture";
import styles from "./styles.module.css";
import ScaleInput from "./ScaleInput";
import useImageFile from "./useImageFile";
import { clamp } from "../../utils";

export interface AvatarEditorOptions {
  x: number;
  y: number;
  scale: number;
}

export interface AvatarEditorProps {
  onEdit: (options: AvatarEditorOptions) => void;
  onSave: (image: string) => void;
  options: AvatarEditorOptions;
  source: string;
  size?: number;
}

const AvatarEditor: React.FC<AvatarEditorProps> = (props) => {
  const {
    onEdit,
    onSave,
    options: { scale, ...position },
    source,
    size = 256,
  } = props;

  const editorRef = useRef<ReactAvatarEditor | null>(null);
  const imageFile = useImageFile(source);
  const bind = useGesture({
    onDrag: ({
      xy: [nextX, nextY],
      previous: [prevX, prevY],
      pinching,
      cancel,
    }) => {
      if (pinching) return cancel();
      handleEdit({
        x: position.x + 0.001 * (nextX > prevX ? -1 : 1),
        y: position.y + 0.001 * (nextY > prevY ? -1 : 1),
      });
    },
    onPinch: ({
      values: [nextScale],
      previous: [prevScale],
      dragging,
      cancel,
    }) => {
      if (dragging) return cancel();
      handleEdit({
        scale: clamp(scale + 0.1 * (nextScale < prevScale ? -1 : 1), 1, 3),
      });
    },
  });

  const handleEdit = (newOptions: Partial<AvatarEditorOptions>) =>
    onEdit({
      scale,
      ...position,
      ...newOptions,
    });

  const handleSave = () => {
    if (editorRef.current === null) return;
    const canvas = editorRef.current.getImageScaledToCanvas();
    onSave(canvas.toDataURL());
  };

  return (
    <div className={styles.avatarEditorContainer}>
      <div {...bind()}>
        <ReactAvatarEditor
          ref={(ref) => (editorRef.current = ref)}
          width={size}
          height={size}
          scale={scale}
          position={position}
          onPositionChange={handleEdit}
          borderRadius={size / 2}
          image={imageFile}
        />
      </div>
      <ScaleInput
        value={scale * 10}
        onChangeScale={(value) => handleEdit({ scale: value / 10 })}
      />
      <button onClick={handleSave} disabled={editorRef === null}>
        Сохранить
      </button>
    </div>
  );
};

export default AvatarEditor;
