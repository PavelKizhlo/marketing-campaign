import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

// Array of MatModules
const ImportedMaterialModules = [MatInputModule];

@NgModule({
  declarations: [],
  imports: [ImportedMaterialModules],
  exports: [ImportedMaterialModules],
})
export class MaterialModule {}
