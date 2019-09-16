import { lazy } from "react";

export default {
  Projetos: lazy(() => import("../Pages/Projetos")),
  EditarProjeto: lazy(() => import("../Pages/MeuProjeto")),
  EditarPerfil: lazy(() => import("../Pages/EditarPerfil"))
};
