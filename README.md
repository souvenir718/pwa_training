# PWA Training

### [manifest.json 유효성 검사 사이트](https://manifest-validator.appspot.com/)

![](./Images/manifest-validator.png)

### [service worker를 지원하는지 검사하는 사이트](https://mobilehtml5.org/tests/sw)

![image-20210704132549417](./Images/service-worker.png)

## Vue

### 머스태시와 v-bind 차이점

1. **머스태시** : HTML 엘리먼트값

```vue
<p>
    {{ sTitle }}
</p>
```

2. **v-bind** : HTML 어트리뷰트 값

```vue
<input v-bind:value="sDate">
```



### v-bind와 v-model 차이점

1. **v-bind** : sDate값을 HTML 어트리뷰트에 보내기만 함

```vue
<input v-bind:value="sDate">
```

2. **v-modle** : sMsg값과 입력값이 서로 연동

```vue
<input v-mode:value="sMsg">
```

