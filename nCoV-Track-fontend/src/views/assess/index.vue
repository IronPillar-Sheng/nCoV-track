<template>
  <div class="app-container">
    <!--<div class="body">
      <el-card header="健康评估">
        <el-card
          v-for="(item1,index1) in formActivationRecord"
          :key="index1"
          style="margin-bottom: 16px"
          header="时间"
        >
          <div slot="header">
            <span>#{{ index1+1 }}</span>
            <el-button
              v-if="index1!==0"
              type="danger"
              icon="el-icon-delete"
              circle
              style="float: right;margin-top: -3px"
              size="mini"
              @click="deleteActivationRecord(index1)"
            />
          </div>
          <el-form
            :ref="`formActivationRecord[${index1}]`"
            :model="formActivationRecord[index1]"
            :rules="rulesAddress"
            label-width="120px"
            label-position="left"
          >
            <el-form-item label="日期" prop="time">
              <el-date-picker
                v-model="formActivationRecord[index1].time"
                type="date"
                style="width: 100%;"
                placeholder="选择日期"
                value-format="timestamp"
              />
            </el-form-item>
            <el-form-item
              v-for="(item2,index2) in item1.address"
              :key="index2"
              label="地点"
              prop="address"
            >
              <el-row>
                <el-col :span="20">
                  <el-input v-model="formActivationRecord[index1].address[index2].name" placeholde="请输入名称" />
                </el-col>
                <el-col :span="4" style="text-align: center">
                  <el-button
                    v-if="index2!==0"
                    type="danger"
                    icon="el-icon-delete"
                    circle
                    @click="deleteAddress(index1,index2)"
                  />
                </el-col>
              </el-row>
            </el-form-item>
            <el-button
              type="primary"
              @click="addAddress(index1)"
            >
              添加地点
            </el-button>
          </el-form>
        </el-card>
        <el-button
          type="primary"
          @click="addActivationRecord"
        >
          添加活动记录
        </el-button>
      </el-card>
      <el-button
        type="success"
        class="assess-button"
        size="large"
        @click="assess"
      >
        开始评估
      </el-button>
    </div>
    <el-dialog
      title="评估结果"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <div class="score">73分</div>
      <el-card header="威胁情报" class="intelligence">
        <el-table
          class="table-body"
          :data="tableData"
          row-key="id"
          :height="tableHeight"
        >
          <el-table-column
            v-for="item of tableHeader"
            :key="item.key"
            :prop="item.key"
            :label="item.label"
            :width="item.width"
            :min-width="item.minWidth"
          />
        </el-table>
      </el-card>
      <div style="margin-top: 16px">建议：在家自我隔离、出现发热咳嗽去定点医院发热门诊进行进一步检查</div>
    </el-dialog>-->
    <iframe
      src="//1255964618.vod2.myqcloud.com/vod-player/1255964618/5285890798238306958/tcplayer/console/vod-player.html?autoplay=false&width=640&height=400"
      frameborder="0"
      scrolling="no"
      width="640"
      height="400"
      allowfullscreen
      style="margin: 0 auto"
    />
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  data() {
    const validateAddress = (rule, value, callback) => {
      for (let i = 0; i < value.length; i++) {
        if (value[i] === '') {
          callback(new Error('请输入地址'))
        } else {
          callback()
        }
      }
    }
    return {
      formActivationRecord: [
        {
          time: '',
          address: [{ name: '' }]
        }
      ],
      rulesAddress: {
        time: [
          { required: true, message: '请输入日期', trigger: 'blur' }
        ],
        address: [
          { required: true, validator: validateAddress, trigger: 'blur' }
        ]
      },
      dialogVisible: false,
      tableHeader: [
        {
          label: '日期',
          key: 'date',
          width: '200'
        },
        {
          label: '地点',
          key: 'address',
          minWidth: '200'
        },
        {
          label: '威胁程度',
          key: 'level',
          width: '200'
        }
      ],
      tableData: [
        {
          date: '1月12日',
          address: '丰县高盛国际花园城',
          level: '高'
        },
        {
          date: '1月13日',
          address: '中阳大道南五光十色灯具城',
          level: '中'
        },
        {
          date: '1月13日',
          address: '华山镇赵刘庄村',
          level: '低'
        },
        {
          date: '1月14日',
          address: '丰县人民医院',
          level: '高'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  mounted() {
  },
  methods: {
    addAddress(index1) {
      this.formActivationRecord[index1].address.push({ name: '' })
    },
    deleteAddress(index1, index2) {
      this.formActivationRecord[index1].address.splice(index2, 1)
    },
    addActivationRecord() {
      this.formActivationRecord.push({
        time: '',
        address: [{ name: '' }]
      })
    },
    deleteActivationRecord(index1) {
      this.formActivationRecord.splice(index1, 1)
    },
    assess() {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss" type="text/scss" scoped>
  .body {
    width: 700px;
    margin: 0 auto;
    .assess-button {
      display: block;
      margin: 16px auto;
      width: 100px
    }
  }

  .score {
    color: orange;
    font-size: 40px;
    margin: 0 auto;
    width: 100px;
    text-align: center
  }

  .intelligence {
    margin-top: 16px;
  }
</style>
