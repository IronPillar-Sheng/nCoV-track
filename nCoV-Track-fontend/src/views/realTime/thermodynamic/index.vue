<template>
  <div class="app-container">
    <el-date-picker
      v-model="date"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions"
      size="mini"
      value-format="timestamp"
      @change="changeDate"
    />
    <el-time-select
      v-model="time"
      :picker-options="{
        start: '00:00',
        step: '02:00',
        end: '24:00'
      }"
      placeholder="选择时间"
      size="mini"
      :default-value="new Date()"
      @change="changeDate"
    />
    <baidu-map
      class="map"
      :center="baiduMap.center"
      :zoom="baiduMap.zoom"
      :scroll-wheel-zoom="true"
    >
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" />
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT" />
      <bm-control class="wrap" />
      <bml-heatmap :data="point" :max="100" :radius="20" />
    </baidu-map>
  </div>
</template>

<script>
import { BmlHeatmap } from 'vue-baidu-map'

export default {
  name: 'Show',
  components: { BmlHeatmap },
  data() {
    return {
      date: [1577854477796, new Date().valueOf()],
      time: '00:00',
      baiduMap: {
        center: { lng: 110, lat: 38 },
        zoom: 5,
        autoViewport: false
      },
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      point: [
        { lng: 130, lat: 50, count: 50 },
        { lng: 130, lat: 40, count: 51 },
        { lng: 120, lat: 50, count: 51 },
        { lng: 120, lat: 40, count: 51 }
        // { lng: 116.419787, lat: 25, count: 15 }
      ]
    }
  },
  computed: {},
  mounted() {
    // this.disclaimer()
    this.changeDate()
  },
  methods: {
    disclaimer() {
      const h = this.$createElement
      this.$msgbox({
        title: '免责声明',
        message: h('p', null, [
          h('div', null, '版权:同态团队作为资源的整理方，目前所展示的所有资源与信息均来自互联网的公开信息，包括但不限于个人路线图、定点医院信息、高速封路信息、口罩酒精等医疗资源货源情况等。版权及数据所有权均归原始所有者。\n'),
          h('div', null, '说明:本平台所提供的所有数据均来自于网络，仅供平台功能展示之用，所有关于与疫情相关的信息均以国家正式发布的信息为准。由于相关疫情信息不断更新，所有资源与数据仅供参考，本平台不予承担任何责任。任何涉及到商业目的的均不能使用，否则产生的一切后果由您自行承担，我们提供整理与功能应用但是不对任何资源负法律责任。'),
          h('div', null, '申明:任何使用本平台收集的资源与数据产生的不测后果，本平台不对此负任何责任。 转载时请保留本信息，谢谢。\n'),
          h('div', null, '感谢所有对新型冠状病毒疫情表示关注的热心人。我们会尽我们所能提供对应的技术支持与资源。同时请求各位谅解，由于制作时间匆忙，有不足之处还请及时指出并多多谅解。\n'),
          h('div', null, '大家众志成城，共克时艰，一起为祖国加油！\n'),
          h('div', { style: 'margin-top:32px' }, '2020年1月31日\n'),
          h('div', null, ' 同态疫情大数据应急团队')
        ]),
        confirmButtonText: '确定'
      })
    },
    changeDate() {
      this.createData()
    },
    createData() {
      const point = []
      for (let i = 0; i < 100; i++) {
        const lng = 100 + Math.random() * 20
        const lat = 25 + Math.random() * 15
        const count = Math.random() * 100
        point.push({
          lng: lng,
          lat: lat,
          count: count
        })
      }
      for (let i = 0; i < 80; i++) {
        const lng = 80 + Math.random() * 20
        const lat = 30 + Math.random() * 10
        const count = Math.random() * 100
        point.push({
          lng: lng,
          lat: lat,
          count: count
        })
      }
      for (let i = 0; i < 30; i++) {
        const lng = 120 + Math.random() * 10
        const lat = 40 + Math.random() * 10
        const count = Math.random() * 100
        point.push({
          lng: lng,
          lat: lat,
          count: count
        })
      }
      this.point = point
    }
  }
}
</script>

<style lang="scss" type="text/scss" scoped>
  .map {
    width: 100%;
    height: calc(100vh - 220px);
  }

  .wrap {
    padding-top: 20px;
    background-image: url('../../../assets/watermark.jpg');
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
</style>
