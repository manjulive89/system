webpackJsonp([56],{1413:function(e,t,a){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(51),l=r(s),o=a(32),n=r(o),d=a(33),u=r(d),f=a(50),c=r(f),i=a(49),m=r(i),p=a(483),h=r(p),w=a(28),_=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(w),v=a(10),g=r(v),E=a(197),M=a(114),N=a(151),b=r(N),P=a(14),y=r(P),S=function(t){function a(e){(0,n.default)(this,a);var t=(0,c.default)(this,(a.__proto__||(0,l.default)(a)).call(this,e));return t.handlePasswordReset=t.handlePasswordReset.bind(t),t.state={},t}return(0,m.default)(a,t),(0,u.default)(a,[{key:"handlePasswordReset",value:function(e){var t=this;e.preventDefault();var a=h.default.findDOMNode(this.refs.password).value;if(!a||a.length<g.default.MIN_PASSWORD_LENGTH)return void this.setState({error:y.default.createElement(E.FormattedMessage,{id:"password_form.error",defaultMessage:"Please enter at least {chars} characters.",values:{chars:g.default.MIN_PASSWORD_LENGTH}})});this.setState({error:null}),(0,M.resetPassword)(this.props.location.query.token,a,function(){t.setState({error:null})},function(e){t.setState({error:e.message})})}},{key:"render",value:function(){var t=null;this.state.error&&(t=y.default.createElement("div",{className:"form-group has-error"},y.default.createElement("label",{className:"control-label"},this.state.error)));var a="form-group";return t&&(a+=" has-error"),y.default.createElement("div",{className:"col-sm-12"},y.default.createElement("div",{className:"signup-team__container"},y.default.createElement("h3",null,y.default.createElement(E.FormattedMessage,{id:"password_form.title",defaultMessage:"Password Reset"})),y.default.createElement("form",{onSubmit:this.handlePasswordReset},y.default.createElement("p",null,y.default.createElement(E.FormattedMessage,{id:"password_form.enter",defaultMessage:"Enter a new password for your {siteName} account.",values:{siteName:e.window.mm_config.SiteName}})),y.default.createElement("div",{className:a},y.default.createElement("input",{type:"password",className:"form-control",name:"password",ref:"password",placeholder:_.localizeMessage("password_form.pwd","Password"),spellCheck:"false"})),t,y.default.createElement("button",{type:"submit",className:"btn btn-primary"},y.default.createElement(E.FormattedMessage,{id:"password_form.change",defaultMessage:"Change my password"})))))}}]),a}(y.default.Component);S.defaultProps={},S.propTypes={params:b.default.object.isRequired,location:b.default.object.isRequired},t.default=S}).call(t,a(16))}});
//# sourceMappingURL=56.703a5ea67ae291b963de.js.map