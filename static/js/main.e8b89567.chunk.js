(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__31UGh",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1Cg98"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__50QJW",Modal:"Modal_Modal__8yRaT"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__rx4mQ"}},24:function(e,t,a){e.exports={Button:"Button_Button__5HEVh"}},25:function(e,t,a){e.exports={App:"App_App__3o2Aa"}},71:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),l=(a(31),a(13)),s=a(4),i=a(5),u=a(7),h=a(6),m=a(22),d=a.n(m),g=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n;return d.a.get("https://pixabay.com/api/?key=20760702-5249c5293b61b59f393da4efc&q=".concat(a,"&image_type=photo&orientation=horizontal&per_page=12&page=").concat(r)).then((function(e){return e.data.hits}))},b=a(8),p=a.n(b),j=a(0),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:p.a.Searchbar,children:Object(j.jsxs)("form",{className:p.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:p.a.SearchFormButton,children:Object(j.jsx)("span",{className:p.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:p.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component),y=a(23),O=a.n(y),v=a(11),S=a.n(v),_=function(e){var t=e.tags,a=e.webformat,n=e.largeImage,r=e.openModal;return Object(j.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(j.jsx)("img",{src:a,alt:t,className:S.a.ImageGalleryItemImage,onClick:function(){r(n)}})})},x=function(e){var t=e.hits,a=e.onClick;return Object(j.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,o=e.largeImageURL;return Object(j.jsx)(_,{webformat:n,tags:r,largeImage:o,openModal:a},t)}))})},I=a(24),w=a.n(I),C=function(e){var t=e.onClick;return Object(j.jsx)("button",{className:w.a.Button,type:"button",onClick:t,children:"Load more"})},k=a(12),M=a.n(k),F=document.querySelector("#modal-root"),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC"),e.props.onClose())},e.handlOverlayClick=function(t){console.log("\u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438 \u0432 \u043e\u0432\u0435\u0440\u043b\u0435\u0439"),t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.children;return Object(o.createPortal)(Object(j.jsx)("div",{className:M.a.Overlay,onClick:this.handlOverlayClick,children:Object(j.jsx)("div",{className:M.a.Modal,children:e})}),F)}}]),a}(n.Component),G=a(25),B=a.n(G),N=a(26),E=a.n(N),Q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)(E.a,{type:"Audio",color:"#00BFFF",height:80,width:80})}}]),a}(n.Component),q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hits:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,showModal:!1,largeImageURL:""},e.scrollTo=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,hits:[],error:null})},e.fetchHits=function(){var t=e.state,a=t.currentPage,n={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),g(n).then((function(t){e.setState((function(e){return{hits:[].concat(Object(l.a)(e.hits),Object(l.a)(t)),currentPage:e.currentPage+1,total:t.total}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.getElem=function(t){e.setState({largeImageURL:t}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchHits(),this.scrollTo()}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.isLoading,n=e.hits,r=e.error,o=e.largeImageURL,c=(e.total,(n.length>0&&n.length)>0&&!a);return Object(j.jsxs)("div",{className:B.a.App,children:[r&&Object(j.jsx)("h1",{color:"red",children:"Sorry! Enter another request!!!"}),Object(j.jsx)(f,{onSubmit:this.onChangeQuery}),a&&Object(j.jsx)(Q,{}),t&&Object(j.jsx)(L,{onClose:this.toggleModal,children:Object(j.jsx)("img",{src:o,alt:"foto"})}),Object(j.jsx)(x,{hits:n,onClick:this.getElem}),c&&Object(j.jsx)(C,{onClick:this.fetchHits})]})}}]),a}(n.Component);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1n5lq",SearchForm:"Searchbar_SearchForm__D_okz",SearchFormButton:"Searchbar_SearchFormButton__IVzxE",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3xGzZ",SearchFormInput:"Searchbar_SearchFormInput___OXBf"}}},[[71,1,2]]]);
//# sourceMappingURL=main.e8b89567.chunk.js.map