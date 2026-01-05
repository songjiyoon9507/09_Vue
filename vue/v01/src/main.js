import './assets/main.css' // css 가져오겠다

import { createApp } from 'vue' // vue.js 에서 createApp을 가져와서 사용하겠다.
import App from './App.vue'
// ./App.vue 파일에서 export default 된 값을 가져와서, 그걸 App 이라는 이름으로 쓰겠다.

createApp(App).mount('#app')
// Vue 애플리케이션 하나를 생성함 App -> 루트(root) 컴포넌트
// -> 이 Vue 앱의 시작 컴포넌트는 App이다.
// .mount('#app')
// -> HTML에서 id="app"인 요소에 Vue 앱을 붙인다.(렌더링한다.)
// => App 컴포넌트를 루트로 하는 Vue 앱을 만들고, HTML의 #app 요소에 그려라.
// => index.html 에 있는 <div id="app"></div> Vue 가 이 div 안을 전부 App.vue 내용으로 교체함
