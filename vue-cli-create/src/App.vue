<template>
  <div class="wapper">
    <HeaderLayout />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout'
import FooterLayout from '@/components/FooterLayout'

export default {
  components: {
    HeaderLayout,
    FooterLayout
  }
}
</script>
