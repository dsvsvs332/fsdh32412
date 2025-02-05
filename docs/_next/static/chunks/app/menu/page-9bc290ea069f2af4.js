(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{457:function(e,t,r){Promise.resolve().then(r.bind(r,2607))},2607:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(7437),s=r(2265),i=r(1080),a=r(2869),l=r(4508);let o=s.forwardRef((e,t)=>{let{className:r,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...i})});o.displayName="Input";var c=r(1107);let d=(0,r(535).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(c.f,{ref:t,className:(0,l.cn)(d(),r),...s})});u.displayName=c.f.displayName;var x=r(7536),f=r(6823),h=r(5187);let m=()=>{let e="M 10 ".concat(15);for(let t=1;t<=3;t++){let r=100/3*t-10+20*Math.random(),n=15+20*Math.random()-10,s=100/3*t+20*Math.random()-10,i=15+20*Math.random()-10;e+=" C ".concat(r," ").concat(n,", ").concat(s," ").concat(i,", ").concat(100/3*t+10," ").concat(15)}return e};function p(e){let{onClose:t}=e,[r,i]=(0,s.useState)(""),[l,c]=(0,s.useState)(""),[d,p]=(0,s.useState)(null),[g,v]=(0,s.useState)(!1),[b,j]=(0,s.useState)(""),[C,w]=(0,s.useState)(""),y=()=>Math.floor(1e8+9e8*Math.random()).toString(),N=()=>Math.floor(1e9+9e9*Math.random()).toString(),Z=()=>Math.floor(1e8+9e8*Math.random()).toString(),M=async e=>{if(e.preventDefault(),r&&l&&d&&b){if(!(0,h.q)(b)){w("Невірний ключ. Будь ласка, перевірте та спробуйте ще раз.");return}v(!0);try{let e=await L(d),n=l.split("-").join("."),s=await (0,f.is)(),i=(null==s?void 0:s.deviceNumber)||y(),a=(null==s?void 0:s.taxCardNumber)||N(),o=(null==s?void 0:s.passportNumber)||Z(),c=m();await (0,f.gt)(r,n,e,i,c,a,o,b),t()}catch(e){console.error("Error saving data:",e),alert("Помилка при збереженні даних. Спробуйте ще раз.")}finally{v(!1)}}},L=e=>new Promise((t,r)=>{let n=new FileReader;n.readAsDataURL(e),n.onload=()=>t(n.result),n.onerror=e=>r(e)});return(0,n.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:(0,n.jsxs)("div",{className:"bg-white rounded-2xl w-full max-w-md",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center p-4 border-b",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold",children:"Оновлення даних"}),(0,n.jsx)("button",{onClick:t,className:"text-gray-500 hover:text-gray-700",children:(0,n.jsx)(x.P.X,{className:"w-6 h-6"})})]}),(0,n.jsxs)("form",{onSubmit:M,className:"p-4 space-y-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(u,{htmlFor:"name",children:"ПІБ"}),(0,n.jsx)(o,{id:"name",value:r,onChange:e=>i(e.target.value),className:"mt-1",required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(u,{htmlFor:"birthDate",children:"Дата народження"}),(0,n.jsx)(o,{id:"birthDate",type:"date",value:l,onChange:e=>c(e.target.value),className:"mt-1",required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(u,{htmlFor:"file",children:"Фото профіля"}),(0,n.jsx)(o,{id:"file",type:"file",accept:"image/*",onChange:e=>{var t;return p((null===(t=e.target.files)||void 0===t?void 0:t[0])||null)},className:"mt-1",required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(u,{htmlFor:"key",children:"Ключ"}),(0,n.jsx)(o,{id:"key",value:b,onChange:e=>{j(e.target.value),w("")},className:"mt-1 ".concat(C?"border-red-500":""),required:!0}),C&&(0,n.jsx)("p",{className:"text-red-500 text-sm mt-1",children:C})]}),(0,n.jsx)(a.z,{type:"submit",className:"w-full",disabled:g,children:g?"Збереження...":"Зберегти дані"})]})]})})}function g(){let[e,t]=(0,s.useState)(!1),[r,a]=(0,s.useState)(null);return(0,s.useEffect)(()=>{(async()=>{a(await (0,f.is)())})()},[]),(0,n.jsxs)("main",{className:"min-h-[100dvh] max-h-[100dvh] bg-gradient-to-b from-[#7AC7C0] via-[#B8D7EA] to-[#C5B6E0] pb-[120px] pt-14 overflow-y-auto",children:[(0,n.jsxs)("div",{className:"px-5 flex flex-col gap-3",children:[(0,n.jsxs)("div",{className:"mb-2",children:[(0,n.jsx)("h1",{className:"text-[28px] font-semibold mb-0.5",children:"Меню"}),(0,n.jsx)("p",{className:"text-[13px] text-gray-600",children:"Версія Дії: 4.16.4.1908"})]}),(0,n.jsx)("div",{className:"flex flex-col gap-2",children:[{icon:"Mail",text:"Повідомлення"},{icon:"KeyRound",text:"Дія.Підпис"},{icon:"History",text:"Історія підписань"},{icon:"Settings",text:"Налаштування"},{icon:"RefreshCw",text:"Оновити застосунок"},{icon:"Smartphone",text:"Підключені пристрої"},{icon:"HeadphonesIcon",text:"Служба підтримки"},{icon:"Copy",text:"Копіювати номер пристрою"},{icon:"HelpCircle",text:"Питання та відповіді"}].map((e,s)=>{let i=x.P[e.icon];return(0,n.jsxs)("button",{className:"flex items-center gap-3 bg-white rounded-2xl p-4 active:bg-gray-50",onClick:()=>{if("Копіювати номер пристрою"===e.text)t(!0);else if("Копіювати номер пристрою"===e.text){let e=null==r?void 0:r.deviceNumber;e?(navigator.clipboard.writeText(e),alert("Номер пристрою скопійовано в буфер обміну")):alert("Номер пристрою не знайдено")}},children:[(0,n.jsx)(i,{className:"w-[22px] h-[22px]"}),(0,n.jsx)("span",{className:"text-[15px]",children:e.text})]},s)})})]}),(0,n.jsx)(i.L,{}),e&&(0,n.jsx)(p,{onClose:()=>{t(!1),(0,f.is)().then(a)}})]})}},1080:function(e,t,r){"use strict";r.d(t,{L:function(){return a}});var n=r(7437),s=r(7648),i=r(7536);function a(){return(0,n.jsx)("nav",{className:"fixed bottom-0 left-0 right-0",children:(0,n.jsxs)("div",{className:"flex justify-around items-center bg-black text-white h-[100px] text-[10px]",children:[(0,n.jsxs)(s.default,{href:"/home",className:"flex flex-col items-center gap-1 w-1/4",children:[(0,n.jsx)(i.P.AlignLeft,{className:"text-white"}),(0,n.jsx)("span",{children:"Стрічка"})]}),(0,n.jsxs)(s.default,{href:"/documents",className:"flex flex-col items-center gap-1 w-1/4",children:[(0,n.jsx)(i.P.FileText,{className:"text-white"}),(0,n.jsx)("span",{children:"Документи"})]}),(0,n.jsxs)(s.default,{href:"/services",className:"flex flex-col items-center gap-1 w-1/4",children:[(0,n.jsx)(i.P.Zap,{className:"text-white"}),(0,n.jsx)("span",{children:"Сервіси"})]}),(0,n.jsxs)(s.default,{href:"/menu",className:"flex flex-col items-center gap-1 w-1/4",children:[(0,n.jsx)(i.P.User,{className:"text-white"}),(0,n.jsx)("span",{children:"Меню"})]})]})})}},7536:function(e,t,r){"use strict";r.d(t,{P:function(){return H}});var n=r(7437),s=r(1734),i=r(8736),a=r(1239),l=r(2369),o=r(3247),c=r(4766),d=r(4246),u=r(1769),x=r(9525),f=r(3850),h=r(7662),m=r(4938),p=r(5136),g=r(8997),v=r(5805),b=r(4402),j=r(6748),C=r(5621),w=r(8728),y=r(7168),N=r(3388),Z=r(5471),M=r(8867),L=r(5368),k=r(9345);let H={Ukraine:e=>(0,n.jsx)("svg",{width:"40",height:"68",viewBox:"0 0 40 68",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,n.jsx)("path",{d:"M17.931 64.848C14.4828 62.2187 11.9397 58.2963 11.1207 53.7273H0V5.667C5.9914 8.6411 10.2586 15.236 10.7759 22.0463L12.4569 35.5377L11.6379 35.4084C9.8276 35.4084 8.2759 37.0894 8.2759 38.7704C8.2759 40.3222 9.4828 41.6584 11.0345 42.0032L13.0603 42.4773C16.4224 36.1411 18.319 29.9342 18.319 23.8135C18.319 18.2963 17.5862 12.8222 17.5 7.2187C17.5 4.7187 18.4483 2.4342 20 0.667C21.5517 2.4773 22.5 4.7187 22.5 7.2187C22.5 12.8222 21.681 18.3394 21.681 23.8135C21.681 29.8911 23.5776 36.1411 26.9397 42.4773L28.9655 42.0032C30.5172 41.6584 31.7241 40.3222 31.7241 38.7704C31.7241 37.0894 30.1724 35.4084 28.3621 35.4084L27.5431 35.5377L29.2241 22.0463C30.0431 15.236 34.0086 8.6411 40 5.667V53.7273H28.8793C28.0603 58.2532 25.6465 62.348 22.069 64.848C21.25 65.4515 20.5172 66.1842 20.0431 67.1325C19.4828 66.1411 18.75 65.4515 17.931 64.848ZM5.2586 37.1325C5.7328 35.3222 7.069 33.7704 8.7069 32.8222L7.3707 21.7015C6.8966 18.2532 5.4741 15.1498 3.319 12.6066V37.0894H5.2586V37.1325ZM10.9052 50.3653C10.9052 48.6842 11.1638 47.1325 11.5086 45.5808L9.9569 45.236C7.6724 44.5032 5.9052 42.736 5.3017 40.4515H3.4052V50.3653H10.9052ZM18.2759 50.3653C18.2759 48.3394 16.7241 46.5291 14.6983 46.3135C14.3535 47.6066 14.0948 48.9429 14.0948 50.3653H18.2759ZM18.2759 53.7273H14.569C15.1724 56.3566 16.4655 58.7273 18.2759 60.7963V53.7273ZM23.5345 43.3394C22.1121 40.7101 20.7759 37.9515 19.9569 35.1066C19.1379 37.9946 17.8017 40.7101 16.3793 43.3394C17.8017 43.6842 19.0086 44.6325 19.9569 45.7101C20.9052 44.6325 22.1121 43.6842 23.5345 43.3394ZM25.819 50.3653C25.819 48.9429 25.5603 47.6066 25.2155 46.3135C23.1897 46.5722 21.6379 48.3394 21.6379 50.3653H25.819ZM25.3448 53.7273H21.6379V60.7963C23.4483 58.7273 24.7414 56.3566 25.3448 53.7273ZM36.5948 50.3653V40.4515H34.6983C34.0948 42.736 32.3276 44.5032 30.0431 45.236L28.4914 45.5808C28.8362 47.1325 29.0948 48.6842 29.0948 50.3653H36.5948ZM36.5948 37.1325V12.6498C34.4397 15.1498 32.8879 18.2532 32.5431 21.7446L31.2069 32.8653C32.8879 33.8135 34.181 35.3653 34.6552 37.1756H36.5948V37.1325Z",fill:"white"})}),AlignLeft:s.Z,FileText:i.Z,Zap:a.Z,User:l.Z,Search:o.Z,Bell:c.Z,CloudSun:d.Z,BookOpen:u.Z,Wrench:x.Z,Dumbbell:f.Z,Car:h.Z,Home:m.Z,Clipboard:p.Z,Heart:g.Z,Users:v.Z,HelpingHand:b.Z,KeyRound:j.Z,History:C.Z,Settings:w.Z,RefreshCw:y.Z,Smartphone:N.Z,HeadphonesIcon:Z.Z,Copy:M.Z,HelpCircle:L.Z,Mail:k.Z,X:e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,n.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,n.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Trident:e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,n.jsx)("path",{d:"M12 3L12 21M12 3L7 8.5M12 3L17 8.5M7 8.5V13.5L12 21M7 8.5L9.5 11V16L12 21M17 8.5V13.5L12 21M17 8.5L14.5 11V16L12 21"})})}},2869:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var n=r(7437),s=r(2265),i=r(5293),a=r(535),l=r(4508);let o=(0,a.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:r,variant:s,size:a,asChild:c=!1,...d}=e,u=c?i.g7:"button";return(0,n.jsx)(u,{className:(0,l.cn)(o({variant:s,size:a,className:r})),ref:t,...d})});c.displayName="Button"},4508:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var n=r(1994),s=r(3335);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}}},function(e){e.O(0,[972,686,534,233,971,117,744],function(){return e(e.s=457)}),_N_E=e.O()}]);