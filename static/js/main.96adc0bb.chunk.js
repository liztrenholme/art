(this.webpackJsonpart=this.webpackJsonpart||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/Biscuit.98d506df.jpg"},function(e,a,t){e.exports=t.p+"static/media/Blackbird.6566aee1.jpg"},function(e,a,t){e.exports=t.p+"static/media/Cabin.8d1a8629.jpg"},function(e,a,t){e.exports=t.p+"static/media/Dirt.235a5b45.jpg"},function(e,a,t){e.exports=t.p+"static/media/Hoggy.546b16ab.jpg"},function(e,a,t){e.exports=t.p+"static/media/Magoo.e7717902.jpg"},function(e,a,t){e.exports=t.p+"static/media/Sparrow.043fb7b2.jpg"},function(e,a,t){e.exports=t.p+"static/media/Time.bf52df0f.jpg"},function(e,a,t){e.exports=t.p+"static/media/viandan.89bf5f4d.jpg"},,function(e,a,t){},,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(17),c=t.n(o),l=(t(23),t(24),t(1)),s=t(2),r=t(4),m=t(3),d=t(5),u=(t(16),t(6)),h=t.n(u),p=t(7),g=t.n(p),v=t(8),y=t.n(v),N=t(9),b=t.n(N),f=t(10),k=t.n(f),E=t(11),M=t.n(E),C=t(12),O=t.n(C),T=t(13),x=t.n(T),w=t(14),j=t.n(w),S=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(r.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={visibleButtons:"",modalVisible:!1,selectedImage:"",descriptionVisible:!1,selectedDescription:""},t.handleButtons=function(e){return function(){t.setState({visibleButtons:e})}},t.handleSelectImage=function(e,a){return function(){t.setState({selectedImage:e,modalVisible:!0,selectedDescription:a})}},t.toggleDescription=function(){return t.state.descriptionVisible?t.setState({descriptionVisible:!1}):t.setState({descriptionVisible:!0})},t.handleNoTake=function(e){return e.preventDefault()},t.closeModal=function(){return t.setState({modalVisible:!1,descriptionVisible:!1})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.visibleButtons,t=e.modalVisible,n=e.selectedImage,o=e.descriptionVisible,c=e.selectedDescription;return i.a.createElement("div",{className:"tiles-container"},t?i.a.createElement("div",{className:"modal-overlay",onClick:this.closeModal}):null,t?i.a.createElement("div",{className:"image-modal"},o?i.a.createElement("p",{onClick:this.toggleDescription,className:"modal-image modal-image-description"},c):i.a.createElement("img",{alt:c,src:n,className:"modal-image",onMouseDown:this.handleNoTake,onContextMenu:this.handleNoTake,onClick:this.toggleDescription})):null,i.a.createElement("div",{className:"art-image-container"},i.a.createElement("img",{src:b.a,alt:'"Texas Dirt", acrylic on canvas.',className:"art-image",onMouseOver:this.handleButtons("dirt"),onMouseDown:this.handleNoTake,onContextMenu:this.handleNoTake,onClick:this.handleSelectImage(b.a,'"Texas Dirt", acrylic on canvas.'),style:"dirt"===a?{opacity:1}:{opacity:.9}})),i.a.createElement("div",{className:"art-image-container"},i.a.createElement("img",{src:h.a,alt:'"Biscuit", acrylic on canvas.',className:"art-image",onMouseOver:this.handleButtons("biscuit"),onMouseDown:this.handleNoTake,onContextMenu:this.handleNoTake,onClick:this.handleSelectImage(h.a,'"Biscuit", acrylic on canvas.'),style:"biscuit"===a?{opacity:1}:{opacity:.9}})),i.a.createElement("div",{className:"art-image-container"},i.a.createElement("img",{src:y.a,alt:'"Cabin in the Woods", acrylic on canvas.',className:"art-image",onMouseOver:this.handleButtons("cabin"),onMouseDown:this.handleNoTake,onContextMenu:this.handleNoTake,onClick:this.handleSelectImage(y.a,'"Cabin in the Woods", acrylic on canvas.'),style:"cabin"===a?{opacity:1}:{opacity:.9}})),i.a.createElement("div",{className:"art-image-container"},i.a.createElement("img",{src:g.a,alt:'"Blackbird", acrylic on canvas.',className:"art-image",onMouseOver:this.handleButtons("blackbird"),onMouseDown:this.handleNoTake,onContextMenu:this.handleNoTake,onClick:this.handleSelectImage(g.a,'"Blackbird", acrylic on canvas.'),style:"blackbird"===a?{opacity:1}:{opacity:.9}})),i.a.createElement("div",{className:"art-image-container"},i.a.createElement("img",{src:j.a,alt:'"Viandan Castle", acrylic on canvas.',className:"art-image",onMouseOver:this.handleButtons("viandan"),onMouseDown:this.handleNoTake,onContextMenu:this.handleNoTake,onClick:this.handleSelectImage(j.a,'"Viandan Castle", acrylic on canvas.'),style:"viandan"===a?{opacity:1}:{opacity:.9}})),i.a.createElement("div",{className:"art-image-container"},i.a.createElement("img",{src:x.a,alt:'"Time Flies", acrylic on canvas.',className:"art-image",onMouseOver:this.handleButtons("time"),onMouseDown:this.handleNoTake,onContextMenu:this.handleNoTake,onClick:this.handleSelectImage(x.a,'"Time Flies", acrylic on canvas.'),style:"time"===a?{opacity:1}:{opacity:.9}})),i.a.createElement("div",{className:"art-image-container"},i.a.createElement("img",{src:k.a,alt:'"Hedgehog", colored pencil on paper.',className:"art-image",onMouseOver:this.handleButtons("hoggy"),onMouseDown:this.handleNoTake,onContextMenu:this.handleNoTake,onClick:this.handleSelectImage(k.a,'"Hedgehog", colored pencil on paper.'),style:"hoggy"===a?{opacity:1}:{opacity:.9}})),i.a.createElement("div",{className:"art-image-container"},i.a.createElement("img",{src:O.a,alt:'"Sparrow", acrylic on canvas.',className:"art-image",onMouseOver:this.handleButtons("sparrow"),onMouseDown:this.handleNoTake,onContextMenu:this.handleNoTake,onClick:this.handleSelectImage(O.a,'"Sparrow", acrylic on canvas.'),style:"sparrow"===a?{opacity:1}:{opacity:.9}})),i.a.createElement("div",{className:"art-image-container"},i.a.createElement("img",{src:M.a,alt:'"Mr. Magoo", ebony pancil on paper.',className:"art-image",onMouseOver:this.handleButtons("mugsy"),onMouseDown:this.handleNoTake,onContextMenu:this.handleNoTake,onClick:this.handleSelectImage(M.a,'"Mr. Magoo", ebony pancil on paper.'),style:"mugsy"===a?{opacity:1}:{opacity:.9}})))}}]),a}(n.Component),B=(t(25),function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"contact"},i.a.createElement("form",{className:"contact-form",action:"https://formspree.io/liztrenholme@gmail.com",method:"POST"},i.a.createElement("input",{className:"text-input",placeholder:"First Name",required:!0,type:"text",name:"first_name"}),i.a.createElement("input",{className:"text-input",placeholder:"Last Name",type:"text",name:"last_name"}),i.a.createElement("input",{className:"text-input",placeholder:"Your Email Address",required:!0,type:"email",name:"_replyto"}),i.a.createElement("textarea",{className:"text-input",required:!0,rows:"10",cols:"38",name:"message",placeholder:"Message...",width:"50%",height:"50%"}),i.a.createElement("input",{type:"submit",className:"submit-button",value:"Send"})))}}]),a}(n.Component)),D=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(r.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={menuOpen:!1,contactModalOpen:!1},t.handleToggleMenu=function(){return t.state.menuOpen?t.setState({menuOpen:!1}):t.setState({menuOpen:!0})},t.handleToggleContact=function(){return t.state.contactModalOpen?t.setState({contactModalOpen:!1}):t.setState({contactModalOpen:!0})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.menuOpen,t=e.contactModalOpen;return i.a.createElement("div",{className:"main"},i.a.createElement("h1",{onClick:this.handleToggleMenu},"Liz Trenholme Art."),a?i.a.createElement("div",{className:"menu"},i.a.createElement("p",{className:"menuCloser",onClick:this.handleToggleMenu},"^"),i.a.createElement("a",{className:"menuItem",href:"https://liztrenholme.com"},"main site"),i.a.createElement("p",{className:"menuItem",onClick:this.handleToggleContact},"contact")):null,t?i.a.createElement("div",{className:"modal-overlay",onClick:this.handleToggleContact}):null,t?i.a.createElement("div",{className:"modal-image"},i.a.createElement(B,null)):null,i.a.createElement(S,null),i.a.createElement("footer",null,"\u24b8 2000-",(new Date).getFullYear()," Liz Trenholme Art | All rights reserved."))}}]),a}(n.Component);var I=function(){return i.a.createElement("div",null,i.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[18,1,2]]]);
//# sourceMappingURL=main.96adc0bb.chunk.js.map