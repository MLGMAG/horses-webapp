import{w as c}from"./with-props-BYJ3b_FW.js";import{r as d,l as e,p as n,O as h}from"./chunk-IR6S3I6Y-SrHvIBhn.js";const x="/horses-webapp/assets/horse-BwSXoi0r.svg",m="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%206H20M4%2012H20M4%2018H20'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function p(){const[r,o]=d.useState(!1);return e.jsx("div",{className:"mb-2",children:e.jsxs("nav",{className:"flex justify-between items-center mx-auto px-8 py-6",children:[e.jsxs("div",{className:"flex items-center gap-[2vw]",children:[e.jsx("div",{children:e.jsx(n,{to:"/",children:e.jsx("img",{className:"w-12",src:x,alt:"horse_icon"})})}),e.jsx("div",{className:"hidden md:inline",children:e.jsx("ul",{className:"font-semibold text-base flex gap-[1vw]",children:l.map(({id:s,href:t,title:i})=>e.jsx("li",{className:"p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer",children:e.jsx(n,{to:t,children:i})},s))})})]}),e.jsx("div",{className:"hidden md:inline",children:e.jsx("ul",{className:"font-semibold text-base flex gap-[2vw]",children:a.map(({id:s,href:t,title:i})=>e.jsx("li",{className:"p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer",children:e.jsx(n,{to:t,children:i})},s))})}),e.jsx("div",{className:"md:hidden",children:e.jsx("img",{className:"w-12 cursor-pointer",src:m,alt:"menu_icon",onClick:()=>o(!r)})}),e.jsx("div",{className:`
              pb-4
              absolute xl:hidden 
              top-24 left-0 w-full bg-white 
              flex flex-col item-center
              font-semibold text-lg 
              transform transition-transform
              shadow
              ${r?"opacity-100":"opacity-0 hidden"}
          `,style:{transition:"transform 0.3s ease, opacity 0.3s ease"},children:[...l,...a].map(({id:s,href:t,title:i})=>e.jsx("div",{className:"list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer",onClick:()=>o(!1),children:e.jsx(n,{to:t,children:i})},s))})]})})}const l=[{id:1,href:"/transfer",title:"Transfer"},{id:2,href:"/medicine",title:"Medicine"},{id:3,href:"/social",title:"Social network"}],a=[{id:4,href:"/login",title:"Login"}];function f(){return e.jsx("footer",{className:"my-5",children:e.jsx("p",{className:"w-full text-center",children:"© 2025 Horses WebApp."})})}const w=c(function(){return e.jsxs("div",{className:"font-[Montserrat] w-full h-full",children:[e.jsx("header",{children:e.jsx(p,{})}),e.jsx("main",{children:e.jsx(h,{})}),e.jsx(f,{})]})});export{w as default};
