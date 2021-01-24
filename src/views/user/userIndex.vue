<template>
  <div class="app-container">
    <div style="text-align: right;">
      <el-button native-type="button" type="primary" size="small" plain icon="el-icon-circle-plus-outline" style="margin-bottom: 5px;padding: 8px;font-size:16px;font-weight:blob" @click="addUser(userInfoAddTabValue)">
        <font style="font-size:16px">新增</font>
      </el-button>
      <el-button native-type="reset" type="primary" size="small" plain icon="el-icon-refresh-right" style="margin-bottom: 5px;padding: 8px;font-size:16px;font-weight:blob">
        <font style="font-size:16px">重置</font>
      </el-button>
      <el-link type="warning" :underline="false" icon="el-icon-s-fold" style="margin-left:6px;">更多查询</el-link>
    </div>
    <!--  用户列表  -->
    <el-table
      :data="userList"
      height="100%"
      border
      fit
      highlight-current-row
      style="width:100%"
    >
      <el-table-column prop="userType" label="用户类型" width="90" />
      <el-table-column prop="loginName" label="登录账号" width="90" />
      <el-table-column prop="userName" label="姓名" width="180" />
      <el-table-column prop="organizationName" label="所属组织" width="180" />
      <el-table-column prop="mobile" label="手机号码" width="100" />
      <el-table-column prop="phone" label="办公电话" width="120" />
      <el-table-column prop="idCard" label="身份证号码" width="180" />
      <el-table-column prop="email" label="电子邮箱" width="180" />
      <el-table-column prop="sex" label="性 别" width="80" />
      <el-table-column prop="wxOpenid" label="微信号" width="90" />
      <el-table-column prop="mgrType" label="管理员类型" width="180" />
      <el-table-column prop="avatar" label="头像路径" width="180" />
      <el-table-column prop="detailAddress" label="详细地址" width="180" />
      <el-table-column prop="lastLoginIp" label="最后登陆IP" width="180" />
      <el-table-column prop="lastLoginDate" label="最后登陆时间" width="180" />
      <el-table-column prop="freezeDate" label="冻结时间" width="180" />
      <el-table-column prop="createDate" label="创建时间" width="180" />
      <el-table-column prop="status" label="状态" width="80" />
      <el-table-column label="启用/停用" width="100">
        <el-tooltip :content="value" placement="top">
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" />
        </el-tooltip>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">重置密码</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>

import { userInfoPagingHelper } from '@/api/user'

export default {

  data() {
    return {
      userList: null,
      listLoading: true,
      value: true,
      filter: {
        currentPage: 1,
        pageLength: 10,
        filterModel: {}
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      userInfoPagingHelper(this.filter).then(response => {
        this.userList = response.data
        this.listLoading = false
      })
    }
  }
}
</script>

