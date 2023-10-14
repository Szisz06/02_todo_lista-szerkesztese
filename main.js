import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";
$(function () {
  const szuloELEM = $(".tarolo");
  new Megjelenit(TODOLIST2, szuloELEM);

  $(window).on("kesz", (event) => {
    let objPeldany = event.detail;
    objPeldany.setHatterSzin();
    console.log(TODOLIST2);
    TODOLIST2[objPeldany.index].kesz = true;
  });

  $(window).on("torol", (event) => {
    let Peldany = event.detail;
    TODOLIST2.splice(Peldany.index, 1);
    szuloELEM.empty();
    new Megjelenit(TODOLIST2, szuloELEM);
  });
});
