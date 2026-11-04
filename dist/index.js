"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var t=n(function(g,v){
var m=require('@stdlib/blas-ext-base-dminheap-sift-down/dist').ndarray,c=require('@stdlib/math-base-special-floor/dist');function h(e,r,i,s){var a;if(e<=0)return r;for(a=c((e-1)/2);a>=0;a--)m(e,a,r[s+a*i],r,i,s);return r}v.exports=h
});var q=n(function(k,o){
var j=require('@stdlib/strided-base-stride2offset/dist'),l=t();function R(e,r,i){return l(e,r,i,j(e,i))}o.exports=R
});var d=n(function(z,y){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=q(),w=t();_(f,"ndarray",w);y.exports=f
});var x=require("path").join,D=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=d(),u,p=D(x(__dirname,"./native.js"));E(p)?u=O:u=p;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
