<template>
  <div>
    <table border="1" align="center">
      <tr>
        <th v-for="head in gridData.header" v-bind:key="head">{{head}}</th>
      </tr>
      <tr v-for="rows in gridData.rows" v-bind:key="rows">
        <td v-for="row in rows" v-bind:key="row">{{row}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BasicGrid',
  props: ['gridData']
}
</script>
