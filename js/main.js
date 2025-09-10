const btnDarkMode = document.querySelector(".dark-mode-btn");

// Проверка наличия кнопки на странице
if (btnDarkMode) {
  // Проверка сохраненнрй темы или системной (в виндовс или браузере)
  // в localStorage при загрузке страницы
  const savedTheme = localStorage.getItem("darkMode");
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme)) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
  }

  // Включение ночного режима по кнопке и запись в localStorage
  btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", isDark ? "dark" : "light");
  };
}
