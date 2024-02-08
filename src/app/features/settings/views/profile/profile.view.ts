import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { BackendService } from '../../../../core/services/backend.service';
import { AlertsService } from '../../../../core/services/alerts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.view.html',
  styleUrls: ['./profile.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileView implements OnInit {

  user$ = this.auth.user$;
  editable: boolean = false;
  profileForm: FormGroup;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private backend: BackendService,
    private alerts: AlertsService,
  ) {
    this.profileForm = this.fb.group({
      name: [''],
      lastName: [''],
      email: ['', [Validators.email]],
      phoneNumber: [''],
    });
  }

  ngOnInit(): void {
    this.user$.subscribe(profile => {
      this.profileForm.patchValue({
        name: profile?.given_name,
        lastName: profile?.family_name,
        email: profile?.email,
        phoneNumber: profile?.phone_number
      });
    });
  }

  editProfile(uid: string | undefined) {
    let profileUpdate = {
      name: this.profileForm.value.name,
      lastName: this.profileForm.value.lastName,
      phoneNumber: this.profileForm.value.phoneNumber
    }
    this.alerts.askMe('Guardar cambios','¿Seguro que deseas guardar los cambios?','Guardar','Cancelar').subscribe({
      next: (res: boolean) => {
        if (res == true) {
          this.backend.updateUser(uid, profileUpdate).subscribe({
            next: (res) => this.alerts.notify('Excelente','Tus perfil fue actualizado satisfactoriamente','success'),
            error: (err) => {
              switch(err.status) {
                case 400:
                  this.alerts.notify('Error en los campos', 'Chequea que los campos esten correctamente completado. '+err.message,'error');
                  break;
                case 401:
                  this.alerts.notify('No autorizado', 'Hay error en el token de acceso o no estás autorizado.','error');
                  break;
                case 404:
                  this.alerts.notify('Error', 'Error al actualizar tu perfil.','error');
                  break;
                case 500:
                  this.alerts.notify('Ooops', 'Ha ocurrido un error en el servidor, intentalo más tarde.','error');
                  break;
                default:
                  this.alerts.notify('Error al agregar vehículo', err,'error');
                  break;
              }
            }
          });
          this.editable = !this.editable;
          this.profileForm.reset();
        } else {
          this.editable = !this.editable;
        }
      },
      error: (err) => console.log(err)
    });
  }
}
