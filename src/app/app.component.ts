import { Component, NgModule, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';  // Correct import for uuidv4



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'guidId-generator';
  generatedUUID: string;
  copySuccess: boolean = false;
  showCopiedMessage= false;

  constructor(private renderer: Renderer2) {
    // Generate UUID on component initialization
    this.generatedUUID = this.generateUUID();
  }
  ngOnInit(): void {
    this.generatedUUID=this.generateUUID();
  }

  generateUUID(): string {
    return uuidv4();
  }

  regenerateUUID() {
    debugger
    this.showCopiedMessage = false;
    this.generatedUUID = this.generateUUID();
  }

  clipBoardCopy(){
    debugger
    const inputElement = document.getElementById('uuid') as HTMLInputElement;
    this.showCopiedMessage = true;
    inputElement.select();
    document.execCommand('copy');
    this.renderer.selectRootElement(inputElement).blur(); 
  }
}
