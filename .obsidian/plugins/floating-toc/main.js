/*
	This is the Obsidian example vault is amazing, there are a lot of dazzling features and showcase, I believe you will wonder a bit, is this Obsidian?
	[Blue-topaz-examples](https://github.com/cumany/Blue-topaz-examples)
	*/

var Ce = Object.create
var D = Object.defineProperty
var Ee = Object.getOwnPropertyDescriptor
var ye = Object.getOwnPropertyNames
var we = Object.getPrototypeOf,
  Se = Object.prototype.hasOwnProperty
var j = (t) => D(t, '__esModule', { value: !0 })
var Te = (t, e) => {
    j(t)
    for (var n in e) D(t, n, { get: e[n], enumerable: !0 })
  },
  xe = (t, e, n) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let o of ye(e))
        !Se.call(t, o) &&
          o !== 'default' &&
          D(t, o, { get: () => e[o], enumerable: !(n = Ee(e, o)) || n.enumerable })
    return t
  },
  I = (t) =>
    xe(
      j(
        D(
          t != null ? Ce(we(t)) : {},
          'default',
          t && t.__esModule && 'default' in t
            ? { get: () => t.default, enumerable: !0 }
            : { value: t, enumerable: !0 }
        )
      ),
      t
    )
var w = (t, e, n) =>
  new Promise((o, a) => {
    var s = (l) => {
        try {
          r(n.next(l))
        } catch (d) {
          a(d)
        }
      },
      i = (l) => {
        try {
          r(n.throw(l))
        } catch (d) {
          a(d)
        }
      },
      r = (l) => (l.done ? o(l.value) : Promise.resolve(l.value).then(s, i))
    r((n = n.apply(t, e)).next())
  })
Te(exports, { default: () => z, refresh_node: () => ve, selfDestruct: () => _ })
var v = I(require('obsidian'))
var C = I(require('obsidian'))
function F(t, e) {
  return t + 1 < e.length ? e[t + 1].level > e[t].level : !1
}
function U(t, e, n) {
  t.stopPropagation()
  let o = e.getAttribute('isCollapsed')
  o !== null && (o === 'true' ? Ae(e, n) : o === 'false' && Le(e))
}
function Ae(t, e) {
  t.setAttribute('isCollapsed', 'false')
  let n = parseInt(t.getAttribute('data-level')),
    o = t.nextElementSibling
  if (e)
    for (; o && parseInt(o.getAttribute('data-level')) > n; )
      (o.style.display = 'block'),
        o.getAttribute('isCollapsed') !== null && o.setAttribute('isCollapsed', 'false'),
        (o = o.nextElementSibling)
  else {
    let a = !1,
      s = Number.MAX_VALUE
    for (; o && parseInt(o.getAttribute('data-level')) > n; ) {
      let i = o.getAttribute('isCollapsed') !== null,
        r = parseInt(o.getAttribute('data-level'))
      a
        ? r <= s && ((o.style.display = 'block'), (a = i), (s = i ? r : Number.MAX_VALUE))
        : (i && ((a = !0), (s = r)), (o.style.display = 'block')),
        (o = o.nextElementSibling)
    }
  }
}
function Le(t) {
  t.setAttribute('isCollapsed', 'true')
  let e = parseInt(t.getAttribute('data-level')),
    n = t.nextElementSibling
  for (; n && parseInt(n.getAttribute('data-level')) > e; )
    (n.style.display = 'none'),
      n.getAttribute('isCollapsed') !== null && n.setAttribute('isCollapsed', 'true'),
      (n = n.nextElementSibling)
}
function P(t, e, n, o, a, s) {
  return w(this, null, function* () {
    let i = /^(?:\s*)[0-9]+\.\s/,
      r = /^(?:\s*)[\-\+]\s/,
      l,
      d = ''
    ;(l = i.exec(n)) !== null
      ? ((d = l[0]), (n = n.replace(i, '')))
      : (l = r.exec(n)) !== null && ((d = l[0]), (n = n.replace(r, '')))
    let u = Number(o.parentElement.getAttribute('data-id')),
      p = Number(o.parentElement.getAttribute('data-level')),
      T = (h) => {
        h.stopImmediatePropagation(), U(h, o.parentElement, t.settings.expandAllSubheadings)
      }
    o.parentElement.addEventListener('click', T),
      o.parentElement.hasAttribute('isCollapsed')
        ? F(u, t.headingdata) ||
          (o.parentElement.removeAttribute('isCollapsed'),
          o.parentElement.removeEventListener('click', T))
        : F(u, t.headingdata) && o.parentElement.setAttribute('isCollapsed', 'false')
    let m = o
    ;(s = new C.Component()),
      yield C.MarkdownRenderer.renderMarkdown(n, m, a, s),
      m && m.classList.add('heading-rendered')
    let S = m.createEl('a')
    S.addClass('text'),
      (S.onclick = function (h) {
        var b
        h.stopPropagation()
        let g = (b = parseInt(m.parentElement.getAttribute('data-line'))) != null ? b : 0
        if (h.ctrlKey || h.metaKey) He(e, g)
        else {
          ke(e, g)
          let f = m.parentElement.parentElement.querySelector('.text-wrap.located')
          f && f.removeClass('located'), m.addClass('located')
        }
      })
    let c = m.querySelector('p')
    if (c) {
      let h = /<a[^>]*>|<\/[^>]*a>/gm
      d
        ? (S.innerHTML = d + c.innerHTML.replace(h, ''))
        : (S.innerHTML = c.innerHTML.replace(h, '')),
        m.removeChild(c),
        t.settings.isTooltip &&
          (m.setAttribute('aria-label', n),
          t.settings.positionStyle == 'right' && m.setAttribute('aria-label-position', 'left'),
          t.settings.positionStyle == 'left' && m.setAttribute('aria-label-position', 'right'),
          t.settings.positionStyle == 'both' && m.setAttribute('aria-label-position', 'top'))
    }
  })
}
function q(t, e, n, o, a) {
  return w(this, null, function* () {
    let s = n.createEl('li')
    s.addClass('heading-list-item'),
      s.setAttribute('data-level', o.level.toString()),
      s.setAttribute('data-id', a.toString()),
      s.setAttribute('data-line', o.position.start.line.toString())
    let i = s.createEl('div')
    i.addClass('text-wrap'), P(t, e, o.heading, i, e.file.path, null)
    let r = s.createEl('div')
    r.addClass('line-wrap'), r.createDiv().addClass('line')
  })
}
var ke = (t, e) => {
    t.leaf.openFile(t.file, { eState: { line: e } })
  },
  He = (t, e) => {
    var s, i
    let n =
        (i = (s = t == null ? void 0 : t.currentMode.getFoldInfo()) == null ? void 0 : s.folds) !=
        null
          ? i
          : [],
      o = e,
      a = 0
    if (n.some((r, l) => ((a = l), r.from == o))) n.splice(a, 1)
    else {
      let r = { from: e, to: e + 1 }
      n.push(r)
    }
    t == null || t.currentMode.applyFoldInfo({ folds: n, lines: t.editor.lineCount() }),
      t == null || t.onMarkdownFold()
  }
