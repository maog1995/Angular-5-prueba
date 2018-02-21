import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Crud de angular';

    public people = [
        {'name': 'Nombre1', 'phoneNumber': 999999999},
        {'name': 'Nombre2', 'phoneNumber': 999999998},
        {'name': 'Nombre3', 'phoneNumber': 999999997}
    ];

    model: any = {};

    addPerson(): void {
        this.people.push(this.model);
    }

    deletePerson(): void {
    }

    editPerson(): void {
    }

    updatePerson(): void {
    }
}
