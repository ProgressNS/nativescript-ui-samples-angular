import { nsProvideRouter } from "nativescript-angular/router";
import { RouterConfig } from '@angular/router';
import { ExamplesListComponent } from "./examples-list/examples-list.component";
import { ExampleComponent } from "./example/example.component";
import { OptionsComponent } from "./options/options.component";

// const routes: RouterConfig = [
//     { path: "/", redirectTo: "/examples", terminal: true },
//     { path: "/examples", component: ExamplesListComponent },
//     {
//         path: "/example", component: ExampleComponent,
//         children: [
//             { path: "/", redirectTo: "options", terminal: true },
//             { path: "/options", component: OptionsComponent }
//         ]
//     },
// ];

// const routes: RouterConfig = [
//     { path: "/", redirectTo: "/examples", terminal: true },
//     {
//         path: "/examples", component: ExamplesListComponent,
//         children: [
//             {
//                 path: "/example", component: ExampleComponent,
//                 children: [
//                     { path: "/", redirectTo: "options", terminal: true },
//                     { path: "/options", component: OptionsComponent }
//                 ]
//             }
//         ]
//     }
// ];

const routes: RouterConfig = [
    { path: "", redirectTo: "/examples", terminal: true },
    { path: "examples", component: ExamplesListComponent },
    { path: "examplesLevel2", component: ExamplesListComponent },
    { path: "example", component: ExampleComponent },
    { path: "options", component: OptionsComponent },
];


export const AppPageRouterOutletRouterProviders = [
    nsProvideRouter(routes, { enableTracing: false })
]