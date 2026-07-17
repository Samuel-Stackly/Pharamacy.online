function Button({
  children,
  type = "button",
  className = "",
  disabled = false,
  onClick,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex h-14 items-center justify-center rounded-full bg-[#31D4B5] px-8 text-sm font-semibold uppercase tracking-wide text-white transition duration-300 hover:bg-[#28BEA4] disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;