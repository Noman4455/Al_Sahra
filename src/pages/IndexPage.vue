<template>
  <q-page class="bg-grey-2">
    <div class="bg-img flex flex-center gt-sm">
      <div class="text-h3 q-mb-xl q-pb-xl text-white text-bold container">
        Your Professional Partner Choice <br />
        For The Oil & Gas Industry
      </div>
    </div>
    <div class="bg-img flex flex-center lt-md">
      <div class="text-h5 q-mb-xl q-pb-xl text-white text-bold container">
        Your Professional Partner Choice <br />
        For The Oil & Gas Industry
      </div>
    </div>

    <div class="q-mt-xl q-pt-lg container margin text-primary gt-sm">
      <div class="row q-gutter-md">
        <div
          class="col-12 col-md bg-white q-pa-xl rounded-borders"
          v-for="item in card"
          :key="item"
        >
          <q-img :src="item.img" height="200px" />
          <div class="text-h6 q-pt-md text-bold text-center">
            {{ item.title }}
          </div>
          <div class="text-body1 q-py-sm" align="justify">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
    <div class="q-mt-xl q-pt-lg container margin text-primary lt-md">
      <div class="row q-gutter-md q-pr-md">
        <div
          class="col-12 col-md bg-white q-pa-xl rounded-borders"
          v-for="item in card"
          :key="item"
        >
          <q-img :src="item.img" height="200px" />
          <div class="text-h6 q-pt-md text-bold text-center">
            {{ item.title }}
          </div>
          <div class="text-body1 q-py-sm" align="justify">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="container q-py-xl q-mb-xl text-primary">
        <div class="text-h3 q-pb-xl q-mt-xl text-bold text-center gt-sm">
          About
        </div>
        <div class="text-h5 q-pb-md text-bold text-center lt-md">About</div>
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-6">
            <div class="text-subtitle1" align="justify">
              The Middle East with its endless sands, wide empty plains and
              tumultuous seas - the frozen plains of the Caucasus with its
              hard-to-get-to oil and gas - the swathes of North Africa, are all
              perhaps the most difficult regions to operate successfully in.
              Powerful winds, driving dust and heat, or extreme cold which
              subdue even the most resistant forms of extraction, are all forces
              that must be considered. If you're operating in such places, you
              need to consider who you would trust to supply you with offshore
              and land rig refurbishment, repair, as well as land rig design and
              manufacturing; equipment manufacture to API 16D, 7K and 4F
              compliance, Category III & IV certification, rig inspection and
              technical man power supply. Top Oilfield has more than two decades
              of experience in dealing with all this and more. We are a name
              that the oilfield industry believes in and that clients trust.
            </div>
          </div>
          <div class="col-12 col-md-6 row q-gutter-md flex flex-center">
            <div class="col-5 box1 q-py-sm text-center">
              <q-img src="~assets/oil.png" height="auto" width="100px" />
              <div class="text-h6 text-primary text-bold">Oil Equipments</div>
            </div>
            <div class="col-5 box1 q-py-sm text-center">
              <q-img src="~assets/gas.png" height="auto" width="100px" />
              <div class="text-h6 text-primary text-bold">Gas Equipments</div>
            </div>
            <div class="col-5 box1 q-py-sm text-center">
              <q-img src="~assets/mining.png" height="auto" width="100px" />
              <div class="text-h6 text-primary text-bold">
                Mining Equipments
              </div>
            </div>

            <div class="col-5 box1 q-py-sm text-center">
              <q-img src="~assets/tools.png" height="auto" width="100px" />
              <div class="text-h6 text-primary text-bold">Spare Parts</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary q-py-xl gt-sm">
      <div class="text-h2 text-center q-pt-xl q-pb-md text-white text-bold">
        Exceptional Worth.
      </div>
      <div class="text-h2 text-center q-pb-xl text-white text-bold">
        Superior Equipment.
      </div>
    </div>
    <div class="bg-primary q-mt-md q-py-md lt-md">
      <div class="text-h5 text-center q-pt-md q-pb-md text-white text-bold">
        Exceptional Worth.
      </div>
      <div class="text-h5 text-center q-pb-md text-white text-bold">
        Superior Equipment.
      </div>
    </div>

    <div class="container q-pb-xl q-my-xl text-primary">
      <div class="text-h3 text-center q-py-xl text-bold gt-sm">
        Our Mission and Vision
      </div>
      <div class="text-h5 text-center q-pb-lg text-bold lt-md">
        Our Mission and Vision
      </div>

      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-6">
          <q-img
            src="https://plus.unsplash.com/premium_photo-1682148236159-fcc688022ac7?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="100%"
          />
        </div>
        <div class="col-12 col-md-6">
          <div class="text-subtitle1" align="justify">
            Our mission is to excel in providing unparalleled support and
            solutions for the unique challenges posed by operating in the Middle
            East, the frozen plains of the Caucasus, and the vast expanses of
            North Africa. We understand the harsh conditions of these regions,
            from powerful winds and driving dust to extreme heat and cold, and
            we are committed to being the trusted partner for those navigating
            these challenges. Our vision is rooted in over two decades of
            experience, where we have consistently demonstrated expertise in
            offshore and land rig refurbishment, repair, land rig design and
            manufacturing. We specialize in equipment manufacture compliant with
            API 16D, 7K, and 4F standards, as well as Category III & IV
            certification. Rig inspection and technical manpower supply are
            integral aspects of our comprehensive services. At Top Oilfield, we
            take pride in being a name that the oilfield industry believes in,
            and our clients trust. We strive to be the go-to partner for those
            operating in the toughest environments, providing reliable and
            innovative solutions to ensure success in every endeavor."
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div class="bg-img q-pt-xl">
        <div class="text-h3 text-bold text-center q-mb-xl">
          Get Equipment <br />
          Spare Parts
        </div>
      </div>

      <div class="q-mt-xl q-pt-lg">
        <div class="row q-gutter-x-lg">
          <div class="col box1" v-for="item in card" :key="item">
            <q-img :src="item.img" />
            <div class="text-h5 q-px-md q-pt-md text-bold">
              {{ item.title }}
            </div>
            <div class="text-body1 q-py-sm q-px-md" align="justify">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-img2 q-mt-xl q-pt-xl">
      <div class="row q-gutter-x-lg q-pt-lg container">
        <div
          class="col q-gutter-y-sm box q-px-md q-py-sm"
          v-for="item in services"
          :key="item"
        >
          <div class="text-h5 text-bold">{{ item.title }}</div>
          <div class="text-body1" align="justify">{{ item.desc }}</div>
        </div>
      </div>
    </div>

    <div class="container q-py-xl q-my-xl">
      <div class="row q-col-gutter-lg">
        <div class="col-4" v-for="item in product" :key="item">
          <div class="text-h6 text-center bg-grey-4 text-bold q-pt-md q-pb-sm">
            {{ item.name }}
          </div>
          <q-img :src="item.img" height="350px" />
        </div>
        <q-space />
        <div>
          <q-btn
            color="primary"
            class="q-py-md q-px-xl"
            label="More"
            to="/service"
            @click="onClick"
          />
        </div>
      </div>
    </div> -->
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      card: [
        {
          img: "https://plus.unsplash.com/premium_photo-1682148795124-dac95dd91fd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2lsJTIwYW5kJTIwZ2FzfGVufDB8fDB8fHww",
          title: "Oil and Gas Equipment",
          desc: "We supply top-notch equipment tailored for the oil and gas industry, ensuring reliability and efficiency in exploration, extraction, and processing operations.",
        },
        {
          img: "https://images.unsplash.com/photo-1580420232349-3eefa50d2423?q=80&w=1432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Mining Equipment/Parts",
          desc: "We offer dependable and top-tier mining solutions, delivering a broad range of high-quality equipment tailored to meet the diverse needs of various mining operations.",
        },
        {
          img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhcmUlMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
          title: "Spare Parts and Services",
          desc: "We specialize in spare parts and services for heavy equipment, covering construction and mining machinery to ensure optimal performance and durability.",
        },
      ],
      services: [
        {
          title: "RENTALS & SALES",
          desc: "Our sales teams undergo regular training sessions at Heli factories in China to gain a thorough understanding of each product we introduce to the market. Maintaining continuous communication with our clients in the UAE allows us to implement relevant improvements to our products, ensuring we stay at the forefront of innovation. This commitment to training and customer collaboration reinforces our dedication to delivering top-notch products and staying responsive to market needs.",
        },
        {
          title: "MAINTENANCE & SERVICE",
          desc: "Our service team comprises over 30 safety-trained, qualified professionals equipped to handle a wide range of service and repair tasks with extensive expertise. Each service engineer possesses practical, hands-on knowledge spanning Mechanical, Hydraulic, Transmission, Electrical, and Electronic systems of heavy equipment. Their proficiency is continually reinforced through training programs provided by Heli, ensuring a high standard of competence and skill in addressing service and repair needs.",
        },
        {
          title: "SPARE PARTS",
          desc: "Our extensively stocked spare parts department is committed to delivering the right components at competitive prices promptly. Operating from our Central Parts Depot in Sharjah Industrial Area, we maintain an extensive inventory of line items. For sensitive parts, we've dedicated a climate-controlled environment. Managed by seasoned professionals, our Parts Department ensures swift and efficient processing of every Hala customer's order, reflecting our commitment to quick and reliable service.",
        },
      ],
      // slide: ref(1),
      // autoplay: ref(false),
      // product: [
      //   {
      //     img: "https://th.bing.com/th/id/R.fdf5d36d15e21dd20e34eb5e29d39390?rik=2bhpkf8GlizmnQ&pid=ImgRaw&r=0",
      //     name: "Resistive Load Bank",
      //   },
      //   {
      //     img: "https://th.bing.com/th/id/OIP.i-lM-tvMTuNaFs4XHr54aQHaHa?rs=1&pid=ImgDetMain",
      //     name: "dynamometer",
      //   },
      //   {
      //     img: "https://th.bing.com/th/id/R.5ae3909538972fbaef91db17412b709e?rik=YN%2bv4KDFx%2fXeBw&pid=ImgRaw&r=0",
      //     name: "Technical Manpower Supply",
      //   },
      // ],
    };
  },
};
</script>


<style lang="scss">
.bg-img {
  background-image: url("../assets/index.png");
  height: 100vh;
  margin-top: -10vh;
  width: 100%;
}

.box {
  color: white;
  border: solid 3px white;
}

.bg-img2 {
  background-image: url(../assets/bg2.webp);
  height: 77vh;
  width: 100%;
}

.box1 {
  border: solid 1px rgb(131, 131, 131);
  cursor: pointer;
}
.box1:hover {
  border: solid 1px #2b2322;
}

.margin {
  margin-top: -20vh;
}
</style>


<!-- https://plus.unsplash.com/premium_photo-1683121307482-c7042a7c85d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D -->
