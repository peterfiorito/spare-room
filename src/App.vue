<template>
  <div id="app">
    <div class="app__header">
      <div class="app__logo--wrapper">
        <img src="/static/SpareRoom_header_logo.svg" class="app__logo"/>
      </div>
      <div class="app__spacer"></div>
    </div>
    <router-view/>
    <div class="app__footer"></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
#app {
  font-family: 'Quicksand',sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
body {
  font-family: 'Quicksand',sans-serif;
  font-size: 16px;
  line-height: 1.6;
  background-color: #e5e5e5;
  margin: 0px;
}
p{
  font-size: 18px;
}
.app__header{
  background-color: white;
}
.app__logo{
  max-width: 300px;
}
.app__logo--wrapper{
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
.app__spacer{
  width: 100%;
  height: 35px;
  background-color: #003D5D;
}
.app__footer{
  background-color: #003D5D;
  height: 100px;
  width: 100%;
}
@media screen and (max-width:600px){
  .app__logo{
    max-width: 200px;
  }
  .app__spacer{
    height: 25px;
  }
}
</style>
