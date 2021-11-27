(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{493:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"杂项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#杂项"}},[t._v("#")]),t._v(" 杂项")]),t._v(" "),a("h2",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" name")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("string")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详情：")])]),t._v(" "),a("p",[t._v("允许组件模板递归地调用自身。注意，组件在全局用 "),a("RouterLink",{attrs:{to:"/api/application-api.html#component"}},[a("code",[t._v("app.component")])]),t._v(" 注册时，全局 ID 自动作为组件的 name。")],1),t._v(" "),a("p",[t._v("指定 "),a("code",[t._v("name")]),t._v(" 选项的另一个好处是便于调试。有名字的组件有更友好的警告信息。另外，当在有 "),a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-devtools"),a("OutboundLink")],1),t._v("，未命名组件将显示成 "),a("code",[t._v("<AnonymousComponent>")]),t._v("，这很没有语义。通过提供 "),a("code",[t._v("name")]),t._v(" 选项，可以获得更有语义信息的组件树。")])])]),t._v(" "),a("h2",{attrs:{id:"inheritattrs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inheritattrs"}},[t._v("#")]),t._v(" inheritAttrs")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("boolean")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("默认：")]),a("code",[t._v("true")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详情：")])]),t._v(" "),a("p",[t._v("默认情况下父作用域的不被认作 props 的 attribute 绑定 (attribute bindings) 将会“回退”且作为普通的 HTML attribute 应用在子组件的根元素上。当撰写包裹一个目标元素或另一个组件的组件时，这可能不会总是符合预期行为。通过设置 "),a("code",[t._v("inheritAttrs")]),t._v(" 到 "),a("code",[t._v("false")]),t._v("，这些默认行为将会被去掉。而通过实例 property "),a("code",[t._v("$attrs")]),t._v(" 可以让这些 attribute 生效，且可以通过 "),a("code",[t._v("v-bind")]),t._v(" 显性的绑定到非根元素上。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'base-input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  inheritAttrs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'label'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  emits"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"language-html"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")]),a("span",{pre:!0,attrs:{class:"token inline-js language-js"}},[t._v(" label ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token identifier directive-name"}},[t._v("v-bind")]),a("span",{pre:!0,attrs:{class:"token directive-expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token inline-js language-js"}},[t._v("$attrs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token identifier directive-name"}},[t._v("v-bind")]),a("span",{pre:!0,attrs:{class:"token directive-argument"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[t._v("value")])]),a("span",{pre:!0,attrs:{class:"token directive-expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token inline-js language-js"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token identifier directive-name"}},[t._v("v-on")]),a("span",{pre:!0,attrs:{class:"token directive-argument"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[t._v("input")])]),a("span",{pre:!0,attrs:{class:"token directive-expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token inline-js language-js"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考")]),a("RouterLink",{attrs:{to:"/guide/component-attrs.html#禁用-attribute-继承"}},[t._v("禁用 Attribute 继承")])],1)])]),t._v(" "),a("h2",{attrs:{id:"compileroptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compileroptions"}},[t._v("#")]),t._v(" compilerOptions "),a("Badge",{attrs:{text:"3.1+"}})],1),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("Object")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详情：")])]),t._v(" "),a("p",[t._v("这是与"),a("RouterLink",{attrs:{to:"/api/application-config.html#compileroptions"}},[t._v("应用级别的 "),a("code",[t._v("compilerOptions")]),t._v(" 配置")]),t._v("相对应的组件级别配置。")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  compilerOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    delimiters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    comments"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("重要")]),t._v(" "),a("p",[t._v("和应用级别的 "),a("code",[t._v("compilerOptions")]),t._v(" 配置类似，该选项只会在使用完整的构建版本在浏览器内编译模板时生效。")])])])]),t._v(" "),a("h2",{attrs:{id:"delimiters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delimiters"}},[t._v("#")]),t._v(" delimiters "),a("Badge",{attrs:{text:"deprecated",type:"warning"}})],1),t._v(" "),a("p",[t._v("从 3.1.0 开始被废弃。请换用 "),a("code",[t._v("compilerOptions.delimiters")]),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);