import { ButtonProps } from "./button.types";
import classNames from "classnames";

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
}: ButtonProps): ButtonProps {
  const classes = classNames("btn", { "btn-outline": isOutline });
  return (
    <button type={type} disabled={isDisabled} {...rest}>
      {isLoading ? loadingText : children}
    </button>
  );
}
