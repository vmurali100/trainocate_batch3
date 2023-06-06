import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StudentComponent } from "./student/student.component";

@NgModule({
    declarations:[StudentComponent],
    imports:[BrowserModule],
    bootstrap:[StudentComponent],
    providers:[]
})
export class StudentModule{}