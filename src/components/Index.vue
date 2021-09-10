<template>
  <div>
   <x-header :left-options="{showBack: false}">游戏信息管理系统</x-header>
    <flexbox class="home-col-1-bd ">
      <flexbox-item >
			  <flexbox>
				 <flexbox-item  style="text-align:center">
					 <img src="../assets/home1.png" alt=""  style="width: 3rem;height: 3rem;">
				</flexbox-item>
				  <flexbox-item>
					  <span style="    bottom: 0;
    font-size: 0.4rem;
    color: #f05637;
    font-weight: 500;">8,880</span>
					  <br/>
					  <div  class="label" style="height: 0.48rem;">金额余额</div>
				  </flexbox-item>
	         </flexbox>
	  </flexbox-item>
      <flexbox-item style="border-bottom: none;">
			  <grid :cols="1" >
			  <grid-item >
				  <div style="width: 30%; float: left; " >
					  	<img src="../assets/home-r-1.png" alt="" style="width: 3rem; height: 3rem;" >
				  </div>
	
				<div style="width: 70%; float: right;">
					<span style="clear: both; display: block;" class="span-blue">1000</span>
					<span style="clear: both;display: block;" class="label">购分总量(向上)</span>
				</div>
			  </grid-item>
			  <grid-item style="border-bottom: none;">
					<div style="width: 30%; float: left; " >
							<img src="../assets/home-r-2.png" alt="" style="width: 3rem; height: 3rem;" >
					  </div>
						
					<div style="width: 70%; float: right;">
								<span style="clear: both;display: block;" class="span-org">1</span>
								<span style="clear: both;display: block;" class="label">兑分总量(向上)</span>
					</div>
			  </grid-item>
			</grid>
	</flexbox-item>
    </flexbox>

	<flexbox class="home-col-1-bd " >
	  <flexbox-item >
			<grid :cols="1" style="border-right: none;">
			  <grid-item >
				  <div style="width: 30%; float: left; " >
					  	<img src="../assets/home-c-1.png" alt="" style="width: 3rem; height: 3rem;" >
				  </div>
				
				<div style="width: 70%; float: right;">
					<span style="clear: both; display: block;" class="span-blue">1000</span>
					<span style="clear: both;display: block;" class="label">购分总量(向上)</span>
				</div>
			  </grid-item>
			  <grid-item style="border-bottom: none;">
					<div style="width: 30%; float: left; " >
							<img src="../assets/home-c-2.png" alt="" style="width: 3rem; height: 3rem;" >
					  </div>
						
					<div style="width: 70%; float: right;">
								<span style="clear: both;display: block;" class="span-org">1</span>
								<span style="clear: both;display: block;" class="label">兑分总量(向上)</span>
					</div>
			  </grid-item>
			</grid>
	  </flexbox-item>
	  <flexbox-item style="border-bottom: none;">
			  <grid :cols="1" >
			  <grid-item >
				  <div style="width: 30%; float: left; " >
					  	<img src="../assets/home-c-3.png" alt="" style="width: 3rem; height: 3rem;" >
				  </div>
	
				<div style="width: 70%; float: right;">
					<span style="clear: both; display: block;" class="span-blue">1000</span>
					<span style="clear: both;display: block;" class="label">购分总量(向上)</span>
				</div>
			  </grid-item>
			  <grid-item style="border-bottom: none;">
					<div style="width: 30%; float: left; " >
							<img src="../assets/home-c-3.png" alt="" style="width: 3rem; height: 3rem;" >
					  </div>
						
					<div style="width: 70%; float: right;">
								<span style="clear: both;display: block;" class="span-org">1</span>
								<span style="clear: both;display: block;" class="label">兑分总量(向上)</span>
					</div>
			  </grid-item>
			</grid>
	</flexbox-item>

	</flexbox>
	<div>
	
		<flexbox>
			<flexbox-item>
			 <group>
				<span style="width: 40%; flex-direction: column;">开始时间</span>
			    <datetime style="width: 50%;flex-direction: column; " label="开始时间" v-model="dateStart" value-text-align="left"></datetime>
		       </group>
			</flexbox-item>
			<flexbox-item>
				
				<group>
				<span style="width: 50%; flex-direction: column;">开始时间</span>
				 <datetime label="开始时间"  style="width: 60%; flex-direction: column;flex-direction: column;"  v-model="dateEnd" value-text-align="left"></datetime>
				</group>
			</flexbox-item>
		</flexbox>
		<div class="client " style="justify-content:center">
			<span class="">消耗积分：12</span>
		</div>
		<div class="home-data-rang" >
			 <grid  show-lr-borders="false" show-vertical-dividers="false">
				 <grid-item >
				 		      <x-button  class="date-rang-item" mini  >submit</x-button>
				 		      <x-button class="date-rang-item" mini   type="primary">primary</x-button>
				 		      <x-button class="date-rang-item"  mini  type="warn">Delete</x-button>
				 </grid-item>
			 </grid>

		</div>
		<div>
			<div>
				<h5>消耗积分</h5>
			</div>
			<divider></divider>
		</div>
		 
	</div>
  </div>
</template>
<i18n>
Grid:
  zh-CN: 九宫格
Go to Cell:
  zh-CN: 跳转到Cell
Custom content:
  zh-CN: 自定义内容
Custom col:
  zh-CN: 自定义列
</i18n>
<script>
import { XHeader } from 'vux'

export default {
  components: {

	  XHeader
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
	  dateStart:"",
	  dateEnd:"",
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}

.label {
    height: auto;
    font-size: 0.37333333rem;
    color: #555;
}
.span-blue {
    color: #33A5F0!important;
}

.span-org {
    color: #febe2d!important;
}

.span-red {
    color: #febe2d!important;
}


.client {
    margin-top: 0.5rem;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

</style>

<style scoped>
	.home-col-1-bd{ border: 1px #D9D9D9 solid;}
	.weui-grid{ padding: 10px 5px;}
	.date-rang-item{ width: 15%; }
</style>
