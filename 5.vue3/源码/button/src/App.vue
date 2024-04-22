<template>
  <button @click="addnum"> 数子是{{ num }}</button>

  <div class="ynbox">
    <div  v-if="result">是</div>
    <div  v-else>否</div>
    <button @click="change">改变</button>
  </div>

  <!-- 下拉选择框：https://www.runoob.com/vue3/vue3-v-for.html *** -->
  <div class="selectboc">
    <select @change="changeVal($event)" v-model="selOption">
      <template v-for="(site,index) in sites" :site="site" :index="index" :key="site.id">
         <!-- 索引为 1 的设为默认值，索引值从0 开始-->
         <option v-if = "index == 1" :value="site.name" selected>{{site.name}}</option>
         <option v-else :value="site.name">{{site.name}}</option>
      </template>
      </select>
      <div>您选中了:{{selOption}}</div>
  </div>

<!-- 输入框： https://www.runoob.com/vue3/vue3-v-for.html ***-->
  <div>
    <hr/>
    <form @submit.prevent="addnewtodo">
      <label>添加内容:</label>
      <input
      v-model="newTodoText"
      placeholder="例如：明天早上跑步"
      />
      <button>添加</button>
    </form>
    <ul >
      <todo-item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :title="todo.title"
      @remove="todos.splice(index, 1)"
      >

      </todo-item>
    </ul>
  </div>

</template>

<script>
  export default{
    data(){
      return {
        num:0,
        result:true,
        selOption: "Runoob",
        sites: [
              {id:1,name:"Google"},
              {id:2,name:"Runoob"},
              {id:3,name:"Taobao"},
        ],

      newTodoText: '',
      todos: [
        {
          id: 1,
          title: '看电影'
        },
        {
          id: 2,
          title: '吃饭'
        },
        {
          id: 3,
          title: '上 RUNOOB 学习'
        }
      ],
      nextTodoId: 4
    }
    },
    methods: {
      addnum(){
        this.num++
      },
      change(){
        console.log('##',this)
        this.result = !this.result
      },

      changeVal:function(event){
        console.log("###",event)
          this.selOption = event.target.value;
          alert("你选中了"+this.selOption);
      },

      addnewtodo(){
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
          this.newTodoText = ''
      }
    }
  }

app.components('todo-item',{
  template:
 ` <li>
    {{title}}
    <button @click="$emit('remove')">删除</button>
  </li>`,
  props:["title"],
  emits:['emit']
})
</script>