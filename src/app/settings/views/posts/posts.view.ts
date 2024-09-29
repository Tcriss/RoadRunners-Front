import { Component, OnInit, DestroyRef, inject, ChangeDetectionStrategy, Inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { TuiDialogService, TuiSizeL, TuiSizeS } from '@taiga-ui/core';

import { ConnectionService } from '../../../common/services/connection.service';
import { AlertsService } from '../../../common/services/alerts.service';
import { LoaderService } from '../../../common/services/loader.service';
import { Vehicle } from '../../../core/interfaces/vehicle';

@Component({
  templateUrl: './posts.view.html',
  styleUrls: ['./posts.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPostsView implements OnInit {

  dropdownOpen = false;
	size: TuiSizeL | TuiSizeS = 's';
  user$ = this.auth.user$;
  myVehicles: Vehicle[] = [];
  uid: string | undefined = '';
  isLoading$ = this.loader.getStatus();
  item: number = 3;
  private destroyRef = inject(DestroyRef);

  constructor(
    @Inject(TuiDialogService) private readonly dialog: TuiDialogService,
    private auth: AuthService,
    private backend: ConnectionService,
    private alerts: AlertsService,
    private loader: LoaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      if (user) this.uid = user.sub;
    });
    this.getUserPosts();
  }

  selectOption(item: string): void {
    this.dropdownOpen = false;
    this.dialog.open(`You selected ${item}`).subscribe();
  }

  private getUserPosts(): void {
    this.backend.findAllVehicles()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (vehicles) => this.myVehicles = vehicles.filter(vehicle => vehicle.owner == this.uid),
      error: (err) => {
        switch (err.status) {
          case 401:
            this.alerts.notify('Error al traer articulos', 'No estas autorizado', 'error');
            break;
          default:
            this.alerts.notify('Error al traer articulos', `${err.status}: ${err.message}`, 'error')
            break;
        }
      }
    });
  }

  edit(id: string): void {
    this.router.navigate([`/publish/edit/${id}`]);
  }

  delete(id: string): void {
    this.alerts.askMe('Eliminar vehiculo', '¿Seguro que deseas eliminar esta publicación?', 'Aceptar', 'Cancelar').subscribe(res => {
      if (res) {
        this.backend.deleteVehicle(id).subscribe({
          next: (res) => {
            this.alerts.notify('Vehículo eliminado', 'El vehículo fue eliminado satisfactoriamente.', 'success');
            this.getUserPosts();
          },
          error: (err) => {
            switch (err.status) {
              case 400:
                this.alerts.notify('Error en los campos', 'Chequea que los campos esten correctamente completado. ' + err.message, 'error');
                break;
              case 401:
                this.alerts.notify('No autorizado', 'Hay error en el token de acceso o no estás autorizado.', 'error');
                break;
              case 404:
                this.alerts.notify('Error al eliminar vehículo', 'Vehículo no encontrado.', 'error');
                break;
              case 500:
                this.alerts.notify('Ooops', 'Ha ocurrido un error en el servidor, intentalo más tarde.', 'error');
                break;
              default:
                this.alerts.notify('Error al eliminar vehículo', err.message, 'error');
                break;
            }
          }
        })
      }
    });
  }
}
