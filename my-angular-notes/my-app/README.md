

# NOTES

<pre>

The Angular Directive can be classified into two types:
- structural
- attribute directives.

Structural directives
- Structural directives alter layout by adding, removing, and replacing elements in DOM.
- built-in structural directives:
  < li *ngFor="let movie of movies"></li> 
    *ngFor is a looping variable that tells Angular to take one < li> per movie from the movies list.
  < movie-detail *ngIf="selectedMovie"></movie-detail>
    *ngIf will include the MovieDetail component only if a movie is selected otherwise it will remove it from the DOM.

Attribute directive
- Attribute directive alter the appearance or behavior of an existing element.
    When you include attribute directives in templates, they look like regular HTML attributes.
- ngModel directive, which implements two-way data binding, is an example of an attribute directive.
    ngModel modifies the behavior of an existing element by setting its display property and responding to the changing events.
    < input [(ngModel)]="movie.name">
- Angular has a few more directives that either
  alter the layout structure (for example, ngSwitch) or
  modify aspects of DOM elements and components (for example, ngStyle and ngClass)

Custom Angular Directive
   write your own directives


</pre>





# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
