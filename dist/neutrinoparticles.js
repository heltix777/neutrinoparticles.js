var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(f,d,a){if(a.get||a.set)throw new TypeError("ES3 does not support getters and setters.");f!=Array.prototype&&f!=Object.prototype&&(f[d]=a.value)};$jscomp.getGlobal=function(f){return"undefined"!=typeof window&&window===f?f:"undefined"!=typeof global&&null!=global?global:f};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(f,d,a,b){if(d){a=$jscomp.global;f=f.split(".");for(b=0;b<f.length-1;b++){var c=f[b];c in a||(a[c]={});a=a[c]}f=f[f.length-1];b=a[f];d=d(b);d!=b&&null!=d&&$jscomp.defineProperty(a,f,{configurable:!0,writable:!0,value:d})}};$jscomp.polyfill("Number.EPSILON",function(f){return Math.pow(2,-52)},"es6-impl","es3");
function NeutrinoParticles(){function f(a){return 16>a?"0"+a.toString(16):a.toString(16)}var d=this;this.equalv3_=function(a,b){return a[0]==b[0]&&a[1]==b[1]&&a[2]==b[2]};this.equalq_=function(a,b){return a[0]==b[0]&&a[1]==b[1]&&a[2]==b[2]&&a[3]==b[3]};this.a=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1]};this.b=function(a,b){return[a[0]+b[0],a[1]+b[1]]};this.y=function(a,b,c){a[0]=b[0]+c;a[1]=b[1]+c};this.z=function(a,b){return[a[0]+b,a[1]+b]};this.c=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];
a[2]=b[2]+c[2]};this.d=function(a,b){return[a[0]+b[0],a[1]+b[1],a[2]+b[2]]};this.C=function(a,b,c){a[0]=b[0]+c;a[1]=b[1]+c;a[2]=b[2]+c};this.D=function(a,b){return[a[0]+b,a[1]+b,a[2]+b]};this.addq=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3]};this.addq_=function(a,b){return[a[0]+b[0],a[1]+b[1],a[2]+b[2],a[3]+b[3]]};this.e=function(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1]};this.f=function(a,b){return[a[0]-b[0],a[1]-b[1]]};this.A=function(a,b,c){a[0]=b[0]-c;a[1]=b[1]-c};this.B=
function(a,b){return[a[0]-b,a[1]-b]};this.nf=function(a,b,c){a[0]=b-c[0];a[1]=b-c[1]};this.of=function(a,b){return[a-b[0],a-b[1]]};this.g=function(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2]};this.h=function(a,b){return[a[0]-b[0],a[1]-b[1],a[2]-b[2]]};this.E=function(a,b,c){a[0]=b[0]-c;a[1]=b[1]-c;a[2]=b[2]-c};this.F=function(a,b){return[a[0]-b,a[1]-b,a[2]-b]};this.rf=function(a,b,c){a[0]=b-c[0];a[1]=b-c[1];a[2]=b-c[2]};this.sf=function(a,b){return[a-b[0],a-b[1],a-b[2]]};this.i=function(a,
b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1]};this.j=function(a,b){return[a[0]*b[0],a[1]*b[1]]};this.k=function(a,b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1];a[2]=b[2]*c[2]};this.l=function(a,b){return[a[0]*b[0],a[1]*b[1],a[2]*b[2]]};this.m=function(a,b,c){a[0]=b[0]/c[0];a[1]=b[1]/c[1]};this.n=function(a,b){return[a[0]/b[0],a[1]/b[1]]};this.o=function(a,b,c){a[0]=b[0]/c[0];a[1]=b[1]/c[1];a[2]=b[2]/c[2]};this.p=function(a,b){return[a[0]/b[0],a[1]/b[1],a[2]/b[2]]};this.H=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*
b[2]};this.dotq_=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]};this.q=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c};this.r=function(a,b){return[a[0]*b,a[1]*b]};this.s=function(a,b,c){a[0]=b[0]/c;a[1]=b[1]/c};this.t=function(a,b){return[a[0]/b,a[1]/b]};this.u=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c};this.v=function(a,b){return[a[0]*b,a[1]*b,a[2]*b]};this.w=function(a,b,c){a[0]=b[0]/c;a[1]=b[1]/c;a[2]=b[2]/c};this.x=function(a,b){return[a[0]/b,a[1]/b,a[2]/b]};this.y=function(a,
b,c){a[0]=b[0]+c;a[1]=b[1]+c};this.z=function(a,b){return[a[0]+b,a[1]+b]};this.A=function(a,b,c){a[0]=b[0]-c;a[1]=b[1]-c};this.B=function(a,b){return[a[0]-b,a[1]-b]};this.G=function(a,b){return a[0]*b[0]+a[1]*b[1]};this.H=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};this.I=function(a,b,c){var e=b[0],g=b[1];b=b[2];var d=c[0],k=c[1];c=c[2];a[0]=g*c-b*k;a[1]=b*d-e*c;a[2]=e*k-g*d};this.J=function(a,b){var c=a[0],e=a[1],g=a[2],d=b[0],k=b[1],h=b[2];return[e*h-g*k,g*d-c*h,c*k-e*d]};this.K=function(a){return Math.sqrt(a[0]*
a[0]+a[1]*a[1])};this.L=function(a){return a[0]*a[0]+a[1]*a[1]};this.M=function(a,b){d.q(a,b,1/d.K(b))};this.N=function(a){return d.r(a,1/d.K(a))};this.O=function(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])};this.P=function(a){return a[0]*a[0]+a[1]*a[1]+a[2]*a[2]};this.Q=function(a,b){d.u(a,b,1/d.O(b))};this.R=function(a){return d.v(a,1/d.O(a))};this.S=function(a,b){a[0]=b[0];a[1]=b[1]};this.T=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2]};this.U=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=
b[3]};this.V=function(a,b,c){a[0]=b;a[1]=c};this.W=function(a,b,c,e){a[0]=b;a[1]=c;a[2]=e};this.X=function(a,b,c){return a+(b-a)*c};this.Y=function(a,b,c,e){a[0]=b[0]+(c[0]-b[0])*e;a[1]=b[1]+(c[1]-b[1])*e};this.Z=function(a,b,c){return[a[0]+(b[0]-a[0])*c,a[1]+(b[1]-a[1])*c]};this.ab=function(a,b,c,e){a[0]=b[0]+(c[0]-b[0])*e;a[1]=b[1]+(c[1]-b[1])*e;a[2]=b[2]+(c[2]-b[2])*e};this.bb=function(a,b,c){return[a[0]+(b[0]-a[0])*c,a[1]+(b[1]-a[1])*c,a[2]+(b[2]-a[2])*c]};this.slerpq=function(a,b,c,e){var g=
d.dotq_(b,c),n=[];0>g?(d.negq(n,c),g=-g):d.U(n,c);1-g<Number.EPSILON?(a[0]=d.X(b[0],c[0],e),a[1]=d.X(b[1],c[1],e),a[2]=d.X(b[2],c[2],e),a[3]=d.X(b[3],c[3],e)):(c=d.acos_(g),d.mulqscalar(a,d.addq_(d.mulqscalar_(b,d.sin_((1-e)*c)),d.mulqscalar_(n,d.sin_(e*c))),1/d.sin_(c)))};this.slerpq_=function(a,b,c){var e=[];slerpq(e,a,b,c);return e};this.acos_=function(a){return Math.acos(a)};this.sin_=function(a){return Math.sin(a)};this.cos_=function(a){return Math.cos(a)};this.cb=function(a,b){var c=Math.random()*
Math.PI*2;a[0]=b*d.cos_(c);a[1]=b*d.sin_(c)};this.db=function(a,b){var c=Math.random()*Math.PI*2,e=-1+2*Math.random(),g=b*Math.sqrt(1-e*e);a[0]=g*d.cos_(c);a[1]=g*d.sin_(c);a[2]=b*e};this.eb=function(a,b){d.V(-b[0],-b[1])};this.fb=function(a){return[-a[0],-a[1]]};this.gb=function(a,b){d.W(-b[0],-b[1],-b[2])};this.hb=function(a){return[-a[0],-a[1],-a[2]]};this.negq=function(a,b){a[0]=-b[0];a[1]=-b[1];a[2]=-b[2];a[3]=-b[3]};this.negq_=function(a){return[-a[0],-a[1],-a[2],-a[3]]};this.ib=function(a){return a/
180*Math.PI};this.jb=function(a){return a/Math.PI*180};this.Ae=function(a){return 0>a?-1:1};this.ob=function(a,b,c,e){var g=2*e[0]*e[0],d=2*e[1]*e[1],k=2*e[2]*e[2],h=2*e[0]*e[1],f=2*e[0]*e[2],l=2*e[1]*e[2],m=2*e[3]*e[2],p=2*e[3]*e[1];e=2*e[3]*e[0];a[0]=1-d-k;a[1]=h+m;a[2]=f-p;b[0]=h-m;b[1]=1-g-k;b[2]=l+e;c[0]=f+p;c[1]=l-e;c[2]=1-g-d};this.axes2quat=this.pb=function(a,b,c,e){var d=b[0]+c[1]+e[2];0<d?(d=2*Math.sqrt(d+1),a[3]=.25*d,a[0]=(c[2]-e[1])/d,a[1]=(e[0]-b[2])/d,a[2]=(b[1]-c[0])/d):b[0]>c[1]&
b[0]>e[2]?(d=2*Math.sqrt(1+b[0]-c[1]-e[2]),a[3]=(c[2]-e[1])/d,a[0]=.25*d,a[1]=(b[1]+c[0])/d,a[2]=(e[0]+b[2])/d):c[1]>e[2]?(d=2*Math.sqrt(1+c[1]-b[0]-e[2]),a[3]=(e[0]-b[2])/d,a[0]=(b[1]+c[0])/d,a[1]=.25*d,a[2]=(c[2]+e[1])/d):(d=2*Math.sqrt(1+e[2]-b[0]-c[1]),a[3]=(b[1]-c[0])/d,a[0]=(e[0]+b[2])/d,a[1]=(c[2]+e[1])/d,a[2]=.25*d)};this.axisangle2quat=this.qb=function(a,b,c){c=.5*d.ib(c);var e=Math.sin(c);a[0]=b[0]*e;a[1]=b[1]*e;a[2]=b[2]*e;a[3]=Math.cos(c)};this.axisangle2quat_=this.axisangle2quat_=function(a,
b){var c=.5*d.ib(b),e=Math.sin(c);return[a[0]*e,a[1]*e,a[2]*e,d.cos_(c)]};this.rb=function(a,b,c){var e=b[0],d=b[1],n=b[2];b=c[0];var k=c[1],h=c[2];c=c[3];var f=c*e+k*n-h*d,l=c*d+h*e-b*n,m=c*n+b*d-k*e,e=-b*e-k*d-h*n;a[0]=f*c+e*-b+l*-h-m*-k;a[1]=l*c+e*-k+m*-b-f*-h;a[2]=m*c+e*-h+f*-k-l*-b};this.sb=function(a,b,c){var e=b[0],d=b[1],n=b[2];b=b[3];var k=c[0],h=c[1],f=c[2];c=c[3];a[0]=e*c+b*k+d*f-n*h;a[1]=d*c+b*h+n*k-e*f;a[2]=n*c+b*f+e*h-d*k;a[3]=b*c-e*k-d*h-n*f};this.mulqscalar=function(a,b,c){a[0]=b[0]*
c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c};this.mulqscalar_=function(a,b){return[a[0]*b,a[1]*b,a[2]*b,a[3]*b]};this.tb=function(a,b,c,e,g){var f=d.ib(c);c=Math.cos(f)*e;e*=Math.sin(f);a[0]=b[0]+c*g[0]-e*g[1];a[1]=b[1]+e*g[0]+c*g[1]};this.ub=function(a,b,c,e,g){var f=d.ib(c);c=Math.cos(f)/e;e=Math.sin(f)/e;a[0]=c*g[0]+e*g[1]-b[0]*c-b[1]*e;a[1]=c*g[1]-e*g[0]+b[0]*e-b[1]*c};this.vb=function(a){return 0>a?Math.floor(d.yd-1+a%d.yd):Math.floor(a%d.yd)};this.ff=function(a){return"#"+f(Math.floor(255*a[0]))+
f(Math.floor(255*a[1]))+f(Math.floor(255*a[2]))};this.wb=function(a,b,c,e){b=3*(c*d.yd+b);e=d.zd[e];a[0]=e.getUint8(b);a[1]=e.getUint8(b+1);a[2]=e.getUint8(b+2)};this.xb=function(a,b){if(null==d.zd)d.W(a,128,128,128);else{var c=b[0]*d.yd,e=b[1]*d.yd,g=b[2]*d.yd,f=Math.floor(c),k=Math.floor(e),h=Math.floor(g),c=c-f,e=e-k,g=g-h,q=d.vb(f),l=d.vb(f+1),m=d.vb(k),p=d.vb(k+1),r=d.vb(h),t=d.vb(h+1),h=[],k=[],f=[],u=[],v=[],w=[],x=[],y=[];d.wb(h,q,m,r);d.wb(k,q,m,t);d.wb(f,q,p,r);d.wb(u,q,p,t);d.wb(v,l,m,
r);d.wb(w,l,m,t);d.wb(x,l,p,r);d.wb(y,l,p,t);q=[];l=[];m=[];p=[];d.ab(q,h,k,g);d.ab(l,f,u,g);d.ab(m,v,w,g);d.ab(p,x,y,g);g=[];h=[];d.ab(g,q,l,e);d.ab(h,m,p,e);d.ab(a,g,h,c)}};this.ImageDesc=function(a,b,c,e,d){this.image=a;this.x=b;this.y=c;this.width=e;this.height=d};this.RenderCall=function(a,b,c){this.startIndex=a;this.numIndices=b;this.renderStyleIndex=c};this.SubRect=function(a,b,c,e){this.x=a;this.y=b;this.width=c;this.height=e};this.Camera2D=function(){};this.Camera2D.prototype.tb=function(a,
b){return!0};this.Camera3D=function(a,b){this.Qd=d.r(a,.5);this.z=-(.5*a[0])/Math.tan(d.ib(.5*b))};this.Camera3D.prototype.transform=function(a,b){if(a[2]<this.z)return!1;var c=-this.z/(a[2]-this.z);d.a(a,d.r(d.f(a,this.Qd),c),this.Qd);d.q(b,b,c);return!0};this.zd=null;this.yd=0;this.initializeNoise=function(a,b,c){a||alert("path should be defined");if(null!=this.zd)b();else{if(null==a||void 0==a)a=this.defaultPath;var e=new XMLHttpRequest;e.open("GET",a+"neutrinoparticles.noise.bin",!0);e.responseType=
"arraybuffer";e.ctx=this;e.onreadystatechange=function(){if(4==e.readyState)if(200<=e.status&&300>e.status||304==e.status){var a=e.response,d=e.ctx,f=(new DataView(a,0,4)).getUint32(0,!0);d.zd=[];d.yd=f;for(var h=0;h<f;++h)d.zd[h]=new DataView(a,4+3*f*f*h);b&&b()}else c&&c()};e.send()}};this.cf=document.createElement("canvas");this.cf.width=0;this.cf.height=0;this.bf=this.cf.getContext("2d");this.af=function(a,b){if(this.cf.width<a||this.cf.height<b)this.cf.width=a,this.cf.height=b,this.bf=this.cf.getContext("2d")};
this.effects=[];this.loadEffect=function(a,b,c){if(void 0!=this.effects[a]){var e=this.effects[a];e instanceof Array?e[e.length]=[b,c]:b(e)}else{this.effects[a]=[[b,c]];var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="text";d.ctx=this;d.onreadystatechange=function(){if(4==d.readyState){var b=this.ctx.effects[a];if(200<=d.status&&300>d.status||304==d.status){var c=eval("(function(ctx) {\n"+d.responseText+"\nreturn new NeutrinoEffect(ctx);\n})(this.ctx);");this.ctx.effects[a]=c;b.forEach(function(a){a[0](c)})}else b.forEach(function(a){a[1]()})}};
d.send()}};this.removeEffect=function(a){delete this.effects[a]}};