function V(t, e) {
  var a
  let n = (s, i) => {
    var h
    let r = t.workspace.getActiveFile(),
      l = t.metadataCache.getFileCache(r).headings,
      d = []
    if (
      (l == null ||
        l.map((g) => {
          ;(g.heading = g.heading.replace(/<\/?[\s\S]*?(?:".*")*>/g, '')), d.push(g)
        }),
      (e.headingdata = d),
      e.headingdata.length == 0)
    )
      return
    e.settings.positionStyle == 'right'
      ? (i.addClass('floating-right'),
        i.removeClass('floating-left'),
        i.removeClass('floating-both'))
      : e.settings.positionStyle == 'left'
        ? (i.addClass('floating-left'),
          i.removeClass('floating-rigth'),
          i.removeClass('floating-both'))
        : e.settings.positionStyle == 'both' &&
          (i.addClass('floating-both'),
          i.removeClass('floating-left'),
          i.removeClass('floating-rigth')),
      e.settings.isLeft
        ? (i.removeClass('alignLeft'), i.addClass('alignLeft'))
        : i.removeClass('alignLeft')
    let u = i.createEl('ul')
    u.addClass('floating-toc')
    let p = u.createEl('div')
    if (
      (p.addClass('toolbar'),
      p.addClass('pin'),
      p.addClass('hide'),
      new C.ButtonComponent(p)
        .setIcon('pin')
        .setTooltip('pin')
        .onClick(() => {
          i.classList.contains('pin') ? i.removeClass('pin') : i.addClass('pin')
        }),
      (u.onmouseenter = function () {
        p.removeClass('hide'), i.addClass('hover')
      }),
      (u.onmouseleave = function () {
        p.addClass('hide'), i.removeClass('hover')
      }),
      new C.ButtonComponent(p)
        .setIcon('double-up-arrow-glyph')
        .setTooltip('Scroll to Top')
        .setClass('top')
        .onClick(() => {
          let g = this.app.workspace.getActiveViewOfType(C.MarkdownView)
          g && g.setEphemeralState({ scroll: 0 })
        }),
      new C.ButtonComponent(p)
        .setIcon('double-down-arrow-glyph')
        .setTooltip('Scroll to Bottom')
        .setClass('bottom')
        .onClick(() =>
          w(this, null, function* () {
            let g = this.app.workspace.getActiveViewOfType(C.MarkdownView)
            if (g) {
              let b = this.app.workspace.getActiveFile(),
                L = (yield this.app.vault.cachedRead(b)).split(`
`),
                E = L.length
              if (g.getMode() === 'preview') for (; E > 0 && L[E - 1].trim() === ''; ) E--
              g.currentMode.applyScroll(E - 1)
            }
          })
        ),
      new C.ButtonComponent(p)
        .setIcon('copy')
        .setTooltip('copy to clipboard')
        .setClass('copy')
        .onClick(() =>
          w(this, null, function* () {
            let g = e.headingdata.map((b) => '    '.repeat(b.level - 1) + b.heading)
            yield navigator.clipboard.writeText(
              g.join(`
`)
            ),
              new C.Notice('Copied')
          })
        ),
      e.settings.ignoreHeaders)
    ) {
      let g = e.settings.ignoreHeaders.split(`
`)
      e.headingdata =
        (h = t.metadataCache.getFileCache(r).headings) == null
          ? void 0
          : h.filter((b) => !g.includes(b.level.toString()))
    }
    e.headingdata.forEach((g, b) => {
      let f = t.workspace.getActiveViewOfType(C.MarkdownView)
      q(e, f, u, g, b)
    }),
      s == null || s.querySelector('.markdown-source-view').insertAdjacentElement('beforebegin', i)
  }
  if (this.app.workspace.getActiveViewOfType(C.MarkdownView)) {
    ;(0, C.requireApiVersion)('0.15.0')
      ? (activeDocument = activeWindow.document)
      : (activeDocument = window.document)
    let s = e.app.workspace.getActiveViewOfType(C.MarkdownView)
    if (s) {
      if ((a = s.contentEl) == null ? void 0 : a.querySelector('.floating-toc-div')) return
      {
        let r = createEl('div')
        r.addClass('floating-toc-div'),
          e.settings.isDefaultPin && r.addClass('pin'),
          n(s.contentEl, r)
      }
    }
  }
}
var x = I(require('obsidian'))
var G = ['left', 'right', 'both'],
  J = {
    ignoreHeaders: '',
    ignoreTopHeader: !1,
    positionStyle: 'left',
    isLoadOnMobile: !0,
    isLeft: !1,
    isDefaultPin: !1,
    isTooltip: !1,
    defaultCollapsedLevel: 6,
    expandAllSubheadings: !1,
  }
