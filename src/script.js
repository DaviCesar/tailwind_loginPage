function toggleDarkMode(x) {
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");
  const dark = document.documentElement.classList.contains("dark");
  if (dark) {
    document.documentElement.classList.remove("dark");
    sun.style.display = "block";
    moon.style.display = "none";
    return;
  }
  document.documentElement.classList.add("dark");
  moon.style.display = "block";
  sun.style.display = "none";
}



