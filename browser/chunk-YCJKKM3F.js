import{a as E,h as O,j,k as _,l as P,n as u,o as L,q as A,r as N}from"./chunk-DDAD5CRB.js";import{Ab as c,Bb as v,Fb as I,Ra as x,Ua as a,Va as l,_ as d,gb as b,ha as g,ia as p,jc as S,kb as f,kc as w,nb as n,ob as r,pb as M,rb as y,sb as C,vb as k}from"./chunk-4X6IT63B.js";var D=t=>["/edit-movie/",t];function T(t,e){if(t&1&&(n(0,"div",5),M(1,"img",6),n(2,"div",7)(3,"h2",8),c(4),r(),n(5,"p",9),c(6),r(),n(7,"h2",8),c(8,"Actores:"),r(),n(9,"p",9),c(10),r()()()),t&2){let m=C();a(),k("src",m.baseUrl+"/"+m.movie.portada,x),a(3),v(m.movie.titulo),a(2),v(m.movie.sinopsis),a(4),v(m.movie.actores)}}var R=(()=>{let e=class e{constructor(i,o,s,h){this.route=i,this.http=o,this.moviesService=s,this.router=h,this.idMovie=0,this.movie={},this.baseUrl=L.appBaseUrlMedia}ngOnInit(){this.idMovie=this.route.snapshot.params.id,this.moviesService.getMovie(this.idMovie).subscribe({next:i=>{this.movie=i.movieExistente},error:i=>{console.log(i),alert("Ocurrio un error al obtener la pelicula.")}})}removeMovie(){this.moviesService.removeMovie(this.movie._id).subscribe({next:i=>{this.router.navigate(["/home/"])},error:i=>{console.log(i),alert("Ocurrio un error al eliminar la pelicula.")}})}};e.\u0275fac=function(o){return new(o||e)(l(O),l(E),l(A),l(j))},e.\u0275cmp=g({type:e,selectors:[["app-workspace"]],decls:8,vars:4,consts:[[1,"row","col-md-8","offset-md-2","mt-3","cont-body","p-4"],["routerLink",".."],["class","card mb-3 p-0 align-items-center",4,"ngIf"],["routerLinkActive","active","ariaCurrentWhenActive","page",1,"btn","btn-primary","mb-3",3,"routerLink"],["type","button",1,"btn","btn-danger",3,"click"],[1,"card","mb-3","p-0","align-items-center"],["alt","...",1,"card-img-top",2,"width","400px",3,"src"],[1,"card-body","color-fondo-info",2,"width","100%"],[1,"card-title"],[1,"card-text"]],template:function(o,s){o&1&&(n(0,"div",0)(1,"a",1),c(2,"Volver"),r(),b(3,T,11,4,"div",2),n(4,"a",3),c(5,"Editar"),r(),n(6,"button",4),y("click",function(){return s.removeMovie()}),c(7,"Eliminar"),r()()),o&2&&(a(3),f("ngIf",s.movie),a(),f("routerLink",I(2,D,s.movie.idMovie)))},dependencies:[S,_,P],styles:[".cont-body[_ngcontent-%COMP%]{margin-bottom:100px;min-height:90vh;display:block}.cont-image[_ngcontent-%COMP%]{width:100%;height:450px;display:flex;justify-content:center;align-items:center;overflow:hidden}.cont-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{flex-shrink:0;-webkit-flex-shrink:0;max-width:70%;max-height:90%}.color-fondo-info[_ngcontent-%COMP%]{background-color:#dcdcdc}.color-fondo-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-size:18px}"]});let t=e;return t})();var z=[{path:"",component:R}],U=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=p({type:e}),e.\u0275inj=d({imports:[u.forChild(z),u]});let t=e;return t})();var te=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=p({type:e}),e.\u0275inj=d({imports:[w,U,N]});let t=e;return t})();export{te as DetailMovieModule};
