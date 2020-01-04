var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190703_syb_scopedata*/window.__wcc_version__='v0.5vv_20190703_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'movie-score-wapper'])
Z([3,'__i0__'])
Z([3,'yellow'])
Z([[7],[3,'yellowScore']])
Z([3,'star-ico'])
Z([3,'../static/icos/star-yellow.png'])
Z([3,'__i1__'])
Z([3,'gray'])
Z([[7],[3,'grayScore']])
Z(z[4])
Z([3,'../static/icos/star-gray.png'])
Z([[2,'=='],[[7],[3,'showNum']],[1,1]])
Z([3,'movice-score'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'innerScore']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'black'])
Z([3,'__e'])
Z([3,'cover'])
Z([[4],[[5],[[4],[[5],[[5],[1,'longpress']],[[4],[[5],[[4],[[5],[[5],[1,'operator']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'widthFix'])
Z([[7],[3,'cover']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'page-body uni-content-info'])
Z([3,'cropper-content'])
Z([[7],[3,'isShowImg']])
Z([3,'uni-corpper myDistance'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'cropperInitW']]],[1,'px;height:']],[[7],[3,'cropperInitH']]],[1,'px;background:#000']])
Z([3,'uni-corpper-content'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'cropperW']]],[1,'px;height:']],[[7],[3,'cropperH']]],[1,'px;left:']],[[7],[3,'cropperL']]],[1,'px;top:']],[[7],[3,'cropperT']]],[1,'px']])
Z([3,'myImage'])
Z([[7],[3,'imageSrc']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'cropperW']]],[1,'px;height:']],[[7],[3,'cropperH']]],[1,'px']])
Z([3,'__e'])
Z(z[11])
Z(z[11])
Z([3,'uni-corpper-crop-box'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'contentStartMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'contentMoveing']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'contentTouchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'left:'],[[7],[3,'cutL']]],[1,'px;top:']],[[7],[3,'cutT']]],[1,'px;right:']],[[7],[3,'cutR']]],[1,'px;bottom:']],[[7],[3,'cutB']]],[1,'px']])
Z([3,'uni-cropper-view-box'])
Z([3,'uni-cropper-dashed-h'])
Z([3,'uni-cropper-dashed-v'])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-line-t'])
Z([3,'top'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'dragStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'dragMove']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-line-r'])
Z([3,'right'])
Z(z[24])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-line-b'])
Z([3,'bottom'])
Z(z[24])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-line-l'])
Z([3,'left'])
Z(z[24])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-t'])
Z(z[23])
Z(z[24])
Z([3,'uni-cropper-point point-tr'])
Z([3,'topTight'])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-r'])
Z(z[28])
Z(z[24])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-rb'])
Z([3,'rightBottom'])
Z(z[24])
Z(z[11])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-b'])
Z(z[33])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'dragStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'dragMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'dragEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'uni-cropper-point point-bl'])
Z([3,'bottomLeft'])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-l'])
Z(z[38])
Z(z[24])
Z([3,'uni-cropper-point point-lt'])
Z([3,'leftTop'])
Z([3,'footer-opertor'])
Z(z[11])
Z([3,'opertor-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getImage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'重新选择'])
Z(z[11])
Z(z[74])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getImageInfo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'确认上传'])
Z([3,'myCanvas'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'position:absolute;border: 1px solid red; width:'],[[7],[3,'imageW']]],[1,'px;height:']],[[7],[3,'imageH']]],[1,'px;top:-9999px;left:-9999px;']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([1,true])
Z(z[1])
Z([3,'3000'])
Z([3,'__i0__'])
Z([3,'carouse'])
Z([[7],[3,'carouselList']])
Z([3,'navigate'])
Z([[2,'+'],[1,'../movie/movie?trailerId\x3d'],[[6],[[7],[3,'carouse']],[3,'id']]])
Z([3,'caroul'])
Z([[6],[[7],[3,'carouse']],[3,'img']])
Z([3,'page-block movice-hot'])
Z([3,'hot-title-wapper'])
Z([3,'hot-ico'])
Z([3,'../../static/hot.png'])
Z([3,'hot-title'])
Z([3,'热门电影'])
Z([3,'page-block scroll-hot'])
Z([3,'true'])
Z([3,'__i1__'])
Z([3,'hotMovie'])
Z([[7],[3,'hotMovieList']])
Z([3,'single-poster'])
Z([3,'poster-wapper'])
Z(z[7])
Z([[2,'+'],[1,'../movie/movie?trailerId\x3d'],[[6],[[7],[3,'hotMovie']],[3,'id']]])
Z([3,'poster'])
Z([[6],[[7],[3,'hotMovie']],[3,'cover']])
Z([3,'movice-name'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'hotMovie']],[3,'title']]],[1,'']]])
Z([3,'__l'])
Z([[6],[[7],[3,'hotMovie']],[3,'score']])
Z([3,'1'])
Z([[2,'+'],[1,'1-'],[[7],[3,'__i1__']]])
Z(z[11])
Z(z[12])
Z(z[13])
Z([3,'../../static/jijiang.png'])
Z(z[15])
Z([3,'电影预告'])
Z([3,'hot-movies page-block'])
Z([3,'__i2__'])
Z([3,'Trailer'])
Z([[7],[3,'hotTrailerList']])
Z([3,'__e'])
Z([3,'hot-movie-single'])
Z([[4],[[5],[[4],[[5],[[5],[1,'play']],[[4],[[5],[[4],[[5],[[5],[1,'meIsPlaying']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'Trailer']],[3,'id']])
Z(z[47])
Z([[6],[[7],[3,'Trailer']],[3,'poster']])
Z([[6],[[7],[3,'Trailer']],[3,'trailer']])
Z(z[11])
Z(z[12])
Z(z[13])
Z([3,'../../static/guess-u-like.png'])
Z(z[15])
Z([3,'猜你喜欢'])
Z([3,'page-block guess-u-like'])
Z([3,'gIndex'])
Z([3,'guess'])
Z([[7],[3,'guessULikeList']])
Z([3,'single-like-movie'])
Z(z[7])
Z([[2,'+'],[1,'../movie/movie?trailerId\x3d'],[[6],[[7],[3,'guess']],[3,'id']]])
Z([3,'like-movie'])
Z([[6],[[7],[3,'guess']],[3,'image_url']])
Z([3,'movie-desc'])
Z([3,'movie-title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guess']],[3,'title']]],[1,'']]])
Z(z[30])
Z([3,'9.1'])
Z([3,'0'])
Z([[2,'+'],[1,'2-'],[[7],[3,'gIndex']]])
Z([3,'movie-info'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guess']],[3,'type']]],[1,'']]])
Z(z[73])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guess']],[3,'date']]],[1,'']]])
Z(z[44])
Z([3,'movie-oper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'praiseMe']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'gIndex']])
Z([3,'praise-ico'])
Z([3,'../../static/praise.png'])
Z([3,'praise-me'])
Z([3,'点赞'])
Z([[6],[[7],[3,'animationDataArr']],[[7],[3,'gIndex']]])
Z([3,'praise-me animation-opacity'])
Z([3,'+1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'header'])
Z([[7],[3,'userIsLogin']])
Z([3,'face'])
Z([[6],[[6],[[7],[3,'userInfo']],[1,0]],[3,'faceImage']])
Z(z[3])
Z([3,'http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png'])
Z(z[2])
Z([3,'info-wapper'])
Z([3,'nickname'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[7],[3,'userInfo']],[1,0]],[3,'name']]],[1,'']]])
Z([3,'nav-info'])
Z([a,[[2,'+'],[1,'ID：'],[[6],[[6],[[7],[3,'userInfo']],[1,0]],[3,'id']]]])
Z([3,'../registLogin/registLogin'])
Z([3,'nickname regist-login'])
Z([3,'注册/登录'])
Z(z[2])
Z([3,'set-wapper'])
Z([3,'../meInfo/meInfo'])
Z([3,'settings'])
Z([3,'../../static/icos/settings.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmitBirthday']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'page-block'])
Z([3,'margin-top:20rpx;'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'dateChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'date'])
Z([3,'birthday'])
Z([a,[[7],[3,'birthday']]])
Z([3,'submitBtn'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'pending-wapper'])
Z([3,'pending-face'])
Z([3,'face'])
Z([3,'scaleToFill'])
Z([[7],[3,'tempFace']])
Z([3,'notice'])
Z([3,'notice-words'])
Z([3,'* 请从相册中选择等比宽高的图片噢~'])
Z([3,'footer-opertor'])
Z([3,'__e'])
Z([3,'opertor-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changePendingFace']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'重新选择'])
Z(z[10])
Z(z[11])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'upload']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'确认上传'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'__i0__'])
Z([3,'user'])
Z([[7],[3,'globalUser']])
Z([3,'page-block info-list'])
Z([3,'__e'])
Z([3,'item-wapper face-line-upbottom'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'operator']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'info-words'])
Z([3,'头像'])
Z([3,'right-wapper'])
Z([3,'face'])
Z([[6],[[7],[3,'user']],[3,'faceImage']])
Z([3,'arrow-block'])
Z([3,'arrow-ico'])
Z([3,'../../static/icos/left-gray-arrow.png'])
Z([3,'line-top'])
Z([3,'line'])
Z([3,'__i1__'])
Z(z[2])
Z(z[3])
Z(z[5])
Z([3,'item-wapper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'modifyNickname']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[8])
Z([3,'昵称'])
Z(z[10])
Z([3,'gray-fields'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'user']],[3,'name']]],[1,'']]])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z([3,'__i2__'])
Z(z[2])
Z(z[3])
Z(z[5])
Z(z[22])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'modifyBirthday']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[8])
Z([3,'生日'])
Z(z[10])
Z(z[27])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'user']],[3,'birthday']]],[1,'']]])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z([3,'__i3__'])
Z(z[2])
Z(z[3])
Z(z[5])
Z(z[22])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'modifySex']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[8])
Z([3,'性别'])
Z(z[10])
Z(z[27])
Z([[2,'=='],[[6],[[7],[3,'user']],[3,'sex']],[1,1]])
Z([3,'男'])
Z([[2,'=='],[[6],[[7],[3,'user']],[3,'sex']],[1,0]])
Z([3,'女'])
Z([3,'未选择'])
Z(z[13])
Z(z[14])
Z(z[15])
Z([3,'footer-wapper'])
Z(z[5])
Z([3,'footer-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'cleanStorage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'清理缓存'])
Z(z[5])
Z(z[70])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'logout']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'margin-top:10rpx;'])
Z([3,'退出登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmitNickname']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'page-block'])
Z([3,'margin-top:20rpx;'])
Z([3,'input'])
Z([3,'10'])
Z([3,'nickname'])
Z([3,'请输入昵称'])
Z([3,'graywords'])
Z([3,'text'])
Z([[6],[[7],[3,'globalUser']],[3,'nickname']])
Z([3,'submitBtn'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'player'])
Z([3,'__i0__'])
Z([3,'trailer'])
Z([[7],[3,'trailerInfo']])
Z([3,'movie'])
Z([3,'myTrailer'])
Z([[6],[[7],[3,'trailer']],[3,'poster']])
Z([[6],[[7],[3,'trailer']],[3,'video_url']])
Z([3,'__i1__'])
Z(z[3])
Z(z[4])
Z([3,'movie-info'])
Z([[2,'+'],[1,'../cover/cover?cover\x3d'],[[6],[[7],[3,'trailer']],[3,'cover']]])
Z([3,'cover'])
Z([[6],[[7],[3,'trailer']],[3,'image_url']])
Z([3,'movie-desc'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'trailer']],[3,'title']]])
Z([3,'basic-info'])
Z([a,[[6],[[7],[3,'trailer']],[3,'actor']]])
Z(z[19])
Z([a,[[6],[[7],[3,'trailer']],[3,'type']]])
Z(z[19])
Z([a,[[6],[[7],[3,'trailer']],[3,'time']]])
Z(z[19])
Z([a,[[6],[[7],[3,'trailer']],[3,'date']]])
Z([3,'score-block'])
Z([3,'big-score'])
Z([3,'score-words'])
Z([3,'综合评分：'])
Z([3,'movie-score'])
Z([a,[[6],[[7],[3,'trailer']],[3,'scoe']]])
Z([3,'score-stars'])
Z([[2,'>='],[[6],[[7],[3,'trailer']],[3,'scoe']],[1,0]])
Z([3,'__l'])
Z([[6],[[7],[3,'trailer']],[3,'scoe']])
Z([3,'0'])
Z([[2,'+'],[1,'1-'],[[7],[3,'__i1__']]])
Z([3,'prise-counts'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'trailer']],[3,'number']]],[1,'  人评论']]])
Z([3,'line-wapper'])
Z([3,'line'])
Z([3,'__i2__'])
Z(z[3])
Z(z[4])
Z([3,'plots-block'])
Z([3,'plots-title'])
Z([3,'剧情介绍'])
Z([3,'plots-desc'])
Z([a,[[6],[[7],[3,'trailer']],[3,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'face-wapper'])
Z([3,'face'])
Z([3,'../../static/icos/default-face.png'])
Z([3,'info-wapper'])
Z([3,'words-lbl'])
Z([3,'账号'])
Z([3,'input'])
Z([3,'username'])
Z([3,'请输入用户名'])
Z([3,'graywords'])
Z([3,'text'])
Z([3,''])
Z(z[6])
Z([3,'margin-top:40rpx;'])
Z(z[7])
Z([3,'密码'])
Z(z[9])
Z([3,'password'])
Z([3,'true'])
Z([3,'请输入密码'])
Z(z[12])
Z(z[13])
Z(z[14])
Z([3,'submit'])
Z([3,'margin-top:60rpx;width:90%;'])
Z([3,'primary'])
Z([3,'注册/登录'])
Z([3,'third-wapper'])
Z([3,'third-line'])
Z([3,'single-line'])
Z([3,'line'])
Z([3,'third-words'])
Z([3,'第三方账号登录'])
Z(z[32])
Z(z[33])
Z([3,'third-icos-wapper'])
Z(z[1])
Z([3,'third-ico'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'appOAuthLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'weixin'])
Z([3,'../../static/icos/weixin.png'])
Z(z[1])
Z(z[40])
Z(z[41])
Z([3,'qq'])
Z([3,'../../static/icos/QQ.png'])
Z([3,'margin-left:80rpx;'])
Z(z[1])
Z(z[40])
Z(z[41])
Z([3,'sinaweibo'])
Z([3,'../../static/icos/weibo.png'])
Z(z[49])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmitSex']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'page-block'])
Z([3,'margin-top:20rpx;'])
Z(z[1])
Z([3,'radio-sex'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'sexChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'radio-single'])
Z([[2,'=='],[[7],[3,'sex']],[1,1]])
Z([3,'1'])
Z([3,'男'])
Z(z[8])
Z([[2,'=='],[[7],[3,'sex']],[1,0]])
Z([3,'0'])
Z([3,'女'])
Z([3,'submitBtn'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/moviestar.wxml','./pages/cover/cover.wxml','./pages/faceCrop/faceCrop.wxml','./pages/index/index.wxml','./pages/me/me.wxml','./pages/meBirthday/meBirthday.wxml','./pages/meFace/meFace.wxml','./pages/meInfo/meInfo.wxml','./pages/meNickname/meNickname.wxml','./pages/movie/movie.wxml','./pages/registLogin/registLogin.wxml','./pages/sex/sex.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var oD=_v()
_(oB,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_mz(z,'image',['class',4,'src',1],[],hG,cF,gg)
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,3,fE,e,s,gg,oD,'yellow','__i0__','')
var lK=_v()
_(oB,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_mz(z,'image',['class',9,'src',1],[],eN,tM,gg)
_(bO,xQ)
return bO
}
lK.wxXCkey=2
_2z(z,8,aL,e,s,gg,lK,'gray','__i1__','')
var xC=_v()
_(oB,xC)
if(_oz(z,11,e,s,gg)){xC.wxVkey=1
var oR=_n('view')
_rz(z,oR,'class',12,e,s,gg)
var fS=_oz(z,13,e,s,gg)
_(oR,fS)
_(xC,oR)
}
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var hU=_n('view')
_rz(z,hU,'class',0,e,s,gg)
var oV=_mz(z,'image',['bindlongpress',1,'class',1,'data-event-opts',2,'mode',3,'src',4],[],e,s,gg)
_(hU,oV)
_(r,hU)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oX=_n('view')
_rz(z,oX,'class',0,e,s,gg)
var lY=_n('view')
_rz(z,lY,'class',1,e,s,gg)
var aZ=_n('view')
_rz(z,aZ,'class',2,e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,3,e,s,gg)){t1.wxVkey=1
var e2=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
var b3=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var o4=_mz(z,'image',['class',8,'src',1,'style',2],[],e,s,gg)
_(b3,o4)
var x5=_mz(z,'view',['catchtouchend',11,'catchtouchmove',1,'catchtouchstart',2,'class',3,'data-event-opts',4,'style',5],[],e,s,gg)
var o6=_n('view')
_rz(z,o6,'class',17,e,s,gg)
var f7=_n('view')
_rz(z,f7,'class',18,e,s,gg)
_(o6,f7)
var c8=_n('view')
_rz(z,c8,'class',19,e,s,gg)
_(o6,c8)
var h9=_mz(z,'view',['catchtouchmove',20,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(o6,h9)
var o0=_mz(z,'view',['catchtouchmove',25,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(o6,o0)
var cAB=_mz(z,'view',['catchtouchmove',30,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(o6,cAB)
var oBB=_mz(z,'view',['catchtouchmove',35,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(o6,oBB)
var lCB=_mz(z,'view',['catchtouchmove',40,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(o6,lCB)
var aDB=_mz(z,'view',['class',45,'data-drag',1],[],e,s,gg)
_(o6,aDB)
var tEB=_mz(z,'view',['catchtouchmove',47,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(o6,tEB)
var eFB=_mz(z,'view',['catchtouchmove',52,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(o6,eFB)
var bGB=_mz(z,'view',['catchtouchend',57,'catchtouchmove',1,'catchtouchstart',2,'class',3,'data-drag',4,'data-event-opts',5],[],e,s,gg)
_(o6,bGB)
var oHB=_mz(z,'view',['class',63,'data-drag',1],[],e,s,gg)
_(o6,oHB)
var xIB=_mz(z,'view',['catchtouchmove',65,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(o6,xIB)
var oJB=_mz(z,'view',['class',70,'data-drag',1],[],e,s,gg)
_(o6,oJB)
_(x5,o6)
_(b3,x5)
_(e2,b3)
_(t1,e2)
}
t1.wxXCkey=1
_(lY,aZ)
var fKB=_n('view')
_rz(z,fKB,'class',72,e,s,gg)
var cLB=_mz(z,'view',['bindtap',73,'class',1,'data-event-opts',2],[],e,s,gg)
var hMB=_oz(z,76,e,s,gg)
_(cLB,hMB)
_(fKB,cLB)
var oNB=_mz(z,'view',['bindtap',77,'class',1,'data-event-opts',2],[],e,s,gg)
var cOB=_oz(z,80,e,s,gg)
_(oNB,cOB)
_(fKB,oNB)
_(lY,fKB)
var oPB=_mz(z,'canvas',['canvasId',81,'style',1],[],e,s,gg)
_(lY,oPB)
_(oX,lY)
_(r,oX)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var aRB=_n('view')
_rz(z,aRB,'class',0,e,s,gg)
var tSB=_mz(z,'swiper',['autoplay',1,'indicatorDots',1,'interval',2],[],e,s,gg)
var eTB=_v()
_(tSB,eTB)
var bUB=function(xWB,oVB,oXB,gg){
var cZB=_n('swiper-item')
var h1B=_mz(z,'navigator',['openType',7,'url',1],[],xWB,oVB,gg)
var o2B=_mz(z,'image',['class',9,'src',1],[],xWB,oVB,gg)
_(h1B,o2B)
_(cZB,h1B)
_(oXB,cZB)
return oXB
}
eTB.wxXCkey=2
_2z(z,6,bUB,e,s,gg,eTB,'carouse','__i0__','')
_(aRB,tSB)
var c3B=_n('view')
_rz(z,c3B,'class',11,e,s,gg)
var o4B=_n('view')
_rz(z,o4B,'class',12,e,s,gg)
var l5B=_mz(z,'image',['class',13,'src',1],[],e,s,gg)
_(o4B,l5B)
var a6B=_n('view')
_rz(z,a6B,'class',15,e,s,gg)
var t7B=_oz(z,16,e,s,gg)
_(a6B,t7B)
_(o4B,a6B)
_(c3B,o4B)
_(aRB,c3B)
var e8B=_mz(z,'scroll-view',['class',17,'scrollX',1],[],e,s,gg)
var b9B=_v()
_(e8B,b9B)
var o0B=function(oBC,xAC,fCC,gg){
var hEC=_n('view')
_rz(z,hEC,'class',22,oBC,xAC,gg)
var oFC=_n('view')
_rz(z,oFC,'class',23,oBC,xAC,gg)
var cGC=_mz(z,'navigator',['openType',24,'url',1],[],oBC,xAC,gg)
var oHC=_mz(z,'image',['class',26,'src',1],[],oBC,xAC,gg)
_(cGC,oHC)
_(oFC,cGC)
var lIC=_n('view')
_rz(z,lIC,'class',28,oBC,xAC,gg)
var aJC=_oz(z,29,oBC,xAC,gg)
_(lIC,aJC)
_(oFC,lIC)
var tKC=_mz(z,'moviestar',['bind:__l',30,'innerScore',1,'showNum',2,'vueId',3],[],oBC,xAC,gg)
_(oFC,tKC)
_(hEC,oFC)
_(fCC,hEC)
return fCC
}
b9B.wxXCkey=4
_2z(z,21,o0B,e,s,gg,b9B,'hotMovie','__i1__','')
_(aRB,e8B)
var eLC=_n('view')
_rz(z,eLC,'class',34,e,s,gg)
var bMC=_n('view')
_rz(z,bMC,'class',35,e,s,gg)
var oNC=_mz(z,'image',['class',36,'src',1],[],e,s,gg)
_(bMC,oNC)
var xOC=_n('view')
_rz(z,xOC,'class',38,e,s,gg)
var oPC=_oz(z,39,e,s,gg)
_(xOC,oPC)
_(bMC,xOC)
_(eLC,bMC)
_(aRB,eLC)
var fQC=_n('view')
_rz(z,fQC,'class',40,e,s,gg)
var cRC=_v()
_(fQC,cRC)
var hSC=function(cUC,oTC,oVC,gg){
var aXC=_mz(z,'video',['controls',-1,'bindplay',44,'class',1,'data-event-opts',2,'data-playingindex',3,'id',4,'poster',5,'src',6],[],cUC,oTC,gg)
_(oVC,aXC)
return oVC
}
cRC.wxXCkey=2
_2z(z,43,hSC,e,s,gg,cRC,'Trailer','__i2__','')
_(aRB,fQC)
var tYC=_n('view')
_rz(z,tYC,'class',51,e,s,gg)
var eZC=_n('view')
_rz(z,eZC,'class',52,e,s,gg)
var b1C=_mz(z,'image',['class',53,'src',1],[],e,s,gg)
_(eZC,b1C)
var o2C=_n('view')
_rz(z,o2C,'class',55,e,s,gg)
var x3C=_oz(z,56,e,s,gg)
_(o2C,x3C)
_(eZC,o2C)
_(tYC,eZC)
_(aRB,tYC)
var o4C=_n('view')
_rz(z,o4C,'class',57,e,s,gg)
var f5C=_v()
_(o4C,f5C)
var c6C=function(o8C,h7C,c9C,gg){
var lAD=_n('view')
_rz(z,lAD,'class',61,o8C,h7C,gg)
var aBD=_mz(z,'navigator',['openType',62,'url',1],[],o8C,h7C,gg)
var tCD=_mz(z,'image',['class',64,'src',1],[],o8C,h7C,gg)
_(aBD,tCD)
_(lAD,aBD)
var eDD=_n('view')
_rz(z,eDD,'class',66,o8C,h7C,gg)
var bED=_n('view')
_rz(z,bED,'class',67,o8C,h7C,gg)
var oFD=_oz(z,68,o8C,h7C,gg)
_(bED,oFD)
_(eDD,bED)
var xGD=_mz(z,'moviestar',['bind:__l',69,'innerScore',1,'showNum',2,'vueId',3],[],o8C,h7C,gg)
_(eDD,xGD)
var oHD=_n('view')
_rz(z,oHD,'class',73,o8C,h7C,gg)
var fID=_oz(z,74,o8C,h7C,gg)
_(oHD,fID)
_(eDD,oHD)
var cJD=_n('view')
_rz(z,cJD,'class',75,o8C,h7C,gg)
var hKD=_oz(z,76,o8C,h7C,gg)
_(cJD,hKD)
_(eDD,cJD)
_(lAD,eDD)
var oLD=_mz(z,'view',['bindtap',77,'class',1,'data-event-opts',2,'data-gIndex',3],[],o8C,h7C,gg)
var cMD=_mz(z,'image',['class',81,'src',1],[],o8C,h7C,gg)
_(oLD,cMD)
var oND=_n('view')
_rz(z,oND,'class',83,o8C,h7C,gg)
var lOD=_oz(z,84,o8C,h7C,gg)
_(oND,lOD)
_(oLD,oND)
var aPD=_mz(z,'view',['animation',85,'class',1],[],o8C,h7C,gg)
var tQD=_oz(z,87,o8C,h7C,gg)
_(aPD,tQD)
_(oLD,aPD)
_(lAD,oLD)
_(c9C,lAD)
return c9C
}
f5C.wxXCkey=4
_2z(z,60,c6C,e,s,gg,f5C,'guess','gIndex','')
_(aRB,o4C)
_(r,aRB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var bSD=_n('view')
_rz(z,bSD,'class',0,e,s,gg)
var oTD=_n('view')
_rz(z,oTD,'class',1,e,s,gg)
var xUD=_v()
_(oTD,xUD)
if(_oz(z,2,e,s,gg)){xUD.wxVkey=1
var cXD=_n('view')
var hYD=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(cXD,hYD)
_(xUD,cXD)
}
else{xUD.wxVkey=2
var oZD=_n('view')
var c1D=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(oZD,c1D)
_(xUD,oZD)
}
var oVD=_v()
_(oTD,oVD)
if(_oz(z,7,e,s,gg)){oVD.wxVkey=1
var o2D=_n('view')
_rz(z,o2D,'class',8,e,s,gg)
var l3D=_n('view')
_rz(z,l3D,'class',9,e,s,gg)
var a4D=_oz(z,10,e,s,gg)
_(l3D,a4D)
_(o2D,l3D)
var t5D=_n('view')
_rz(z,t5D,'class',11,e,s,gg)
var e6D=_oz(z,12,e,s,gg)
_(t5D,e6D)
_(o2D,t5D)
_(oVD,o2D)
}
else{oVD.wxVkey=2
var b7D=_n('view')
var o8D=_n('navigator')
_rz(z,o8D,'url',13,e,s,gg)
var x9D=_n('view')
_rz(z,x9D,'class',14,e,s,gg)
var o0D=_oz(z,15,e,s,gg)
_(x9D,o0D)
_(o8D,x9D)
_(b7D,o8D)
_(oVD,b7D)
}
var fWD=_v()
_(oTD,fWD)
if(_oz(z,16,e,s,gg)){fWD.wxVkey=1
var fAE=_n('view')
_rz(z,fAE,'class',17,e,s,gg)
var cBE=_n('navigator')
_rz(z,cBE,'url',18,e,s,gg)
var hCE=_mz(z,'image',['class',19,'src',1],[],e,s,gg)
_(cBE,hCE)
_(fAE,cBE)
_(fWD,fAE)
}
xUD.wxXCkey=1
oVD.wxXCkey=1
fWD.wxXCkey=1
_(bSD,oTD)
_(r,bSD)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var cEE=_n('view')
_rz(z,cEE,'class',0,e,s,gg)
var oFE=_mz(z,'form',['bindsubmit',1,'data-event-opts',1],[],e,s,gg)
var lGE=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var aHE=_mz(z,'picker',['bindchange',5,'data-event-opts',1,'mode',2],[],e,s,gg)
var tIE=_n('view')
_rz(z,tIE,'class',8,e,s,gg)
var eJE=_oz(z,9,e,s,gg)
_(tIE,eJE)
_(aHE,tIE)
_(lGE,aHE)
_(oFE,lGE)
var bKE=_mz(z,'button',['class',10,'formType',1,'type',2],[],e,s,gg)
var oLE=_oz(z,13,e,s,gg)
_(bKE,oLE)
_(oFE,bKE)
_(cEE,oFE)
_(r,cEE)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oNE=_n('view')
_rz(z,oNE,'class',0,e,s,gg)
var fOE=_n('view')
_rz(z,fOE,'class',1,e,s,gg)
var cPE=_mz(z,'image',['class',2,'id',1,'mode',2,'src',3],[],e,s,gg)
_(fOE,cPE)
_(oNE,fOE)
var hQE=_n('view')
_rz(z,hQE,'class',6,e,s,gg)
var oRE=_n('view')
_rz(z,oRE,'class',7,e,s,gg)
var cSE=_oz(z,8,e,s,gg)
_(oRE,cSE)
_(hQE,oRE)
_(oNE,hQE)
var oTE=_n('view')
_rz(z,oTE,'class',9,e,s,gg)
var lUE=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
var aVE=_oz(z,13,e,s,gg)
_(lUE,aVE)
_(oTE,lUE)
var tWE=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2],[],e,s,gg)
var eXE=_oz(z,17,e,s,gg)
_(tWE,eXE)
_(oTE,tWE)
_(oNE,oTE)
_(r,oNE)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oZE=_n('view')
_rz(z,oZE,'class',0,e,s,gg)
var x1E=_v()
_(oZE,x1E)
var o2E=function(c4E,f3E,h5E,gg){
var c7E=_n('view')
_rz(z,c7E,'class',4,c4E,f3E,gg)
var o8E=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],c4E,f3E,gg)
var l9E=_n('view')
_rz(z,l9E,'class',8,c4E,f3E,gg)
var a0E=_oz(z,9,c4E,f3E,gg)
_(l9E,a0E)
_(o8E,l9E)
var tAF=_n('view')
_rz(z,tAF,'class',10,c4E,f3E,gg)
var eBF=_mz(z,'image',['class',11,'src',1],[],c4E,f3E,gg)
_(tAF,eBF)
var bCF=_n('view')
_rz(z,bCF,'class',13,c4E,f3E,gg)
var oDF=_mz(z,'image',['class',14,'src',1],[],c4E,f3E,gg)
_(bCF,oDF)
_(tAF,bCF)
_(o8E,tAF)
_(c7E,o8E)
var xEF=_n('view')
_rz(z,xEF,'class',16,c4E,f3E,gg)
var oFF=_n('view')
_rz(z,oFF,'class',17,c4E,f3E,gg)
_(xEF,oFF)
_(c7E,xEF)
var fGF=_v()
_(c7E,fGF)
var cHF=function(oJF,hIF,cKF,gg){
var lMF=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],oJF,hIF,gg)
var aNF=_n('view')
_rz(z,aNF,'class',24,oJF,hIF,gg)
var tOF=_oz(z,25,oJF,hIF,gg)
_(aNF,tOF)
_(lMF,aNF)
var ePF=_n('view')
_rz(z,ePF,'class',26,oJF,hIF,gg)
var bQF=_n('view')
_rz(z,bQF,'class',27,oJF,hIF,gg)
var oRF=_oz(z,28,oJF,hIF,gg)
_(bQF,oRF)
_(ePF,bQF)
var xSF=_n('view')
_rz(z,xSF,'class',29,oJF,hIF,gg)
var oTF=_mz(z,'image',['class',30,'src',1],[],oJF,hIF,gg)
_(xSF,oTF)
_(ePF,xSF)
_(lMF,ePF)
_(cKF,lMF)
return cKF
}
fGF.wxXCkey=2
_2z(z,20,cHF,c4E,f3E,gg,fGF,'user','__i1__','')
var fUF=_n('view')
_rz(z,fUF,'class',32,c4E,f3E,gg)
var cVF=_n('view')
_rz(z,cVF,'class',33,c4E,f3E,gg)
_(fUF,cVF)
_(c7E,fUF)
var hWF=_v()
_(c7E,hWF)
var oXF=function(oZF,cYF,l1F,gg){
var t3F=_mz(z,'view',['bindtap',37,'class',1,'data-event-opts',2],[],oZF,cYF,gg)
var e4F=_n('view')
_rz(z,e4F,'class',40,oZF,cYF,gg)
var b5F=_oz(z,41,oZF,cYF,gg)
_(e4F,b5F)
_(t3F,e4F)
var o6F=_n('view')
_rz(z,o6F,'class',42,oZF,cYF,gg)
var x7F=_n('view')
_rz(z,x7F,'class',43,oZF,cYF,gg)
var o8F=_oz(z,44,oZF,cYF,gg)
_(x7F,o8F)
_(o6F,x7F)
var f9F=_n('view')
_rz(z,f9F,'class',45,oZF,cYF,gg)
var c0F=_mz(z,'image',['class',46,'src',1],[],oZF,cYF,gg)
_(f9F,c0F)
_(o6F,f9F)
_(t3F,o6F)
_(l1F,t3F)
return l1F
}
hWF.wxXCkey=2
_2z(z,36,oXF,c4E,f3E,gg,hWF,'user','__i2__','')
var hAG=_n('view')
_rz(z,hAG,'class',48,c4E,f3E,gg)
var oBG=_n('view')
_rz(z,oBG,'class',49,c4E,f3E,gg)
_(hAG,oBG)
_(c7E,hAG)
var cCG=_v()
_(c7E,cCG)
var oDG=function(aFG,lEG,tGG,gg){
var bIG=_mz(z,'view',['bindtap',53,'class',1,'data-event-opts',2],[],aFG,lEG,gg)
var oJG=_n('view')
_rz(z,oJG,'class',56,aFG,lEG,gg)
var xKG=_oz(z,57,aFG,lEG,gg)
_(oJG,xKG)
_(bIG,oJG)
var oLG=_n('view')
_rz(z,oLG,'class',58,aFG,lEG,gg)
var fMG=_n('view')
_rz(z,fMG,'class',59,aFG,lEG,gg)
var cNG=_v()
_(fMG,cNG)
if(_oz(z,60,aFG,lEG,gg)){cNG.wxVkey=1
var hOG=_n('view')
var oPG=_oz(z,61,aFG,lEG,gg)
_(hOG,oPG)
_(cNG,hOG)
}
else{cNG.wxVkey=2
var cQG=_v()
_(cNG,cQG)
if(_oz(z,62,aFG,lEG,gg)){cQG.wxVkey=1
var oRG=_n('view')
var lSG=_oz(z,63,aFG,lEG,gg)
_(oRG,lSG)
_(cQG,oRG)
}
else{cQG.wxVkey=2
var aTG=_n('view')
var tUG=_oz(z,64,aFG,lEG,gg)
_(aTG,tUG)
_(cQG,aTG)
}
cQG.wxXCkey=1
}
cNG.wxXCkey=1
_(oLG,fMG)
var eVG=_n('view')
_rz(z,eVG,'class',65,aFG,lEG,gg)
var bWG=_mz(z,'image',['class',66,'src',1],[],aFG,lEG,gg)
_(eVG,bWG)
_(oLG,eVG)
_(bIG,oLG)
_(tGG,bIG)
return tGG
}
cCG.wxXCkey=2
_2z(z,52,oDG,c4E,f3E,gg,cCG,'user','__i3__','')
_(h5E,c7E)
return h5E
}
x1E.wxXCkey=2
_2z(z,3,o2E,e,s,gg,x1E,'user','__i0__','')
var oXG=_n('view')
_rz(z,oXG,'class',68,e,s,gg)
var xYG=_mz(z,'view',['bindtap',69,'class',1,'data-event-opts',2],[],e,s,gg)
var oZG=_oz(z,72,e,s,gg)
_(xYG,oZG)
_(oXG,xYG)
var f1G=_mz(z,'view',['bindtap',73,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var c2G=_oz(z,77,e,s,gg)
_(f1G,c2G)
_(oXG,f1G)
_(oZE,oXG)
_(r,oZE)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var o4G=_n('view')
_rz(z,o4G,'class',0,e,s,gg)
var c5G=_mz(z,'form',['bindsubmit',1,'data-event-opts',1],[],e,s,gg)
var o6G=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var l7G=_mz(z,'input',['class',5,'maxlength',1,'name',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
_(o6G,l7G)
_(c5G,o6G)
var a8G=_mz(z,'button',['class',12,'formType',1,'type',2],[],e,s,gg)
var t9G=_oz(z,15,e,s,gg)
_(a8G,t9G)
_(c5G,a8G)
_(o4G,c5G)
_(r,o4G)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var bAH=_n('view')
_rz(z,bAH,'class',0,e,s,gg)
var oBH=_n('view')
_rz(z,oBH,'class',1,e,s,gg)
var xCH=_v()
_(oBH,xCH)
var oDH=function(cFH,fEH,hGH,gg){
var cIH=_mz(z,'video',['controls',-1,'class',5,'id',1,'poster',2,'src',3],[],cFH,fEH,gg)
_(hGH,cIH)
return hGH
}
xCH.wxXCkey=2
_2z(z,4,oDH,e,s,gg,xCH,'trailer','__i0__','')
_(bAH,oBH)
var oJH=_v()
_(bAH,oJH)
var lKH=function(tMH,aLH,eNH,gg){
var oPH=_n('view')
_rz(z,oPH,'class',12,tMH,aLH,gg)
var xQH=_n('navigator')
_rz(z,xQH,'url',13,tMH,aLH,gg)
var oRH=_mz(z,'image',['class',14,'src',1],[],tMH,aLH,gg)
_(xQH,oRH)
_(oPH,xQH)
var fSH=_n('view')
_rz(z,fSH,'class',16,tMH,aLH,gg)
var cTH=_n('view')
_rz(z,cTH,'class',17,tMH,aLH,gg)
var hUH=_oz(z,18,tMH,aLH,gg)
_(cTH,hUH)
_(fSH,cTH)
var oVH=_n('view')
_rz(z,oVH,'class',19,tMH,aLH,gg)
var cWH=_oz(z,20,tMH,aLH,gg)
_(oVH,cWH)
_(fSH,oVH)
var oXH=_n('view')
_rz(z,oXH,'class',21,tMH,aLH,gg)
var lYH=_oz(z,22,tMH,aLH,gg)
_(oXH,lYH)
_(fSH,oXH)
var aZH=_n('view')
_rz(z,aZH,'class',23,tMH,aLH,gg)
var t1H=_oz(z,24,tMH,aLH,gg)
_(aZH,t1H)
_(fSH,aZH)
var e2H=_n('view')
_rz(z,e2H,'class',25,tMH,aLH,gg)
var b3H=_oz(z,26,tMH,aLH,gg)
_(e2H,b3H)
_(fSH,e2H)
var o4H=_n('view')
_rz(z,o4H,'class',27,tMH,aLH,gg)
var x5H=_n('view')
_rz(z,x5H,'class',28,tMH,aLH,gg)
var o6H=_n('view')
_rz(z,o6H,'class',29,tMH,aLH,gg)
var f7H=_oz(z,30,tMH,aLH,gg)
_(o6H,f7H)
_(x5H,o6H)
var c8H=_n('view')
_rz(z,c8H,'class',31,tMH,aLH,gg)
var h9H=_oz(z,32,tMH,aLH,gg)
_(c8H,h9H)
_(x5H,c8H)
_(o4H,x5H)
var o0H=_n('view')
_rz(z,o0H,'class',33,tMH,aLH,gg)
var cAI=_v()
_(o0H,cAI)
if(_oz(z,34,tMH,aLH,gg)){cAI.wxVkey=1
var oBI=_mz(z,'moviestar',['bind:__l',35,'innerScore',1,'showNum',2,'vueId',3],[],tMH,aLH,gg)
_(cAI,oBI)
}
var lCI=_n('view')
_rz(z,lCI,'class',39,tMH,aLH,gg)
var aDI=_oz(z,40,tMH,aLH,gg)
_(lCI,aDI)
_(o0H,lCI)
cAI.wxXCkey=1
cAI.wxXCkey=3
_(o4H,o0H)
_(fSH,o4H)
_(oPH,fSH)
_(eNH,oPH)
return eNH
}
oJH.wxXCkey=4
_2z(z,11,lKH,e,s,gg,oJH,'trailer','__i1__','')
var tEI=_n('view')
_rz(z,tEI,'class',41,e,s,gg)
var eFI=_n('view')
_rz(z,eFI,'class',42,e,s,gg)
_(tEI,eFI)
_(bAH,tEI)
var bGI=_v()
_(bAH,bGI)
var oHI=function(oJI,xII,fKI,gg){
var hMI=_n('view')
_rz(z,hMI,'class',46,oJI,xII,gg)
var oNI=_n('view')
_rz(z,oNI,'class',47,oJI,xII,gg)
var cOI=_oz(z,48,oJI,xII,gg)
_(oNI,cOI)
_(hMI,oNI)
var oPI=_n('view')
_rz(z,oPI,'class',49,oJI,xII,gg)
var lQI=_oz(z,50,oJI,xII,gg)
_(oPI,lQI)
_(hMI,oPI)
_(fKI,hMI)
return fKI
}
bGI.wxXCkey=2
_2z(z,45,oHI,e,s,gg,bGI,'trailer','__i2__','')
_(r,bAH)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var tSI=_n('view')
_rz(z,tSI,'class',0,e,s,gg)
var eTI=_mz(z,'form',['bindsubmit',1,'data-event-opts',1],[],e,s,gg)
var bUI=_n('view')
_rz(z,bUI,'class',3,e,s,gg)
var oVI=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
_(bUI,oVI)
_(eTI,bUI)
var xWI=_n('view')
_rz(z,xWI,'class',6,e,s,gg)
var oXI=_n('label')
_rz(z,oXI,'class',7,e,s,gg)
var fYI=_oz(z,8,e,s,gg)
_(oXI,fYI)
_(xWI,oXI)
var cZI=_mz(z,'input',['class',9,'name',1,'placeholder',2,'placeholderClass',3,'type',4,'value',5],[],e,s,gg)
_(xWI,cZI)
_(eTI,xWI)
var h1I=_mz(z,'view',['class',15,'style',1],[],e,s,gg)
var o2I=_n('label')
_rz(z,o2I,'class',17,e,s,gg)
var c3I=_oz(z,18,e,s,gg)
_(o2I,c3I)
_(h1I,o2I)
var o4I=_mz(z,'input',['class',19,'name',1,'password',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
_(h1I,o4I)
_(eTI,h1I)
var l5I=_mz(z,'button',['formType',26,'style',1,'type',2],[],e,s,gg)
var a6I=_oz(z,29,e,s,gg)
_(l5I,a6I)
_(eTI,l5I)
_(tSI,eTI)
var t7I=_n('view')
_rz(z,t7I,'class',30,e,s,gg)
var e8I=_n('view')
_rz(z,e8I,'class',31,e,s,gg)
var b9I=_n('view')
_rz(z,b9I,'class',32,e,s,gg)
var o0I=_n('view')
_rz(z,o0I,'class',33,e,s,gg)
_(b9I,o0I)
_(e8I,b9I)
var xAJ=_n('view')
_rz(z,xAJ,'class',34,e,s,gg)
var oBJ=_oz(z,35,e,s,gg)
_(xAJ,oBJ)
_(e8I,xAJ)
var fCJ=_n('view')
_rz(z,fCJ,'class',36,e,s,gg)
var cDJ=_n('view')
_rz(z,cDJ,'class',37,e,s,gg)
_(fCJ,cDJ)
_(e8I,fCJ)
_(t7I,e8I)
var hEJ=_n('view')
_rz(z,hEJ,'class',38,e,s,gg)
var oFJ=_mz(z,'image',['bindtap',39,'class',1,'data-event-opts',2,'data-logintype',3,'src',4],[],e,s,gg)
_(hEJ,oFJ)
var cGJ=_mz(z,'image',['bindtap',44,'class',1,'data-event-opts',2,'data-logintype',3,'src',4,'style',5],[],e,s,gg)
_(hEJ,cGJ)
var oHJ=_mz(z,'image',['bindtap',50,'class',1,'data-event-opts',2,'data-logintype',3,'src',4,'style',5],[],e,s,gg)
_(hEJ,oHJ)
_(t7I,hEJ)
_(tSI,t7I)
_(r,tSI)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var aJJ=_n('view')
_rz(z,aJJ,'class',0,e,s,gg)
var tKJ=_mz(z,'form',['bindsubmit',1,'data-event-opts',1],[],e,s,gg)
var eLJ=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var bMJ=_mz(z,'radio-group',['bindchange',5,'class',1,'data-event-opts',2],[],e,s,gg)
var oNJ=_n('label')
_rz(z,oNJ,'class',8,e,s,gg)
var xOJ=_mz(z,'radio',['checked',9,'value',1],[],e,s,gg)
_(oNJ,xOJ)
var oPJ=_oz(z,11,e,s,gg)
_(oNJ,oPJ)
_(bMJ,oNJ)
var fQJ=_n('label')
_rz(z,fQJ,'class',12,e,s,gg)
var cRJ=_mz(z,'radio',['checked',13,'value',1],[],e,s,gg)
_(fQJ,cRJ)
var hSJ=_oz(z,15,e,s,gg)
_(fQJ,hSJ)
_(bMJ,fQJ)
_(eLJ,bMJ)
_(tKJ,eLJ)
var oTJ=_mz(z,'button',['class',16,'formType',1,'type',2],[],e,s,gg)
var cUJ=_oz(z,19,e,s,gg)
_(oTJ,cUJ)
_(tKJ,oTJ)
_(aJJ,tKJ)
_(r,aJJ)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[".",[1],"page{ width: 100%; height: 100%; background-color: #f7f7f7; }\n.",[1],"page-block{ background-color: #ffffff; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/moviestar.wxss']=setCssToHead([".",[1],"movie-score-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"star-ico { width: ",[0,20],"; height: ",[0,20],"; margin-top: ",[0,6],"; }\n.",[1],"movie-score { font-size: 12px; color: grey; margin-left: ",[0,8],"; }\n",],undefined,{path:"./components/moviestar.wxss"});    
__wxAppCode__['components/moviestar.wxml']=$gwx('./components/moviestar.wxml');

__wxAppCode__['pages/cover/cover.wxss']=setCssToHead([".",[1],"black { background-color: #000000; width: 100%; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; position: fixed; }\n.",[1],"cover { -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n",],undefined,{path:"./pages/cover/cover.wxss"});    
__wxAppCode__['pages/cover/cover.wxml']=$gwx('./pages/cover/cover.wxml');

__wxAppCode__['pages/faceCrop/faceCrop.wxss']=setCssToHead([".",[1],"uni-content-info { }\n.",[1],"cropper-config { padding: ",[0,20]," ",[0,40],"; }\n.",[1],"cropper-content { min-height: ",[0,750],"; width: 100%; }\n.",[1],"uni-corpper { position: relative; overflow: hidden; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent; -webkit-touch-callout: none; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"uni-corpper-content { position: relative; }\n.",[1],"uni-corpper-content wx-image { display: block; width: 100%; min-width: 0 !important; max-width: none !important; height: 100%; min-height: 0 !important; max-height: none !important; image-orientation: 0deg !important; margin: 0 auto; }\n.",[1],"uni-cropper-drag-box { position: absolute; top: 0; right: 0; bottom: 0; left: 0; cursor: move; background: rgba(0, 0, 0, 0.6); z-index: 1; }\n.",[1],"uni-corpper-crop-box { position: absolute; background: rgba(255, 255, 255, 0.3); z-index: 2; }\n.",[1],"uni-corpper-crop-box .",[1],"uni-cropper-view-box { position: relative; display: block; width: 100%; height: 100%; overflow: visible; outline: ",[0,1]," solid #69f; outline-color: rgba(102, 153, 255, .75) }\n.",[1],"uni-cropper-dashed-h { position: absolute; top: 33.33333333%; left: 0; width: 100%; height: 33.33333333%; border-top: ",[0,1]," dashed rgba(255, 255, 255, 0.5); border-bottom: ",[0,1]," dashed rgba(255, 255, 255, 0.5); }\n.",[1],"uni-cropper-dashed-v { position: absolute; left: 33.33333333%; top: 0; width: 33.33333333%; height: 100%; border-left: ",[0,1]," dashed rgba(255, 255, 255, 0.5); border-right: ",[0,1]," dashed rgba(255, 255, 255, 0.5); }\n.",[1],"uni-cropper-line-t { position: absolute; display: block; width: 100%; background-color: #69f; top: 0; left: 0; height: ",[0,1],"; opacity: 0.1; cursor: n-resize; }\n.",[1],"uni-cropper-line-t::before { content: \x27\x27; position: absolute; top: 50%; right: ",[0,0],"; width: 100%; -webkit-transform: translate3d(0, -50%, 0); transform: translate3d(0, -50%, 0); bottom: 0; height: ",[0,41],"; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-line-r { position: absolute; display: block; background-color: #69f; top: 0; right: ",[0,0],"; width: ",[0,1],"; opacity: 0.1; height: 100%; cursor: e-resize; }\n.",[1],"uni-cropper-line-r::before { content: \x27\x27; position: absolute; top: 0; left: 50%; width: ",[0,41],"; -webkit-transform: translate3d(-50%, 0, 0); transform: translate3d(-50%, 0, 0); bottom: 0; height: 100%; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-line-b { position: absolute; display: block; width: 100%; background-color: #69f; bottom: 0; left: 0; height: ",[0,1],"; opacity: 0.1; cursor: s-resize; }\n.",[1],"uni-cropper-line-b::before { content: \x27\x27; position: absolute; top: 50%; right: ",[0,0],"; width: 100%; -webkit-transform: translate3d(0, -50%, 0); transform: translate3d(0, -50%, 0); bottom: 0; height: ",[0,41],"; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-line-l { position: absolute; display: block; background-color: #69f; top: 0; left: 0; width: ",[0,1],"; opacity: 0.1; height: 100%; cursor: w-resize; }\n.",[1],"uni-cropper-line-l::before { content: \x27\x27; position: absolute; top: 0; left: 50%; width: ",[0,41],"; -webkit-transform: translate3d(-50%, 0, 0); transform: translate3d(-50%, 0, 0); bottom: 0; height: 100%; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-point { width: ",[0,5],"; height: ",[0,5],"; background-color: #69f; opacity: .75; position: absolute; z-index: 3; }\n.",[1],"point-t { top: ",[0,-3],"; left: 50%; margin-left: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-tr { top: ",[0,-3],"; left: 100%; margin-left: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-r { top: 50%; left: 100%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-rb { left: 100%; top: 100%; -webkit-transform: translate3d(-50%, -50%, 0); transform: translate3d(-50%, -50%, 0); cursor: n-resize; width: ",[0,36],"; height: ",[0,36],"; background-color: #69f; position: absolute; z-index: 1112; opacity: 1; }\n.",[1],"point-b { left: 50%; top: 100%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-bl { left: 0%; top: 100%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-l { left: 0%; top: 50%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-lt { left: 0%; top: 0%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"uni-cropper-viewer { position: relative; width: 100%; height: 100%; overflow: hidden; }\n.",[1],"uni-cropper-viewer wx-image { position: absolute; z-index: 2; }\n.",[1],"container { }\n.",[1],"page-fill { width:100%; height: 100%; position: absolute; background: black; }\n.",[1],"myDistance { }\n.",[1],"footer-opertor { position: fixed; bottom: 0; border-top: #515050 solid 1px; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,30],"; }\n.",[1],"opertor-words { color: #e8e5e5; font-size: 16px; width: ",[0,200],"; }\n",],undefined,{path:"./pages/faceCrop/faceCrop.wxss"});    
__wxAppCode__['pages/faceCrop/faceCrop.wxml']=$gwx('./pages/faceCrop/faceCrop.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"caroul{ width: 100%; }\n.",[1],"movice-hot{ margin-top: ",[0,12],"; padding: ",[0,20],"; }\n.",[1],"hot-title-wapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"hot-ico{ width: ",[0,50],"; height:",[0,50],"; margin-top: ",[0,10],"; }\n.",[1],"hot-title{ font-size: 20px; margin-left: ",[0,20],"; font-weight: bold; }\n.",[1],"scroll-hot{ width: 100%; white-space: nowrap; }\n.",[1],"single-poster{ display: inline-block; margin-left: ",[0,20],"; }\n.",[1],"poster-wapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"poster{ width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"movice-name{ width: ",[0,200],"; margin-top: ",[0,10],"; font-size: 14px; font-weight: bold; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"hot-movies { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,0]," ",[0,20]," ",[0,20]," ",[0,20],"; }\n.",[1],"hot-movie-single { width: ",[0,350],"; height: ",[0,220],"; margin-top: ",[0,10],"; }\n.",[1],"guess-u-like { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"single-like-movie { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"like-movie { width: ",[0,180],"; height: ",[0,240],"; }\n.",[1],"movie-desc { width: ",[0,350],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"movie-title { white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"movie-info { color: #808080; font-size: 14px; }\n.",[1],"movie-oper{ width: ",[0,140],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border-left: dashed 2px; border-left-color: #dbdbda; }\n.",[1],"praise-ico { width: ",[0,40],"; height: ",[0,40],"; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n.",[1],"praise-me { font-size: 14px; color: #feab2a; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n.",[1],"animation-opacity{ font-weight: bold; opacity: 0; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/me/me.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; }\n.",[1],"header { padding: ",[0,120]," ",[0,30]," ",[0,40]," ",[0,30],"; background-color: #ffd655; background: url(http://122.152.205.72:88/group1/M00/00/03/CpoxxFwu_1OAYFAIAAAzO_Q1tPg693.png) repeat; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"face { width: ",[0,120],"; height: ",[0,120],"; border-radius: 50%; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; }\n.",[1],"info-wapper { width: 80%; margin-left: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"nickname { color: #6a5018; font-size: 18px; font-weight: bold; }\n.",[1],"regist-login { margin-left: ",[0,60],"; margin-top: ",[0,30],"; }\n.",[1],"nav-info { color: #a38e62; font-size: 14px; margin-top: ",[0,10],"; }\n.",[1],"set-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; width: 15%; }\n.",[1],"settings { width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"body { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"big-next { font-size: ",[0,160],"; color: #F7F7F7; }\n",],undefined,{path:"./pages/me/me.wxss"});    
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/meBirthday/meBirthday.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; position: absolute; }\n.",[1],"birth-input { background-color: white; height: ",[0,80],"; line-height: ",[0,40],"; padding-left: ",[0,20],"; }\n.",[1],"birthday { background-color: white; height: ",[0,80],"; padding-left: ",[0,20],"; padding-top: ",[0,30],"; }\n.",[1],"submitBtn { width: 95%; margin-top: ",[0,40],"; }\n",],undefined,{path:"./pages/meBirthday/meBirthday.wxss"});    
__wxAppCode__['pages/meBirthday/meBirthday.wxml']=$gwx('./pages/meBirthday/meBirthday.wxml');

__wxAppCode__['pages/meFace/meFace.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; position: absolute; background: black; }\n.",[1],"pending-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-top: ",[0,40],"; }\n.",[1],"pending-face { width: ",[0,600],"; height: ",[0,600],"; }\n.",[1],"notice { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"notice-words { color: gray; font-size: 13px; margin-top: ",[0,30],"; width: ",[0,600],"; }\n.",[1],"footer-opertor { position: fixed; bottom: 0; border-top: #515050 solid 1px; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,30],"; }\n.",[1],"opertor-words { color: #e8e5e5; font-size: 16px; width: ",[0,200],"; }\n",],undefined,{path:"./pages/meFace/meFace.wxss"});    
__wxAppCode__['pages/meFace/meFace.wxml']=$gwx('./pages/meFace/meFace.wxml');

__wxAppCode__['pages/meInfo/meInfo.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; position: absolute; }\n.",[1],"info-list { padding: ",[0,0]," ",[0,30],"; }\n.",[1],"info-words { color: #333333; font-size: 16px; width: 25%; line-height: ",[0,80],"; }\n.",[1],"face { width: ",[0,80],"; height: ",[0,80],"; border-radius: 50%; }\n.",[1],"arrow-block { margin-left: ",[0,10],"; line-height: ",[0,86],"; }\n.",[1],"arrow-ico { width: ",[0,30],"; height: ",[0,30],"; }\n.",[1],"item-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"face-line-upbottom { margin-top: ",[0,20],"; padding-top: ",[0,20],"; padding-bottom: ",[0,20],"; }\n.",[1],"line-top { }\n.",[1],"right-wapper { width: 80%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"gray-fields { font-size: 14px; color: darkgray; line-height: ",[0,80],"; }\n.",[1],"footer-wapper { position: fixed; bottom: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 100%; }\n.",[1],"footer-words { text-align: center; background-color: white; padding: ",[0,20],"; color: #333333; font-size: 16px; }\n",],undefined,{path:"./pages/meInfo/meInfo.wxss"});    
__wxAppCode__['pages/meInfo/meInfo.wxml']=$gwx('./pages/meInfo/meInfo.wxml');

__wxAppCode__['pages/meNickname/meNickname.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; position: absolute; }\n.",[1],"graywords { color: #EAEAEA; }\n.",[1],"input { height: ",[0,80],"; line-height: ",[0,80],"; width: ",[0,500],"; margin-left: ",[0,40],"; }\n.",[1],"submitBtn { width: 95%; margin-top: ",[0,40],"; }\n",],undefined,{path:"./pages/meNickname/meNickname.wxss"});    
__wxAppCode__['pages/meNickname/meNickname.wxml']=$gwx('./pages/meNickname/meNickname.wxml');

__wxAppCode__['pages/movie/movie.wxss']=setCssToHead([".",[1],"player { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; background-color: black; }\n.",[1],"movie { width: 100%; height: ",[0,440],"; }\n.",[1],"movie-info { padding: ",[0,40]," ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; background-color: #f7f4f9; }\n.",[1],"cover { width: ",[0,280],"; height: ",[0,380],"; }\n.",[1],"movie-desc { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,30],"; width: ",[0,400],"; }\n.",[1],"title { font-size: 30px; }\n.",[1],"basic-info { color: darkgray; font-size: 13px; line-height: ",[0,36],"; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"score-block { background-color: white; margin-top: ",[0,20],"; width: ",[0,360],"; height: ",[0,90],"; padding: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-shadow: 3px 2px 10px #dedede; box-shadow: 3px 2px 10px #dedede; }\n.",[1],"score-words { font-size: 12px; color: grey; }\n.",[1],"movie-score { font-size: 26px; font-weight: bold; margin-left: ",[0,8],"; color: #FEAB2A; line-height: ",[0,60],"; }\n.",[1],"prise-counts { font-size: 12px; color: grey; line-height: ",[0,44],"; }\n.",[1],"plots-block { background-color: #f7f4f9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"plots-title { color: #A9A9A9; font-size: 14px; }\n.",[1],"plots-desc { margin-top: ",[0,10],"; font-size: 16px; }\n.",[1],"scroll-block { background-color: #f7f4f9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"scroll-list { width: 100%; white-space: nowrap; margin-top: ",[0,20],"; }\n.",[1],"plot-image { width: ",[0,220],"; height: ",[0,320],"; margin-right: ",[0,10],"; }\n.",[1],"single-actor { width: ",[0,170],"; height: ",[0,240],"; margin-right: ",[0,10],"; }\n.",[1],"actor-wapper { display: inline-block; }\n.",[1],"actor-name { width: ",[0,170],"; text-align: center; font-size: 15px; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"actor-role { width: ",[0,170],"; text-align: center; font-size: 13px; color: #A9A9A9; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n",],undefined,{path:"./pages/movie/movie.wxss"});    
__wxAppCode__['pages/movie/movie.wxml']=$gwx('./pages/movie/movie.wxml');

__wxAppCode__['pages/registLogin/registLogin.wxss']=setCssToHead([".",[1],"body { border-top: solid 1px #DBDBDA; padding: 0 ",[0,40],"; }\n.",[1],"face-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-top: ",[0,120],"; margin-bottom: ",[0,120],"; }\n.",[1],"face { width: ",[0,160],"; height: ",[0,160],"; }\n.",[1],"info-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border-bottom: solid 1px #DBDBDA; padding-bottom: ",[0,20],"; }\n.",[1],"words-lbl { color: #808080; }\n.",[1],"input { width: ",[0,500],"; margin-left: ",[0,40],"; }\n.",[1],"graywords { color: #EAEAEA; }\n.",[1],"third-wapper { width: 100%; margin-top: ",[0,60],"; }\n.",[1],"third-line { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.",[1],"third-words { color: #A9A9A9; font-size: 13px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"single-line { padding: ",[0,15]," ",[0,20],"; width: 25%; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"third-icos-wapper { margin-top: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.",[1],"third-ico { width: ",[0,60],"; height: ",[0,60],"; }\n.",[1],"third-btn-ico { background-image:url(http://122.152.205.72:88/group1/M00/00/05/CpoxxFxFO-yAOjTaAAATCIZEzRU503.png); width: ",[0,60],"; height: ",[0,60],"; background-color: white; background-size: ",[0,60]," ",[0,60],"; background-repeat:no-repeat; border:none; padding: 0; }\nwx-button::after{ border: none; }\n",],undefined,{path:"./pages/registLogin/registLogin.wxss"});    
__wxAppCode__['pages/registLogin/registLogin.wxml']=$gwx('./pages/registLogin/registLogin.wxml');

__wxAppCode__['pages/sex/sex.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; position: absolute; }\n.",[1],"radio-sex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"radio-single { padding: ",[0,20]," ",[0,20],"; }\n.",[1],"submitBtn { width: 95%; margin-top: ",[0,40],"; }\n",],undefined,{path:"./pages/sex/sex.wxss"});    
__wxAppCode__['pages/sex/sex.wxml']=$gwx('./pages/sex/sex.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
