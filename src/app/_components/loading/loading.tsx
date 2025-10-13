import classNames from "classnames";
import { LoadingProps } from "./types";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "",
  large: "loading-lg",
};

export default function Loading({
  variant,
  className,
  size = "normal",
  type = "spinner",
}: LoadingProps) {
  const classes = classNames(
    "loading",
    className,
    {
      [`loading-${type}`]: type,
    },
    {
      [`loading-${variant}`]: variant,
    },
    {
      [`${sizeClasses[size]}`]: size,
    }
  );
  return <span className={classes}></span>;
}
