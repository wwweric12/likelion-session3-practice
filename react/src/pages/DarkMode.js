export default function DarkMode(props) {
  return (
    <>
      <button
        className="darkModeToggle"
        onClick={() => props.darkMode(!props.isDark)}
      >
        {props.dark ? "whitemode" : "dark mode"}
      </button>
    </>
  );
}
