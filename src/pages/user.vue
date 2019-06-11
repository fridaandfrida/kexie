<template>
  <div>
    <!-- 查询 -->
    <el-form :inline="true" :model="searchData" style="padding:10px;" class="demo-form-inline">
      <el-form-item label="性别：">
        <el-select v-model="searchData.sex" placeholder="请选择性别">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户类别：">
        <el-select v-model="searchData.userType" placeholder="请选择类别">
          <el-option label="城镇劳动者" value="1"></el-option>
          <el-option label="领导干部" value="2"></el-option>
          <el-option label="农村居民" value="3"></el-option>
          <el-option label="青少年" value="4"></el-option>
          <el-option label="社区居民" value="5"></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="真实姓名">
        <el-input v-model="searchData.realName" placeholder="真实姓名"></el-input>
      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="handleSearch">查询</el-button>
        <!-- <el-button type="primary" @click="handleAdd">添加</el-button> -->
      </el-form-item>
    </el-form>
    <!-- table -->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      highlight-current-row
      @current-change="handleCurrentChangeRow"
    >
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="id" label="id" width="180"></el-table-column>
      <el-table-column prop="realName" label="姓名" width="180"></el-table-column>
      <el-table-column prop="sex" label="性别">
        <template slot-scope="scope">
          <span v-if="scope.row.sex==1">男</span>
          <span v-if="scope.row.sex==2">女</span>
        </template>
      </el-table-column>
      <el-table-column prop="mobile" label="手机号码"></el-table-column>
      <el-table-column prop="company" label="单位"></el-table-column>
      <el-table-column prop="userType" label="用户类别">
        <template slot-scope="scope">
          <span v-if="scope.row.userType==1">城镇劳动者</span>
          <span v-if="scope.row.userType==2">领导干部</span>
          <span v-if="scope.row.userType==3">农村居民</span>
          <span v-if="scope.row.userType==4">青少年</span>
          <span v-if="scope.row.userType==5">社区居民</span>
        </template>
      </el-table-column>
      <el-table-column prop="province_city_region" label="所在区县"></el-table-column>
      <el-table-column prop="entranceType" label="系统分类">
        <template slot-scope="scope">
          <span v-if="scope.row.entranceType==1">科协系统</span>
          <span v-if="scope.row.entranceType==2">农业农村系统</span>
          <span v-if="scope.row.entranceType==3">工会系统</span>
          <span v-if="scope.row.entranceType==4">团委系统</span>
          <span v-if="scope.row.entranceType==5">妇联系统</span>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="注册时间"></el-table-column>
      <el-table-column prop="sumIntegral" label="总积分"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope" style="text-align: center;">
          <el-button size="mini" type="primary" @click="handleCheckDetail(scope.row.id)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="searchData.page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="searchData.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      style="margin-top:20px;text-align:right;"
    ></el-pagination>
    <!-- 查看用户详情 -->
    <el-dialog title="积分详情" :visible.sync="visibleDialog" width="30%">
      <div class="user-detial" style="padding: 20px;">
        <div style="margin-bottom: 10px;">姓名：{{userData.userName}}</div>
        <div style="margin-bottom: 10px;">总积分：{{userData.sumIntegral}}</div>
        <el-row style="margin-bottom: 10px;">
          <el-col :span="12">
            <div>练习答题：{{userData.exerciseScore}}</div>
          </el-col>
          <el-col :span="12">
            <div>练习次数：{{userData.exerciseCount}}</div>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 10px;">
          <el-col :span="12">
            <div>闯关答题：{{userData.makScore}}</div>
          </el-col>
          <el-col :span="12">
            <div>挑战次数：{{userData.makCount}}</div>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 10px;">
          <el-col :span="12">
            <div>分享答题：{{userData.share}}</div>
          </el-col>
          <el-col :span="12">
            <div>邀请好友：{{userData.friends}}</div>
          </el-col>
        </el-row>
        <div style="margin-top: 10px;margin-bottom: 10px;">历史记录</div>
        <el-table :data="tableDataDetail" border style="width: 100%">
          <el-table-column type="index" label="序号" width="50"></el-table-column>
          <el-table-column prop="paperType" label="积分来源" width="180">
            <template slot-scope="scope">
              <span v-if="scope.row.paperType==1">练习试卷</span>
              <span v-if="scope.row.paperType==2">闯关试卷</span>
              <span v-if="scope.row.paperType==3">竞赛试卷</span>
              <span v-if="scope.row.paperType==4">邀请得分</span>
            </template>
          </el-table-column>
          <el-table-column prop="score" label="积分"></el-table-column>
          <el-table-column prop="createdTime" label="时间"></el-table-column>
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import api_server from "../api/api_server.js";
export default {
  name: "user",
  data() {
    return {
      searchData: {
        // account: '',
        // enabled: '',
        // realName: '',
        userType: "",
        sex: "",
        page: 1,
        size: 10
      },
      tableData: [],
      total: 0,
      visibleDialog: false,
      userData: {
        id: 0,
        realName: "",
        sumIntegral: "",
        exerciseCount: "",
        exerciseScore: "",
        makCount: "",
        makScore: "",
        share: "",
        friends: ""
      },
      tableDataDetail: [],
      options: [
        {
          value: "1",
          label: "男"
        },
        {
          value: "2",
          label: "女"
        }
      ],
      value: ""
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    //获取用户
    getTableData() {
      api_server.getUserData(this.searchData).then(res => {
        console.log(res);
        this.tableData = res.body.content;
        this.total = res.body.total;
      });
    },
    //查看用户详情
    handleCheckDetail(id) {
      api_server.getUserDataDetail({ id: id }).then(res => {
        console.log(res);
        this.userData = res.body;
        this.tableDataDetail = res.body.userScoreDetail;
        this.visibleDialog = true;
      });
    },
    //查询用户
    handleSearch() {
      this.searchData.page = 1;
      this.getTableData();
    },
    //分页
    handleSizeChange(val) {
      this.searchData.size = val;
      this.getTableData();
    },
    //分页
    handleCurrentChange(val) {
      this.searchData.page = val;
      this.getTableData();
    },
    //选中行高亮显示
    handleCurrentChangeRow(val) {
      this.currentRow = val;
    }
  }
};
</script>

<style scoped>
/* .user-detial div {
  margin-bottom: 10px;
} */
</style>