# BicycleShopFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12 (LTS). This framework allows to modular the code to organise better the code and accelerates the development. Uses Typescript, CSS and HTML that are commonly used and easy to learn and maintain. Has a better approach for WEB enterprise applications because of this modularity of the code and could be migrated to micro-frontend in case the application growth demands it.

## Main user actions
### Administration User
- Configuration menu which enroutes to every module:
    - Category
    - Combination (relation of a component with another, the compatibility and price adjustment)
    - Order
    - Product
    - Component
Will display a view that allows the user to maintain (create, update and delete) the data of the different entities.

### Customer
- Product list that is the main page where the customer will choose the product to buy clicking on a button.
- Setting of every component that could be configured to the product in a form view. Once it is all set, there is a Add to cart button that will create the order in the database.
- TODO: The customer information view where the user can include the address, name, email and other needed information. Finally it will redirect to the payment gateway and wait till the final process.
- TODO: The user can go back every step without loosing the information already included since in every view. To prevent it in the session storage the application can save information like he order id if the client hasn't include its data.

## Product Page
The product page will display on the left part of the view the name of the product and below would have a image and the final price calculation of the product. On the right side, there will be a form with every category allowed to include in a input dropdown field with the component options available for the product. 

(TODO) With every input set or deleted will check two values:
- If there is a component that is no longer available because it is not compatible with the one set or the addition of a new component that it is now available.
- The price calculation with the addition of the base price of the component and the price adjustment in case there is a combination of components.
Below, there will be a add to cart button that will lead us to the detailed order and create the order object filled in database.

## Add to cart action
TODO: The order page will show a receipt with the detail of every component and combinations included in the order and final price and taxes.
In the lower right corner there will be a button that will lead to the payment gateway.

## Administrative workflows
The administrative feature is based in a superior menu that link with every part of the website that is configurable. When the user click on an option, will be redirected to a view that includes the name of the option selected: product, category, combination and a table displaying every parameter of the domain. And the creation, update (TODO) and delete button.

Creation button: will show a panel with every parameter to be set, depending on the parameter, the imput will be a NumberInput, TextInput or dropdown.
Delete button: It is disabled by default, and will enable once a item of the list is checked or all of them. Then when deleted button is pressed, will do a fork request of every item to the server. 
Update button: It is disabled by default, and will enable once an item of the list is checked. Then when update button is pressed, will show the same panel as the creation button and could modify every parameter of the item. Furthermore, it could be implemented a bulk actions button that could change only a column of the items selected. First the user will need to check every item needed and click on the column to be changed, then click on the bulk actions button and it will be displayed a new panel which will allow the user to change the value of that column. The update will be sent to the server with the same parallel implementation as the delete action.

## Next steps
- Include the configuration of an image for every product to be shown in the list and details sites.
- Login to access the administration workflows.
- Three main administrative components described in administrative workflows section, can be done with three abstraction Angular components.
- Orders view: Implement a detailed orders site which will show the order states, and could be automated the 
  workflow of every order from the preparation of the products to the delivery. 
- Exception handler: which will receive every error and show the details and allow the user to modify the request or action.
- Payment gateway integration.
- Implement testing features

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

https://medium.com/@sehban.alam/mastering-modular-architecture-in-angular-4cc2632fc964


