# Несколько маршрутизаторов в Angular 7/8 (вспомогательные маршрутизаторы)

* Tour of Heroes tutorial
    * https://angular.io/guide/router
    * [Tour of Heroes: Services example code](https://angular.io/generated/zips/toh-pt4/toh-pt4.zip)


1. В [index.html](index.html) добавить `<base href="/">`
    ```html
    <head>
        <title>Multiple Router-Outlets (Auxiliary Routes)</title>
        <base href="/">
    </head>
    ```
2. В [app.component.html](app.component.html) именуем вспомогательный маршрутизатор и устанавливаем порядок маршрутизаторов (**router-outlet**) на веб-странице - сначала должен стоять вспомогательный маршрутизатор, а потом основной (дефолтный) маршрутизатор.
    ```html
        <router-outlet name="outlet"></router-outlet>
        <router-outlet></router-outlet>
    ``` 
3. Создаем компоненты например стилей для каждого отдельного маршрутизатора (`sidebar`,`without-sidebar1`,`without-sidebar2`) 
4. Подключаем эти компоненты маршрутизаторов в модуле [routing.module.ts](routing.module.ts) и маркируем эти компоненты маршрутизаторов (не забываем указывать компонент маршрутизатора по умолчанию!)
    ```angular2
    const routes: Routes = [
      { path: "", component: DefaultOutletComponent, outlet: "outlet" },
      { path: "1", component: Outlet1Component, outlet: "outlet" },
      { path: "2", component: Outlet2Component, outlet: "outlet" },
    ```
5. Для всех вспомогательных компонентов маршрутизаторов используем в ссылке `<HOST>/<PATH>(<OUTLERS>:<OUTLER-NAME>)`

---

* `Default`
  ![0](screenshot-0.png)
  * (`Home`) http://localhost:4200/home
    ![1](screenshot-1.png)
  * (`Products`) http://localhost:4200/products
    ![2](screenshot-2.png)
  * (`Products Details 1`) http://localhost:4200/product/1
    ![3](screenshot-3.png)
* `Outlet 1`
  * (`Home`) http://localhost:4200/home(outlet:1)
    ![4](screenshot-4.png)
  * (`Products`) http://localhost:4200/products(outlet:1)
    ![5](screenshot-5.png)
  * (`Products Details 1`) http://localhost:4200/product/1(outlet:1)
    ![6](screenshot-6.png)
* `Outlet 2`
  * (`Home`) http://localhost:4200/home(outlet:2)
    ![7](screenshot-7.png)
  * (`Products`) http://localhost:4200/products(outlet:2)
    ![8](screenshot-8.png)
  * (`Products Details 1`) http://localhost:4200/product/1(outlet:2)
    ![9](screenshot-9.png)

+ Tour of Heroes tutorial
    + `angular7_8-multiple-router-demo` https://github.com/Home-AngularJS/angular7_8-multiple-router-demo

---

## How to use?

Next, navigate inside the cloned folder then install the dependencies using:

```bash
cd angular-router-demo
npm install
```

You can the serve your demo project using:

```bash
ng serve
```

Finally, visit `http://127.0.0.1:4200` with your browser.
