<template>
  <Layout>
    <!-- <div class="tagCloud"></div> -->
    <div class="tagCloud">
      <svg :width='width' :height='height' @mousemove='listener($event)'>
      <!-- <svg :width='width' :height='height'> -->
        <g-link :to="tag.path" v-for='tag in tags' :key="tag.id">
            <text :x='tag.x' :y='tag.y' :font-size='20 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)'>{{tag.text}}</text>
        </g-link>
      </svg>
    </div>
  </Layout>
</template>

<static-query>
{
  tags: allTag {
    edges {
      node {
        title
        path
      }
    }
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: '分类/标签'
  },
  data () {
    return {
      width:500,//svg宽度
      height:500,//svg高度
      tagsNum:20,//标签数量
      RADIUS:150,//球的半径
      speedX:Math.PI/360,//球一帧绕x轴旋转的角度
      speedY:Math.PI/360,//球-帧绕y轴旋转的角度
      tags: []
    }
  },  
  computed:{
    CX(){//球心x坐标
      return this.width/2-10;
    },
    CY(){//球心y坐标
      return this.height/2;
    }
  },
  methods: {
    // 让球旋转起来
    rotateX(angleX){
      var cos = Math.cos(angleX);
      var sin = Math.sin(angleX);
      // console.log(this.tags)
      for(let tag of this.tags){
        var y1 = (tag.y- this.CY) * cos - tag.z * sin  + this.CY;
        var z1 = tag.z * cos + (tag.y- this.CY) * sin;
        tag.y = y1;
        tag.z = z1;
      }
    },
    rotateY(angleY){
      var cos = Math.cos(angleY);
      var sin = Math.sin(angleY);
      for(let tag of this.tags){
        var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
        var z1 = tag.z * cos + (tag.x - this.CX) * sin;
        tag.x = x1;
        tag.z = z1;
      }
    },
    listener(event){//响应鼠标移动
      var x = event.clientX - this.CX;
      var y = event.clientY - this.CY;
      this.speedX = x*0.0001>0 ? Math.min(this.RADIUS*0.00002, x*0.0001) : Math.max(-this.RADIUS*0.00002, x*0.0001);
      this.speedY = y*0.0001>0 ? Math.min(this.RADIUS*0.00002, y*0.0001) : Math.max(-this.RADIUS*0.00002, y*0.0001);
    }
  },
  created(){//初始化标签位置
    let tags=[];
    for(let i = 0; i < this.$static.tags.edges.length; i++){
      let tag = {};
      let k = -1 + (2 * (i + 1) - 1) / this.tagsNum;
      let a = Math.acos(k);
      let b = a * Math.sqrt(this.tagsNum * Math.PI)//计算标签相对于球心的角度
      tag.text = this.$static.tags.edges[i].node.title;
      tag.x = this.CX +  this.RADIUS * Math.sin(a) * Math.cos(b);//根据标签角度求出标签的x,y,z坐标
      tag.y = this.CY +  this.RADIUS * Math.sin(a) * Math.sin(b);
      tag.z = this.RADIUS * Math.cos(a);
      tag.path = this.$static.tags.edges[i].node.path;//给标签添加链接
      tags.push(tag);
    }
    console.log(tags)
    this.tags = tags;//让vue替我们完成视图更新
  },
  mounted(){//使球开始旋转
    setInterval(() => {
      this.rotateX(this.speedX);
      this.rotateY(this.speedY);
    }, 27)
  },
}
</script>

<style lang="stylus" scoped>
.tagCloud {
  text-align center
  box-shadow 0 0 5px 0 rgba(38,42,48,0.1)
}
</style>
