<template src='./Contact.html'></template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Axios from 'axios';
import HeadersComponent from '../Header.vue';

@Component({
  components: { HeadersComponent },
})
export default class ImagesList extends Vue {
  public contactList: any = [];
  public page = 1;
  public totalPage = null;
  public sortingType = null;
  public headers = [
    {
      text: 'Image',
      align: 'start',
      sortable: false,
      value: 'avatar',
    },
    { text: 'email', value: 'email' },
    { text: 'first_name', value: 'first_name' },
    { text: 'last_name', value: 'last_name' },
  ];
  public singleSelect = false;
  public selected = null;
  public async uploadDoc() {
    try {
      const response = await Axios.get('https://reqres.in/api/users', {
        params: {
          page: this.page,
        },
      });
      this.contactList = response.data.data;
      this.totalPage = response.data.total;
    } catch (error) {
     
    }
  }

  public changeValue(value: any) {
    this.sortingType = value;
    this.contactList.sort((a: any, b: any) => {
      const first = a.first_name.replace(' ', '').toLowerCase();
      const second = b.first_name.replace(' ', '').toLowerCase();
      if (this.sortingType === 'asc') {
        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }
        return 0;
      } else {
        if (first < second) {
          return 1;
        }
        if (first > second) {
          return -1;
        }
        return 0;
      }
    });
  }

  public next(value: any) {
    this.$router.push({
      path: '/contact',
      query: { id: value.id },
    });
  }

  public mounted() {
    this.uploadDoc();
  }
}
</script>
<style scoped>
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}
</style>