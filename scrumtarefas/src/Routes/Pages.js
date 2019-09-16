import { lazy } from "react";

export default {
  EditarPerfil: lazy(() => import("../Pages/EditarPerfil")),
  MeusProjetos: lazy(() => import("../Pages/Projetos")),
  EditarProjeto: lazy(() => import("../Pages/EditarProjeto"))
};
