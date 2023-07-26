<template>
    <div style="width: 200px; height: 100%;">
        
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      style="width: 175px; height: 100%; position:fixed;">

      <div style="height: 50px; padding: 14px;padding-left: 20px; font-weight: bold; font-size:medium;color:dodgerblue;">
            边缘智能管理平台
        </div>
      <el-menu-item index="overview" @click="gotoHome">
        <span slot="title">概览</span>
      </el-menu-item>

      <el-submenu index="cluster">
          <!-- <template slot="title">选项1</template> -->
          <span slot="title">边缘集群</span>
          <el-menu-item index="cluster-management">集群管理</el-menu-item>
        </el-submenu>
      
        <el-submenu index="edge">
          <!-- <template slot="title">选项1</template> -->
          <span slot="title">边缘节点</span>
          <el-menu-item index="edge-node" @click="gotoEdgeNode">节点</el-menu-item>
          <el-menu-item index="edge-nodegroup">节点组</el-menu-item>
        </el-submenu>

        <el-submenu index="device">
          <!-- <template slot="title">选项1</template> -->
          <span slot="title">边缘设备</span>
          <el-menu-item index="device-management" @click="gotoDeviceManagement">设备管理</el-menu-item>
        </el-submenu>

        <el-submenu index="application">
          <!-- <template slot="title">选项1</template> -->
          <span slot="title">边缘应用</span>
          <el-menu-item index="application-management">应用管理</el-menu-item>
        </el-submenu>
        
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item> -->
    </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    methods:{
        gotoHome(){
            this.$router.push({
                name:'home'
            })
        },
        gotoEdgeNode(){
            this.$router.push({
                name:'node'
            })
        },
        gotoDeviceManagement(){
            this.$router.push({
                name:'device'
            })
        }
    }
}
</script>

<style scoped>

</style>
