<template>

  <div class="menu">
    <a v-for="list in 3" :key="list">Home</a>
    <a>products</a>
    <a>About</a>

    <a v-for="메뉴 in 메뉴들" :key="메뉴">{{ 메뉴 }}</a>
    <a v-for="(메뉴, 정수) in 메뉴들" :key="정수">{{ 정수 }}</a>
  </div>

  <!-- 이미지 넣기 -->
  <img>
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
  <div>
    <h4>{{ products[0] }}</h4>
    <p>{{ price1 }} 만원</p>
    <!-- <button v-on:click="신고수++">허위매물신고</button> <span>신고수 : {{ 신고수 }}</span> -->
    <button v-on:click="increase(0)">허위매물신고</button> <span>신고수 : {{ 신고수[0] }}</span>
    <!-- <button v-on:click="신고수[0]++">허위매물신고</button> <span>신고수 : {{ 신고수[0] }}</span> -->
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>{{ price2 }} 만원</p>
    <button v-on:click="increase(1)">허위매물신고</button> <span>신고수 : {{ 신고수[1] }}</span>
  </div>
  <div>
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
      ]
    }
  },
  methods : {
    increase(i) {
      this.신고수[i]++;
    },
    up(i) {
      this.obj[i].신고++;
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
</style>
