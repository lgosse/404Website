import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatTabsModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatExpansionModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatTabsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatTabsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MyMaterialModule {}
