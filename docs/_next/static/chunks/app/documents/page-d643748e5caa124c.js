(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[479],{4260:function(e,s,t){Promise.resolve().then(t.bind(t,6032)),Promise.resolve().then(t.t.bind(t,2972,23))},6032:function(e,s,t){"use strict";t.d(s,{DocumentSlider:function(){return u}});var l=t(7437),a=t(2265),i=t(9397),n=t(8842),c=t(9653),r=t(3462),d=t(6823),x=t(5187);function o(e){let{index:s}=e,[t,o]=(0,a.useState)(!1),[m,h]=(0,a.useState)(!1),[u,f]=(0,a.useState)(null),p=(0,c._)(),j=(e=>{if(!u)return"";switch(e){case 0:return u.deviceNumber;case 1:return u.taxCardNumber;case 2:return u.passportNumber;default:return""}})(s);if((0,a.useEffect)(()=>{(async()=>{let e=await (0,d.is)();e&&((0,x.q)(e.key)?f(e):console.error("Invalid key stored in user data"))})()},[]),(0,a.useEffect)(()=>{t?(p.start({rotateY:180}),setTimeout(()=>h(!0),300)):(h(!1),p.start({rotateY:0}))},[t,p]),3===s)return(0,l.jsxs)("div",{className:"w-full h-full flex flex-col gap-4",children:[(0,l.jsxs)("button",{className:"w-full flex-1 rounded-3xl bg-white/10 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4",children:[(0,l.jsx)("div",{className:"w-12 h-12 rounded-full border-2 border-black flex items-center justify-center",children:(0,l.jsx)(i.Z,{className:"w-6 h-6"})}),(0,l.jsx)("p",{className:"text-xl font-medium",children:"Додати документ"})]}),(0,l.jsxs)("button",{className:"w-full flex-1 rounded-3xl bg-white/10 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4",children:[(0,l.jsx)("div",{className:"w-12 h-12 rounded-full border-2 border-black flex items-center justify-center",children:(0,l.jsx)(n.Z,{className:"w-6 h-6"})}),(0,l.jsxs)("p",{className:"text-xl font-medium",children:["Змінити порядок",(0,l.jsx)("br",{}),"документів"]})]})]});let b=e=>{switch(e){case 0:return"animate-scroll-1";case 1:default:return"animate-scroll-2";case 2:return"animate-scroll-3"}};return(0,l.jsx)("div",{className:"w-full aspect-[3/4] max-w-sm mx-auto perspective",onClick:()=>o(!t),children:(0,l.jsxs)(r.E.div,{className:"relative w-full h-full",initial:!1,animate:p,transition:{duration:.6,animationDirection:"normal"},style:{transformStyle:"preserve-3d"},children:[(0,l.jsx)(r.E.div,{className:"absolute w-full h-full backface-hidden",initial:{opacity:1},animate:{opacity:t?0:1},transition:{duration:.3},children:(0,l.jsxs)("div",{className:"w-full h-full rounded-3xl bg-white/10 backdrop-blur-[2px] p-6 flex flex-col relative overflow-hidden",children:[1!==s&&(0,l.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-[#43A047]/10 via-transparent to-transparent pointer-events-none"}),(0,l.jsxs)("div",{className:"flex flex-col mb-6",children:[0===s&&(0,l.jsx)("h2",{className:"text-[22px] font-medium text-black",children:"єДокумент"}),1===s&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{className:"text-[22px] font-medium text-black",children:"Карта платника"}),(0,l.jsx)("h2",{className:"text-[22px] font-medium text-black",children:"податків"})]}),2===s&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{className:"text-[22px] font-medium text-black",children:"Паспорт громадянина"}),(0,l.jsx)("h2",{className:"text-[22px] font-medium text-black",children:"України"})]})]}),u?(0,l.jsx)(l.Fragment,{children:1===s?(0,l.jsxs)("div",{className:"flex flex-col h-full",children:[(0,l.jsx)("div",{className:"mb-6",children:(0,l.jsx)("p",{className:"text-[15px] text-black uppercase",children:"РНОКПП"})}),(0,l.jsxs)("div",{className:"space-y-3 mb-auto",children:[(0,l.jsx)("div",{className:"space-y-0.5",children:u.name.split(" ").map((e,s)=>(0,l.jsx)("p",{className:"text-[17px] font-medium text-black leading-tight",children:e},s))}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-[15px] text-black",children:"Дата народження"}),(0,l.jsx)("p",{className:"text-[15px] text-black",children:u.birthDate})]})]}),(0,l.jsxs)("div",{className:"relative w-[calc(100%+3rem)] -mx-6 overflow-hidden mt-auto mb-4 h-7",children:[(0,l.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-[#90EE90] to-[#87CEEB]",children:(0,l.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-[#ffffff10] to-transparent"})}),(0,l.jsx)("div",{className:"whitespace-nowrap py-1 text-black text-sm absolute inset-0 flex items-center overflow-hidden",children:(0,l.jsxs)("div",{className:"animate-scroll ".concat(b(s)),children:[2===s?(0,l.jsx)("span",{children:"Документ оновлено о 11:00 I 01.02.2025 \xa0\xa0\xa0\xa0"}):1===s?(0,l.jsx)("span",{children:"Документ оновлено о 10:00 I 01.02.2025 . Перевірено Державною податковою службою \xa0\xa0\xa0\xa0"}):(0,l.jsx)("span",{children:"Документ діє під час воєнного стану. Ой у лузі червона калина похилилася, чогось наша славна Україна зажурилася. А ми тую червону калину підіймемо. А ми нашу славну Україну, гей, гей, розвеселимо! \xa0\xa0\xa0\xa0"}),2===s?(0,l.jsx)("span",{children:"Документ оновлено о 11:00 I 01.02.2025 \xa0\xa0\xa0\xa0"}):1===s?(0,l.jsx)("span",{children:"Документ оновлено о 10:00 I 01.02.2025 . Перевірено Державною податковою службою \xa0\xa0\xa0\xa0"}):(0,l.jsx)("span",{children:"Документ діє під час воєнного стану. Ой у лузі червона калина похилилася, чогось наша славна Україна зажурилася. А ми тую червону калину підіймемо. А ми нашу славну Україну, гей, гей, розвеселимо! \xa0\xa0\xa0\xa0"})]})})]}),(0,l.jsxs)("div",{className:"flex items-end justify-between mt-4",children:[(0,l.jsx)("p",{className:"text-[26px] font-medium text-black",children:j}),(0,l.jsx)("button",{className:"w-8 h-8 rounded-full bg-black flex items-center justify-center",children:(0,l.jsx)("div",{className:"flex gap-1",children:[void 0,void 0,void 0].map((e,s)=>(0,l.jsx)("div",{className:"w-1 h-1 rounded-full bg-white"},s))})})]})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsx)("img",{src:u.imageBase64||"/placeholder.svg",alt:"Фото профілю",className:"w-[140px] h-[180px] object-cover rounded-2xl"}),(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-[15px] text-black mb-1",children:"Дата"}),(0,l.jsx)("p",{className:"text-[15px] text-black mb-1",children:"народження:"}),(0,l.jsx)("p",{className:"text-[15px]",children:u.birthDate.split("-").join(".")})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-[15px] text-black mb-1",children:0===s?"РНОКПП:":"Номер:"}),(0,l.jsx)("p",{className:"text-[15px]",children:j})]}),2===s&&(null==u?void 0:u.signature)&&(0,l.jsx)("svg",{width:"100",height:"30",className:"mt-2",children:(0,l.jsx)("path",{d:u.signature,stroke:"black",strokeWidth:"1.5",fill:"none"})})]})]}),(0,l.jsxs)("div",{className:"relative w-[calc(100%+3rem)] -mx-6 overflow-hidden h-7 mt-auto",children:[(0,l.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-[#90EE90] to-[#87CEEB]",children:(0,l.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-[#ffffff10] to-transparent"})}),(0,l.jsx)("div",{className:"whitespace-nowrap py-1 text-black text-sm absolute inset-0 flex items-center overflow-hidden",children:(0,l.jsxs)("div",{className:"animate-scroll ".concat(b(s)),children:[2===s?(0,l.jsx)("span",{children:"Документ оновлено о 11:00 I 01.02.2025 \xa0\xa0\xa0\xa0"}):1===s?(0,l.jsx)("span",{children:"Документ оновлено о 10:00 I 01.02.2025 . Перевірено Державною податковою службою \xa0\xa0\xa0\xa0"}):(0,l.jsx)("span",{children:"Документ діє під час воєнного стану. Ой у лузі червона калина похилилася, чогось наша славна Україна зажурилася. А ми тую червону калину підіймемо. А ми нашу славну Україну, гей, гей, розвеселимо! \xa0\xa0\xa0\xa0"}),2===s?(0,l.jsx)("span",{children:"Документ оновлено о 11:00 I 01.02.2025 \xa0\xa0\xa0\xa0"}):1===s?(0,l.jsx)("span",{children:"Документ оновлено о 10:00 I 01.02.2025 . Перевірено Державною податковою службою \xa0\xa0\xa0\xa0"}):(0,l.jsx)("span",{children:"Документ діє під час воєнного стану. Ой у лузі червона калина похилилася, чогось наша славна Україна зажурилася. А ми тую червону калину підіймемо. А ми нашу славну Україну, гей, гей, розвеселимо! \xa0\xa0\xa0\xa0"})]})})]}),(0,l.jsxs)("div",{className:"mt-4 flex items-center justify-between",children:[(0,l.jsx)("div",{className:"space-y-0.5",children:u.name.split(" ").map((e,s)=>(0,l.jsx)("p",{className:"text-[26px] font-medium leading-tight",children:e},s))}),(0,l.jsx)("button",{className:"w-8 h-8 rounded-full bg-black flex items-center justify-center self-end mb-1",children:(0,l.jsx)("div",{className:"flex gap-1",children:[void 0,void 0,void 0].map((e,s)=>(0,l.jsx)("div",{className:"w-1 h-1 rounded-full bg-white"},s))})})]})]})}):(0,l.jsx)("div",{className:"w-full h-full bg-gray-200/50 rounded-2xl flex items-center justify-center",children:(0,l.jsx)("p",{className:"text-gray-500",children:"Дані не завантажено"})})]})}),(0,l.jsx)(r.E.div,{className:"absolute w-full h-full backface-hidden rounded-3xl",style:{transform:"rotateY(180deg)"},initial:{backgroundColor:"rgba(255, 255, 255, 0.1)"},animate:{backgroundColor:t?"rgba(255, 255, 255, 1)":"rgba(255, 255, 255, 0.1)"},transition:{duration:.3,delay:.15},children:(0,l.jsx)("div",{className:"w-full h-full rounded-3xl p-6 flex flex-col items-center justify-center gap-6",children:m&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("img",{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1FyyhOckEOMudIOUePTwhk1TNFFpBF.png",alt:"QR Code",className:"w-72 h-72"}),0!==s&&(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsx)("button",{className:"p-3 bg-black rounded-xl text-white",children:(0,l.jsx)("div",{className:"w-6 h-6 flex items-center justify-center",children:(0,l.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-5 h-5",children:(0,l.jsx)("path",{d:"M3 9h6m-6 6h6m6-6h6m-6 6h6M3 3h6v6H3V3zm12 0h6v6h-6V3zM3 15h6v6H3v-6zm12 0h6v6h-6v-6z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),(0,l.jsx)("span",{className:"text-xs mt-2",children:"QR-код"})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsx)("button",{className:"p-3 bg-black rounded-xl text-white",children:(0,l.jsx)("div",{className:"w-6 h-6 flex items-center justify-center",children:(0,l.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-5 h-5",children:(0,l.jsx)("path",{d:"M4 5h16M4 9h16M4 13h16M4 19h16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})}),(0,l.jsx)("span",{className:"text-xs mt-2",children:"Штрих-код"})]})]})]})})})]})})}var m=t(8614),h=t(7072);function u(){let[e,s]=(0,a.useState)(0),[t,i]=(0,a.useState)(0),n=[0,1,2,3],c=(0,h.QS)({onSwipedLeft:()=>{e<n.length-1&&(i(1),s(e=>e+1))},onSwipedRight:()=>{e>0&&(i(-1),s(e=>e-1))},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsx)("div",{className:"relative w-full h-[70vh] overflow-hidden",...c,children:(0,l.jsx)(m.M,{initial:!1,custom:t,children:(0,l.jsx)(r.E.div,{custom:t,variants:{enter:e=>({x:e>0?1e3:-1e3,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:e=>({zIndex:0,x:e<0?1e3:-1e3,opacity:0})},initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},className:"absolute w-full h-full",children:(0,l.jsx)(o,{index:e},e)},e)})}),(0,l.jsx)("div",{className:"flex gap-2 mt-6",children:n.map((s,t)=>(0,l.jsx)("div",{className:"w-2 h-2 rounded-full transition-colors duration-300 ".concat(t===e?"bg-white":"bg-white/30")},t))})]})}}},function(e){e.O(0,[972,601,233,971,117,744],function(){return e(e.s=4260)}),_N_E=e.O()}]);