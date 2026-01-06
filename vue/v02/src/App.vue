<script>
  export default {
    data() {
      return {
        // data 속성을 이용해서 channel 이라는 변수에 값을 담고, subscribe 라는 변수에 2677이라는 값을 담은 것
        channel : "홈페이지 만들기",
        subscribe : 2677,
      }
    },
  }; // 세미콜론 넣어도 되고 빼도 됨
</script>

<template>
  <!-- templete 영역에 text interpolation -->
   <h1>홈페이지 만들기</h1>
   <h1>채널명 : {{ channel }}</h1>
   <!-- text interpolation -->
</template>

<style>
</style>
