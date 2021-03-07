import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '@App/app-routing.module';
import { AppComponent } from '@App/app.component';
import { CalculatorComponent } from '@Calculator.component';
import { FormatOperationPipe } from '@Pipes/format-operation.pipe';
import { DisplayComponent } from './calculator/display/display.component';
import { NumpadComponent } from './calculator/numpad/numpad.component';
import { HistoryComponent } from './calculator/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    FormatOperationPipe,
    DisplayComponent,
    NumpadComponent,
    HistoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
