<template>

  <!-- 모달창 부분 -->
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>{{ detailTitle }}</h4>
      <p>{{ detailContent}}</p>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="메뉴 in 메뉴들" :key="메뉴">{{ 메뉴 }}</a>
  </div>

  <!-- 원룸들을 가져올거임 -->
  <div v-for="(원룸, i) in 원룸들" v-bind:key="원룸">
    <img v-bind:src="원룸.image" class="room-img">
    <h4 v-on:click="detail(i)">{{ 원룸.title }}</h4>
    <p>{{ 원룸.price }}원</p>
  </div>

  <hr>
  <hr>
  <hr>

  <div class="menu">
    <a v-for="list in 3" :key="list">Home</a>
    <a>products</a>
    <a>About</a>

    <a v-for="메뉴 in 메뉴들" :key="메뉴">{{ 메뉴 }}</a>
    <a v-for="(메뉴, 정수) in 메뉴들" :key="정수">{{ 정수 }}</a>
  </div>

  <!-- 이미지 넣기 -->
  <img class="room-img" src="./assets/room0.jpg">

  <img src="@/assets/room0.jpg">
  <!-- 반복문으로 출력하기 -->
  <div v-for="(o, i) in obj" v-bind:key="o">
    <h4>{{ o.메뉴 }}</h4>
    <p> {{ o.가격 }}</p>
    <button v-on:click="up(i)">허위매물신고</button> <span>신고수 : {{ o.신고 }}</span>
  </div>

  <!-- {{ 데이터바인딩 }} -->
  <div>
    <!-- logo는 실시간 변경되지 않기 때문에 데이터바인딩 하지 않음 -->
    <!-- {{ logo }} -->
    <!-- 하드 코딩해놓으면 됨 -->
    원룸샵
    <!-- HTML 속성도 데이터바인딩 가능 -->
    <!-- :속성="데이터이름" -->
    
    <h4 :style="스타일">스타일원룸</h4>
    <!-- data 이름으로 불러주면 됨 -->
    <p>XX 만원</p>
  </div>

  <hr>
  <hr>
  <hr>

  <div>
    <img class="room-img" src="./assets/room0.jpg">
    
    <!-- 제목 클릭 시 모달창이 열리게 -->
    <h4 @click="모달창열렸니 = true">{{ products[0] }}</h4>
    <p>{{ price1 }} 만원</p>
    <!-- <button v-on:click="신고수++">허위매물신고</button> <span>신고수 : {{ 신고수 }}</span> -->
    <button v-on:click="increase(0)">허위매물신고</button> <span>신고수 : {{ 신고수[0] }}</span>
    <!-- <button v-on:click="신고수[0]++">허위매물신고</button> <span>신고수 : {{ 신고수[0] }}</span> -->
  </div>
  <div>
    <img class="room-img" src="./assets/room1.jpg">
    <h4>{{ products[1] }}</h4>
    <p>{{ price2 }} 만원</p>
    <button v-on:click="increase(1)">허위매물신고</button> <span>신고수 : {{ 신고수[1] }}</span>
  </div>
  <div>
    <img class="room-img" src="./assets/room2.jpg">
    <h4>{{ products[2] }}</h4>
    <p>{{ price2 }} 만원</p>
    <button v-on:click="increase(2)">허위매물신고</button> <span>신고수 : {{ 신고수[2] }}</span>
  </div>

  <div v-for="product in products" v-bind:key="product">
    <h4>{{ product }}</h4>
    <p>가격 문의</p>
  </div>

  <div v-for="(a, i) in 3" :key="i">
    <h4>{{ products[i] }}</h4>
    <p>가격 문의</p>
  </div>

  <div v-for="(a, i) in products" :key="i">
    <h4>{{ a }}</h4>
    <p>가격 문의</p>
  </div>

  <button>반값 만들기 버튼</button>
</template>

<script>

// oneroom.js에서 내보낸 데이터를 가져올 거임
// import apple from './data/oneroom.js';

// 여러 개 가져올 때
// {}로 export 했을 때 import할 때도 {}이걸로 가져와야함
// import {apple, apple2} from './data/oneroom.js';
// apple, apple2

// .js 뒤에 확장자는 생략해도 가져와짐
import data from './data/oneroom.js';

export default {
  name: 'App',
  // 데이터 보관함
  data() {
    return {
      // Object 자료 형식으로 데이터 저장
      price1 : 60,
      price2 : 70,
      // logo : "원룸샵",
      // 데이터 이름은 한글도 가능
      스타일 : 'color : blue',
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      메뉴들 : ['Home', 'Shop', 'About'],
      가격들 : [60, 70, 80],
      // 신고수 : 0,
      신고수 : [0, 0, 0],
      obj : [
        {'메뉴' : '역삼동원룸' , '가격' : 60, '신고' : 0},
        {'메뉴' : '천호동원룸', '가격' : 70, '신고' : 0},
        {'메뉴' : '마포구원룸', '가격' : 90, '신고' : 0}
      ],
      모달창열렸니 : false,
      원룸들 : data,
      detailTitle : '',
      detailContent : '',
    }
  },
  methods : {
    increase(i) {
      this.신고수[i]++;
    },
    up(i) {
      this.obj[i].신고++;
    },
    detail(i) {
      // i번째 상세가 나와야함
      this.모달창열렸니 = true;
      this.detailTitle = this.원룸들[i].title;
      this.detailContent = this.원룸들[i].content;
    }
  },
  components: {

  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

/* 이미지 css */
.room-img {
  width: 100%;
  margin-top: 40px;
}

/* 모달창 css */
body {
  margin: 0;
}
div {
  /* div를 빠져나가지 않게 */
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  /* 0, 0, 0은 검정색 0.5는 투명도 */
  background-color: rgba(0, 0, 0, 0.5);
  /* 모달창은 고정 */
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
