import { Injectable } from "@angular/core";
import { ValidatorFn, AbstractControl, Validators } from "@angular/forms";

@Injectable()
export class CustomValidatorsService {
  public URLValidator = Validators.pattern(
    new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    )
  );

  constructor() {}

  public optional(
    validators?: (ValidatorFn | null | undefined)[]
  ): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      return control.value ? Validators.compose(validators)(control) : null;
    };
  }
}
