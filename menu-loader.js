document.addEventListener("DOMContentLoaded", () => {
  const nivelRaw = sessionStorage.getItem("nivel");
  const usuario = sessionStorage.getItem("usuario");

  // Se não estiver logado, não mostra menu
  if (!nivelRaw || !usuario) return;

  const nivel = (nivelRaw || "").toLowerCase();
  const patente = (sessionStorage.getItem("patente") || "").toLowerCase();
  const cargo = (sessionStorage.getItem("cargo") || "").toLowerCase();

  const isComando = nivel === "comando";
  const isInstrutor = nivel === "instrutor";
  
  const nav = document.createElement("nav");
  nav.className = "menu";

  nav.innerHTML = `
    <a href="portal.html">Início</a>
    <a href="dashboard.html">Relatório</a>
    <a href="ranking-instrutores.html">Ranking</a>

    ${(isInstrutor || isComando) ? `<a href="treinamentos.html">Treinamentos</a>` : ``}
    <a href="provas.html">Provas</a>

    ${(isComando) ? `<a href="lives.html">Lives</a>` : ``}
    <a href="formularios.html">Formulários</a>

    ${(isComando) ? `<a href="admin.html">Admin</a>` : ``}
    ${(isComando) ? `<a href="usuarios.html">Usuários</a>` : ``}

    <button id="logoutBtn" class="btn-red">Logout</button>
  `;

  document.body.insertBefore(nav, document.body.firstChild);

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.onclick = () => {
      sessionStorage.clear();
      window.location.href = "index.html";
    };
  }
});
