import { lazy } from "react";

export default {
  MeusProjetos: lazy(() => import("../Pages/Projetos")),
  EditarProjeto: lazy(() => import("../Pages/EditarProjeto"))
};
