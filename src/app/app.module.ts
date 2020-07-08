import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Temporal
import { FormsModule } from '@angular/forms';

// Routes
import { APP_ROUTES } from './app.routes';

// Modules
import { PageModule } from './pages/pages.module';

// Servicios
import { ServiceModule } from './services/service.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
