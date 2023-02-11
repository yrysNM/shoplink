import "./customButton.scss";

const CustomButton = ({
  text,
  clazz = "primary",
  onPressButton,
  type = "button" }) => {
  return (
    <button
      type={type}
      className={`custom-btn  ${(clazz === "primary" && "primary") ||
        (clazz === "secondary" && "secondary") ||
        (clazz === "prevent" && "prevent") ||
        (clazz === "secondary-borderless" && "secondary-borderless")
        } ${clazz}`}
      disabled={clazz === "prevent"}
      onClick={onPressButton}
    >
      {text}
    </button>
  );
}

export { CustomButton };