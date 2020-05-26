<template>
	<div>
		<Header></Header>
		<router-view></router-view>
	</div>
</template>

<script>
import Header from './components/Common/Header.vue';
export default {
	name: 'app',
	components: {
		Header: Header,
	}
};
</script>

<style></style>
