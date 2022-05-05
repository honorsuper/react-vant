var E=Object.defineProperty,g=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var h=(i,t,n)=>t in i?E(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n,l=(i,t)=>{for(var n in t||(t={}))D.call(t,n)&&h(i,n,t[n]);if(o)for(var n of o(t))A.call(t,n)&&h(i,n,t[n]);return i},c=(i,t)=>g(i,v(t));import{j as e,a as u,F as s,r as y}from"./main.d18b0bf7.js";import{C as r,dF as d,d9 as w}from"./index.51bf8394.js";const B=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg"];var p=()=>e(r,{title:"\u9884\u89C8\u56FE\u7247",isLink:!0,onClick:()=>d.open({images:B})});const P={code:`import React from 'react';
import { ImagePreview, Cell } from 'react-vant';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default () => {
  return <Cell title="\u9884\u89C8\u56FE\u7247" isLink onClick={() => ImagePreview.open({ images })} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.32"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { ImagePreview, Cell } from 'react-vant';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default () => {
  return <Cell title="\u9884\u89C8\u56FE\u7247" isLink onClick={() => ImagePreview.open({ images })} />;
};`}},key:"image-preview-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},a=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg"];var m=()=>u(s,{children:[e(r,{title:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",isLink:!0,onClick:()=>d.open({images:a,startPosition:2})}),e(r,{title:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",isLink:!0,onClick:()=>d.open({images:a,startPosition:2,closeable:!0})}),e(r,{title:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",isLink:!0,onClick:()=>d.open({images:a,startPosition:2,onClose:()=>{w.info("\u5173\u95ED\u9884\u89C8")}})}),e(r,{title:"\u5C55\u793A\u6307\u793A\u70B9",isLink:!0,onClick:()=>d.open({images:a,showIndicators:!0,showIndex:!1})})]});const f={code:`import React from 'react';
import { ImagePreview, Cell, Toast } from 'react-vant';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default () => {
  return (
    <>
      <Cell
        title="\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E"
        isLink
        onClick={() => ImagePreview.open({ images, startPosition: 2 })}
      />
      <Cell
        title="\u5C55\u793A\u5173\u95ED\u6309\u94AE"
        isLink
        onClick={() => ImagePreview.open({ images, startPosition: 2, closeable: true })}
      />
      <Cell
        title="\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6"
        isLink
        onClick={() =>
          ImagePreview.open({
            images,
            startPosition: 2,
            onClose: () => {
              Toast.info('\u5173\u95ED\u9884\u89C8');
            },
          })
        }
      />
      <Cell
        title="\u5C55\u793A\u6307\u793A\u70B9"
        isLink
        onClick={() => ImagePreview.open({ images, showIndicators: true, showIndex: false })}
      />
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.32"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { ImagePreview, Cell, Toast } from 'react-vant';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default () => {
  return (
    <>
      <Cell
        title="\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E"
        isLink
        onClick={() => ImagePreview.open({ images, startPosition: 2 })}
      />
      <Cell
        title="\u5C55\u793A\u5173\u95ED\u6309\u94AE"
        isLink
        onClick={() => ImagePreview.open({ images, startPosition: 2, closeable: true })}
      />
      <Cell
        title="\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6"
        isLink
        onClick={() =>
          ImagePreview.open({
            images,
            startPosition: 2,
            onClose: () => {
              Toast.info('\u5173\u95ED\u9884\u89C8');
            },
          })
        }
      />
      <Cell
        title="\u5C55\u793A\u6307\u793A\u70B9"
        isLink
        onClick={() => ImagePreview.open({ images, showIndicators: true, showIndex: false })}
      />
    </>
  );
};`}},key:"image-preview-demo-1",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},x=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg"];var F=()=>e(r,{title:"\u9884\u89C8\u56FE\u7247",isLink:!0,onClick:()=>{const i=d.open({images:x});setTimeout(()=>i(),2e3)}});const I={code:`import React from 'react';
import { ImagePreview, Cell } from 'react-vant';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default () => {
  return (
    <Cell
      title="\u9884\u89C8\u56FE\u7247"
      isLink
      onClick={() => {
        const destory = ImagePreview.open({ images });
        setTimeout(() => destory(), 2000);
      }}
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.32"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { ImagePreview, Cell } from 'react-vant';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default () => {
  return (
    <Cell
      title="\u9884\u89C8\u56FE\u7247"
      isLink
      onClick={() => {
        const destory = ImagePreview.open({ images });
        setTimeout(() => destory(), 2000);
      }}
    />
  );
};`}},key:"image-preview-demo-2",meta:{title:"\u5F02\u6B65\u5173\u95ED"}},k=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg"];var C=()=>{const[i,t]=y.exports.useState(!1);return u(s,{children:[e(r,{title:"\u7EC4\u4EF6\u8C03\u7528",isLink:!0,onClick:()=>t(!0)}),e(d,{visible:i,onClose:()=>t(!1),images:k,showIndicators:!0,showIndex:!1})]})};const j={code:`import React, { useState } from 'react';
import { ImagePreview, Cell } from 'react-vant';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell title="\u7EC4\u4EF6\u8C03\u7528" isLink onClick={() => setVisible(true)} />
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        images={images}
        showIndicators
        showIndex={false}
      />
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.32"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ImagePreview, Cell } from 'react-vant';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell title="\u7EC4\u4EF6\u8C03\u7528" isLink onClick={() => setVisible(true)} />
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        images={images}
        showIndicators
        showIndex={false}
      />
    </>
  );
};`}},key:"image-preview-demo-3",meta:{title:"\u7EC4\u4EF6\u8C03\u7528"}},b=function({previewer:i=()=>null,api:t=()=>null}){const n=i;return e("div",{children:u("div",{children:[e("h1",{id:"imagepreview-\u56FE\u7247\u9884\u89C8","data-anchor":"imagepreview-\u56FE\u7247\u9884\u89C8",children:"ImagePreview \u56FE\u7247\u9884\u89C8"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u56FE\u7247\u9884\u89C8\uFF0C\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:"\u76F4\u63A5\u4F20\u5165\u56FE\u7247\u6570\u7EC4\uFF0C\u5373\u53EF\u5C55\u793A\u56FE\u7247\u9884\u89C8\u3002"}),e(n,c(l({},P),{children:e(p,{})})),e("h3",{id:"\u914D\u7F6E\u9879","data-anchor":"\u914D\u7F6E\u9879",children:"\u914D\u7F6E\u9879"}),u("ul",{children:[u("li",{children:[e("code",{children:"ImagePreview"})," \u652F\u6301\u4F20\u5165\u914D\u7F6E\u5BF9\u8C61\uFF0C\u5E76\u901A\u8FC7 ",e("code",{children:"startPosition"})," \u9009\u9879\u6307\u5B9A\u56FE\u7247\u7684\u521D\u59CB\u4F4D\u7F6E\uFF08\u7D22\u5F15\u503C\uFF09\u3002"]}),u("li",{children:["\u8BBE\u7F6E ",e("code",{children:"closeable"})," \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u5F39\u51FA\u5C42\u7684\u53F3\u4E0A\u89D2\u663E\u793A\u5173\u95ED\u56FE\u6807\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"closeIcon"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u4F7F\u7528",e("code",{children:"closeIconPosition"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\u4F4D\u7F6E\u3002"]}),u("li",{children:["\u901A\u8FC7 ",e("code",{children:"onClose"})," \u9009\u9879\u76D1\u542C\u56FE\u7247\u9884\u89C8\u7684\u5173\u95ED\u4E8B\u4EF6\u3002"]}),u("li",{children:[e("code",{children:"ImagePreview.open"}),"\u4F1A\u8FD4\u56DE\u5B9E\u4F8B\u7684\u9500\u6BC1\u65B9\u6CD5\u3002"]})]}),e(n,c(l({},f),{children:e(m,{})})),e("h3",{id:"\u5F02\u6B65\u5173\u95ED","data-anchor":"\u5F02\u6B65\u5173\u95ED",children:"\u5F02\u6B65\u5173\u95ED"}),u("p",{children:[e("code",{children:"ImagePreview.open"}),"\u4F1A\u8FD4\u56DE\u5B9E\u4F8B\u7684\u9500\u6BC1\u65B9\u6CD5\u3002"]}),e(n,c(l({},I),{children:e(F,{})})),e("h3",{id:"\u7EC4\u4EF6\u8C03\u7528","data-anchor":"\u7EC4\u4EF6\u8C03\u7528",children:"\u7EC4\u4EF6\u8C03\u7528"}),e("p",{children:"\u5982\u679C\u9700\u8981\u5728\u56FE\u7247\u9884\u89C8\u5185\u5D4C\u5165\u7EC4\u4EF6\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7EC4\u4EF6\u8C03\u7528\u7684\u65B9\u5F0F\u3002"}),e(n,c(l({},j),{children:e(C,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"options","data-anchor":"options",children:"Options"}),u("p",{children:["\u901A\u8FC7\u51FD\u6570\u8C03\u7528 ",e("code",{children:"ImagePreview.open"})," \u65F6\uFF0C\u652F\u6301\u4F20\u5165\u4EE5\u4E0B\u9009\u9879\uFF1A"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"images"}),e("td",{children:"\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL \u6570\u7EC4"}),e("td",{children:e("em",{children:"string[]"})}),e("td",{children:e("code",{children:"[]"})})]}),u("tr",{children:[e("td",{children:"lazyload"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u61D2\u52A0\u8F7D"}),e("td",{children:u("em",{children:["boolean|",e("a",{href:"/#/zh-CN/lazyload",children:"Lazyload Props"})]})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"startPosition"}),e("td",{children:"\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u4F4D\u7F6E\u7D22\u5F15"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),u("tr",{children:[e("td",{children:"swipeDuration"}),u("td",{children:["\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A ",e("code",{children:"ms"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"300"})})]}),u("tr",{children:[e("td",{children:"showIndex"}),e("td",{children:"\u662F\u5426\u663E\u793A\u9875\u7801"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"showIndicators"}),e("td",{children:"\u662F\u5426\u663E\u793A\u8F6E\u64AD\u6307\u793A\u5668"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"loop"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"closeOnPopstate"}),e("td",{children:"\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u81EA\u5B9A\u4E49\u7C7B\u540D"}),e("td",{children:e("em",{children:"string | Array | object"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"closeable"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"closeIcon"}),e("td",{children:"\u5173\u95ED\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"clear"})})]}),u("tr",{children:[e("td",{children:"closeIconPosition"}),u("td",{children:["\u5173\u95ED\u56FE\u6807\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"top-left"}),e("br",{}),e("code",{children:"bottom-left"})," ",e("code",{children:"bottom-right"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"top-right"})})]}),u("tr",{children:[e("td",{children:"overlayStyle"}),e("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F"}),e("td",{children:e("em",{children:"object"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570"}),e("td",{children:e("em",{children:"Function"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onClosed"}),e("td",{children:"\u5B8C\u5168\u5173\u95ED\u65F6\u7684\u56DE\u8C03"}),e("td",{children:e("em",{children:"Function"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5207\u6362\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15"}),e("td",{children:e("em",{children:"Function"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"beforeClose"}),u("td",{children:["\u5173\u95ED\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE ",e("code",{children:"false"})," \u53EF\u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u8FD4\u56DE Promise"]}),e("td",{children:e("em",{children:"(active) => boolean | Promise"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"teleport"}),e("td",{children:"\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9"}),e("td",{children:e("em",{children:"HTMLElement | () => HTMLElement"})}),e("td",{children:e("code",{children:"body"})})]})]})]}),e("h3",{id:"onclose-\u56DE\u8C03\u53C2\u6570","data-anchor":"onclose-\u56DE\u8C03\u53C2\u6570",children:"onClose \u56DE\u8C03\u53C2\u6570"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"url"}),e("td",{children:"\u5F53\u524D\u56FE\u7247 URL"}),e("td",{children:e("em",{children:"string"})})]}),u("tr",{children:[e("td",{children:"index"}),e("td",{children:"\u5F53\u524D\u56FE\u7247\u7684\u7D22\u5F15\u503C"}),e("td",{children:e("em",{children:"number"})})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"#/zh-CN/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-image-preview-index-text-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-image-preview-index-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-image-preview-index-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-image-preview-index-text-shadow"}),e("td",{children:e("em",{children:"0 1px 1px var(--rv-gray-8)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-image-preview-overlay-background-color"}),e("td",{children:e("em",{children:"rgba(0, 0, 0, 0.9)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-image-preview-close-icon-size"}),e("td",{children:e("em",{children:"22px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-image-preview-close-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-image-preview-close-icon-active-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-image-preview-close-icon-margin"}),e("td",{children:e("em",{children:"var(--rv-padding-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-image-preview-close-icon-z-index"}),e("td",{children:e("em",{children:"1"})}),e("td",{children:"-"})]})]})]})]})})},z=[{Component:p,key:"image-preview-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:m,key:"image-preview-demo-1",title:"\u57FA\u7840\u7528\u6CD5"},{Component:F,key:"image-preview-demo-2",title:"\u5F02\u6B65\u5173\u95ED"},{Component:C,key:"image-preview-demo-3",title:"\u7EC4\u4EF6\u8C03\u7528"}],L=void 0,M=[{depth:1,text:"ImagePreview \u56FE\u7247\u9884\u89C8",id:"imagepreview-\u56FE\u7247\u9884\u89C8"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u914D\u7F6E\u9879",id:"\u914D\u7F6E\u9879"},{depth:3,text:"\u5F02\u6B65\u5173\u95ED",id:"\u5F02\u6B65\u5173\u95ED"},{depth:3,text:"\u7EC4\u4EF6\u8C03\u7528",id:"\u7EC4\u4EF6\u8C03\u7528"},{depth:2,text:"API",id:"api"},{depth:3,text:"Options",id:"options"},{depth:3,text:"onClose \u56DE\u8C03\u53C2\u6570",id:"onclose-\u56DE\u8C03\u53C2\u6570"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],N="/src/components/image-preview/README.md",R="ImagePreview \u56FE\u7247\u9884\u89C8",T="1651763263000";var O=i=>i.children({MdContent:b,demos:z,frontmatter:L,slugs:M,filePath:N,title:R,updatedTime:T});export{b as MdContent,O as default,z as demos,N as filePath,L as frontmatter,M as slugs,R as title,T as updatedTime};