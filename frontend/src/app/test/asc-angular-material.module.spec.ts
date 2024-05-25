import { TestBed } from '@angular/core/testing';
import { AscAngularMaterialModule } from '../modules/shared/angular-material.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

describe('AscAngularMaterialModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AscAngularMaterialModule]
    }).compileComponents();
  });

  it('should create the module', () => {
    const module = TestBed.inject(AscAngularMaterialModule);
    expect(module).toBeTruthy();
  });

  it('should include MatAutocompleteModule', () => {
    const autocomplete = TestBed.inject(MatAutocompleteModule);
    expect(autocomplete).toBeTruthy();
  });

  it('should include MatButtonModule', () => {
    const button = TestBed.inject(MatButtonModule);
    expect(button).toBeTruthy();
  });

  it('should include MatCardModule', () => {
    const card = TestBed.inject(MatCardModule);
    expect(card).toBeTruthy();
  });

  it('should include MatCheckboxModule', () => {
    const checkbox = TestBed.inject(MatCheckboxModule);
    expect(checkbox).toBeTruthy();
  });
});
