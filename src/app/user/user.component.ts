// import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from './user.model';
import { CardComponent } from '../shared/card/card.component';

// import { Component, computed, Input, input, Output, signal } from '@angular/core';

// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // recebendo o objeto
  // aqui podemos usar o type ou interface
  @Input({ required: true }) user!: IUser;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  get imageAlt() {
    return `Photo of ${this.user.name}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  // o ! diz que temos certeza que o value vai ser passado, o TS não sabe disso
  // @Input() avatar!: string;
  // @Input() name!: string;
  // o {required: true} garante que o input vai ser passado para o componente
  // se não passar o input, o TS acusa error
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter();
  // @Output() select = new EventEmitter<string>();

  // get imagePath() {
  //   return `assets/users/${this.avatar}`;
  // }

  // get imageAlt() {
  //   return `Photo of ${this.name}`;
  // }

  // onSelectUser() {
  //   this.select.emit(this.id);
  // }

  // output(), não é um signal
  // é o mesmo que o @Output()
  // select = output<string>();

  /*
  // signals with inputs
  // chamamos a functin input, passando um valor inicial (se não passar nada é undefined)
  // avatar = input<string>();
  // queremos que seja obrigatório
  avatar = input.required<string>(); // nesse caso, não podemos passar um valor inicial
  name = input.required<string>();
  // essa forma, não podemos mudar o valor de dentro dese componente, somente por fora, são readonly

  imagePath = computed(() => `assets/users/${this.avatar()}`);
  imageAlt = computed(() => `Photo of ${this.name()}`);

  onSelectUser() {}
  */

  /*
  // selectedUser = DUMMY_USERS[randomIndex];
  // signal é um container, que contém um valor, qd muda o valor, angular é notificado, identifica onde ele é usado e atualiza o valor
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // com signals
  // retorna o valor computado
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);
  imageAlt = computed(() => `Photo of ${this.selectedUser().name}`);

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    // to update a signal, call the set method and passa the new value
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
  */

  /*
  // getter
  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }

  get imageAlt() {
    return `Photo of ${this.selectedUser.name}`;
  }
  */
}
