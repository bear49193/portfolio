(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/plato.9542bf91.svg"},2:function(e,t,a){e.exports={navbarItem:"home_navbarItem__18g7W",title:"home_title__1Jqnv",subheading:"home_subheading__2bWaG",subheading2:"home_subheading2__2y189",floating:"home_floating__wWG-A","slide-in-blurred-bottom":"home_slide-in-blurred-bottom__1ikQD",rotatecenter:"home_rotatecenter__1dCYF","rotate-center":"home_rotate-center__-9pxX",cardss:"home_cardss__KKp4a",custombtn:"home_custombtn__2pNLG",custombtnS:"home_custombtnS__14XcY",custombtnW:"home_custombtnW__BAuia",subheader:"home_subheader__2UKVW",svgg:"home_svgg__1Ha2Z",iclick:"home_iclick__1MYdU",cluster:"home_cluster__35N1i"}},26:function(e,t,a){e.exports=a.p+"static/media/plate.50baad3b.svg"},27:function(e,t,a){e.exports=a.p+"static/media/hexlogo.8f53edd1.svg"},28:function(e,t,a){e.exports=a.p+"static/media/code.f3afea6e.svg"},33:function(e,t,a){e.exports=a(50)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(25),o=a.n(s),i=a(31),c=a(3),r=(a(38),a(5)),m=a(10),d=a(11),u=a(15),p=a(14),h=a(2),g=a.n(h),f=a(12),b=a.n(f),v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).showIt=function(e,t){t.preventDefault(),document.getElementById(e).scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},n.toggle=function(){""===n.state.burger?n.setState({burger:"is-active"}):n.setState({burger:""})},n.state={burger:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("nav",{className:"navbar is-dark",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("a",{className:"navbar-item",id:g.a.navbarItem,href:"# "},l.a.createElement("img",{src:b.a,alt:"logo",style:{maxHeight:"2.75rem"}})),l.a.createElement("a",{role:"button",className:"navbar-burger burger ".concat(this.state.burger),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",href:"# ",onClick:this.toggle},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}))),l.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu ".concat(this.state.burger)},l.a.createElement("div",{className:"navbar-end",style:{fontFamily:"Nunito",fontWeight:"bold"}},l.a.createElement("a",{className:"navbar-item",id:g.a.navbarItem,href:"/"},"HOME"),l.a.createElement("a",{className:"navbar-item",id:g.a.navbarItem,href:"# ",onClick:function(t){return e.showIt("portfolio",t)}},"PORTFOLIO"),l.a.createElement("a",{className:"navbar-item",id:g.a.navbarItem,href:"# ",onClick:function(t){return e.showIt("about",t)}},"ABOUT"),l.a.createElement("a",{className:"navbar-item",id:g.a.navbarItem,href:"# ",onClick:function(t){return e.showIt("contact",t)}},"CONTACT"))))}}]),a}(n.Component),y=(a(39),a(40),a(26)),E=a.n(y),x=a(27),N=a.n(x),w=a(28),k=a.n(w),S=a(29),_=a.n(S),C=a(30),z=a.n(C),I=a(32),j=a(17),F=a(19),A=a(22);A.a.initialize("UA-145139004-1",{debug:!1,titleCase:!1,gaOptions:{userId:145139004}}),A.a.pageview(window.location.pathname+window.location.search);var W=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={capvalue:null,sendinfo:"Send Message",butStyle:"".concat(g.a.custombtn)},e.setCaptcha=function(t){e.setState({capvalue:t,sendinfo:"Send Message",butStyle:"".concat(g.a.custombtn)})},e.showIt=function(e){document.getElementById(e).scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},e.sendEmail=function(t){t.preventDefault(),null!==e.state.capvalue&&"sent"!==e.state.capvalue?(e.setState({sendinfo:"Sending Message"}),z.a.sendForm("gmail","contact",t.target,"user_yYmXLFgei1Nw3P3rJBMaS").then((function(t){e.setState({sendinfo:"Message Sent Successfully",capvalue:"sent",butStyle:"".concat(g.a.custombtnS)})}),(function(t){console.log(t.text),"sent"!==e.state.capvalue&&e.setState({sendinfo:"Sending Failed!",butStyle:"".concat(g.a.custombtnW)})}))):"sent"!==e.state.capvalue&&e.setState({sendinfo:"Please Verify Captcha",butStyle:"".concat(g.a.custombtnW)})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return this.props.history.listen((function(e){window.ga("set","page",e.pathname+e.search),window.ga("send","pageview")})),l.a.createElement("div",{style:{overflow:"Hidden"}},l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700|Nunito:200,300,400,400i,600,700&display=swap",rel:"stylesheet"}),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),l.a.createElement("meta",{name:"description",content:"Hello! I am Robbie Abbott, An web developer and designer."}),l.a.createElement("section",{className:"hero is-fullheight ".concat(g.a.svgg)},l.a.createElement(v,null),l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container",style:{marginLeft:"3vw"}},l.a.createElement("p",{id:g.a.title},"HELLO, ",l.a.createElement("br",null),"I AM Robbie."),l.a.createElement("p",{className:g.a.subheading},"An web developer and designer."),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return e.showIt("explore")},className:"button",id:g.a.custombtn},"Explore")),l.a.createElement("div",{className:g.a.cardss},l.a.createElement("img",{alt:"logo",className:g.a.floating,style:{position:"absolute",zIndex:2,margin:0},src:b.a}),l.a.createElement("img",{alt:"logo",className:g.a.rotatecenter,style:{position:"absolute",zIndex:1},src:E.a})))),B("What I built?","Awesome stuff"),l.a.createElement("section",{className:"hero is-fullheight ".concat(g.a.svgg),style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("div",{id:"portfolio",className:"columns is-desktop",style:{padding:20,paddingBottom:0}},l.a.createElement("div",{className:"column ".concat(g.a.cluster)},M("https://res.cloudinary.com/azizcloud/image/upload/v1590315235/portfolio/d5vfhxrpvitibwnu4fqs.jpg","Cassiopeia CMS","A bodacious, secure, headless content management system.",["MongoDB","Express JS","React JS","Node JS"],"https://github.com/bear49193/CassiopeiaCMS")),l.a.createElement("div",{className:"column ".concat(g.a.cluster)},M("https://res.cloudinary.com/azizcloud/image/upload/t_equla/v1590315236/portfolio/lxx99yyawhv5evn6mmpz.jpg","Quiva - Fancy Text Generator","A fancy text app for android for creating stylish text based on unicode characters and glyphs.",["JavaScript","React Native"],"https://galaxystore.samsung.com/detail/com.quiva")),l.a.createElement("div",{className:"column ".concat(g.a.cluster)},M("https://res.cloudinary.com/azizcloud/image/upload/v1590315235/portfolio/pqecxwjuxinwmxak7tkw.jpg","Material Requirement Processing","A web-app for calculating the materials and components needed to manufacture a large number of products.",["PHP","Oracle","Material UI"],"https://github.com/AzizStark/Material-Requirement-Processing")),l.a.createElement("div",{className:"column ".concat(g.a.cluster)},M("https://res.cloudinary.com/azizcloud/image/upload/v1590315673/portfolio/wzqvjrhohtjmo68m8voh.png","Desktop Widgets","15+ Widgets for desktop with varying functionalities. Downloaded more than 100,000 times.",["Rainmeter"],"https://www.deviantart.com/azizstark/gallery/67780296/widgets"))),l.a.createElement("div",{className:"columns is-desktop cluster",style:{padding:20,paddingTop:0}},l.a.createElement("div",{className:"column ".concat(g.a.cluster)},M("https://res.cloudinary.com/azizcloud/image/upload/v1590315233/portfolio/htnl1q9chykaheksucew.jpg","Stash","A web-based cryptographic text hasher and encrypter.",["JavaScript","Svelte JS","Node JS"],"https://stash.azizstark.tech")),l.a.createElement("div",{className:"column ".concat(g.a.cluster)},M("https://res.cloudinary.com/azizcloud/image/upload/v1590315235/portfolio/agncefcs92v7duq9xwfd.jpg","Tech Zeal","A website for the college symposium that was used by more than 1000 students to register for the events.",["HTML","JavaScript","Firebase"],"https://gennext.web.app/")),l.a.createElement("div",{className:"column ".concat(g.a.cluster)},M("https://res.cloudinary.com/azizcloud/image/upload/v1590315234/portfolio/u021xlqihtpanv8kckoy.jpg","Foodie","A front-end user interface for food ordering web-app with a smooth user experience.",["JavaScript","React JS"],"https://foodie.azizstark.tech")),l.a.createElement("div",{className:"column ".concat(g.a.cluster)},M("https://res.cloudinary.com/azizcloud/image/upload/t_equla/v1590315235/portfolio/imv2i0jyhabif9k9uqhw.jpg","Zippy","E-Magazines consisting of articles from my college friends.",["Figma","Photoshop"],"https://drive.google.com/file/d/1svlPLO3_Q4nVtspJMnRiZTasUhOLaMG7/view")))),B("What I do?","Code and Design"),l.a.createElement("section",{id:"explore",className:"hero is-fullheight ".concat(g.a.svgg),style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("div",{className:"columns is-desktop",style:{padding:"10%",paddingTop:"12vw"}},l.a.createElement("div",{className:"column "},l.a.createElement("p",{style:R.ltext},"Clean & Optimized Code")," ",l.a.createElement("br",null),l.a.createElement("h2",{style:{fontFamily:"Nunito",fontWeight:300,fontSize:"calc(12px + 0.8vh)",textAlign:"justify"}},"Clean code reads like well-written prose. Clean code never obscures the designer\u2019s intent but rather is full of crisp abstractions."),l.a.createElement("br",null),l.a.createElement("h2",{style:R.stext},"JavaScript"),l.a.createElement("progress",{style:{height:5,marginBottom:10},className:"progress is-small is-success",value:"94",max:"100"}),l.a.createElement("h2",{style:R.stext},"Python"),l.a.createElement("progress",{style:{height:5,marginBottom:10},className:"progress is-small is-success",value:"88",max:"100"}),l.a.createElement("h2",{style:R.stext},"Java"),l.a.createElement("progress",{style:{height:5},className:"progress is-small is-success",value:"82",max:"100"})),l.a.createElement("div",{className:"column is-half-desktop",style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("div",{className:"container",style:{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement(_.a,{leftImage:k.a,rightImage:N.a,handle:l.a.createElement(j.a,{icon:F.a,style:{backgroundColor:"#e6f2fb",color:"#45364E",borderRadius:30,padding:10,border:0},size:"3x"}),sliderLineColor:"#e6f2fb",sliderLineWidth:8,sliderPositionPercentage:.475}),"      ",l.a.createElement("br",null)),l.a.createElement("div",{style:R.flexcenter},l.a.createElement("button",{id:g.a.custombtn,className:"button",onClick:function(){window.open("https://app.enhancv.com/share/85127ceb")}},"Download Resume"))),l.a.createElement("div",{className:"column"},l.a.createElement("p",{style:R.ltext},"Beautiful Design & Interface")," ",l.a.createElement("br",null),l.a.createElement("h2",{style:{fontFamily:"Nunito",fontWeight:300,fontSize:"calc(12px + 0.8vh)",textAlign:"justify"}},"I believe in simplicity, clarity and always loves minimalism. These facts allow me to create designs smoother than a baby\u2019s bottom. "),l.a.createElement("br",null),l.a.createElement("h2",{style:R.stext},"Figma"),l.a.createElement("progress",{style:{height:5,marginBottom:10},className:"progress is-small is-success",value:"96",max:"100"}),l.a.createElement("h2",{style:R.stext},"Illustrator"),l.a.createElement("progress",{style:{height:5,marginBottom:10},className:"progress is-small is-success",value:"86",max:"100"}),l.a.createElement("h2",{style:R.stext},"Photoshop"),l.a.createElement("progress",{style:{height:5},className:"progress is-small is-success",value:"92",max:"100"})))),B("Who am I?","I'm Robbie"),l.a.createElement("section",{id:"about",className:"hero is-fullheight ".concat(g.a.svgg),style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("div",{className:"columns is-desktop",style:{padding:"10%"}},l.a.createElement("div",{className:"column  has-text-centered",style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("img",{alt:"aziz",src:"me.jpg",style:{width:"55%",borderRadius:8}})),l.a.createElement("div",{className:"column is-three-fifths-desktop",style:{fontFamily:"nunito",paddingLeft:0}},l.a.createElement("h1",{style:{display:"inline-block",fontSize:"2rem",color:"rgb(28, 255, 189)",fontWeight:500}},"ME"),l.a.createElement("div",{style:{marginLeft:15,display:"inline-block",background:"linear-gradient(91.18deg, rgb(28, 255, 189) -16.44%, rgba(46, 167, 255, 0) 107.71%)",borderRadius:21,width:"calc(100% - 4rem)",height:6}}),l.a.createElement("div",{className:"contents",style:{fontSize:"calc(12px + 1vh)",fontWeight:300,padding:33,paddingLeft:0,paddingRight:0,textAlign:"justify"}},"Hey! ",l.a.createElement("span",{role:"img","aria-label":"wave"},"\ud83d\udc4b"),"I'm Robbie Abbott, I love web and mobile app development and have developed a few websites and projects\ufe0f. I'm also passionate about design ",l.a.createElement("span",{role:"img","aria-label":"pallete"},"\ud83c\udfa8"),". I spend my free time listening to music ",l.a.createElement("span",{role:"img","aria-label":"music"},"\ud83c\udfa7"),", playing video games and surfing the internet to explore the world.")))),B("Want to talk?","Contact me"),l.a.createElement("section",{id:"contact",className:"hero is-fullheight ".concat(g.a.svgg),style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("div",{className:"columns is-desktop"},l.a.createElement("div",{className:"column is-half-desktop has-text-left ",style:{fontFamily:"Nunito",fontWeight:500,margin:"auto",color:"#ffffff",paddingRight:"10%",paddingLeft:"10%"}},l.a.createElement("form",{className:"contact-form",onSubmit:this.sendEmail},l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Name"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-medium",name:"user_name",type:"text",style:R.input,required:!0}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Email"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-medium",type:"email",name:"user_email",style:R.input,required:!0}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Message"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{className:"textarea is-medium",name:"message",style:R.input,required:!0}))),l.a.createElement("div",{style:R.flexcenter},l.a.createElement(I.a,{sitekey:"6LcHgMkUAAAAAFJHIMlbY2m2N0wSchYl5Ga2wJXU",theme:"dark",onChange:this.setCaptcha})),l.a.createElement("br",null),l.a.createElement("div",{className:"control"},l.a.createElement("button",{type:"submit",value:"Send",id:this.state.butStyle,className:"button is-fullwidth has-text-weight-medium is-medium"},this.state.sendinfo)))))),l.a.createElement("footer",{className:"footer",style:{backgroundColor:"#152636",color:"#ffffff",padding:"2%"}},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column has-text-centered"},l.a.createElement("p",{style:{fontFamily:"Nunito",fontWeight:400,color:"rgb(28, 255, 189)",fontSize:"calc(12px + 0.3vh)"}},"Content and Graphics \xa9 2021 RobbieAbbott")))))}}]),a}(n.Component);function B(e,t){return l.a.createElement("section",{className:"hero is-primary"},l.a.createElement("div",{className:"hero-body",style:{backgroundColor:"rgb(14, 35, 54)"}},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:g.a.subheading2,style:{fontSize:"calc(22px + 2.0vw)",fontWeight:500}},e),l.a.createElement("h2",{className:g.a.subtitle,style:{fontSize:"calc(12px + 1.2vw)",fontFamily:"Nunito",fontWeight:300,color:"rgb(28, 255, 189)"}},t))))}function M(e,t,a,n,s){return l.a.createElement("div",{className:"container",style:{padding:8,background:"#25364E",borderRadius:6,height:"100%",display:"flex",flexDirection:"column"}},l.a.createElement("div",{className:"imghvr-blur"},l.a.createElement("img",{alt:"project",style:{borderRadius:4,objectFit:"contain"},src:e}),l.a.createElement("figcaption",{style:{padding:20,fontSize:"calc(10px + 0.6vw)",fontFamily:"nunito"}},l.a.createElement("a",{style:R.bcolor,href:s,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(j.a,{className:g.a.iclick,icon:F.b,size:"2x"})))),l.a.createElement("p",{style:{color:"#1CFFBD",fontFamily:"Nunito",fontWeight:300,fontSize:"calc(12px + 0.8vh)",marginTop:6}}," ",t," "),l.a.createElement("div",{style:{borderTop:"1px dashed #109E75",marginTop:6,marginBottom:6}}),l.a.createElement("p",{style:{color:"#E5F2FB",fontFamily:"Nunito",fontWeight:300,fontSize:"calc(0.8vh + 0.4vw * 2px)"}},a),l.a.createElement("div",{style:{height:"100%",display:"flex"}},l.a.createElement("p",{style:{alignSelf:"flex-end",width:"100%",backgroundColor:"#A6B1C0",borderRadius:4,marginTop:6,color:"#131C2A",fontFamily:"Nunito",fontWeight:400,fontSize:"calc(9px + 0.8vh)",textAlign:"justify",display:"flex",flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}},n.map((function(e,t){return l.a.createElement("span",{key:t}," ",e," ")})))))}var R={input:{backgroundColor:"#0B1826",borderColor:"#E5F2FB",color:"#FFFFFF"},icon:{padding:6},bcolor:{color:"rgb(28, 255, 189)",display:"flex",alignItems:"center",justifyContent:"center"},stext:{fontFamily:"Nunito",fontWeight:400,textAlign:"justify"},ltext:{fontFamily:"Nunito",fontWeight:500,color:"#e6f2fb",fontSize:"calc(1.8rem)"},flexcenter:{display:"flex",justifyContent:"center"}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=Object(r.a)(),J=l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(c.a,{exact:!0,path:"/",component:W,history:O})));o.a.render(J,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.83a154c9.chunk.js.map