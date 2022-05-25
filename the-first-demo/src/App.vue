<template>
    <!-- vue3中的模板结构可以没有根标签 -->
    <h1>App 根组件</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h3>工作：{{ job.type }}</h3>
    <h3>薪资：{{ job.salary }}</h3>
    <h4>其他：{{ other.jobYears }}</h4>
    <h4>爱好：{{ hobby }}</h4>
    <button @click="sayHello">说话：</button>
    <br />
    <br />
    <br />
    <button @click="updateInfo">更新</button>
</template>

<script>
// import {h} from 'vue';

// ref 定义响应式数据,创建一个包含响应式数据的引用对象
// 接收的数据可以是基本类型、也可以是对象类型
import { ref } from 'vue';

// 定义一个对象类型的响应式数据（基本数据类型使用 ref ，不使用 reactive）
import { reactive } from 'vue';

export default {
    name: 'App',

    // setup 不能使用 async 修饰符, 会改变 return 返回的数据类型为 promise
    setup() {
        // ref
        let name = ref('admin');
        let age = ref(18);

        // ref
        let job = ref({
            type: 'Web 前端小白',
            salary: '99999K'
        })

        // reactive
        let other = reactive({
            jobYears: 5
        })

        // reactive
        let hobby = reactive(['one', 'two', 'three'])

        function sayHello() {
            console.log(`helllo ${name.value},he is ${age.value}`);
        }

        function updateInfo() {
            console.log(name, age, job, job.value, other, hobby);

            // ref
            name.value = 'testUser';
            age.value = 24;

            job.value.type = 'Web 前端大佬';
            job.value.salary = '99999999999K';

            // reactive
            other.jobYears = 999

            hobby[2] = 'zero'
            hobby.reverse()
        }

        // 返回一个对象 ——常用
        return {
            name,
            age,
            job,
            other,
            hobby,
            sayHello,
            updateInfo
        }

        // 返回一个函数
        // return () => h('h1','123')
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
