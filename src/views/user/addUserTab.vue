<template>
  <div class="app-container">
    <el-tabs v-model="userInfoAddTabValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane>
        <div class="demo-input-size">
          <el-form :model="userInfo" :inline="true" class="demo-form-inline">
            <el-form-item label="用户类型">
              <el-select v-model="userInfo.userType" auto-complete="off" placeholder="请选择">
                <el-option label="自有" value="10" />
                <el-option label="外协" value="20" />
              </el-select>
            </el-form-item>
            <el-form-item label="登录账号">
              <el-input v-model="userInfo.loginName" auto-complete="off" />
            </el-form-item>
            <el-form-item label="用户姓名">
              <el-input v-model="userInfo.userName" auto-complete="off" />
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
import { validUsername } from '@/views/addUserTab'
<script>
export default {
  data() {
    return {
      userInfo: {
        userType: '',
        loginName: '',
        userName: ''
      }
    }
  }
}
</script>

<style>

</style>
