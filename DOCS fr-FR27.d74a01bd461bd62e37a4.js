(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[161],{

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/i18n.md?vue&type=template&id=3cef84c8

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"internationalisation\"><a class=\"header-anchor\" href=\"#internationalisation\">¶</a> Internationalisation</h2><p>La langue par défaut d&#39;Element Plus est le Anglais. Si vous souhaitez utiliser une autre langue, il vous faudra la configurer. Par exemple, dans votre fichier d&#39;entrée, si vous importez Element Plus entièrement:</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> locale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/fr&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;dayjs/locale/fr&#39;</span>\n\ncreateApp(App).use(ElementPlus, { locale })\n</code></pre><p>Ou si vous importez Element Plus à la demande via <strong>es modules</strong>:</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton, locale } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> lang <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/fr&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;dayjs/locale/fr&#39;</span>\n\nlocale(lang)\ncreateApp(App).component(ElButton.name, ElButton)\n</code></pre><p>Ou si vous importez Element Plus à la demande via <a href=\"#/fe-FR/component/quickstart#on-demand\">babel-plugin-component</a>:</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton, ElSelect } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> lang <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/fr&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;dayjs/locale/fr&#39;</span>\n<span class=\"hljs-keyword\">import</span> locale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale&#39;</span>\n\n<span class=\"hljs-comment\">// configure language</span>\nlocale.use(lang)\n\n<span class=\"hljs-comment\">// import components</span>\ncreateApp(App).component(ElButton.name, ElButton)\ncreateApp(App).component(ElSelect.name, ElSelect)\n</code></pre><h3 id=\"set-day.js-locale\"><a class=\"header-anchor\" href=\"#set-day.js-locale\">¶</a> Set Day.js locale</h3><p>Element Plus use date time locale (month name, first day of the week ...) from <a href=\"https://day.js.org/\">Day.js</a> directlly. And will set the global Day.js locale automaticatlly after the locale file is loaded.</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> locale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/fr&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;dayjs/locale/fr&#39;</span>\n\n<span class=\"hljs-comment\">// will auto set Day.js locale to &#39;fr&#39;</span>\napp.use(ElementPlus, { locale })\n</code></pre><p>However, you can use another Day.js locale if needed.</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;dayjs/locale/es&#39;</span>\ndayjs.locale(<span class=\"hljs-string\">&#39;es&#39;</span>)\n</code></pre><p>La pack de la langue Anglais est importé par défaut, même si vous configurez une autre langue. En utilisant le <code>NormalModuleReplacementPlugin</code> fournit par webpack vous pouvez remplacer la locale par défaut:</p><p>webpack.config.js</p><pre><code class=\"hljs language-typescript\">{\n  <span class=\"hljs-attr\">plugins</span>: [\n    <span class=\"hljs-keyword\">new</span> webpack.NormalModuleReplacementPlugin(\n      <span class=\"hljs-regexp\">/element-plus[\\/\\\\]lib[\\/\\\\]locale[\\/\\\\]lang[\\/\\\\]en/</span>,\n      <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/fr&#39;</span>,\n    ),\n  ]\n}\n</code></pre><h3 id=\"compatible-avec-vue-i18n-9.x\"><a class=\"header-anchor\" href=\"#compatible-avec-vue-i18n-9.x\">¶</a> Compatible avec <code>vue-i18n@9.x</code></h3><p>Element Plus est compatible avec <a href=\"https://vue-i18n-next.intlify.dev/guide/#html\">vue-i18n@9.x</a>, ce qui rend le changement de langue encore plus simple.</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { createI18n } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-i18n&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> messages = {\n  [enLocale.name]: {\n    <span class=\"hljs-comment\">// el property is critical, set this in order for ElementPlus translate strings correctly.</span>\n    <span class=\"hljs-attr\">el</span>: enLocale.el,\n    <span class=\"hljs-comment\">// Define your own dictionary with your own namespace, but DO NOT use the namespace `el`,</span>\n    <span class=\"hljs-comment\">// Because that makes the ElementPlus internal translation invalid.</span>\n    <span class=\"hljs-attr\">message</span>: {\n      <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;hello world&#39;</span>,\n    },\n  },\n  [zhLocale.name]: {\n    <span class=\"hljs-attr\">el</span>: zhLocale.el,\n    <span class=\"hljs-comment\">// Define your own dictionary with your own namespace, but DO NOT use the namespace `el`,</span>\n    <span class=\"hljs-comment\">// Because that makes the ElementPlus internal translation invalid.</span>\n    <span class=\"hljs-attr\">message</span>: {\n      <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;你好，世界&#39;</span>,\n    },\n  },\n  <span class=\"hljs-attr\">testLocale</span>: {\n    <span class=\"hljs-attr\">el</span>: {},\n    <span class=\"hljs-comment\">// No message translations, it will fallback to en lang, the definition of fallbackLocale is below 👇</span>\n  },\n}\n\n<span class=\"hljs-keyword\">const</span> i18n = createI18n({\n  <span class=\"hljs-attr\">locale</span>: zhLocale.name,\n  <span class=\"hljs-attr\">fallbackLocale</span>: enLocale.name,\n  messages,\n})\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\n\napp.use(ElementPlus, {\n  <span class=\"hljs-attr\">i18n</span>: i18n.global.t,\n})\n\n<span class=\"hljs-comment\">// Remember to use this plugin.</span>\napp.use(i18n)\n</code></pre><h3 id=\"compatible-avec-d-autres-plugins-i18n\"><a class=\"header-anchor\" href=\"#compatible-avec-d-autres-plugins-i18n\">¶</a> Compatible avec d&#39;autres plugins i18n</h3><p>Element Plus n&#39;est pas forcément compatible avec d&#39;autres plugins i18n que vue-i18n, mais vous pouvez configurer le fonctionnement i18n.</p><div class=\"tip\"><p>Once you set this method, the internal translation function will be invalid, only the customized translation method will be used, be sure that your custom translation method can translate format like <code>el.scope.subName</code>, other wise the internal translation string will be raw string.</p></div><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n\n<span class=\"hljs-comment\">// The is the signature of i18n method.</span>\n<span class=\"hljs-keyword\">type</span> i18n = <span class=\"hljs-function\">(<span class=\"hljs-params\">...args: <span class=\"hljs-built_in\">any</span>[]</span>) =&gt;</span> <span class=\"hljs-built_in\">string</span>\nVue.use(Element, {\n  <span class=\"hljs-attr\">i18n</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">path, options</span>) </span>{\n    <span class=\"hljs-comment\">// ...</span>\n  },\n  <span class=\"hljs-comment\">// others.</span>\n})\n</code></pre><h3 id=\"i18n-personnalisee-dans-les-composants-a-la-demande\"><a class=\"header-anchor\" href=\"#i18n-personnalisee-dans-les-composants-a-la-demande\">¶</a> i18n personnalisée dans les composants à la demande</h3><p>Need translation</p><p>\bIf you need to know how to lazy loading translation strings, please check this out<a href=\"https://vue-i18n-next.intlify.dev/guide/advanced/lazy.html\">Lazy loading</a></p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { createI18n } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-i18n&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> messages = {\n  [enLocale.name]: {\n    <span class=\"hljs-comment\">// el property is critical, set this in order for ElementPlus translate strings correctly.</span>\n    <span class=\"hljs-attr\">el</span>: enLocale.el,\n    <span class=\"hljs-comment\">// Define your own dictionary with your own namespace, but DO NOT use the namespace `el`,</span>\n    <span class=\"hljs-comment\">// Because that makes the ElementPlus internal translation invalid.</span>\n    <span class=\"hljs-attr\">message</span>: {\n      <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;hello world&#39;</span>,\n    },\n  },\n  [zhLocale.name]: {\n    <span class=\"hljs-attr\">el</span>: zhLocale.el,\n    <span class=\"hljs-comment\">// Define your own dictionary with your own namespace, but DO NOT use the namespace `el`,</span>\n    <span class=\"hljs-comment\">// Because that makes the ElementPlus internal translation invalid.</span>\n    <span class=\"hljs-attr\">message</span>: {\n      <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;你好，世界&#39;</span>,\n    },\n  },\n  <span class=\"hljs-attr\">testLocale</span>: {\n    <span class=\"hljs-attr\">el</span>: {},\n    <span class=\"hljs-comment\">// No message translations, it will fallback to en lang, the definition of fallbackLocale is below 👇</span>\n  },\n}\n\n<span class=\"hljs-keyword\">const</span> i18n = createI18n({\n  <span class=\"hljs-attr\">locale</span>: zhLocale.name,\n  <span class=\"hljs-attr\">fallbackLocale</span>: enLocale.name,\n  messages,\n})\n\nElementLocale.i18n(i18n.global.t)\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(i18n)\n</code></pre><h3 id=\"import-via-un-cdn\"><a class=\"header-anchor\" href=\"#import-via-un-cdn\">¶</a> Import via un CDN</h3><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/index.full.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/fr.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/dayjs/locale/fr.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span>\n  ElementPlus.locale(ElementPlus.lang.fr)\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><p>Compatible avec <code>vue-i18n</code></p><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-i18n/dist/vue-i18n.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/zh-cn.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/en.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-comment\">// Need translation</span>\n  <span class=\"hljs-keyword\">const</span> i18n = Vue18n.createI18n({\n    <span class=\"hljs-attr\">locale</span>: ElementPlus.lang.zhCN.name,\n    <span class=\"hljs-attr\">fallbackLocale</span>: ElementPlus.lang.en.name,\n    <span class=\"hljs-attr\">messages</span>: {\n      [ElementPlus.lang.en.name]: {\n        <span class=\"hljs-comment\">// el property is critical, set this in order for ElementPlus translate strings correctly.</span>\n        <span class=\"hljs-attr\">el</span>: ElementPlus.lang.en.el,\n        <span class=\"hljs-comment\">// Define your own dictionary with your own namespace, but DO NOT use the namespace `el`,</span>\n        <span class=\"hljs-comment\">// Because that makes the ElementPlus internal translation invalid.</span>\n        <span class=\"hljs-attr\">message</span>: {\n          <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;hello world&#39;</span>,\n        },\n      },\n      [ElementPlus.lang.zhCN.name]: {\n        <span class=\"hljs-attr\">el</span>: ElementPlus.lang.zhCN.el,\n        <span class=\"hljs-comment\">// Define your own dictionary with your own namespace, but DO NOT use the namespace `el`,</span>\n        <span class=\"hljs-comment\">// Because that makes the ElementPlus internal translation invalid.</span>\n        <span class=\"hljs-attr\">message</span>: {\n          <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;你好，世界&#39;</span>,\n        },\n      },\n      <span class=\"hljs-attr\">testLocale</span>: {\n        <span class=\"hljs-attr\">el</span>: {},\n        <span class=\"hljs-comment\">// No message translations, it will fallback to en lang.</span>\n      },\n    },\n  })\n\n  <span class=\"hljs-keyword\">const</span> app = Vue.createApp()\n  app.use(i18n)\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><p>Actuellement, Element Plus supporte les langues suivantes:</p><ul class=\"language-list\"><li>Chinois simplifié (zh-cn)</li><li>Anglais (en)</li><li>Allemand (de)</li><li>Portugais (pt)</li><li>Espagnol (es)</li><li>Danois (da)</li><li>Français (fr)</li><li>Norvégien (nb-no)</li><li>Chinois traditionnel (zh-tw)</li><li>Italien (it)</li><li>Coréen (ko)</li><li>Japonais (ja)</li><li>Néerlandais (nl)</li><li>Vietnamien (vi)</li><li>Russe (ru)</li><li>Turque (tr)</li><li>Portugais brésilien (pt-br)</li><li>Farsi (fa)</li><li>Thaï (th)</li><li>Indonésien (id)</li><li>Bulgare (bg)</li><li>Polonais (pl)</li><li>Finnois (fi)</li><li>Suédois (sv)</li><li>Grec (el)</li><li>Slovaque (sk)</li><li>Catalan (ca)</li><li>Tchèque (cs)</li><li>Ukrainien (uk)</li><li>Turkmène (tk)</li><li>Tamoul (ta)</li><li>Letton (lv)</li><li>Afrikaans (af)</li><li>Estonien (et)</li><li>Slovène (sl)</li><li>Arabe (ar)</li><li>Hébreu (he)</li><li>Lituanien (lt)</li><li>Mongol (mn)</li><li>Kazakh (kk)</li><li>Hongrois (hu)</li><li>Roumain (ro)</li><li>Kurde (ku)</li><li>Ouïghour (ug-cn)</li><li>Khmer (km)</li><li>Serbe (sr)</li><li>Basque (eu)</li><li>Kirghize (ky)</li><li>Arménien (hy-am)</li><li>Croate (hr)</li><li>Espéranto (eo)</li></ul><p>Si votre langue n&#39;apparaît pas dans la liste, n&#39;hésitez pas a contribuer: ajoutez simplement un fichier de configuration <a href=\"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang\">ici</a> et créez une pull request.</p>", 33);

function render(_ctx, _cache) {
  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/i18n.md?vue&type=template&id=3cef84c8

// CONCATENATED MODULE: ./website/docs/fr-FR/i18n.md

const script = {}
script.render = render

/* harmony default export */ var i18n = __webpack_exports__["default"] = (script);

/***/ })

}]);