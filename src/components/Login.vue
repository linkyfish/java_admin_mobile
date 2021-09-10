<template>
  <div class="hello">
   <x-header :left-options="{showBack: false}">登录系统</x-header>
		    <group title="mask">
		      账号<x-input title="(99) 9-99" mask="(99) 9-99" v-model="maskValue2" :max="9"></x-input>
		    </group>
		    <group title="mask">
		      密码<x-input title="(99) 9-99" mask="(99) 9-99" v-model="maskValue2" :max="9"></x-input>
		    </group>
		    <group title="mask">
		     验证码 <x-input title="(99) 9-99" mask="(99) 9-99" v-model="maskValue2" :max="9"></x-input>
		    </group>
			
			<group title="mask">
				   <x-button type="primary" link="/demo">登录</x-button>
			
			</group>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
