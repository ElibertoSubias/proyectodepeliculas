import{a as Q}from"./chunk-ESLIT33A.js";import"./chunk-VUTGS4B6.js";import{a as Ue,c as Le,d as Ge,e as He,f as Ve,h as $e,i as Y,j as z,k as je,l as Ye,m as ze,n as de,o as W,q as We,r as Qe}from"./chunk-DDAD5CRB.js";import{A as N,Aa as se,Ab as E,B as Se,C as U,Eb as ce,Fa as Ce,H as ee,J as Te,Ob as xe,S as Ee,T as _,U as Oe,V as te,Va as M,W as De,Wa as Re,Xa as Me,Ya as Ie,Yb as j,Z as f,Za as Ae,_ as l,a as q,aa as L,ab as Pe,b as me,bc as I,ca as k,da as d,g as ye,ha as m,hb as oe,ia as c,ib as ae,j as y,jb as Ne,ka as we,kc as Fe,l as ve,lb as re,ma as ie,mb as G,n as Z,nb as u,ob as p,pa as B,pb as D,qa as x,qb as le,r as X,rb as F,tb as ke,ub as Be,va as C,xa as ne,xb as H,y as T,ya as R,yb as V,z as be,zb as $}from"./chunk-4X6IT63B.js";var Mt=["txtFiltro"],Je=(()=>{let e=class e{constructor(n,i,s,a){this.router=n,this.moviesService=i,this.route=s,this.apiService=a}ngOnInit(){}filterMovies(){this.router.routeReuseStrategy.shouldReuseRoute=function(){return!1},this.router.onSameUrlNavigation="reload",this.router.navigate(["/home"],{queryParams:{filter:this.txtFiltro?.nativeElement.value}})}salir(){this.apiService.logout(),this.router.navigate(["/login"])}};e.\u0275fac=function(i){return new(i||e)(M(z),M(We),M($e),M(Q))},e.\u0275cmp=m({type:e,selectors:[["app-header"]],viewQuery:function(i,s){if(i&1&&H(Mt,5),i&2){let a;V(a=$())&&(s.txtFiltro=a.first)}},decls:24,vars:0,consts:[["txtFiltro",""],[1,"navbar","navbar-expand-lg","navbar-light","bg-light","p-3"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNavDropdown","aria-controls","navbarNavDropdown","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"row","collapse","navbar-collapse","justify-content-end"],[1,"d-flex","justify-content-end"],[1,"form-inline","my-2","my-lg-0","d-flex","justify-content-end"],["type","search","placeholder","Accion, romance","aria-label","Search",1,"col","form-control","mr-sm-2",3,"keyup.enter"],["type","button",1,"col-3","btn","btn-outline-success","my-2","my-sm-0",3,"keyup.enter"],["id","navbarNavDropdown",1,"collapse","navbar-collapse","justify-content-end"],[1,"navbar-nav"],[1,"nav-item","m-2"],["routerLink","/home","routerLinkActive","active","ariaCurrentWhenActive","page",1,"text-decoration-none"],["routerLink","/new-movie","routerLinkActive","active","ariaCurrentWhenActive","page",1,"text-decoration-none"],[3,"click"]],template:function(i,s){if(i&1){let a=le();u(0,"nav",1)(1,"div",2)(2,"a",3),E(3,"Listado de Peliculas"),p(),u(4,"button",4),D(5,"span",5),p(),u(6,"div",6)(7,"div",7)(8,"div",8)(9,"input",9,0),F("keyup.enter",function(){return B(a),x(s.filterMovies())}),p(),u(11,"button",10),F("keyup.enter",function(){return B(a),x(s.filterMovies())}),E(12,"Buscar"),p()()()(),u(13,"div",11)(14,"ul",12)(15,"li",13)(16,"a",14),E(17,"Home"),p()(),u(18,"li",13)(19,"a",15),E(20,"Agregar pelicula"),p()(),u(21,"li",13)(22,"button",16),F("click",function(){return B(a),x(s.salir())}),E(23,"Salir"),p()()()()()()}},dependencies:[je,Ye],styles:[".cont-nav[_ngcontent-%COMP%]{min-height:10vh;max-height:10vh}.active[_ngcontent-%COMP%]{display:none}"]});let t=e;return t})();var Ke=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-footer"]],decls:2,vars:0,consts:[[1,"cont-footer","d-flex","justify-content-center"]],template:function(i,s){i&1&&(u(0,"footer",0),E(1,` Creado por Eliberto Subias - 2024
`),p())},styles:[".cont-footer[_ngcontent-%COMP%]{min-height:10vh;max-height:10vh}"]});let t=e;return t})();var qe=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-content-layout"]],decls:4,vars:0,consts:[[1,"container-fluid","m-0","p-0"]],template:function(i,s){i&1&&(u(0,"div",0),D(1,"app-header")(2,"router-outlet")(3,"app-footer"),p())},dependencies:[Y,Je,Ke]});let t=e;return t})();var Ze=(()=>{let e=class e{constructor(n,i){this.apiService=n,this.router=i}canActivate(n,i){if(!this.apiService.getToken())this.router.navigate(["/login"]);else return!0}};e.\u0275fac=function(i){return new(i||e)(k(Q),k(z))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Pt=[{path:"login",data:{title:"Login"},loadChildren:()=>import("./chunk-WJZXWFQR.js").then(t=>t.LoginModule)},{path:"",redirectTo:"home",pathMatch:"full"},{path:"",component:qe,canActivate:[Ze],data:{title:"Home"},children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:()=>import("./chunk-A6XZ6CFO.js").then(t=>t.HomeModule)},{path:"home/:filter",loadChildren:()=>import("./chunk-A6XZ6CFO.js").then(t=>t.HomeModule)},{path:"movie/:id",loadChildren:()=>import("./chunk-YCJKKM3F.js").then(t=>t.DetailMovieModule)},{path:"new-movie",loadChildren:()=>import("./chunk-5KTQGK35.js").then(t=>t.AddMovieModule)},{path:"edit-movie/:id",loadChildren:()=>import("./chunk-UTKGZOWQ.js").then(t=>t.EditMovieModule)},{path:"**",redirectTo:"home",pathMatch:"full"}]}],Xe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({imports:[de.forRoot(Pt,{preloadingStrategy:ze}),de]});let t=e;return t})();var et=(()=>{let e=class e{constructor(){this.title="AngularProjectStructure"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(i,s){i&1&&D(0,"router-outlet")},dependencies:[Y]});let t=e;return t})();var tt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({imports:[Fe]});let t=e;return t})();var kt=["*"];var Bt=["dialog"];var it={animation:!0,transitionTimerDelayMs:5},xt=(()=>{let e=class e{constructor(){this.animation=it.animation}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Ft(t){let{transitionDelay:e,transitionDuration:o}=window.getComputedStyle(t),n=parseFloat(e),i=parseFloat(o);return(n+i)*1e3}function nt(t){return typeof t=="string"}function ue(t){return t!=null}function Ut(t){return t&&t.then}function st(t){return(t||document.body).getBoundingClientRect()}function Lt(t){return e=>new ye(o=>{let n=a=>t.run(()=>o.next(a)),i=a=>t.run(()=>o.error(a)),s=()=>t.run(()=>o.complete());return e.subscribe({next:n,error:i,complete:s})})}var Gt=()=>{},{transitionTimerDelayMs:Ht}=it,J=new Map,w=(t,e,o,n)=>{let i=n.context||{},s=J.get(e);if(s)switch(n.runningTransition){case"continue":return ve;case"stop":t.run(()=>s.transition$.complete()),i=Object.assign(s.context,i),J.delete(e)}let a=o(e,n.animation,i)||Gt;if(!n.animation||window.getComputedStyle(e).transitionProperty==="none")return t.run(()=>a()),Z(void 0).pipe(Lt(t));let r=new y,h=new y,g=r.pipe(Te(!0));J.set(e,{transition$:r,complete:()=>{h.next(),h.complete()},context:i});let b=Ft(e);return t.runOutsideAngular(()=>{let P=T(e,"transitionend").pipe(_(g),N(({target:O})=>O===e)),S=be(b+Ht).pipe(_(g));Se(S,P,h).pipe(_(g)).subscribe(()=>{J.delete(e),t.run(()=>{a(),r.next(),r.complete()})})}),r.asObservable()};var ot=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})();var at=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})();var rt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})(),lt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})();var Pn=(()=>{let t=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,e=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(t()||e()):!1})();var Vt=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function ct(t){let e=Array.from(t.querySelectorAll(Vt)).filter(o=>o.tabIndex!==-1);return[e[0],e[e.length-1]]}var $t=(t,e,o,n=!1)=>{t.runOutsideAngular(()=>{let i=T(e,"focusin").pipe(_(o),X(s=>s.target));T(e,"keydown").pipe(_(o),N(s=>s.key==="Tab"),te(i)).subscribe(([s,a])=>{let[r,h]=ct(e);(a===r||a===e)&&s.shiftKey&&(h.focus(),s.preventDefault()),a===h&&!s.shiftKey&&(r.focus(),s.preventDefault())}),n&&T(e,"click").pipe(_(o),te(i),X(s=>s[1])).subscribe(s=>s.focus())})};var Nn=new Date(1882,10,12),kn=new Date(2174,10,25);var Bn=1e3*60*60*24;var fe=1080,jt=24*fe,Yt=12*fe+793,xn=29*jt+Yt,Fn=11*fe+204;var dt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})();var ht=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})(),zt=(()=>{let e=class e{constructor(){this._ngbConfig=d(xt),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(n){this._animation=n}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),A=class{constructor(e,o,n){this.nodes=e,this.viewRef=o,this.componentRef=n}};var Wt=(()=>{let e=class e{constructor(){this._document=d(I)}hide(){let n=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),i=this._document.body,s=i.style,{overflow:a,paddingRight:r}=s;if(n>0){let h=parseFloat(window.getComputedStyle(i).paddingRight);s.paddingRight=`${h+n}px`}return s.overflow="hidden",()=>{n>0&&(s.paddingRight=r),s.overflow=a}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Qt=(()=>{let e=class e{constructor(){this._nativeElement=d(se).nativeElement,this._zone=d(R),this._injector=d(C)}ngOnInit(){ae(()=>w(this._zone,this._nativeElement,(n,i)=>{i&&st(n),n.classList.add("show")},{animation:this.animation,runningTransition:"continue"}),{injector:this._injector,phase:oe.MixedReadWrite})}hide(){return w(this._zone,this._nativeElement,({classList:n})=>n.remove("show"),{animation:this.animation,runningTransition:"stop"})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(i,s){i&2&&(G("modal-backdrop"+(s.backdropClass?" "+s.backdropClass:"")),re("show",!s.animation)("fade",s.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[ce],decls:0,vars:0,template:function(i,s){},encapsulation:2});let t=e;return t})(),K=class{update(e){}close(e){}dismiss(e){}},Jt=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],Kt=["animation","backdropClass"],pe=class{_applyWindowOptions(e,o){Jt.forEach(n=>{ue(o[n])&&(e[n]=o[n])})}_applyBackdropOptions(e,o){Kt.forEach(n=>{ue(o[n])&&(e[n]=o[n])})}update(e){this._applyWindowOptions(this._windowCmptRef.instance,e),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,e)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(_(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(_(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(e,o,n,i){this._windowCmptRef=e,this._contentRef=o,this._backdropCmptRef=n,this._beforeDismiss=i,this._closed=new y,this._dismissed=new y,this._hidden=new y,e.instance.dismissEvent.subscribe(s=>{this.dismiss(s)}),this.result=new Promise((s,a)=>{this._resolve=s,this._reject=a}),this.result.then(null,()=>{})}close(e){this._windowCmptRef&&(this._closed.next(e),this._resolve(e),this._removeModalElements())}_dismiss(e){this._dismissed.next(e),this._reject(e),this._removeModalElements()}dismiss(e){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(e);else{let o=this._beforeDismiss();Ut(o)?o.then(n=>{n!==!1&&this._dismiss(e)},()=>{}):o!==!1&&this._dismiss(e)}}_removeModalElements(){let e=this._windowCmptRef.instance.hide(),o=this._backdropCmptRef?this._backdropCmptRef.instance.hide():Z(void 0);e.subscribe(()=>{let{nativeElement:n}=this._windowCmptRef.location;n.parentNode.removeChild(n),this._windowCmptRef.destroy(),this._contentRef?.viewRef?.destroy(),this._windowCmptRef=null,this._contentRef=null}),o.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:n}=this._backdropCmptRef.location;n.parentNode.removeChild(n),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),U(e,o).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},_e=function(t){return t[t.BACKDROP_CLICK=0]="BACKDROP_CLICK",t[t.ESC=1]="ESC",t}(_e||{}),qt=(()=>{let e=class e{constructor(){this._document=d(I),this._elRef=d(se),this._zone=d(R),this._injector=d(C),this._closed$=new y,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new ne,this.shown=new y,this.hidden=new y}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":nt(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(n){this.dismissEvent.emit(n)}ngOnInit(){this._elWithFocus=this._document.activeElement,ae(()=>this._show(),{injector:this._injector,phase:oe.MixedReadWrite})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:n}=this._elRef,i={animation:this.animation,runningTransition:"stop"},s=w(this._zone,n,()=>n.classList.remove("show"),i),a=w(this._zone,this._dialogEl.nativeElement,()=>{},i),r=U(s,a);return r.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),r}_show(){let n={animation:this.animation,runningTransition:"continue"},i=w(this._zone,this._elRef.nativeElement,(a,r)=>{r&&st(a),a.classList.add("show")},n),s=w(this._zone,this._dialogEl.nativeElement,()=>{},n);U(i,s).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:n}=this._elRef;this._zone.runOutsideAngular(()=>{T(n,"keydown").pipe(_(this._closed$),N(s=>s.key==="Escape")).subscribe(s=>{this.keyboard?requestAnimationFrame(()=>{s.defaultPrevented||this._zone.run(()=>this.dismiss(_e.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let i=!1;T(this._dialogEl.nativeElement,"mousedown").pipe(_(this._closed$),Oe(()=>i=!1),Ee(()=>T(n,"mouseup").pipe(_(this._closed$),ee(1))),N(({target:s})=>n===s)).subscribe(()=>{i=!0}),T(n,"click").pipe(_(this._closed$)).subscribe(({target:s})=>{n===s&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!i&&this._zone.run(()=>this.dismiss(_e.BACKDROP_CLICK))),i=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:n}=this._elRef;if(!n.contains(document.activeElement)){let i=n.querySelector("[ngbAutofocus]"),s=ct(n)[0];(i||s||n).focus()}}_restoreFocus(){let n=this._document.body,i=this._elWithFocus,s;i&&i.focus&&n.contains(i)?s=i:s=n,this._zone.runOutsideAngular(()=>{setTimeout(()=>s.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&w(this._zone,this._elRef.nativeElement,({classList:n})=>(n.add("modal-static"),()=>n.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["ngb-modal-window"]],viewQuery:function(i,s){if(i&1&&H(Bt,7),i&2){let a;V(a=$())&&(s._dialogEl=a.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(i,s){i&2&&(Ne("aria-modal",!0)("aria-labelledby",s.ariaLabelledBy)("aria-describedby",s.ariaDescribedBy),G("modal d-block"+(s.windowClass?" "+s.windowClass:"")),re("fade",s.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[ce],ngContentSelectors:kt,decls:4,vars:2,consts:[["dialog",""],["role","document"],[1,"modal-content"]],template:function(i,s){i&1&&(ke(),u(0,"div",1,0)(2,"div",2),Be(3),p()()),i&2&&G("modal-dialog"+(s.size?" modal-"+s.size:"")+(s.centered?" modal-dialog-centered":"")+s.fullscreenClass+(s.scrollable?" modal-dialog-scrollable":"")+(s.modalDialogClass?" "+s.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2});let t=e;return t})(),Zt=(()=>{let e=class e{constructor(){this._applicationRef=d(xe),this._injector=d(C),this._environmentInjector=d(ie),this._document=d(I),this._scrollBar=d(Wt),this._activeWindowCmptHasChanged=new y,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new ne;let n=d(R);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let i=this._windowCmpts[this._windowCmpts.length-1];$t(n,i.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(i.location.nativeElement)}})}_restoreScrollBar(){let n=this._scrollBarRestoreFn;n&&(this._scrollBarRestoreFn=null,n())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(n,i,s){let a=s.container instanceof HTMLElement?s.container:ue(s.container)?this._document.querySelector(s.container):this._document.body;if(!a)throw new Error(`The specified modal container "${s.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let r=new K;n=s.injector||n;let h=n.get(ie,null)||this._environmentInjector,g=this._getContentRef(n,h,i,r,s),b=s.backdrop!==!1?this._attachBackdrop(a):void 0,P=this._attachWindowComponent(a,g.nodes),S=new pe(P,g,b,s.beforeDismiss);return this._registerModalRef(S),this._registerWindowCmpt(P),S.hidden.pipe(ee(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),r.close=O=>{S.close(O)},r.dismiss=O=>{S.dismiss(O)},r.update=O=>{S.update(O)},S.update(s),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),b&&b.instance&&b.changeDetectorRef.detectChanges(),P.changeDetectorRef.detectChanges(),S}get activeInstances(){return this._activeInstances}dismissAll(n){this._modalRefs.forEach(i=>i.dismiss(n))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(n){let i=j(Qt,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(i.hostView),n.appendChild(i.location.nativeElement),i}_attachWindowComponent(n,i){let s=j(qt,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:i});return this._applicationRef.attachView(s.hostView),n.appendChild(s.location.nativeElement),s}_getContentRef(n,i,s,a,r){return s?s instanceof Me?this._createFromTemplateRef(s,a):nt(s)?this._createFromString(s):this._createFromComponent(n,i,s,a,r):new A([])}_createFromTemplateRef(n,i){let s={$implicit:i,close(r){i.close(r)},dismiss(r){i.dismiss(r)}},a=n.createEmbeddedView(s);return this._applicationRef.attachView(a),new A([a.rootNodes],a)}_createFromString(n){let i=this._document.createTextNode(`${n}`);return new A([[i]])}_createFromComponent(n,i,s,a,r){let h=C.create({providers:[{provide:K,useValue:a}],parent:n}),g=j(s,{environmentInjector:i,elementInjector:h}),b=g.location.nativeElement;return r.scrollable&&b.classList.add("component-host-scrollable"),this._applicationRef.attachView(g.hostView),new A([[b]],g.hostView,g)}_setAriaHidden(n){let i=n.parentElement;i&&n!==this._document.body&&(Array.from(i.children).forEach(s=>{s!==n&&s.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}),this._setAriaHidden(i))}_revertAriaHidden(){this._ariaHiddenValues.forEach((n,i)=>{n?i.setAttribute("aria-hidden",n):i.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(n){let i=()=>{let s=this._modalRefs.indexOf(n);s>-1&&(this._modalRefs.splice(s,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(n),this._activeInstances.emit(this._modalRefs),n.result.then(i,i)}_registerWindowCmpt(n){this._windowCmpts.push(n),this._activeWindowCmptHasChanged.next(),n.onDestroy(()=>{let i=this._windowCmpts.indexOf(n);i>-1&&(this._windowCmpts.splice(i,1),this._activeWindowCmptHasChanged.next())})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Xt=(()=>{let e=class e{constructor(){this._injector=d(C),this._modalStack=d(Zt),this._config=d(zt)}open(n,i={}){let s=q(me(q({},this._config),{animation:this._config.animation}),i);return this._modalStack.open(this._injector,n,s)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(n){this._modalStack.dismissAll(n)}hasOpenModals(){return this._modalStack.hasOpenModals()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ut=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({providers:[Xt]});let t=e;return t})();var pt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})();var _t=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})();var ft=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})();var gt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})();var mt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})();var yt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})();var vt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})();var bt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})();var St=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})();var Un=new L("live announcer delay",{providedIn:"root",factory:()=>100});var Tt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})();var Et=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({});let t=e;return t})(),ei=[ot,at,rt,lt,dt,ht,ut,pt,Et,_t,ft,gt,mt,yt,vt,bt,St,Tt],Ot=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=l({imports:[ei,ot,at,rt,lt,dt,ht,ut,pt,Et,_t,ft,gt,mt,yt,vt,bt,St,Tt]});let t=e;return t})();var ti="@",ii=(()=>{let e=class e{constructor(n,i,s,a,r){this.doc=n,this.delegate=i,this.zone=s,this.animationType=a,this.moduleImpl=r,this._rendererFactoryPromise=null,this.scheduler=d(Ie,{optional:!0}),this.loadingSchedulerFn=d(ni,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let n=()=>this.moduleImpl??import("./chunk-WAYAKX2A.js").then(s=>s),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(n):i=n(),i.catch(s=>{throw new De(5300,!1)}).then(({\u0275createEngine:s,\u0275AnimationRendererFactory:a})=>{this._engine=s(this.animationType,this.doc);let r=new a(this.delegate,this._engine,this.zone);return this.delegate=r,r})}createRenderer(n,i){let s=this.delegate.createRenderer(n,i);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let a=new ge(s);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(r=>{let h=r.createRenderer(n,i);a.use(h),this.scheduler?.notify(10)}).catch(r=>{a.use(s)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){Re()},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})(),ge=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,n,i){this.delegate.insertBefore(e,o,n,i)}removeChild(e,o,n){this.delegate.removeChild(e,o,n)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,n,i){this.delegate.setAttribute(e,o,n,i)}removeAttribute(e,o,n){this.delegate.removeAttribute(e,o,n)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,n,i){this.delegate.setStyle(e,o,n,i)}removeStyle(e,o,n){this.delegate.removeStyle(e,o,n)}setProperty(e,o,n){this.shouldReplay(o)&&this.replay.push(i=>i.setProperty(e,o,n)),this.delegate.setProperty(e,o,n)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,n){return this.shouldReplay(o)&&this.replay.push(i=>i.listen(e,o,n)),this.delegate.listen(e,o,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(ti)}},ni=new L("");function Dt(t="animations"){return Pe("NgAsyncAnimations"),we([{provide:Ae,useFactory:(e,o,n)=>new ii(e,o,n,t),deps:[I,Ge,R]},{provide:Ce,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var wt=(()=>{let e=class e{constructor(n){this.http=n,this.configUrl=W.configFile}getJSON(){return new Promise(n=>{this.http.get(this.configUrl).subscribe({next:i=>this.config=i,complete:()=>n()})})}getConfig(){return this.config}};e.\u0275fac=function(i){return new(i||e)(k(Ue))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ct=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e,bootstrap:[et]}),e.\u0275inj=l({providers:[Dt(),wt],imports:[Ve,Xe,tt,Qe,Ot,Le]});let t=e;return t})();W.production&&void 0;He().bootstrapModule(Ct).catch(t=>console.error(t));
