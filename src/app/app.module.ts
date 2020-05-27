import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CrewComponent } from "./crew/crew.component";
import { EquipmentComponent } from "./equipment/equipment.component";
import { ExperimentsComponent } from "./experiments/experiments.component";
import { FormsModule } from "@angular/forms";
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CrewComponent,
    EquipmentComponent,
    ExperimentsComponent,
    ListComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
