import { Size } from "../types/size.type";
import { ButtonProps, ButtonShap } from "./button.types";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};

const shapClasses: Record<ButtonShap, string> = {
  wide: "btn-wide",
  full: "btn-block",
  square: "btn-square",
  default: "",
};

export default function Button({
  variant,
  size = "normal",
  isDisabled = false,
  isOutline = false,
  shap = "default",
  isLoading = false,
  loadingType = "spinner",
  loadingText = "در حال ارسال درخواست",
  type = "button",
  isLink = false,
  animatedIcon = false,
  children,
  className,
  ...rest
}: ButtonProps) {
  const classes = classNames(
    "btn",
    className,
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { "animated-icon": animatedIcon },
    { "pointer-events-none opacity-80": isLoading },
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { [`${shapClasses[shap]}`]: shap }
  );
  return (
    <button type={type} disabled={isDisabled} {...rest} className={classes}>
      {isLoading ? loadingText : children}
    </button>
  );
}
