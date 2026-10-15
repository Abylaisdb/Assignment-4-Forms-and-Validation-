# Assignment #4. Forms and Validation

**Student:** Abylai Duisim  
**Group:** SE-2530  
**Live site:** https://github.com/Abylaisdb/Assignment-4-Forms-and-Validation-

## Description
A three-page website about HTML forms, Bootstrap form components and validation.
All pages share the same navbar. The validation is done with HTML5 attributes and
Bootstrap classes. A short `script.js` compares the two passwords and switches the Bootstrap `is-valid` / `is-invalid` classes (Task 3.2 and Task 4); Bootstrap's own JS is used only for the burger menu.

| Page | Tasks | What it shows |
|------|-------|---------------|
| `index.html` | Task 0, Task 1 | Plain HTML contact form; the same form with HTML5 validation (`required`, `type`, `minlength`, `maxlength`, `pattern`) |
| `task2-3.html` | Task 2, Task 3 | Contact form styled with Bootstrap (grid, placeholders, helper text); `is-valid` / `is-invalid` feedback examples and a working form with live messages |
| `task4.html` | Task 4 | Registration form: names, email, password + confirmation (checked for a match), gender (radio), hobbies (checkboxes), country (select), Submit and Reset, with Bootstrap error / success messages |

## Structure
```
index.html
task2-3.html
task4.html
style.css
script.js
```

## How to run
1. Clone the repository.
2. Open `index.html` in a browser.
3. Use the navbar to move between the parts.

## How to test validation
- Press Submit on an empty form: the browser shows which field is wrong.
- Enter an email without `@`, a 1-letter name, or a password shorter than 8 characters / without a digit.
- Press Submit without choosing a gender or a country.
- Press Reset to clear the form.
