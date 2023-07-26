<template>
    <div>
        <el-container>
            <el-header style="height: 60px; padding: 15px; width: 100%;">设备管理</el-header>
        </el-container>
        <div class="interface">
            <el-empty description="当前无设备" style="top:30%"></el-empty>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            currentPage1:1,
            tableData: [{
                nodename:'test1',
                nodetype:'私有节点',
                status:'-',
                clustertype:'-',
                whichcluster:'-',
                ip:'-',
                birthtime:'2023-07-24 15:30:15',
                operation:''
                }]
        }
    },
    methods:{
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        toAddEdgeNode(){
            this.$router.push({
                name:'addnode'
            })
        }
    }
}
</script>

<style scoped>
.interface{
  height: 100%;
  background-color: #F2F6FC;
  position: fixed;
  width: 90%;
}

.node-list{
  position: relative;
  width: 92%;
  padding: 10px;
  top:30px;
  left:2%;
  right: 2%;
}
.table{
    top:20px;
    margin-bottom: 40px;
}
.wrapper{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>