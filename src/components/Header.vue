<template>
  <v-app-bar color="deep-purple accent-4" dense dark>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
 <v-icon>home</v-icon>
    <v-toolbar-title>{{title}}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item  @click="() => {}">
          <!-- <v-list-item-title @>Contact List</v-list-item-title><br> -->
          <v-list-item-title @click="$router.push('/favourite')">Favourite</v-list-item-title>
          <!-- <v-list-item-title>Contact List</v-list-item-title> -->

        </v-list-item>
         
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import Axios from "axios";

@Component
export default class Header extends Vue {
  @Prop()
  public title: any;

  mounted(){
      console.log(this.title);
      
  }
}
</script>