import { inject, Injectable, signal } from '@angular/core';
import { LoadEquipmentListUseCase } from '../../../../application/use-cases/load-equipment-list.use-case';
import { Equipment } from '../../../../domain/models/equipment.model';
@Injectable({
 providedIn: 'root'
})
export class EquipmentStore {
 private readonly loadList = inject( LoadEquipmentListUseCase );
 readonly items = signal<Equipment[]>( [] );
 readonly loading = signal( false );
 readonly error = signal<string | null>( null );
 async fetchAll () {
 this.loading.set( true );
 this.error.set( null );
 try {
 const data = await this.loadList.execute();
 this.items.set( data );
 } catch ( err: any ) {
 this.error.set( err?.message ?? 'Unexpected error' );
 } finally {
 this.loading.set( false );
 }
 }
}
