// Dark Theme +++++++++++++++++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++++++++++++++++++

const btnDarkMode = document.querySelector(".dark-mode-btn");

if (btnDarkMode) {
  // Проверка настроек пользователя в браузере
  const savedTheme = localStorage.getItem("darkMode");
  // Проверка системных настроек пользователя на компе
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(prefersDarkScheme);
  // Установка начальной темы
  const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches);

  btnDarkMode.classList.toggle("dark-mode-btn--active", shouldUseDark);
  document.body.classList.toggle("dark", shouldUseDark);

  // Слушаем переключение системной темы в опереционной системе пользователя (если пользователь не выбрал вручную)
  // За сутки на компе тема в зависимости от времени может меняться
  prefersDarkScheme.addEventListener("change", (e) => {
    if (e.matches) {
      document.body.classList.add("dark");
      btnDarkMode.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      btnDarkMode.classList.remove("dark-mode-btn--active");
    }
  });

  // Переключение темы по кнопке в браузере
  btnDarkMode.onclick = function () {
    const isDark = document.body.classList.toggle("dark");
    btnDarkMode.classList.toggle("dark-mode-btn--active", isDark);
    localStorage.setItem("darkMode", isDark ? "dark" : "light");
  };
}
// Dark Theme +++++++++++++++++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++++++++++++++++++