var me = I(require('obsidian'))
var K = {}
var X = {}
var Y = {}
var $ = {}
var N = {
  'ctrl + click on the floating toc to collapse/expand the header.':
    'ctrl + click on the floating toc to collapse/expand the header.',
  'Floating TOC position': 'Floating TOC position',
  'Floating TOC position, default on the left side of the notes':
    'Floating TOC position, default on the left side of the notes',
  'Hide heading level': 'Hide heading level',
  'Whichever option is selected, the corresponding heading level will be hidden':
    'Whichever option is selected, the corresponding heading level will be hidden',
  'Plugin Settings': 'Plugin Settings',
  'Default Pin': 'Default Pin',
  'Enable Tooltip': 'Enable Tooltip',
  'Plugin Style Settings': 'Plugin Style Settings',
  'Mobile enabled or not': 'Mobile enabled or not',
  'Whether to enable the plugin for the mobile client, the default is enabled.':
    'Whether to enable the plugin for the mobile client, the default is enabled.',
  'If the floating Toc option is not found in the style setting, please reload the style setting plugin (turn it off and on again)':
    'If the floating Toc option is not found in the style setting, please reload the style setting plugin (turn it off and on again)',
  'Left alignment of TOC text': 'Left alignment of TOC text',
  'Aligned on both sides': 'Aligned on both sides',
  'Floating TOC position, on the right side of the notes':
    'Floating TOC position, on the right side of the notes',
  'whether the text in TOC is left aligned': 'whether the text in TOC is left aligned',
  'When the panel is split left and right, the right side of the layout is aligned right and the left side of the panel is aligned left.':
    'When the panel is split left and right, the right side of the layout is aligned right and the left side of the panel is aligned left.',
  'Set the default collapsed level of headings when initialised':
    'Set the default collapsed level of headings when initialised',
  'Default Collapsed Level': 'Default Collapsed Levels',
  'Expand All Subheadings Recursively': 'Expand All Subheadings Recursively',
  'When disabled, only direct subheadings will be expanded':
    'When disabled, only direct subheadings will be expanded',
}
var Q = {}
var Z = {}
var ee = {}
var te = {}
var ie = {}
var le = {}
var ne = {}
var se = {}
var oe = {}
var ae = {}
var re = {}
var de = {}
var ce = {}
var ge = {}
var he = {}
var pe = {}
var fe = {
  'ctrl + click on the floating toc to collapse/expand the header.':
    '\u6309\u4F4Fctrl \u70B9\u51FB\u76EE\u5F55\u4E2D\u7684\u6807\u9898\uFF0C\u53EF\u4EE5\u4F7F\u5BF9\u5E94\u7684\u6B63\u6587\u5185\u5BB9\u6298\u53E0/\u5C55\u5F00\u3002',
  'Floating TOC position': '\u6D6E\u52A8\u76EE\u5F55\u663E\u793A\u4F4D\u7F6E',
  'Floating TOC position, default on the left side of the notes':
    '\u6D6E\u52A8\u76EE\u5F55\u663E\u793A\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u663E\u793A\u5728\u7B14\u8BB0\u5DE6\u4FA7',
  'Hide heading level': '\u9690\u85CF\u6307\u5B9A\u7684\u6807\u9898\u5C42\u7EA7',
  'Whichever option is selected, the corresponding heading level will be hidden':
    '\u9690\u85CF\u9009\u4E2D\u7684\u6807\u9898\u5C42\u7EA7\uFF0C\u9009\u4E2D\u7684\u6807\u9898\u4E0D\u4F1A\u5728\u6D6E\u52A8\u76EE\u5F55\u4E2D\u663E\u793A\u3002',
  'Plugin Settings': '\u63D2\u4EF6\u8BBE\u7F6E',
  'Default Pin': '\u662F\u5426\u9ED8\u8BA4\u9489\u5728\u7B14\u8BB0\u4E0A',
  'Enable Tooltip': '\u662F\u5426\u5F00\u542F\u6807\u9898\u63D0\u793A',
  'Plugin Style Settings': '\u63D2\u4EF6\u6837\u5F0F\u8BBE\u7F6E',
  'Mobile enabled or not': '\u662F\u5426\u5728\u79FB\u52A8\u7AEF\u542F\u7528',
  'Whether to enable the plugin for the mobile client, the default is enabled.':
    '\u79FB\u52A8\u5BA2\u6237\u7AEF\u662F\u5426\u542F\u7528\u63D2\u4EF6\uFF0C\u9ED8\u8BA4\u542F\u7528\u3002',
  'If the floating Toc option is not found in the style setting, please reload the style setting plugin (turn it off and on again)':
    '\u5982\u679Cstyle setting \u4E2D\u65E0\u6CD5\u770B\u5230 floating Toc\u9009\u9879\uFF0C\u8BF7\u91CD\u8F7Dstyle setting\u63D2\u4EF6\uFF08\u5173\u95ED\u518D\u5F00\u542F\u5373\u53EF\uFF09',
  'Left alignment of TOC text': '\u76EE\u5F55\u6587\u5B57\u5DE6\u5BF9\u9F50',
  'Floating TOC position, on the right side of the notes':
    '\u6D6E\u52A8\u76EE\u5F55\u663E\u793A\u4F4D\u7F6E\uFF0C\u663E\u793A\u5728\u7B14\u8BB0\u53F3\u4FA7',
  'whether the text in TOC is left aligned':
    '\u5F53\u5DE5\u5177\u680F\u5728\u53F3\u4FA7\u65F6\uFF0C\u76EE\u5F55\u4E2D\u7684\u6807\u9898\u662F\u5426\u5DE6\u5BF9\u9F50',
  'Aligned on both sides': '\u4E24\u7AEF\u5BF9\u9F50',
  'When the panel is split left and right, the right side of the layout is aligned right and the left side of the panel is aligned left.':
    '\u5F53\u9762\u677F\u5DE6\u53F3\u5206\u5272\u7684\u65F6\u5019\uFF0C\u53F3\u4FA7\u7248\u9762\u53F3\u5BF9\u9F50\uFF0C\u5DE6\u4FA7\u9762\u677F\u5DE6\u5BF9\u9F50\u3002',
  'Set the default collapsed level of headings when initialised':
    '\u8BBE\u7F6E\u521D\u59CB\u5316\u65F6TOC\u4E2D\u9ED8\u8BA4\u6298\u53E0\u7684\u6807\u9898\u7EA7\u522B',
  'Default Collapsed Level': '\u9ED8\u8BA4\u6298\u53E0\u7EA7\u522B',
  'Expand All Subheadings Recursively': '\u9012\u5F52\u5C55\u5F00\u6240\u6709\u5B50\u6807\u9898',
  'When disabled, only direct subheadings will be expanded':
    '\u5173\u95ED\u6B64\u9009\u9879\u65F6, \u53EA\u5C55\u5F00\u76F4\u63A5\u5B50\u6807\u9898',
}
var ue = {
  'Floating TOC position': '\u6D6E\u52D5\u76EE\u9304\u986F\u793A\u4F4D\u7F6E',
  'Floating TOC position, default on the left side of the notes':
    '\u6D6E\u52D5\u76EE\u9304\u986F\u793A\u4F4D\u7F6E\uFF0C\u9ED8\u8A8D\u986F\u793A\u5728\u7B46\u8A18\u5DE6\u5074',
  'Ignore top-level headers': '\u662F\u5426\u5FFD\u7565\u9802\u7D1A\u76EE\u9304',
  'Select whether to ignore the top-level headings. When turned on, the top-level headings in the current note are not displayed in the floating TOC.':
    '\u9078\u64C7\u662F\u5426\u5FFD\u7565\u9802\u7D1A\u6A19\u984C\uFF0C\u958B\u555F\u5F8C\u7576\u524D\u6587\u6A94\u4E2D\u6700\u9802\u7D1A\u7684\u6A19\u984C\u4E0D\u986F\u793A\u5728\u6D6E\u52D5\u76EE\u9304\u4E2D\u3002',
  'Plugin Settings': '\u63D2\u4EF6\u8A2D\u7F6E',
  'Default Pin': '\u662F\u5426\u9ED8\u8A8D\u91D8\u5728\u7B46\u8A18\u4E0A',
  'Plugin Style Settings': '\u63D2\u4EF6\u6A23\u5F0F\u8A2D\u7F6E',
  'Mobile enabled or not': '\u662F\u5426\u5728\u79FB\u52D5\u7AEF\u555F\u7528',
  'Whether to enable the plugin for the mobile client, the default is enabled.':
    '\u79FB\u52D5\u5BA2\u6236\u7AEF\u662F\u5426\u555F\u7528\u63D2\u4EF6\uFF0C\u9ED8\u8A8D\u555F\u7528\u3002',
  'If the floating Toc option is not found in the style setting, please reload the style setting plugin (turn it off and on again)':
    '\u5982\u679Cstyle setting \u4E2D\u7121\u6CD5\u770B\u5230 floating Toc\u9078\u9805\uFF0C\u8ACB\u91CD\u8F09style setting\u63D2\u4EF6\uFF08\u95DC\u9589\u518D\u958B\u555F\u5373\u53EF\uFF09',
  'Left alignment of TOC text': '\u76EE\u9304\u6587\u5B57\u5DE6\u5C0D\u9F4A',
  'Floating TOC position, on the right side of the notes':
    '\u6D6E\u52D5\u76EE\u9304\u986F\u793A\u4F4D\u7F6E\uFF0C\u986F\u793A\u5728\u7B46\u8A18\u53F3\u5074',
  'whether the text in TOC is left or right aligned When the floating toc is on the right':
    '\u7576\u5DE5\u5177\u6B04\u5728\u53F3\u5074\u6642\uFF0C\u76EE\u9304\u4E2D\u7684\u6A19\u984C\u662F\u5426\u5DE6\u5C0D\u9F4A',
  'Aligned on both sides': '\u5169\u7AEF\u5C0D\u9F4A',
  'When the panel is split left and right, the right side of the layout is aligned right and the left side of the panel is aligned left.':
    '\u7576\u9762\u677F\u5DE6\u53F3\u5206\u5272\u7684\u6642\u5019\uFF0C\u53F3\u5074\u7248\u9762\u53F3\u5C0D\u9F4A\uFF0C\u5DE6\u5074\u9762\u677F\u5DE6\u5C0D\u9F4A\u3002',
}
var Me = {
    ar: K,
    cs: X,
    da: Y,
    de: $,
    en: N,
    'en-gb': Q,
    es: Z,
    fr: ee,
    hi: te,
    id: ie,
    it: le,
    ja: ne,
    ko: se,
    nl: oe,
    nn: ae,
    pl: re,
    pt: de,
    'pt-br': ce,
    ro: ge,
    ru: he,
    tr: pe,
    'zh-cn': fe,
    'zh-tw': ue,
  },
  be = Me[me.moment.locale()]
