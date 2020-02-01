<template>
  <div class="app-container">
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
