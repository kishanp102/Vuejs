<template src='./ContactList.html'></template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Axios from 'axios';
import HeadersComponent from '../Header.vue';

@Component({
  components: { HeadersComponent },
})
export default class ContactList extends Vue {
  public queryId = null;
  public contactInfo:any = null;
  public favouriteAdded = false;
  public alreadyExist = false;
  public async uploadDoc() {
    try {
      const response = await Axios.get('https://reqres.in/api/users', {
        params: {
          id: this.$route.query.id,
        },
      });
      console.log(response);
      this.contactInfo = response.data.data;
    } catch (error) {
      
    }
  }

  public setFavoutire() {
    const data = this.$store.state.favourite.filter(e=> e.id == this.contactInfo.id);
    if (data.length > 0) {
      this.favouriteAdded = false;
      this.alreadyExist = true;

      setTimeout(() => {
        this.alreadyExist = false;
      }, 1000);
    } else {
      this.$store.dispatch('setFavouriteData', this.contactInfo);
      this.favouriteAdded = true;
      setTimeout(() => {
        this.favouriteAdded = false;
      }, 1000);
    }
  }
  public mounted() {
    this.uploadDoc();
    // this.queryId = console.log(this.$route.query.id, 'sdasd');
  }
}
</script>

</style>
