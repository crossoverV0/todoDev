import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionAdd, ionCheckbox, ionSquareOutline, ionTrashOutline } from '@ng-icons/ionicons';
import { AutofocusDirective } from 'src/app/core/diretives/autofocus.directive';

@Component({
	selector: 'app-todo',
	standalone: true,
	templateUrl: './todo.component.html',
	viewProviders: [provideIcons({ionCheckbox, ionSquareOutline, ionAdd, ionTrashOutline})],
	imports: [NgFor, NgIf, NgIconComponent, ReactiveFormsModule, AutofocusDirective],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit{
	formGroup!: FormGroup

	#builder = inject(FormBuilder);

	get steps() {
      return this.formGroup.controls["steps"] as FormArray;
   }

	@HostListener('window:beforeunload', ['$event'])
	beforeUnload($event: any): void {
		return this.logBeforeUnload();
	}

	ngOnInit(): void {
		this.formGroup = this.#getForm()
	}

	#verifySteps(){
		if(this.steps.controls.length === 0){
			this.addStep()
		}
	}

	#getForm(){
		return this.#builder.group({steps: this.#builder.array([]), taskTitle: []})
	}

	addStep(){
		const stepForm = this.#builder.group({
			title: [''],
			done: [false]
		});
	
	  this.steps.push(stepForm);
	}

	removeStep(index: number){
		this.steps.removeAt(index)
	}

	switch(index?: number){
		const step = this.steps.at(index as number) as FormGroup
		step.get('done')?.patchValue(!(step.get('done')?.value))
	}

	onInputKeyDown(e: any, index: number){
		if (e.key === 'Backspace' && index > 0 && !!!this.steps.controls[index]?.value?.title) this.removeStep(index)
	}

	logBeforeUnload(){
	}
}
