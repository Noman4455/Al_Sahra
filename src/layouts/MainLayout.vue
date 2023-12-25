<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      class=""
      v-scroll="handleScroll"
      style="background-color: transparent"
    >
      <div ref="mobList" class="navlist">
        <q-toolbar
          ref="mobList"
          class="row container bg-transparent"
          style="height: 10vh"
        >
          <div class="text-h6">Top Oil Field</div>
          <q-space />
          <div class="q-gutter-x-md gt-sm">
            <q-btn
              color="white"
              class="q-px-lg"
              flat
              label="Home"
              to="/"
              @click="onClick"
            />
            <q-btn
              color="white"
              class="q-px-lg"
              flat
              label="Services"
              to="/service"
              @click="onClick"
            />
            <q-btn
              color="white"
              class="q-px-lg"
              flat
              label="About"
              to="/about"
              @click="onClick"
            />
            <q-btn
              color="white"
              class="q-px-lg"
              flat
              label="Contact"
              to="/contact"
              @click="onClick"
            />
          </div>
          <q-btn
            v-if="leftDrawerOpen == false"
            flat
            dense
            round
            color="white"
            class="q-mr-md lt-md q-mt-xs"
            icon="menu"
            aria-label="Menu"
            @click="drawer"
          />
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer
      side="right"
      class="bg-dark q-pa-md lt-md"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="width: 100%"
    >
      <div class="row q-pb-md">
        <!-- <q-img
          src="~assets/logo1.png"
          class="opecity"
          height="90px"
          width="130px"
        /> -->
        <q-space />
        <q-icon
          name="close"
          size="24px"
          class="q-pt-xs cursor-pointer q-pr-md q-mr-xs q-pt-lg"
          @click="close()"
          color="white"
        />
      </div>
      <div>
        <div>
          <q-btn
            class="flex flex-center"
            flat
            to="/"
            color="white"
            label="Home"
          />
        </div>
        <div>
          <q-btn
            class="flex flex-center"
            flat
            to="/service"
            color="white"
            label="Services"
          />
        </div>
        <div>
          <q-btn
            class="flex flex-center"
            flat
            to="/about"
            color="white"
            label="About"
          />
        </div>
        <div>
          <q-btn
            class="flex flex-center"
            flat
            to="/contact"
            color="white"
            label="Contact"
          />
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="bg-primary text-white q-py-lg q-pt-lg gt-sm">
      <a href="https://wa.me/+923456789" target="_blank">
        <q-img
          src="~assets/whatsapp.png"
          class="whatsapp q-mb-md q-mr-md"
          height="40px"
          width="40px"
        />
      </a>
      <div class="row container q-py-xl q-col-gutter-lg">
        <div class="col-12 col-md-6 col-lg-3 q-gutter-y-md">
          <div class="text-h6 text-bold">SERVICES</div>
          <div><a href="#/service">Oil Gas Equipments</a></div>
          <div><a href="#/service">Mining Equipments</a></div>
          <div><a href="#/service">Spare Parts</a></div>
          <div><a href="#/service">Provide Labour</a></div>
          <div><a href="#/service">Provide Tools & Equipments</a></div>
          <div><a href="#/service">Maintenance</a></div>
        </div>
        <div class="col-12 col-md-6 col-lg-2 q-gutter-y-md">
          <div class="text-h6 text-bold">COMPANY</div>
          <div><a href="#/about">About</a></div>
          <div><a href="#/service">What We Do</a></div>
          <div><a href="#/service">How We Do</a></div>
          <div><a href="#/contact">Contact</a></div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 q-gutter-y-sm text-right">
          <div>
            <div class="text-h6 text-bold text-red">HAVE QUESSTIONS?</div>
          </div>
          <div class="text-bold q-pb-md" style="font-size: 2.5rem">
            <div class="div">Get in Touch with us</div>
            <div>
              <a href="https://wa.me/+923456789" target="_blank">
                <div class="">+923456789</div>
              </a>
            </div>
          </div>
          <div class="text-bold">KualitySoft</div>
          <div>
            Office# 7, Garden Town Phase 3, <br />
            Gujranwala, Pakistan
          </div>
          <div>abc@xyz.com</div>
          <div class="q-gutter-x-md q-pt-lg">
            <a href="https://www.facebook.com/kualitysoft" target="_blank"
              ><q-img src="~assets/face.png" height="30px" width="30px"
            /></a>
            <a href="https://www.instagram.com/kualitysoft/" target="_blank"
              ><q-img src="~assets/instagram.png" height="30px" width="30px"
            /></a>
            <a
              href="https://www.linkedin.com/company/kualitysoft/"
              target="_blank"
              ><q-img src="~assets/linkedin.png" height="30px" width="30px"
            /></a>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg q-gutter-y-md">
          <div class="text-h6 text-bold">Live Stocks View</div>
          <TradingViewWidget />
        </div>
      </div>
      <div class="q-my-md container">
        <q-separator dark />
      </div>
      <div class="q-pt-md container">
        <div>
          <a
            href="https://www.kualitysoft.co.uk/"
            target="_blank"
            style="text-decoration: none"
          >
            <q-img src="~assets/love.png" height="18px" width="240px" />
          </a>
        </div>
      </div>
    </footer>

    <footer class="bg-primary text-white q-py-lg q-pt-lg lt-md">
      <a href="https://wa.me/+923456789" target="_blank">
        <q-img
          src="~assets/whatsapp.png"
          class="whatsapp q-mb-md q-mr-md"
          height="40px"
          width="40px"
        />
      </a>
      <div class="row container q-py-xl q-col-gutter-y-lg text-center">
        <div class="col-12 col-md-6 col-lg-3 q-gutter-y-md">
          <div class="text-h6 text-bold">SERVICES</div>
          <div><a href="#/service">Oil Gas Equipments</a></div>
          <div><a href="#/service">Mining Equipments</a></div>
          <div><a href="#/service">Spare Parts</a></div>
          <div><a href="#/service">Provide Labour</a></div>
          <div><a href="#/service">Provide Tools & Equipments</a></div>
          <div><a href="#/service">Maintenance</a></div>
        </div>
        <div class="col-12 col-md-6 col-lg-2 q-gutter-y-md">
          <div class="text-h6 text-bold">COMPANY</div>
          <div><a href="#/about">About</a></div>
          <div><a href="#/service">What We Do</a></div>
          <div><a href="#/service">How We Do</a></div>
          <div><a href="#/contact">Contact</a></div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 q-gutter-y-sm">
          <div>
            <div class="text-h6 text-bold text-red">HAVE QUESSTIONS?</div>
          </div>
          <div class="text-bold q-pb-md" style="font-size: 2.5rem">
            <div class="div">Get in Touch with us</div>
            <div>
              <a href="https://wa.me/+923456789" target="_blank">
                <div class="">+923456789</div>
              </a>
            </div>
          </div>
          <div class="text-bold">KualitySoft</div>
          <div>
            Office# 7, Garden Town Phase 3, <br />
            Gujranwala, Pakistan
          </div>
          <div>abc@xyz.com</div>
          <div class="q-gutter-x-md q-pt-lg">
            <a href="https://www.facebook.com/kualitysoft" target="_blank"
              ><q-img src="~assets/face.png" height="30px" width="30px"
            /></a>
            <a href="https://www.instagram.com/kualitysoft/" target="_blank"
              ><q-img src="~assets/instagram.png" height="30px" width="30px"
            /></a>
            <a
              href="https://www.linkedin.com/company/kualitysoft/"
              target="_blank"
              ><q-img src="~assets/linkedin.png" height="30px" width="30px"
            /></a>
          </div>
        </div>
        <div class="q-mx-auto">
          <div class="text-h6 text-bold">Live Stocks View</div>
        </div>
        <div class="col-12 col-md-6 col-lg q-gutter-y-md flex flex-center">
          <TradingViewWidget />
        </div>
      </div>
      <div class="q-my-md container">
        <q-separator dark />
      </div>
      <div class="q-pt-md container text-center">
        <div>
          <a
            href="https://www.kualitysoft.co.uk/"
            target="_blank"
            style="text-decoration: none"
          >
            <q-img src="~assets/love.png" height="18px" width="240px" />
          </a>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script>
import TradingViewWidget from "components/TradingViewWidget.vue";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "MainLayout",
  components: {
    TradingViewWidget,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const mobList = ref(null);
    const displayList = () => {
      // Your displayList logic here
    };
    const handleScroll = () => {
      if (window.scrollY > 250) {
        mobList.value.style.backgroundColor = "#382f2e";
      } else {
        mobList.value.style.backgroundColor = "";
        mobList.value.style.opecity = "";
      }
    };

    onMounted(() => {
      leftDrawerOpen.value = false;
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      leftDrawerOpen,
      displayList,
      handleScroll,
      mobList,
      drawer() {
        leftDrawerOpen.value = true;
      },
      close() {
        leftDrawerOpen.value = false;
      },
    };
  },
};
</script>




<style lang="scss">
.whatsapp {
  position: fixed;
  bottom: 0px;
  right: 0px;
}

.div {
  margin-bottom: -12px;
  font-size: 12px;
}
</style>
