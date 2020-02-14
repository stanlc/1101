<template>
    <el-container>
    
      <el-header>
        <h1>APCOS应用服务</h1>
      </el-header>
      <el-main>
        <el-container>
          <el-aside width="300px"  v-if="$route.name!=='pageConfig'">
            <side-menu></side-menu>
          </el-aside>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
        
      </el-main>
  </el-container>

</template>

<script>
// @ is an alias to /src
import sideMenu from '../components/sideMenu'

export default {
  name: 'home',
  components: {
    sideMenu
  }
}
</script>
