import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { EquipmentStore } from '../../state/equipment.store';
import { EquipmentTable } from '../../components/equipment-table/equipment-table';
@Component({
  selector: 'app-equipment-list',
  standalone: true,
  imports: [CommonModule, EquipmentTable],
  templateUrl: './equipment-list.page.html',
})
export class EquipmentListPage implements OnInit {
  private readonly store = inject(EquipmentStore);
  loading = this.store.loading;
  error = this.store.error;
  items = computed(() => this.store.items());
  ngOnInit() { this.store.fetchAll(); }
  reload() { this.store.fetchAll(); }
}
