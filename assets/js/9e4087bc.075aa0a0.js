"use strict";(self.webpackChunkdaodoc=self.webpackChunkdaodoc||[]).push([[3608],{3169:(e,a,r)=>{r.r(a),r.d(a,{default:()=>o});r(7294);var s=r(3692),t=r(5999),i=r(1944),c=r(6040),n=r(2503),l=r(5893);function d(e){let{year:a,posts:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{as:"h3",id:a,children:a}),(0,l.jsx)("ul",{children:r.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(s.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function h(e){let{years:a}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:a.map(((e,a)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(d,{...e})},a)))})})})}function o(e){let{archive:a}=e;const r=(0,t.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,t.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),d=function(e){const a=e.reduce(((e,a)=>{const r=a.metadata.date.split("-")[0],s=e.get(r)??[];return e.set(r,[a,...s])}),new Map);return Array.from(a,(e=>{let[a,r]=e;return{year:a,posts:r}}))}(a.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.d,{title:r,description:s}),(0,l.jsxs)(c.Z,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.Z,{as:"h1",className:"hero__title",children:r}),(0,l.jsx)("p",{className:"hero__subtitle",children:s})]})}),(0,l.jsx)("main",{children:d.length>0&&(0,l.jsx)(h,{years:d})})]})]})}}}]);