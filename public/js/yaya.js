function noStyle() {
  document.styleSheets[1].disabled = true;
  document.styleSheets[2].disabled = true;
}

function darkStyle() {
  noStyle()
  document.styleSheets[2].disabled = false;

  var title = "Change to light mode.";
  if (document.documentElement.lang == "en")
    title = "Change to light mode.";
  else if (document.documentElement.lang == "ms")
    title = "Tukar ke mod cerah.";
  else if (document.documentElement.lang == "ms_Arab")
    title = "توکر کمود چراه.";

  document.getElementById("changeTheme").innerHTML = "&#9728;";
  document.getElementById("changeTheme").title = title;
  document.getElementById("changeTheme").onclick = "function() { lightStyle();return false }";
}

function lightStyle() {
  noStyle()
  document.styleSheets[1].disabled = false;

  var title = "Change to dark mode.";
  if (document.documentElement.lang == "en")
    title = "Change to dark mode.";
  else if (document.documentElement.lang == "ms")
    title = "Tukar ke mod gelap.";
  else if (document.documentElement.lang == "ms_Arab")
    title = "توکر کمود ݢلڤ";

  document.getElementById("changeTheme").innerHTML = "&#127769;";
  document.getElementById("changeTheme").title = title;
  document.getElementById("changeTheme").onclick = "function() { darkStyle();return false }";
}

window.onload = function() {
  darkStyle();
}
