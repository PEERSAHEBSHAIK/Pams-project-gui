import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { IndexComponent } from "./components/index/index.component";


const routes: Routes = [
    { path: "", redirectTo: "/index", pathMatch: "full" },
    { path: "index", component: IndexComponent },
    { path: "physician", loadChildren: () => import("./physician_module/physician/physician.module").then((m) => m.PhysicianModule) },
    { path: "admin", loadChildren: () => import("./modules/admin/admin.module").then((n) => n.AdminModule) },
    { path: "patient", loadChildren: () => import("./patient_module/patient/patient.module").then((x) => x.PatientModule) },
    { path: "nurse", loadChildren: () => import("./nurse_module/nurse/nurse.module").then((y) => y.NurseModule) }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }