import { BindExamplesModuleModule } from './bind-examples-module/bind-examples-module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';

import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ComponentInputComponent } from './component-input/component-input.component';
import { SimpleTable0Component } from './component-input/simple-table0/simple-table0.component';
import { ComponentInputOutputComponent } from './component-input-output/component-input-output.component';
import { SimpleTable1Component } from './component-input-output/simple-table1/simple-table1.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes : Routes = [
  { path: 'bind-examples', loadChildren: () => import('./bind-examples-module/bind-examples-module.module').then((m) => m.BindExamplesModuleModule)},
  { path: 'greeting', component: GreetingComponent },
  { path: 'structural-directives', component: StructuralDirectivesComponent},
  { path: 'template-variables', component: TemplateVariablesComponent},
  { path: 'component-input', component: ComponentInputComponent},
  { path: 'component-input-output', component: ComponentInputOutputComponent},
  { path: 'template-forms', component: TemplateFormsComponent},
  { path: 'reactive-forms', component: ReactiveFormsComponent},
  { path: 'chuck-norris-joke', component: ChuckNorrisComponent},
  { path: '' , component: WelcomeComponent },
  { path: '**' , component: PageNotFoundComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,

    TemplateVariablesComponent,
    StructuralDirectivesComponent,
    ComponentInputComponent,
    SimpleTable0Component,
    ComponentInputOutputComponent,
    SimpleTable1Component,
    WelcomeComponent,
    PageNotFoundComponent,
    SideBarComponent,
    ChuckNorrisComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
