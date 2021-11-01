import { AvatarEditorOptions } from "../AvatarEditor";
import ReactAvatarEditor from "react-avatar-editor";

export interface AvatarPreviewProps {
  options: AvatarEditorOptions;
  source: string;
  size?: number;
}

const AvatarPreview: React.FC<AvatarPreviewProps> = (props) => {
  const {
    options: { scale, ...position },
    source,
    size = 256,
  } = props;

  return (
    <ReactAvatarEditor
      position={position}
      scale={scale}
      image={source}
      width={size}
      height={size}
      style={{ "clip-path": `circle(${size / 2}px)` }}
    />
  );
};

export default AvatarPreview;
