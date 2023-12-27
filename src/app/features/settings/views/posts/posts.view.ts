import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BackendService } from '../../../../core/services/backend.service';
import { AlertsService } from '../../../../core/services/alerts.service';
import { SpinnerService } from '../../../../core/services/spinner.service';
import { Vehicle } from '../../../../core/interfaces/vehicle';

@Component({
  templateUrl: './posts.view.html',
  styleUrls: ['./posts.view.scss']
})
export class UserPostsView implements OnInit {

  user$ = this.auth.user$
  myVehicles: Vehicle[] = [];
  uid: any = '';
  isLoading$ = this.loader.loading;
  item: number = 3;
  private destroyRef = inject(DestroyRef);

  constructor(
    private auth: AuthService,
    private backend: BackendService,
    private alerts: AlertsService,
    private loader: SpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user$.subscribe(user => this.uid = user?.sub);
    this.getUserPosts();
  }

  toBase64(buffer: any) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  getUserPosts() {
    this.backend.showVehicles()
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

  edit(id: string) {
    this.router.navigate([`/publish/edit/${id}`]);
  }

  delete(id: string) {
    this.alerts.askMe('Eliminar vehiculo', '¿Seguro que deseas eliminar esta publicación?', 'Aceptar', 'Cancelar').subscribe(res => {
      if (res == true) {
        this.backend.deleteVehicle(id).subscribe({
          next: (res) => {
            this.alerts.notify('Vehículo eliminado', 'El vehículo fue eliminado satisfactoriamente.', 'success');
            this.getUserPosts();
          },
          error: (err) => {
            console.log(err);
            switch (err.status) {
              case 400:
                this.alerts.notify('Error en los campos', 'Chequea que los campos esten correctamente completado. ' + err.message, 'error');
                break;
              case 401:
                this.alerts.notify('No autorizado', 'Hay error en el token de acceso o no estás autorizado.', 'error');
                break;
              case 404:
                this.alerts.notify('Error', 'Error al eliminar vehículo.', 'error');
                break;
              case 500:
                this.alerts.notify('Ooops', 'Ha ocurrido un error en el servidor, intentalo más tarde.', 'error');
                break;
              default:
                this.alerts.notify('Error al eliminar vehículo', err, 'error');
                break;
            }
          }
        })
      }
    });
  }
}
