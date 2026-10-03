import type React from "react";

export type VectorWordmarkProps = {
  text?: string;
  font?: React.CSSProperties;
  background?: string;
  textColor?: string;
  shade?: string;
  accent?: string;
  reach?: number;
  speed?: number;
  damping?: number;
  handles?: { size?: number; spread?: number; labels?: boolean };
  style?: React.CSSProperties;
};

export default function VectorWordmark(_props: VectorWordmarkProps) {
  return null;
}
