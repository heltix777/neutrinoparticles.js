function NeutrinoParticles(){function q(a){return 16>a?"0"+a.toString(16):a.toString(16)}var f=this;this.equalv3_=function(a,b){return a[0]==b[0]&&a[1]==b[1]&&a[2]==b[2]};this.a=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1]};this.b=function(a,b){return[a[0]+b[0],a[1]+b[1]]};this.y=function(a,b,c){a[0]=b[0]+c;a[1]=b[1]+c};this.z=function(a,b){return[a[0]+b,a[1]+b]};this.c=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2]};this.d=function(a,b){return[a[0]+b[0],a[1]+b[1],a[2]+b[2]]};this.C=
function(a,b,c){a[0]=b[0]+c;a[1]=b[1]+c;a[2]=b[2]+c};this.D=function(a,b){return[a[0]+b,a[1]+b,a[2]+b]};this.e=function(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1]};this.f=function(a,b){return[a[0]-b[0],a[1]-b[1]]};this.A=function(a,b,c){a[0]=b[0]-c;a[1]=b[1]-c};this.B=function(a,b){return[a[0]-b,a[1]-b]};this.nf=function(a,b,c){a[0]=b-c[0];a[1]=b-c[1]};this.of=function(a,b){return[a-b[0],a-b[1]]};this.g=function(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2]};this.h=function(a,b){return[a[0]-b[0],
a[1]-b[1],a[2]-b[2]]};this.E=function(a,b,c){a[0]=b[0]-c;a[1]=b[1]-c;a[2]=b[2]-c};this.F=function(a,b){return[a[0]-b,a[1]-b,a[2]-b]};this.rf=function(a,b,c){a[0]=b-c[0];a[1]=b-c[1];a[2]=b-c[2]};this.sf=function(a,b){return[a-b[0],a-b[1],a-b[2]]};this.i=function(a,b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1]};this.j=function(a,b){return[a[0]*b[0],a[1]*b[1]]};this.k=function(a,b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1];a[2]=b[2]*c[2]};this.l=function(a,b){return[a[0]*b[0],a[1]*b[1],a[2]*b[2]]};this.m=function(a,b,c){a[0]=
b[0]/c[0];a[1]=b[1]/c[1]};this.n=function(a,b){return[a[0]/b[0],a[1]/b[1]]};this.o=function(a,b,c){a[0]=b[0]/c[0];a[1]=b[1]/c[1];a[2]=b[2]/c[2]};this.p=function(a,b){return[a[0]/b[0],a[1]/b[1],a[2]/b[2]]};this.H=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};this.q=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c};this.r=function(a,b){return[a[0]*b,a[1]*b]};this.s=function(a,b,c){a[0]=b[0]/c;a[1]=b[1]/c};this.t=function(a,b){return[a[0]/b,a[1]/b]};this.u=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*
c};this.v=function(a,b){return[a[0]*b,a[1]*b,a[2]*b]};this.w=function(a,b,c){a[0]=b[0]/c;a[1]=b[1]/c;a[2]=b[2]/c};this.x=function(a,b){return[a[0]/b,a[1]/b,a[2]/b]};this.y=function(a,b,c){a[0]=b[0]+c;a[1]=b[1]+c};this.z=function(a,b){return[a[0]+b,a[1]+b]};this.A=function(a,b,c){a[0]=b[0]-c;a[1]=b[1]-c};this.B=function(a,b){return[a[0]-b,a[1]-b]};this.G=function(a,b){return a[0]*b[0]+a[1]*b[1]};this.H=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};this.I=function(a,b,c){var d=b[0],e=b[1];b=b[2];
var f=c[0],g=c[1];c=c[2];a[0]=e*c-b*g;a[1]=b*f-d*c;a[2]=d*g-e*f};this.J=function(a,b){var c=a[0],d=a[1],e=a[2],f=b[0],g=b[1],h=b[2];return[d*h-e*g,e*f-c*h,c*g-d*f]};this.K=function(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1])};this.L=function(a){return a[0]*a[0]+a[1]*a[1]};this.M=function(a,b){f.q(a,b,1/f.K(b))};this.N=function(a){return f.r(a,1/f.K(a))};this.O=function(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])};this.P=function(a){return a[0]*a[0]+a[1]*a[1]+a[2]*a[2]};this.Q=function(a,b){f.u(a,
b,1/f.O(b))};this.R=function(a){return f.v(a,1/f.O(a))};this.S=function(a,b){a[0]=b[0];a[1]=b[1]};this.T=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2]};this.U=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3]};this.V=function(a,b,c){a[0]=b;a[1]=c};this.W=function(a,b,c,d){a[0]=b;a[1]=c;a[2]=d};this.X=function(a,b,c){return a+(b-a)*c};this.Y=function(a,b,c,d){a[0]=b[0]+(c[0]-b[0])*d;a[1]=b[1]+(c[1]-b[1])*d};this.Z=function(a,b,c){return[a[0]+(b[0]-a[0])*c,a[1]+(b[1]-a[1])*c]};this.ab=function(a,
b,c,d){a[0]=b[0]+(c[0]-b[0])*d;a[1]=b[1]+(c[1]-b[1])*d;a[2]=b[2]+(c[2]-b[2])*d};this.bb=function(a,b,c){return[a[0]+(b[0]-a[0])*c,a[1]+(b[1]-a[1])*c,a[2]+(b[2]-a[2])*c]};this.cb=function(a,b){var c=Math.random()*Math.PI*2;a[0]=b*Math.cos(c);a[1]=b*Math.sin(c)};this.db=function(a,b){var c=Math.random()*Math.PI*2,d=-1+2*Math.random(),e=b*Math.sqrt(1-d*d);a[0]=e*Math.cos(c);a[1]=e*Math.sin(c);a[2]=b*d};this.eb=function(a,b){f.V(-b[0],-b[1])};this.fb=function(a){return[-a[0],-a[1]]};this.gb=function(a,
b){f.W(-b[0],-b[1],-b[2])};this.hb=function(a){return[-a[0],-a[1],-a[2]]};this.ib=function(a){return a/180*Math.PI};this.jb=function(a){return a/Math.PI*180};this.Ae=function(a){return 0>a?-1:1};this.ob=function(a,b,c,d){var e=2*d[0]*d[0],f=2*d[1]*d[1],g=2*d[2]*d[2],h=2*d[0]*d[1],k=2*d[0]*d[2],l=2*d[1]*d[2],m=2*d[3]*d[2],p=2*d[3]*d[1];d=2*d[3]*d[0];a[0]=1-f-g;a[1]=h+m;a[2]=k-p;b[0]=h-m;b[1]=1-e-g;b[2]=l+d;c[0]=k+p;c[1]=l-d;c[2]=1-e-f};this.pb=function(a,b,c,d){var e=b[0]+c[1]+d[2];0<e?(e=2*Math.sqrt(e+
1),a[3]=.25*e,a[0]=(c[2]-d[1])/e,a[1]=(d[0]-b[2])/e,a[2]=(b[1]-c[0])/e):b[0]>c[1]&b[0]>d[2]?(e=2*Math.sqrt(1+b[0]-c[1]-d[2]),a[3]=(c[2]-d[1])/e,a[0]=.25*e,a[1]=(b[1]+c[0])/e,a[2]=(d[0]+b[2])/e):c[1]>d[2]?(e=2*Math.sqrt(1+c[1]-b[0]-d[2]),a[3]=(d[0]-b[2])/e,a[0]=(b[1]+c[0])/e,a[1]=.25*e,a[2]=(c[2]+d[1])/e):(e=2*Math.sqrt(1+d[2]-b[0]-c[1]),a[3]=(b[1]-c[0])/e,a[0]=(d[0]+b[2])/e,a[1]=(c[2]+d[1])/e,a[2]=.25*e)};this.qb=function(a,b,c){c=.5*f.ib(c);var d=Math.sin(c);a[0]=b[0]*d;a[1]=b[1]*d;a[2]=b[2]*d;a[3]=
Math.cos(c)};this.rb=function(a,b,c){var d=b[0],e=b[1],f=b[2];b=c[0];var g=c[1],h=c[2];c=c[3];var k=c*d+g*f-h*e,l=c*e+h*d-b*f,m=c*f+b*e-g*d,d=-b*d-g*e-h*f;a[0]=k*c+d*-b+l*-h-m*-g;a[1]=l*c+d*-g+m*-b-k*-h;a[2]=m*c+d*-h+k*-g-l*-b};this.sb=function(a,b,c){var d=b[0],e=b[1],f=b[2];b=b[3];var g=c[0],h=c[1],k=c[2];c=c[3];a[0]=d*c+b*g+e*k-f*h;a[1]=e*c+b*h+f*g-d*k;a[2]=f*c+b*k+d*h-e*g;a[3]=b*c-d*g-e*h-f*k};this.tb=function(a,b,c,d,e){var n=f.ib(c);c=Math.cos(n)*d;d*=Math.sin(n);a[0]=b[0]+c*e[0]-d*e[1];a[1]=
b[1]+d*e[0]+c*e[1]};this.ub=function(a,b,c,d,e){var n=f.ib(c);c=Math.cos(n)/d;d=Math.sin(n)/d;a[0]=c*e[0]+d*e[1]-b[0]*c-b[1]*d;a[1]=c*e[1]-d*e[0]+b[0]*d-b[1]*c};this.vb=function(a){return 0>a?Math.floor(f.yd-1+a%f.yd):Math.floor(a%f.yd)};this.ff=function(a){return"#"+q(Math.floor(255*a[0]))+q(Math.floor(255*a[1]))+q(Math.floor(255*a[2]))};this.wb=function(a,b,c,d){b=3*(c*f.yd+b);d=f.zd[d];a[0]=d.getUint8(b);a[1]=d.getUint8(b+1);a[2]=d.getUint8(b+2)};this.xb=function(a,b){if(null==f.zd)f.W(a,128,128,
128);else{var c=b[0]*f.yd,d=b[1]*f.yd,e=b[2]*f.yd,n=Math.floor(c),g=Math.floor(d),h=Math.floor(e),c=c-n,d=d-g,e=e-h,k=f.vb(n),l=f.vb(n+1),m=f.vb(g),p=f.vb(g+1),r=f.vb(h),t=f.vb(h+1),h=[],g=[],n=[],q=[],u=[],v=[],w=[],x=[];f.wb(h,k,m,r);f.wb(g,k,m,t);f.wb(n,k,p,r);f.wb(q,k,p,t);f.wb(u,l,m,r);f.wb(v,l,m,t);f.wb(w,l,p,r);f.wb(x,l,p,t);k=[];l=[];m=[];p=[];f.ab(k,h,g,e);f.ab(l,n,q,e);f.ab(m,u,v,e);f.ab(p,w,x,e);e=[];h=[];f.ab(e,k,l,d);f.ab(h,m,p,d);f.ab(a,e,h,c)}};this.ImageDesc=function(a,b,c,d,e){this.image=
a;this.x=b;this.y=c;this.width=d;this.height=e};this.RenderCall=function(a,b,c){this.startIndex=a;this.numIndices=b;this.renderStyleIndex=c};this.SubRect=function(a,b,c,d){this.x=a;this.y=b;this.width=c;this.height=d};this.GeometryBuffers=function(a,b,c){this.positions=new ArrayBuffer(12*a);this.colors=new ArrayBuffer(4*a);this.texCoords=[];for(var d=0;d<b.length;++d)this.texCoords[d]=new ArrayBuffer(4*a*b[d]),this.texCoords[d].numComponents=b[d];this.maxNumVertices=a;this.numVertices=0;this.indices=
new ArrayBuffer(2*c);this.maxNumIndices=c;this.numIndices=0;this.renderCalls=[]};this.Camera2D=function(){};this.Camera2D.prototype.tb=function(a,b){return!0};this.Camera3D=function(a,b){this.Qd=f.r(a,.5);this.z=-(.5*a[0])/Math.tan(f.ib(.5*b))};this.Camera3D.prototype.transform=function(a,b){if(a[2]<this.z)return!1;var c=-this.z/(a[2]-this.z);f.a(a,f.r(f.f(a,this.Qd),c),this.Qd);f.q(b,b,c);return!0};this.zd=null;this.yd=0;this.initializeNoise=function(a,b,c){a||alert("path should be defined");if(null!=
this.zd)b();else{if(null==a||void 0==a)a=this.defaultPath;var d=new XMLHttpRequest;d.open("GET",a+"neutrinoparticles.noise.bin",!0);d.responseType="arraybuffer";d.ctx=this;d.onreadystatechange=function(){if(4==d.readyState)if(200<=d.status&&300>d.status||304==d.status){var a=d.response,f=d.ctx,g=(new DataView(a,0,4)).getUint32(0,!0);f.zd=[];f.yd=g;for(var h=0;h<g;++h)f.zd[h]=new DataView(a,4+3*g*g*h);b&&b()}else c&&c()};d.send()}};this.cf=document.createElement("canvas");this.cf.width=0;this.cf.height=
0;this.bf=this.cf.getContext("2d");this.af=function(a,b){if(this.cf.width<a||this.cf.height<b)this.cf.width=a,this.cf.height=b,this.bf=this.cf.getContext("2d")};this.effects=[];this.loadEffect=function(a,b,c){if(void 0!=this.effects[a]){var d=this.effects[a];d instanceof Array?d[d.length]=[b,c]:b(d)}else{this.effects[a]=[[b,c]];var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="text";e.ctx=this;e.onreadystatechange=function(){if(4==e.readyState){var b=this.ctx.effects[a];if(200<=e.status&&
300>e.status||304==e.status){var c=eval("(function(ctx) {\n"+e.responseText+"\nreturn new NeutrinoEffect(ctx);\n})(this.ctx);");this.ctx.effects[a]=c;b.forEach(function(a){a[0](c)})}else b.forEach(function(a){a[1]()})}};e.send()}};this.removeEffect=function(a){delete this.effects[a]}};
