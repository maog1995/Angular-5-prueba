import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Crud de angular';
    msg: string;

    public people = [
        {'name': 'Nombre1', 'phoneNumber': 999999999},
        {'name': 'Nombre2', 'phoneNumber': 999999998},
        {'name': 'Nombre3', 'phoneNumber': 999999997}
    ];

    model: any = {};
    model2: any = {};
    hideUpdate: boolean = true;

    addPerson(): void {
        this.people.push(this.model);
        this.msg = 'Guardado correctamente';
    }

    deletePerson(i): void {
        var answer = confirm('¿Seguro que quieres eliminar?');
        if (answer) {
            this.people.splice(i, 1);
            this.msg = 'Eliminado correctamente';
        }
    }

    myValue;

    editPerson(i): void {
        this.hideUpdate = false;
        this.model2.name = this.people[i].name;
        this.model2.phoneNumber = this.people[i].phoneNumber;
        this.myValue = i;
    }

    updatePerson(): void {
        let i = this.myValue;
        for (let j = 0; j < this.people.length; j++) {
            if (i == j) {
                this.people[i] = this.model2;
                this.model2 = {};
                this.hideUpdate = true;
                this.msg = 'Editado correctamente';
            }
        }
    }

    closeAlert(): void {
        this.msg = '';
    }
}
