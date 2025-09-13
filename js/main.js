// Dark Theme +++++++++++++++++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++++++++++++++++++

const btnDarkMode = document.querySelector(".dark-mode-btn");

if (btnDarkMode) {
  const savedTheme = localStorage.getItem("darkMode");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(prefersDarkScheme);
  // Установка начальной темы
  const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches);

  btnDarkMode.classList.toggle("dark-mode-btn--active", shouldUseDark);
  document.body.classList.toggle("dark", shouldUseDark);

  // Слушаем переключение системной темы в опереционной системе пользователя (если пользователь не выбрал вручную)
  prefersDarkScheme.addEventListener("change", (e) => {
    if (!localStorage.getItem("darkMode")) {
      btnDarkMode.classList.toggle("dark-mode-btn--active", e.matches);
      document.body.classList.toggle("dark", e.matches);
    }
  });

  // Переключение темы по кнопке
  btnDarkMode.onclick = function () {
    const isDark = document.body.classList.toggle("dark");
    btnDarkMode.classList.toggle("dark-mode-btn--active", isDark);
    localStorage.setItem("darkMode", isDark ? "dark" : "light");
  };
}
// Dark Theme +++++++++++++++++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++++++++++++++++++
