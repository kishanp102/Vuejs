<template src='./Favourite.html'></template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Axios from 'axios';
import HeadersComponent from '../Header.vue';

@Component({
  components: { HeadersComponent },
})
export default class Favourite extends Vue {
  public headers = [
    {
      text: 'Favourite',
      align: 'start',
      sortable: false,
      value: 'favourite',
    },
    { text: 'Image', value: 'avatar' },
    { text: 'email', value: 'email' },
    { text: 'first_name', value: 'first_name' },
    { text: 'last_name', value: 'last_name' },
  ];

  public setFavoutire(data:any) {
    const result = this.$store.state.favourite.findIndex((a:any) => a.id == data.id);
    
    const finalResult = this.$store.state.favourite.splice(result, 1);
    // finalResult.forEach(element => {
    this.$store.dispatch('removeFavouriteData', finalResult );
    // });

  }
}
</script>