function y(t) {
  return (be && be[t]) || N[t]
}
var B = class {
  constructor(e) {
    this.checkedList = []
    ;(this.containerEl = e), (this.flowListEl = this.containerEl.createDiv({ cls: 'check-list' }))
  }
  addItem(e, n, o, a) {
    let s = this.flowListEl.createDiv({ cls: 'check-item' }),
      i = s.createEl('input', { type: 'checkbox' })
    return (
      (i.checked = o),
      i.checked && this.checkedList.push(n),
      i.addEventListener('change', (l) => {
        i.checked
          ? this.checkedList.includes(n) || this.checkedList.push(n)
          : this.checkedList.includes(n) && this.checkedList.remove(n)
      }),
      i.addEventListener('change', (l) => a(i.checked)),
      s.createDiv({ cls: 'flow-label' }).setText(e),
      s
    )
  }
}
var R = class extends x.PluginSettingTab {
    constructor(e, n) {
      super(e, n)
      ;(this.plugin = n),
        addEventListener('refresh-toc', () => {
          _(), V(e, this.plugin)
        })
    }
    display() {
      let { containerEl: e } = this
      e.empty(),
        e.createEl('h1', { text: 'Obsidian Floating TOC ' }),
        e
          .createEl('span', { text: '' })
          .createEl('a', { text: 'Author: Cuman \u2728', href: 'https://github.com/cumany' }),
        e
          .createEl('span', { text: '' })
          .createEl('a', {
            text: 'Readme:\u4E2D\u6587',
            href: 'https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/floating-toc/',
          }),
        e
          .createEl('span', { text: '' })
          .createEl('a', {
            text: '|English  ',
            href: 'https://github.com/cumany/obsidian-floating-toc-plugin/blob/master/README.md',
          })
      let n = e.createEl('div')
      n.addClass('callout'), n.setAttribute('data-callout', 'info')
      let o = n.createEl('div', { text: '\u{1F511}TIPS:' })
      o.addClass('callout-title'),
        o.createEl('br'),
        n
          .createEl('div', {
            text: y('ctrl + click on the floating toc to collapse/expand the header.'),
          })
          .addClass('callout-content'),
        e.createEl('h2', { text: y('Plugin Settings') })
      let s = new x.Setting(e)
      s.setName(y('Floating TOC position')),
        this.plugin.settings.positionStyle == 'both'
          ? s.setDesc(
              y(
                'When the panel is split left and right, the right side of the layout is aligned right and the left side of the panel is aligned left.'
              )
            )
          : this.plugin.settings.positionStyle == 'right'
            ? s.setDesc(y('Floating TOC position, on the right side of the notes'))
            : s.setDesc(y('Floating TOC position, default on the left side of the notes')),
        s.addDropdown((c) => {
          let h = {}
          G.map((g) => (h[g] = g)),
            c.addOptions(h),
            c.setValue(this.plugin.settings.positionStyle).onChange((g) => {
              ;(this.plugin.settings.positionStyle = g),
                this.plugin.saveSettings(),
                setTimeout(() => {
                  this.display(), dispatchEvent(new Event('refresh-toc'))
                }, 100)
            })
        }),
        this.plugin.settings.positionStyle != 'left' &&
          new x.Setting(e)
            .setName(y('Left alignment of TOC text'))
            .setDesc(y('whether the text in TOC is left aligned'))
            .addToggle((c) => {
              var h
              return c
                .setValue((h = this.plugin.settings) == null ? void 0 : h.isLeft)
                .onChange((g) => {
                  ;(this.plugin.settings.isLeft = g),
                    this.plugin.saveSettings(),
                    setTimeout(() => {
                      this.display(), dispatchEvent(new Event('refresh-toc'))
                    }, 100)
                })
            }),
        new x.Setting(e)
          .setName(y('Expand All Subheadings Recursively'))
          .setDesc(y('When disabled, only direct subheadings will be expanded'))
          .addToggle((c) =>
            c.setValue(this.plugin.settings.expandAllSubheadings).onChange((h) => {
              ;(this.plugin.settings.expandAllSubheadings = h),
                this.plugin.saveSettings(),
                setTimeout(() => {
                  dispatchEvent(new Event('refresh-toc'))
                }, 100)
            })
          ),
        new x.Setting(e)
          .setName(y('Hide heading level'))
          .setDesc(
            y('Whichever option is selected, the corresponding heading level will be hidden')
          )
      let i = new B(e)
      ;[1, 2, 3, 4, 5, 6].forEach((c) =>
        w(this, null, function* () {
          let g = this.plugin.settings.ignoreHeaders
            .split(
              `
`
            )
            .includes(c.toString())
          i.addItem(c.toString(), c.toString(), g, (b) => {
            ;(this.plugin.settings.ignoreHeaders = i.checkedList.join(`
`)),
              this.plugin.saveSettings(),
              setTimeout(() => {
                dispatchEvent(new Event('refresh-toc'))
              }, 100)
          })
        })
      ),
        new x.Setting(e).setName(y('Default Pin')).addToggle((c) => {
          var h
          return c
            .setValue((h = this.plugin.settings) == null ? void 0 : h.isDefaultPin)
            .onChange((g) => {
              ;(this.plugin.settings.isDefaultPin = g),
                this.plugin.saveSettings(),
                setTimeout(() => {
                  dispatchEvent(new Event('refresh-toc'))
                }, 100)
            })
        }),
        new x.Setting(e).setName(y('Enable Tooltip')).addToggle((c) => {
          var h
          return c
            .setValue((h = this.plugin.settings) == null ? void 0 : h.isTooltip)
            .onChange((g) => {
              ;(this.plugin.settings.isTooltip = g),
                this.plugin.saveSettings(),
                setTimeout(() => {
                  dispatchEvent(new Event('refresh-toc'))
                }, 100)
            })
        }),
        e.createEl('h2', { text: y('Plugin Style Settings') })
      let l = e.createEl('div')
      l.addClass('callout'),
        l.setAttribute('data-callout', 'warning'),
        l
          .createEl('div', {
            text: '\u{1F514} Notice: Please click the button again,If the floating-toc option is not found in the style settings',
          })
          .addClass('callout-title')
      let u = l.createEl('div')
      u.addClass('callout-content'),
        app.plugins.enabledPlugins.has('obsidian-style-settings')
          ? (u.createEl('br'),
            new x.ButtonComponent(u)
              .setIcon('palette')
              .setClass('mod-cta')
              .setButtonText('\u{1F3A8} Open style settings')
              .onClick(() => {
                app.setting.open(),
                  app.setting.openTabById('obsidian-style-settings'),
                  app.workspace.trigger('parse-style-settings'),
                  setTimeout(() => {
                    var g, b, f
                    let h = app.setting.activeTab.containerEl.querySelector(
                      ".setting-item-heading[data-id='floating-toc-styles']"
                    )
                    h
                      ? (g = h.addClass) == null || g.call(h, 'float-cta')
                      : (app.workspace.trigger('parse-style-settings'),
                        (f =
                          (b = app.setting.activeTab.containerEl.querySelector(
                            ".setting-item-heading[data-id='floating-toc-styles']"
                          )) == null
                            ? void 0
                            : b.addClass) == null || f.call(b, 'float-cta'))
                  }, 250)
              }))
          : (u.createEl('br'),
            u
              .createEl('span', { text: '' })
              .createEl('a', {
                text: 'Please install or enable the style-settings plugin',
                href: 'obsidian://show-plugin?id=obsidian-style-settings',
              }))
      let T = e.createEl('div', { cls: 'cDonationSection' }),
        m = createEl('p'),
        S = createEl('p')
      S.appendText(
        'If you like this Plugin and are considering donating to support continued development, use the button below!'
      ),
        m.setAttribute('style', 'color: var(--text-muted)'),
        T.appendChild(S),
        T.appendChild(m),
        T.appendChild(Fe('https://github.com/cumany#thank-you-very-much-for-your-support'))
    }
  },
  Fe = (t) => {
    let e = createEl('a')
    return (
      e.setAttribute('href', t),
      e.addClass('buymeacoffee-img'),
      (e.innerHTML =
        '<img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee &emoji=&slug=Cuman&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" />'),
      e
    )
  }
