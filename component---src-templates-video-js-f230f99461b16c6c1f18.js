(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4m+v":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var i=t("zLVn"),r=t("nKUr"),s=(t("q1tI"),t("vOnD")),c=t("IP2g"),a=t("89ka"),o=t("5Vy0"),l=s.d.span.withConfig({displayName:"tag__StyledTag",componentId:"m2207s-0"})(["display:inline-flex;flex-direction:row;align-items:center;",""],Object(a.c)("0.25rem")),j=Object(s.d)(c.a).withConfig({displayName:"tag__StyledTagIcon",componentId:"m2207s-1"})(["color:",";",""],(function(e){return e.theme.colors.primaryLowEmphasis}),(function(e){return e.warning&&Object(s.c)(["color:",";"],(function(e){return e.theme.colors.warningTitle}))}));function d(e){var n=e.icon,t=e.iconProps,s=e.warning,c=e.children,a=Object(i.a)(e,["icon","iconProps","warning","children"]);return Object(r.jsxs)(l,Object.assign({},a,{children:[!!n&&Object(r.jsx)(j,Object.assign({icon:n,fixedWidth:!0,warning:s},t)),!!c&&Object(r.jsx)(o.a,{small:!0,children:c})]}))}},Qq1W:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i=t("nKUr"),r=t("4m+v"),s=t("wHSu"),c=t("L+1Y");t("q1tI");function a(e){var n=e.entry;return Object(i.jsxs)(c.b,{row:!0,wrap:!0,gapsBoth:"0.75rem",children:[Object(i.jsx)(r.a,{icon:s.k,children:n.episodes||"—"}),!!n.spoiler&&Object(i.jsx)(r.a,{icon:s.b,warning:!0,children:"SPOILER"}),!!n.nsfw&&Object(i.jsx)(r.a,{icon:s.i,warning:!0,children:"NSFW"})]})}},"W/7f":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i=t("nKUr"),r=t("wHSu"),s=t("4m+v"),c=t("L+1Y");function a(e){var n=e.video;return Object(i.jsxs)(c.b,{row:!0,wrap:!0,gapsBoth:"0.75rem",children:[Object(i.jsxs)(s.a,{title:"Resolution",children:[n.resolution,"p"]}),!!n.nc&&Object(i.jsx)(s.a,{icon:r.n,title:"No Credits"}),!!n.subbed&&Object(i.jsx)(s.a,{icon:r.e,title:"With Subtitles"}),!!n.lyrics&&Object(i.jsx)(s.a,{icon:r.f,title:"With Lyrics"}),!!n.uncen&&Object(i.jsx)(s.a,{icon:r.j,title:"Uncensored"}),!!n.source&&Object(i.jsx)(s.a,{icon:r.g,title:"Source",children:n.source.toUpperCase()}),"None"!==n.overlap&&Object(i.jsx)(s.a,{icon:r.r,title:"Overlap",children:n.overlap.toUpperCase()})]})}},gSOQ:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var i=t("nKUr"),r=t("B8aR"),s=t("5Vy0");function c(e){var n=e.song;return Object(i.jsxs)(r.a,{variant:"card",children:[Object(i.jsx)(s.a,{link:!0,children:n.title}),!!n.artists&&!!n.artists.length&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(s.a,{small:!0,children:" by "}),n.artists.map((function(e,t){return Object(i.jsx)(s.a,{link:!0,children:(e.as||e.name)+(t===n.artists.length-2?" & ":t<n.artists.length-1?", ":"")},e.as||e.name)}))]})]})}},sjxK:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return x}));var i=t("nKUr"),r=t("Wbzz"),s=t("L+1Y"),c=t("zLVn"),a=t("q1tI"),o=t("vOnD"),l=o.d.video.withConfig({displayName:"videoPlayer__StyledVideo",componentId:"sc-1erqz7k-0"})(["width:100%;outline:none;"]);function j(e){var n=e.src,t=Object(c.a)(e,["src"]);return Object(i.jsx)(l,Object.assign({src:n,controls:!0,autoPlay:!0},t,{children:"Your browser doesn't support HTML5 video playback. Please use a modern browser."}))}var d=t("5Vy0"),b=t("IgWi"),u=t("gSOQ"),m=t("W/7f"),O=t("Qq1W"),g=t("FT44"),h=o.d.img.withConfig({displayName:"video__StyledCover",componentId:"b074nb-0"})(["width:48px;height:64px;object-fit:cover;"]),p=Object(o.d)(s.b).attrs({row:!0,alignItems:"center",gapsRow:"1rem"}).withConfig({displayName:"video__StyledVideoInfo",componentId:"b074nb-1"})(["padding:0 1rem;"]);function x(e){var n=e.pageContext,t=n.video,c=n.anime,o=n.theme,l=n.entry,x=Object(b.a)(c).image;return Object(a.useEffect)((function(){o&&x&&(navigator.mediaSession.metadata=new MediaMetadata({title:o.slug+" • "+o.song.title,artist:o.song.artists.map((function(e){return e.as||e.name})).join(", "),album:c.name,artwork:[{src:x,sizes:"512x512",type:"image/jpeg"}]}))}),[o,x]),Object(i.jsxs)(s.b,{gapsColumn:"1rem",children:[Object(i.jsx)(j,{src:t.link.replace(".dev",".moe")}),Object(i.jsxs)(p,{children:[Object(i.jsx)(h,{alt:"Cover",src:x}),Object(i.jsx)(s.a,{flex:1,children:Object(i.jsxs)(s.b,{justifyContent:"center",gapsColumn:"0.25rem",children:[Object(i.jsx)(u.a,{song:o.song}),Object(i.jsxs)(d.a,{small:!0,maxLines:1,children:[Object(i.jsxs)(d.a,{children:[o.slug," from "]}),Object(i.jsx)(r.a,{to:"/anime/"+c.alias,children:Object(i.jsx)(d.a,{link:!0,children:c.name})})]})]})}),Object(i.jsx)(g.a,{silent:!0,children:Object(i.jsxs)(s.b,{row:!0,alignItems:"center",gapsRow:"0.5rem",children:[Object(i.jsxs)(d.a,{small:!0,children:["Version ",l.version||1]}),Object(i.jsx)(O.a,{entry:l}),Object(i.jsx)(d.a,{link:!0,children:"•"}),Object(i.jsx)(m.a,{video:t})]})})]})]})}}}]);
//# sourceMappingURL=component---src-templates-video-js-f230f99461b16c6c1f18.js.map