var tiit=function(e){"use strict";const t=["html","base","head","style","title","address","article","footer","header","h1","h2","h3","h4","h5","h6","hgroup","nav","section","dd","div","dl","dt","figcaption","figure","hr","li","main","ol","p","pre","ul","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","map","track","video","embed","object","param","source","canvas","noscript","script","del","ins","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","input","keygen","label","legend","meter","optgroup","option","output","progress","select","details","dialog","menu","menuitem","summary","content","element","shadow","template","slot","acronym","applet","basefont","big","blink","center","dir","frame","frameset","isindex","listing","noembed","plaintext","spacer","strike","tt","xmp"],r={};function a(e,t,...a){let n;return r[e]?n=r[e].cloneNode():(n=document.createElement(e),r[e]=n),t&&Object.entries(t).forEach((([e,t])=>{e.startsWith("on")?n.addEventListener(e.substring(2),t):n.setAttribute(e,t)})),n.append(...a),n}const n={};return t.forEach((e=>{n[e]={value:a.bind(null,e)}})),Object.defineProperties(globalThis,n),e.element=a,e.register=function(e){return Object.defineProperty(globalThis,e.toString().replace(/(-[a-z,0-9]{1})/g,((e,t)=>t[1].toUpperCase())),{value:a.bind(null,e)})},e.tags=t,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
