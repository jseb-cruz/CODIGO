import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Equipment } from '../../../../../domain/models/equipment.model';
@Component({
  selector: 'app-equipment-table',
  imports: [CommonModule],
  templateUrl: './equipment-table.html',
  styleUrl: './equipment-table.css'
})
export class EquipmentTable {
  @Input() data: Equipment[] = [];
}
