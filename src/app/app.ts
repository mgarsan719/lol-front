import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Home } from "../components/home/home";
import { Contacto } from "../components/contacto/contacto";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lol-front');
}
