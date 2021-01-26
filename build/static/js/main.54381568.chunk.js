(this["webpackJsonpreact-around"]=this["webpackJsonpreact-around"]||[]).push([[0],{250:function(e,t,a){},529:function(e,t,a){},530:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(9),s=a.n(r),l=(a(250),a(16)),i=a(17),c=a(19),u=a(18),m=a.p+"static/media/logo.103b5fa1.svg",d=a(10),p=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:m,className:"App-logo",alt:"logo"}),n.a.createElement("span",{className:"App-title"},"Around"),this.props.isLoggedIn?n.a.createElement("a",{className:"logout",onClick:this.props.handleLogout},n.a.createElement(d.a,{type:"logout"})," ","Logout"):null)}}]),a}(n.a.Component),g=a(540),h=a(536),f=a(537),v=a(49),b=a(70),y="http://35.225.128.253:8080",E="TOKEN_KEY",w={enableHighAccuracy:!0,maximumAge:3e5,timeout:27e3},O="POS_KEY",L="Bearer",S="image",k="video",P="unknown",j=.02,C="around",I=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={confirmDirty:!1,autoCompleteResult:[]},e.handleSubmit=function(t){t.preventDefault(),e.props.form.validateFields((function(t,a){t||(console.log("Received values of form: ",a),fetch("".concat(y,"/signup"),{method:"POST",body:JSON.stringify({username:a.username,password:a.password})}).then((function(e){if(e.ok)return e.text();throw new Error(e.statusText)})).then((function(t){console.log(t),g.a.success("Registration succeed!"),e.props.history.push("/login")})).catch((function(e){console.error(e),g.a.error("Registration failed.")})))}))},e.handleConfirmBlur=function(t){var a=t.target.value;e.setState({confirmDirty:e.state.confirmDirty||!!a})},e.compareToFirstPassword=function(t,a,o){var n=e.props.form;a&&a!==n.getFieldValue("password")?o("Two passwords that you enter is inconsistent!"):o()},e.validateToNextPassword=function(t,a,o){var n=e.props.form;a&&e.state.confirmDirty&&n.validateFields(["confirm"],{force:!0}),o()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};return n.a.createElement(h.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit,className:"register"}),n.a.createElement(h.a.Item,{label:"Username"},e("username",{rules:[{required:!0,message:"Please input your username!"}]})(n.a.createElement(f.a,null))),n.a.createElement(h.a.Item,{label:"Password",hasFeedback:!0},e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(n.a.createElement(f.a.Password,null))),n.a.createElement(h.a.Item,{label:"Confirm Password",hasFeedback:!0},e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(n.a.createElement(f.a.Password,{onBlur:this.handleConfirmBlur}))),n.a.createElement(h.a.Item,t,n.a.createElement(v.a,{type:"primary",htmlType:"submit"},"Register"),n.a.createElement("p",null,"I already have an account, go back to ",n.a.createElement(b.b,{to:"/login"},"login"))))}}]),a}(n.a.Component),N=h.a.create({name:"register"})(I),T=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).handleSubmit=function(t){t.preventDefault(),e.props.form.validateFields((function(t,a){t||(console.log("Received values of form: ",a),fetch("".concat(y,"/login"),{method:"POST",body:JSON.stringify({username:a.username,password:a.password})}).then((function(e){if(e.ok)return e.text();throw new Error(e.stateText)})).then((function(t){console.log(t),e.props.handleLoginSucceed(t),g.a.success("Login succeed!")})).catch((function(e){console.error(e),g.a.error("Login failed.")})))}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return n.a.createElement(h.a,{onSubmit:this.handleSubmit,className:"login-form"},n.a.createElement(h.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(n.a.createElement(f.a,{prefix:n.a.createElement(d.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),n.a.createElement(h.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(f.a,{prefix:n.a.createElement(d.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),n.a.createElement(h.a.Item,null,n.a.createElement(v.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",n.a.createElement(b.b,{to:"/register"},"register now!")))}}]),a}(n.a.Component),F=h.a.create({name:"normal_login"})(T),A=a(535),x=a(531),M=a(532),B=a(533),D=a(539),G=a(151),R=a(234),W=a.n(R),q=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.images.map((function(e){return Object(G.a)(Object(G.a)({},e),{},{customOverlay:n.a.createElement("div",{style:J},n.a.createElement("div",null,"".concat(e.user,": ").concat(e.caption)))})}));return n.a.createElement("div",{style:z},n.a.createElement(W.a,{backdropClosesModal:!0,images:e,enableImageSelection:!1}))}}]),a}(o.Component),z={display:"block",minHeight:"1px",width:"100%",border:"1px solid #ddd",overflow:"auto"},J={backgroundColor:"rgba(0, 0, 0, 0.8)",maxHeight:"240px",overflow:"hidden",position:"absolute",bottom:"0",width:"100%",color:"white",padding:"2px",fontSize:"90%"},U=a(538),V=a(534),H=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).normFile=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},e.beforeUpload=function(){return!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}};return n.a.createElement(h.a,t,n.a.createElement(h.a.Item,{label:"Message"},e("message",{rules:[{required:!0,message:"Please input message."}]})(n.a.createElement(f.a,null))),n.a.createElement(h.a.Item,{label:"Image/Video"},n.a.createElement("div",{className:"dropbox"},e("image",{valuePropName:"fileList",getValueFromEvent:this.normFile,rules:[{required:!0,message:"Please select an image."}]})(n.a.createElement(V.a.Dragger,{name:"files",beforeUpload:this.beforeUpload},n.a.createElement("p",{className:"ant-upload-drag-icon"},n.a.createElement(d.a,{type:"inbox"})),n.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),n.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload."))))))}}]),a}(n.a.Component),K=h.a.create()(H),_=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={visible:!1,confirmLoading:!1},e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(){e.form.validateFields((function(t,a){if(console.log(a),!t){var o=localStorage.getItem(E),n=JSON.parse(localStorage.getItem(O)),r=n.lat,s=n.lon,l=new FormData;l.set("lat",r+Math.random()*j*2-j),l.set("lon",s+Math.random()*j*2-j),l.set("message",a.message),l.set("image",a.image[0].originFileObj),e.setState({confirmLoading:!0}),fetch("".concat(y,"/post"),{method:"POST",headers:{Authorization:"".concat(L," ").concat(o)},body:l}).then((function(t){if(t.ok)return e.props.loadPostsByTopic();throw new Error("Failed to create post.")})).then((function(){e.setState({visible:!1,confirmLoading:!1}),e.form.resetFields(),g.a.success("Post created successfully!")})).catch((function(t){console.error(t),g.a.error("Failed to create post."),e.setState({confirmLoading:!1})}))}}))},e.handleCancel=function(){console.log("Clicked cancel button"),e.setState({visible:!1})},e.getFormRef=function(t){e.form=t},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.visible,a=e.confirmLoading;return n.a.createElement("div",null,n.a.createElement(v.a,{type:"primary",onClick:this.showModal},"Create New Post"),n.a.createElement(U.a,{title:"Create New Post",visible:t,onOk:this.handleOk,okText:"Create",confirmLoading:a,onCancel:this.handleCancel},n.a.createElement(K,{ref:this.getFormRef})))}}]),a}(n.a.Component),Y=a(59),Z=a.p+"static/media/blue-marker.5238d997.svg",X=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isOpen:!1},e.handleToggle=function(){e.setState((function(e){return{isOpen:!e.isOpen}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.post,t=e.user,a=e.message,o=e.url,r=e.location,s=e.type,l=r.lat,i=r.lon,c="image"===s,u=c?void 0:{url:Z,scaledSize:new window.google.maps.Size(26,41)};return n.a.createElement(Y.Marker,{position:{lat:l,lng:i},onMouseOver:c?this.handleToggle:void 0,onMouseOut:c?this.handleToggle:void 0,onClick:c?void 0:this.handleToggle,icon:u},this.state.isOpen?n.a.createElement(Y.InfoWindow,null,n.a.createElement("div",null,c?n.a.createElement("img",{src:o,alt:a,className:"around-marker-image"}):n.a.createElement("video",{src:o,controls:!0,className:"around-marker-video"}),n.a.createElement("p",null,"".concat(t,": ").concat(a)))):null)}}]),a}(n.a.Component),$=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).reloadMarker=function(){var t=e.getCenter(),a=e.getRadius();e.props.loadPostsByTopic(t,a)},e.getMapRef=function(t){e.map=t,window.map=t},e}return Object(i.a)(a,[{key:"getCenter",value:function(){var e=this.map.getCenter();return{lat:e.lat(),lon:e.lng()}}},{key:"getRadius",value:function(){var e=this.map.getCenter(),t=this.map.getBounds();if(e&&t){var a=t.getNorthEast(),o=new window.google.maps.LatLng(e.lat(),a.lng());return.001*window.google.maps.geometry.spherical.computeDistanceBetween(e,o)}}},{key:"render",value:function(){if(null==localStorage.getItem(O))var e=37.84469154098336,t=-122.292979660887;else{var a=JSON.parse(localStorage.getItem(O));e=a.lat,t=a.lon}return n.a.createElement(Y.GoogleMap,{ref:this.getMapRef,defaultZoom:11,defaultCenter:{lat:e,lng:t},onDragEnd:this.reloadMarker,onZoomChanged:this.reloadMarker},this.props.posts.map((function(e){return n.a.createElement(X,{post:e,key:e.url})})))}}]),a}(n.a.Component),Q=Object(Y.withScriptjs)(Object(Y.withGoogleMap)($)),ee=A.a.TabPane,te=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoadingGeoLocation:!1,isLoadingPosts:!1,error:"",posts:[],topic:C},e.onSuccessLoadGeoLocation=function(t){console.log(t);var a=t.coords,o=a.latitude,n=a.longitude;localStorage.setItem(O,JSON.stringify({lat:o,lon:n})),e.setState({isLoadingGeoLocation:!1,error:""}),e.loadNearbyPosts()},e.onFailedLoadGeoLocation=function(){e.setState({isLoadingGeoLocation:!1,error:"Failed to load geo location."})},e.loadNearbyPosts=function(t,a){var o=t||JSON.parse(localStorage.getItem(O)),n=o.lat,r=o.lon,s=a||20,l=localStorage.getItem(E);return e.setState({isLoadingPosts:!0,error:""}),fetch("".concat(y,"/search?lat=").concat(n,"&lon=").concat(r,"&range=").concat(s),{method:"GET",headers:{Authorization:"".concat(L," ").concat(l)}}).then((function(e){if(e.ok)return e.json();throw new Error("Failed to load posts.")})).then((function(t){console.log(t),e.setState({posts:t||[],isLoadingPosts:!1})})).catch((function(t){console.error(t),e.setState({isLoadingPosts:!1,error:t.message})}))},e.handleTopicChange=function(t){var a=t.target.value;e.setState({topic:a}),a===C?e.loadNearbyPosts():e.loadFacesAroundTheWolrd()},e.loadFacesAroundTheWolrd=function(){var t=localStorage.getItem(E);return e.setState({isLoadingPosts:!0,error:""}),fetch("".concat(y,"/cluster?term=face"),{method:"GET",headers:{Authorization:"".concat(L," ").concat(t)}}).then((function(e){if(e.ok)return e.json();throw new Error("Failed to load posts")})).then((function(t){console.log(t),e.setState({posts:t||[],isLoadingPosts:!1})})).catch((function(t){console.error(t),e.setState({isLoadingPosts:!1,error:t.message})}))},e.loadPostsByTopic=function(t,a){return e.state.topic===C?e.loadNearbyPosts(t,a):e.loadFacesAroundTheWolrd()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){"geolocation"in navigator?(this.setState({isLoadingGeoLocation:!0,error:""}),navigator.geolocation.getCurrentPosition(this.onSuccessLoadGeoLocation,this.onFailedLoadGeoLocation,w)):this.setState({error:"Geolocation is not supported."})}},{key:"renderImagePosts",value:function(){var e=this.state.posts.filter((function(e){return e.type===S})).map((function(e){return{user:e.user,src:e.url,thumbnail:e.url,caption:e.message,thumbnailWidth:400,thumbnailHeight:300}}));return n.a.createElement(q,{images:e})}},{key:"renderVideoPosts",value:function(){var e=this.state.posts;return n.a.createElement(x.a,{gutter:30},e.filter((function(e){return[k,P].includes(e.type)})).map((function(e){return n.a.createElement(M.a,{span:6,key:e.url},n.a.createElement("video",{src:e.url,controls:!0,className:"video-block"}),n.a.createElement("p",null,e.user,": ",e.message))})))}},{key:"renderPosts",value:function(e){var t=this.state,a=t.error,o=t.isLoadingGeoLocation,r=t.isLoadingPosts,s=t.posts;return a||(o?n.a.createElement(B.a,{tip:"Loading geo location..."}):r?n.a.createElement(B.a,{tip:"Loading posts..."}):s.length>0?e===S?this.renderImagePosts():this.renderVideoPosts():"No nearby posts")}},{key:"render",value:function(){var e=n.a.createElement(_,{loadPostsByTopic:this.loadPostsByTopic});return n.a.createElement("div",null,n.a.createElement(D.a.Group,{onChange:this.handleTopicChange,value:this.state.topic},n.a.createElement(D.a,{value:C},"Posts Around Me"),n.a.createElement(D.a,{value:"face"},"Faces Around The World")),n.a.createElement(A.a,{tabBarExtraContent:e,className:"main-tabs"},n.a.createElement(ee,{tab:"Image Posts",key:"1"},this.renderPosts(S)),n.a.createElement(ee,{tab:"Video Posts",key:"2"},this.renderPosts(k)),n.a.createElement(ee,{tab:"Map",key:"3"},n.a.createElement(Q,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyD3CEh9DXuyjozqptVB5LA-dN7MxWWkr9s&v=3.exp&libraries=geometry,drawing,places",loadingElement:n.a.createElement("div",{style:{height:"100%"}}),containerElement:n.a.createElement("div",{style:{height:"600px"}}),mapElement:n.a.createElement("div",{style:{height:"100%"}}),posts:this.state.posts,loadPostsByTopic:this.loadPostsByTopic}))))}}]),a}(n.a.Component),ae=a(11),oe=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getLogin=function(){return e.props.isLoggedIn?n.a.createElement(ae.a,{to:"/home"}):n.a.createElement(F,{handleLoginSucceed:e.props.handleLoginSucceed})},e.getHome=function(){return e.props.isLoggedIn?n.a.createElement(te,null):n.a.createElement(ae.a,{to:"/login"})},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"main"},n.a.createElement(ae.d,null,n.a.createElement(ae.b,{exact:!0,path:"/",render:this.getLogin}),n.a.createElement(ae.b,{path:"/login",render:this.getLogin}),n.a.createElement(ae.b,{path:"/register",component:N}),n.a.createElement(ae.b,{path:"/home",render:this.getHome}),n.a.createElement(ae.b,{render:this.getLogin})))}}]),a}(n.a.Component),ne=(a(529),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoggedIn:Boolean(localStorage.getItem(E))},e.handleLoginSucceed=function(t){localStorage.setItem(E,t),e.setState({isLoggedIn:!0})},e.handleLogout=function(){localStorage.removeItem(E),e.setState({isLoggedIn:!1})},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p,{handleLogout:this.handleLogout,isLoggedIn:this.state.isLoggedIn}),n.a.createElement(oe,{handleLoginSucceed:this.handleLoginSucceed,isLoggedIn:this.state.isLoggedIn}))}}]),a}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(b.a,null,n.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[530,1,2]]]);
//# sourceMappingURL=main.54381568.chunk.js.map