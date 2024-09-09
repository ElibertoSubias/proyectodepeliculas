import{a as N}from"./chunk-ESLIT33A.js";import{b as G,c as H}from"./chunk-MVHE2BNF.js";import{a as k,b as m,c as w,d as E,e as L,f as T,g as U,h as q,i as B,j as D}from"./chunk-VUTGS4B6.js";import{a as f,b as F,j as M,n as v,q as I,r as j}from"./chunk-DDAD5CRB.js";import{Ab as a,Ua as c,Va as l,_ as p,gb as C,ha as x,ia as d,jc as y,kb as u,kc as S,nb as n,ob as r,pb as g,rb as b}from"./chunk-4X6IT63B.js";function R(e,t){e&1&&(n(0,"div",12),a(1,"* Campo requerido"),r())}var P=(()=>{let t=class t{constructor(o,i,s,h,A){this.router=o,this.http=i,this.fb=s,this.moviesService=h,this.apiService=A,this.loginForm=this.fb.group({usuario:["",[m.required,m.minLength(2),m.maxLength(100)]],contrasenia:["",[m.required,m.minLength(2),m.maxLength(100)]]})}ngOnInit(){this.apiService.getToken()&&this.router.navigateByUrl("/home")}login(){let o={usuario:this.loginForm.value.usuario,contrasenia:this.loginForm.value.contrasenia};this.apiService.login(o).subscribe({next:i=>{this.apiService.setToken(i.token),this.router.navigateByUrl("/home")},error:i=>{alert("Error al iniciar sesion")},complete:()=>{}})}};t.\u0275fac=function(i){return new(i||t)(l(M),l(f),l(q),l(I),l(N))},t.\u0275cmp=x({type:t,selectors:[["app-workspace"]],decls:18,vars:3,consts:[[1,"col-8","offset-2","col-lg-6","offset-lg-3","div-wrapper","d-flex","justify-content-center","align-items-center"],[1,"div-to-align"],[1,"text-center"],[3,"formGroup"],[1,"mb-3"],["for","txtUsuario",1,"form-label"],["type","text","formControlName","usuario","id","txtUsuario",1,"form-control"],["id","usuarioHelp",1,"form-text","text-danger"],["for","txtPassword",1,"form-label"],["type","password","formControlName","contrasenia","name","contrasenia","id","txtContrasenia",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"click","disabled"],[1,"form-text","text-danger"]],template:function(i,s){i&1&&(n(0,"div",0)(1,"div",1)(2,"p",2),a(3,"Inicio de sesion"),r(),n(4,"form",3)(5,"div",4)(6,"label",5),a(7,"Usuario"),r(),g(8,"input",6),n(9,"div",7),a(10,"* Campo requerido"),r()(),n(11,"div",4)(12,"label",8),a(13,"Contrase\xF1a:"),r(),g(14,"input",9),C(15,R,2,0,"div",10),r(),n(16,"button",11),b("click",function(){return s.login()}),a(17,"Ingresar"),r()()()()),i&2&&(c(4),u("formGroup",s.loginForm),c(11),u("ngIf",!s.loginForm.value.titulo),c(),u("disabled",!s.loginForm.valid))},dependencies:[y,L,k,w,E,T,U],styles:[".div-wrapper[_ngcontent-%COMP%]{height:400px;margin-top:10rem;border:2px dashed #ddd;border-radius:8px}.div-to-align[_ngcontent-%COMP%]{width:75%;padding:40px 20px}"]});let e=t;return e})();var z=[{path:"",component:P}],V=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=d({type:t}),t.\u0275inj=p({imports:[v.forChild(z),v]});let e=t;return e})();var dt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=d({type:t}),t.\u0275inj=p({providers:[F(),f],imports:[S,V,j,H,G,B,D]});let e=t;return e})();export{dt as LoginModule};
