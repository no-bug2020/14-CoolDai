<template>
	<div>
		<Header></Header>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from './components/Common/Header.vue';
import Footer from './components/Common/Footer.vue';
export default {
	name: 'app',
	components: {
		Header: Header,
		Footer: Footer
	}
};
</script>

<style></style>
