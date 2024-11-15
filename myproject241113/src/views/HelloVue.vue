<template>
  <div>
    <p v-bind:title="msg">{{msg}}</p>
    <p v-if="iftest == 1">if</p>
    <p v-else-if="iftest == 2">else if</p>
    <p v-else>else</p>
    <input type="text" v-model="iftest">
    <button v-on:click="addBtn">{{btnMsg}}</button>
  </div>
  <!-- 이 부분을 components 폴더에 BasicGrid.vue로 빼서
  BasicGrid.vue에서 export 내보내기 한 걸
  아래 script에서 import 불러와서 화면에 보여줌 -->
  <!-- <div>
    <table border="1" align="center">
      <tr>
        <th v-for="head in gridData.header" v-bind:key="head">{{head}}</th>
      </tr>
      <tr v-for="rows in gridData.rows" v-bind:key="rows">
        <td v-for="row in rows" v-bind:key="row">{{row}}</td>
      </tr>
    </table>
  </div> -->
  <BasicGrid v-bind:gridData="gridData"/>
  번호 : <input type="text" v-model="one">
  이름 : <input type="text" v-model="two">
  성별 : <input type="text" v-model="three">
  <button v-on:click="dataAdd">데이터 추가</button>
  <button v-on:click="axiosTest">데이터 가져오기</button>
</template>

<script>
// BasicGrid.vue를 import
import BasicGrid from '@/components/BasicGrid.vue';
import axios from 'axios';

export default {
  name : 'HelloVue',
  data() {
    return {
      msg : 'vue 페이지 입니다.',
      iftest : '',
      btnMsg : '1더하기',
      gridData : {
        header : ['번호', '이름', '성별'],
        rows : [
          {'번호' : '1', '이름' : '현수', '성별' : '남'},
          {'번호' : '2', '이름' : '지윤', '성별' : '여'},
          {'번호' : '3', '이름' : '문석', '성별' : '남'},
        ]
      },
      one : '',
      two : '',
      three : ''
    }
  },
  methods : {
    addBtn() {
      if(this.iftest > 0 && this.iftest  < 4 || this.iftest == '') {
        this.iftest++
        this.btnMsg = '1더하기'
      } else {
        this.iftest--
        this.btnMsg = '1빼기'
      }
    },
    dataAdd() {
      this.gridData.rows.push({'번호' : this.one, '이름' : this.two, '성별' : this.three})
    },
    axiosTest() {
      axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        console.log(res.data)
        this.gridData.rows = res.data
      })
    }
  },
  // components 폴더 안에 있는 BasicGrid.vue 파일을 불러온 것
  components : {BasicGrid}
}
</script>