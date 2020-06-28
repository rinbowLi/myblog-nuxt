import Vue from 'vue'
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css' //样式文件

import VueLazyLoad from 'vue-lazyload'

import {
  clipboard
} from "@/utils/utils"

//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


NProgress.configure({
  easing: 'ease', // 动画方式    
  speed: 500, // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})


Vue.directive('highlight', function (el) {
  let pres = el.querySelectorAll('pre');
  pres.forEach((pre) => {
    pre.setAttribute("class", "highlight-wrap");
  })
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block, index) => {
    hljs.highlightBlock(block)
    block.setAttribute("id", "hljs-" + index);
    block.setAttribute("data-lang", "Code");
    let dom = document.createElement('a');
    //添加一个这样的元素便于赋值代码 '<a class="copy-code" href="javascript:" data-clipboard-target="#hljs-' + index + '" title="拷贝代码"><i class="iconfont icon-fuzhi"></i></a>'
    dom.className = 'copy-code';
    dom.setAttribute("href", "javascript:");
    dom.setAttribute("title", "拷贝代码");
    dom.setAttribute("data-clipboard-target", "#hljs-" + index);
    dom.innerHTML = '<i class="iconfont icon-fuzhi"></i>';
    block.appendChild(dom);

    //hljs.initLineNumbersOnLoad()
  })
})

//初始化复制代码
clipboard()


Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  // error:'./static/error.png',
  loading: require("@/assets/images/loading.svg"),
  attempt: 1
})
