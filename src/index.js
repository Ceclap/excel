import "./scss/index.scss";
import "./core/ExcelComponet";
import {Header} from "@/components/header/header";
import {Formula} from "@/components/formula/formula";
import {Table} from "@/components/table/table";
import {ToolBar} from "@/components/toolBar/toolBar";
import Excel from "@/components/excel/excel";

const excel = new Excel("#app", {
  components: [Header, Formula, Table, ToolBar]});
console.log(excel);
excel.render();
