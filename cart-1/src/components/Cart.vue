<template>
	<div id="cart">
		<div class="cotainer">
			<div class="cart">
				<div class="checkout-title">
					<span>购物车</span>
				</div>
	
				<!-- table -->
				<div class="item-list-wrap">
					<div class="cart-item">
						<div class="cart-item-head">
							<ul>
								<li>商品信息</li>
								<li>商品金额</li>
								<li>商品数量</li>
								<li>总金额</li>
								<li>编辑</li>
							</ul>
						</div>
						<ul class="cart-item-list">
							<li v-for="item in productList">
								<div class="cart-tab-1">
									<div class="cart-item-check">
										<a href="javascript:void 0" class="item-check-btn" v-bind:class="{'check': item.checked}" @click="selectedProduct(item)">
											<svg class="icon icon-ok">
												<use xlink:href="#icon-ok"></use>
											</svg>
										</a>
									</div>
									<div class="cart-item-pic">
										<img v-bind:src="item.productImage" alt="烟">
									</div>
									<div class="cart-item-title">
										<div class="item-name">{{ item.productName }}</div>
									</div>
									<div class="item-include">
										<dl>
											<dt>赠送:</dt>
											<dd v-for="part in item.parts" v-text="part.partsName"></dd>
										</dl>
									</div>
								</div>
								<div class="cart-tab-2">
									<div class="item-price">{{ item.productPrice | formatMoney}}</div>
								</div>
								<div class="cart-tab-3">
									<div class="item-quantity">
										<div class="select-self select-self-open">
											<div class="quantity">
												<a href="javascript:;" @click="changeMoney(item,-1)">-</a>
												<input type="text" :value="item.productQuantity" disabled>
												<a href="javascript:;" @click="changeMoney(item,1)">+</a>
											</div>
										</div>
										<div class="item-stock">有货</div>
									</div>
								</div>
								<div class="cart-tab-4">
									<div class="item-price-total">{{ item.productPrice*item.productQuantity | money('元')}}</div>
								</div>
								<div class="cart-tab-5">
									<div class="cart-item-operation">
										<a href="javascript:void 0" class="item-edit-btn" @click="delConfirm(item)">
											<svg class="icon icon-del">
												<use xlink:href="#icon-del"></use>
											</svg>
										</a>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
	
				<!-- footer -->
				<div class="cart-foot-wrap">
					<div class="cart-foot-l">
						<div class="item-all-check">
							<a href="javascript:void 0">
								<span class="item-check-btn" :class="{'check':checkAllFlag}" @click="checkAll(true)">
									<svg class="icon icon-ok">
										<use xlink:href="#icon-ok"></use>
									</svg>
								</span>
								<span v-show="!checkAllFlag">全选</span>
							</a>
						</div>
						<div class="item-all-del">
							<a href="javascript:void 0" class="item-del-btn" @click="checkAll(false)">
								<span v-show="checkAllFlag">取消全选</span>
							</a>
						</div>
					</div>
					<div class="cart-foot-r">
						<div class="item-total">
							Item total:
							<span class="total-price">{{totalMoney | money('元')}}</span>
						</div>
						<div class="next-btn-wrap">
							<a href="address.html" class="btn btn--red" style="width: 200px">结账</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="md-modal modal-msg md-modal-transition" id="showModal" v-bind:class="{'md-show':delFlag}">
			<div class="md-modal-inner">
				<div class="md-top">
					<button class="md-close" @click="delFlag = false">关闭</button>
				</div>
				<div class="md-content">
					<div class="confirm-tips">
						<p id="cusLanInfo">你确认删除此订单信息吗?</p>
					</div>
					<div class="btn-wrap col-2">
						<button class="btn btn--m" id="btnModalConfirm" @click="delProduct">Yes</button>
						<button class="btn btn--m btn--red" id="btnModalCancel" @click="delFlag=false">>No</button>
					</div>
				</div>
			</div>
		</div>

		<div class="md-overlay" v-if="delFlag"></div>
	</div>
</template>

<script>
new Vue({
	el: '#cart',
	data: {

	},
	mounted: function () {

	},
	methods: function () {

	}
})
</script>


<style lang = 'less' scoped>
	@color: red;
	#cart{
		padding: 10px;
		.cotainer {
			margin: 20px

		}
		
	}
</style>