var A,
  O = 0
function _() {
  ;(0, v.requireApiVersion)('0.15.0') ? (A = activeWindow.document) : (A = window.document),
    A.querySelectorAll('.floating-toc-div').forEach((e) => {
      e && e.remove()
    })
}
function ve(t, e) {
  var o, a
  ;(0, v.requireApiVersion)('0.15.0') ? (A = activeWindow.document) : (A = window.document)
  let n = (o = e.contentEl) == null ? void 0 : o.querySelector('.floating-toc-div')
  if (n) {
    let s = n.querySelector('ul.floating-toc')
    s || ((s = n.createEl('ul')), s.addClass('floating-toc'))
    let i = n == null ? void 0 : n.querySelectorAll('li.heading-list-item'),
      r = t.headingdata
    if (t.settings.ignoreHeaders) {
      let l = t.settings.ignoreHeaders.split(`
`)
      r = (a = t.headingdata) == null ? void 0 : a.filter((d) => !l.includes(d.level.toString()))
    }
    return r
      ? (i.length >= r.length
          ? i == null ||
            i.forEach((l, d) => {
              var u
              if (r[d])
                if (
                  r[d].level == l.getAttribute('data-level') &&
                  r[d].heading == l.children[0].innerText &&
                  r[d].position.start.line == l.getAttribute('data-line')
                ) {
                  let p = Number(l.getAttribute('data-id'))
                  F(p, t.headingdata)
                    ? l.hasAttribute('iscollapsed') || l.setAttribute('isCollapsed', 'false')
                    : l.hasAttribute('iscollapsed') && l.removeAttribute('isCollapsed')
                  return
                } else
                  l.setAttribute('data-level', r[d].level.toString()),
                    l.setAttribute('data-id', d.toString()),
                    l.setAttribute('data-line', r[d].position.start.line.toString()),
                    (u = l.children[0].querySelector('a')) == null || u.remove(),
                    P(t, e, r[d].heading, l.children[0], e.file.path, null)
              else l.remove()
            })
          : r == null ||
            r.forEach((l, d) => {
              var u
              if (d <= i.length - 1)
                if (
                  l.level.toString() == i[d].getAttribute('data-level') &&
                  l.heading == i[d].children[0].innerText &&
                  l.position.start.line.toString() == i[d].getAttribute('data-line')
                ) {
                  let p = Number(i[d].getAttribute('data-id'))
                  F(p, t.headingdata)
                    ? i[d].hasAttribute('iscollapsed') || i[d].setAttribute('isCollapsed', 'false')
                    : i[d].hasAttribute('iscollapsed') && i[d].removeAttribute('isCollapsed')
                  return
                } else
                  i[d].setAttribute('data-level', l.level.toString()),
                    i[d].setAttribute('data-id', d.toString()),
                    i[d].setAttribute('data-line', l.position.start.line.toString()),
                    (u = i[d].children[0].querySelector('a')) == null || u.remove(),
                    P(t, e, l.heading, i[d].children[0], e.file.path, null)
              else q(t, e, s, l, d)
            }),
        !0)
      : (s.remove(), !1)
  } else return !1
}
function W(t) {
  var e = []
  if (t == null ? void 0 : t.previousElementSibling)
    for (; (t = t.previousElementSibling); ) t.nodeType == 1 && e.push(t)
  return e
}
function Oe(t, e, n) {
  var a, s, i, r, l, d
  let o = n.target
  if (
    ((a = o.parentElement) == null ? void 0 : a.classList.contains('cm-editor')) ||
    ((s = o.parentElement) == null ? void 0 : s.classList.contains('markdown-reading-view'))
  ) {
    let u = t.workspace.getActiveViewOfType(v.MarkdownView),
      p,
      T = {}
    if (u) {
      p = (i = u.currentMode.getScroll()) != null ? i : 0
      let m = e.headingdata,
        S = (r = m == null ? void 0 : m.length) != null ? r : 0,
        c = u.contentEl.querySelector('.floating-toc')
      if (c) {
        let h = parseInt(
            (l = c.querySelector('li.heading-list-item')) == null
              ? void 0
              : l.getAttribute('data-line')
          ),
          g = parseInt((d = c.lastElementChild) == null ? void 0 : d.getAttribute('data-line'))
        if (p <= 0) {
          let b = c.querySelector('.heading-list-item.located')
          b && b.removeClass('located')
          let f = c == null ? void 0 : c.querySelector(`li[data-line='${h}']`)
          f && f.addClass('located')
          let L = parseInt(f == null ? void 0 : f.getAttribute('data-level'))
          L = L > 1 ? L - 1 : 1
          let E = W(f),
            M = c == null ? void 0 : c.querySelector('li.focus')
          M && M.removeClass('focus'),
            E.some((k) => {
              if (k.dataset.level <= L.toString()) return k.addClass('focus'), !0
            })
          let H = c.querySelector('.heading-list-item')
          setTimeout(() => H.scrollIntoViewIfNeeded(), 300)
        } else {
          for (; --S >= 0; )
            if (m[S].position.start.line <= p) {
              ;(T = m[S]), (O = m[S].position.start.line)
              break
            }
          if (!T) return
          let b = c.querySelector('.heading-list-item.located')
          b && b.removeClass('located'), !O && c && (O = h)
          let f = c == null ? void 0 : c.querySelector(`li[data-line='${O}']`)
          if (f) {
            if (O == g || O == h) f.addClass('located')
            else if (f.nextElementSibling)
              if (parseInt(f.nextElementSibling.getAttribute('data-line')) <= p) {
                f.nextElementSibling.addClass('located')
                let E = parseInt(f.nextElementSibling.getAttribute('data-level'))
                E = E > 1 ? E - 1 : 1
                let M = W(f.nextElementSibling),
                  H = c == null ? void 0 : c.querySelector('li.focus')
                H && H.removeClass('focus'),
                  M.some((k) => {
                    if (k.dataset.level <= E.toString()) return k.addClass('focus'), !0
                  })
              } else {
                f.addClass('located')
                let E = parseInt(f.getAttribute('data-level'))
                E = E > 1 ? E - 1 : 1
                let M = W(f),
                  H = c == null ? void 0 : c.querySelector('li.focus')
                H && H.removeClass('focus'),
                  M.some((k) => {
                    if (k.dataset.level <= E.toString()) return k.addClass('focus'), !0
                  })
              }
            f.scrollIntoViewIfNeeded()
          }
        }
      }
    }
  }
}
var z = class extends v.Plugin {
  constructor() {
    super(...arguments)
    this.handleScroll = (e, n, o) => (0, v.debounce)(Oe(e, n, o), 200)
  }
  onload() {
    return w(this, null, function* () {
      ;(0, v.requireApiVersion)('0.15.0') ? (A = activeWindow.document) : (A = window.document),
        yield this.loadSettings()
      let e = (a) => {
        a && (ve(this, a) || V(app, this))
      }
      this.addCommand({
        id: 'pin-toc-panel',
        name: 'Pinning the Floating TOC panel',
        icon: 'pin',
        callback: () =>
          w(this, null, function* () {
            let a = this.app.workspace.getActiveViewOfType(v.MarkdownView)
            if (a) {
              let s = a.contentEl.querySelector('.floating-toc-div')
              s && (s.classList.contains('pin') ? s.removeClass('pin') : s.addClass('pin'))
            }
          }),
      }),
        this.addCommand({
          id: 'hide-toc-panel',
          name: 'Hide/Show the Floating TOC panel',
          icon: 'list',
          callback: () =>
            w(this, null, function* () {
              let a = this.app.workspace.getActiveViewOfType(v.MarkdownView)
              if (a) {
                let s = a.contentEl.querySelector('.floating-toc-div')
                s && (s.classList.contains('hide') ? s.removeClass('hide') : s.addClass('hide'))
              }
            }),
        }),
        this.addCommand({
          id: 'scroll-to-bottom',
          name: 'Scroll to Bottom',
          icon: 'double-down-arrow-glyph',
          callback: () =>
            w(this, null, function* () {
              let a = this.app.workspace.getActiveViewOfType(v.MarkdownView)
              if (a) {
                let s = this.app.workspace.getActiveFile(),
                  r = (yield this.app.vault.cachedRead(s)).split(`
`),
                  l = r.length
                if (a.getMode() === 'preview') for (; l > 0 && r[l - 1].trim() === ''; ) l--
                a.currentMode.applyScroll(l - 1)
              }
            }),
        }),
        this.addCommand({
          id: 'scroll-to-top',
          name: 'Scroll to Top',
          icon: 'double-up-arrow-glyph',
          callback: () =>
            w(this, null, function* () {
              let a = this.app.workspace.getActiveViewOfType(v.MarkdownView)
              a && a.setEphemeralState({ scroll: 0 })
            }),
        }),
        this.addCommand({
          id: 'toggle-position-style',
          name: 'Toggle Floating TOC Position (left/right)',
          icon: 'switch',
          callback: () => {
            this.settings.positionStyle === 'left'
              ? (this.settings.positionStyle = 'right')
              : this.settings.positionStyle === 'right'
                ? (this.settings.positionStyle = 'left')
                : this.settings.positionStyle === 'both' &&
                  new Notice(
                    'Position style set to both. Toogle position only works when fixed position (left or right) is selected.'
                  ),
              this.saveSettings(),
              dispatchEvent(new Event('refresh-toc'))
          },
        }),
        this.registerEvent(
          this.app.workspace.on('active-leaf-change', () => {
            let a = this.app.workspace.getActiveViewOfType(v.MarkdownView)
            if (a) {
              let s = this.app.workspace.getActiveFile(),
                i = this.app.metadataCache.getFileCache(s).headings,
                r = []
              if (
                (i == null ||
                  i.map((l) => {
                    ;(l.heading = l.heading.replace(/<\/?[\s\S]*?(?:".*")*>/g, '')), r.push(l)
                  }),
                (this.headingdata = r),
                this.settings.ignoreHeaders)
              ) {
                let l = this.settings.ignoreHeaders.split(`
`)
                this.headingdata = i.filter((d) => !l.includes(d.level.toString()))
              }
              o(a)
            }
          })
        ),
        this.registerEvent(
          this.app.metadataCache.on('changed', () => {
            var s
            let a = this.app.workspace.getActiveViewOfType(v.MarkdownView)
            if (a) {
              let i = a.file,
                r = this.app.metadataCache.getFileCache(i).headings,
                l = []
              r == null ||
                r.map((p) => {
                  ;(p.heading = p.heading.replace(/<\/?[\s\S]*?(?:".*")*>/g, '')), l.push(p)
                })
              let d =
                  l == null ? void 0 : l.map((p) => p.level + p.heading + p.position.start.line),
                u =
                  (s = this.headingdata) == null
                    ? void 0
                    : s.map((p) => p.level + p.heading + p.position.start.line)
              if (JSON.stringify(u) == JSON.stringify(d)) return
              if (((this.headingdata = l), this.settings.ignoreHeaders)) {
                let p = this.settings.ignoreHeaders.split(`
`)
                this.headingdata = r.filter((T) => !p.includes(T.level.toString()))
              }
              o(a)
            }
          })
        )
      let n = (a) => {
          e(a)
        },
        o = (a) => (0, v.debounce)(n(a), 300, !0)
      A.addEventListener(
        'scroll',
        (a) => {
          this.handleScroll(this.app, this, a)
        },
        !0
      ),
        this.addSettingTab(new R(this.app, this)),
        e(this.app.workspace.getActiveViewOfType(v.MarkdownView)),
        (0, v.requireApiVersion)('0.15.0') &&
          this.app.workspace.on('window-open', (a) => {
            a.doc.addEventListener(
              'scroll',
              (s) => {
                this.handleScroll(this.app, this, s)
              },
              !0
            )
          }),
        app.workspace.onLayoutReady(() => {
          app.workspace.trigger('parse-style-settings')
        })
    })
  }
  onunload() {
    ;(0, v.requireApiVersion)('0.15.0') ? (A = activeWindow.document) : (A = window.document),
      A.removeEventListener(
        'scroll',
        (e) => {
          this.handleScroll(this.app, this, e)
        },
        !0
      ),
      _()
  }
  setHeadingdata(e) {
    this.headingdata = e
  }
  loadSettings() {
    return w(this, null, function* () {
      this.settings = Object.assign({}, J, yield this.loadData())
    })
  }
  saveSettings() {
    return w(this, null, function* () {
      yield this.saveData(this.settings)
    })
  }
}
