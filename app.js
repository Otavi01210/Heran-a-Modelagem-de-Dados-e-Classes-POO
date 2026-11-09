//Cliente

import {Cliente} from './models/Cliente.js';

const c1 = new Cliente(1,"julio@gmail.com","123abc","Julio","123456");
console.log(c1.login());
c1.info();


//Logista

import {Logista} from './models/Logista.js';

const c2 = new Logista(2,"cézar@gmail.com","5551dd","12.345.678/0001-XX","Coamo Agroindustrial Cooperativa","Cézar");
console.log(c2.login());
c2.info();
