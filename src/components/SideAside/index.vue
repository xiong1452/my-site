<template>
  <div class="side-aside-container">
    <div class="Avatar">
      <Avatar
        :url="'https://konachan.net/data/preview/1a/16/1a16728e8834cf9231a9ff2f4cdf0924.jpg'"
        :width="150"
        :height="150"
      ></Avatar>
    </div>
    <div class="Menu">
      <Menu></Menu>
    </div>
    <div class="Contact">
      <Contact></Contact>
    </div>
    <div class="footer">备案号: XXXXXXXX</div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
export default {
  name: "SideAside",
  components: {
    Avatar,
    Contact,
    Menu,
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
html,
.side-aside-container {
  height: 100%;
  width: 100%;
}

.Avatar {
  display: flex;
  justify-content: center;
  padding: 30px;
}

.Menu {
  height: 30%;
  margin: 30px 0;
}

.Contact {
  height: 20%;
  margin: 50px 0;
}

.footer {
  display: flex;
  padding-top: 15px;
  padding-left: 30px;
  color: @gray;
  align-items: center;
  flex-grow: 1;
}
</style>