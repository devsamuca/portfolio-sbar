import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-relatorio',
  imports: [],
  templateUrl: './relatorio.html',
  styleUrl: './relatorio.css',
})
export class Relatorio {
  readonly relatorioUrl = 'documentos/relatorio-de-estagio.pdf';
  readonly relatorioSafeUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.relatorioSafeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.relatorioUrl);
  }
}
