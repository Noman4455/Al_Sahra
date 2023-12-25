<template>
  <q-page>
    <div class="bg-img flex flex-center gt-sm">
      <div class="row container">
        <div class="text-h2 text-bold text-white">Products and Services</div>
      </div>
    </div>
    <div class="bg-img flex flex-center lt-md">
      <div class="row container">
        <div class="text-h5 text-bold text-white">Products and Services</div>
      </div>
    </div>

    <div class="container q-py-xl q-my-xl gt-sm">
      <div class="q-gutter-y-lg">
        <div class="text-h2 text-primary text-bold">Services</div>
        <div v-for="item in services" :key="item">
          <div class="row q-pa-md">
            <div class="col-4 flex flex-center">
              <div>
                <div class="q-pa-sm">
                  <q-img :src="item.img" height="auto" width="190px" />
                </div>
                <div class="text-h6 text-center text-bold q-pt-md">
                  {{ item.name }}
                </div>
              </div>
            </div>
            <div class="col-8 q-pl-md" align="justify">
              <div class="yexy-subtitle1 text-primary">
                {{ item.description }}
              </div>
              <div class="text-subtitle1 text-red text-bold">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container q-py-xl lt-md">
      <div class="q-gutter-y-md">
        <div class="text-h5 text-primary text-bold text-center">Services</div>
        <div v-for="item in services" :key="item">
          <div class="row q-px-md">
            <div class="col-12 flex flex-center">
              <div>
                <div class="text-h6 text-center text-bold q-pt-md">
                  {{ item.name }}
                </div>
                <div class="q-pa-sm">
                  <q-img :src="item.img" height="auto" width="190px" />
                </div>
              </div>
            </div>
            <div class="col-12" align="justify">
              <div class="yexy-subtitle1 text-primary">
                {{ item.description }}
              </div>
              <div class="text-subtitle1 text-red text-bold">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container q-pb-xl q-mb-xl gt-sm">
      <div class="q-gutter-y-lg">
        <div class="text-h2 text-primary text-bold">Products</div>
        <div v-for="item in products" :key="item">
          <div class="row q-pa-md">
            <div class="col-4 flex flex-center">
              <div>
                <div class="q-pa-sm">
                  <q-img :src="item.img" height="auto" width="190px" />
                </div>
                <div class="text-h6 text-center text-bold q-pt-md">
                  {{ item.name }}
                </div>
              </div>
            </div>
            <div class="col-8 q-pl-md" align="justify">
              <div class="text-subtitle1 text-primary">
                <ul>
                  <li>{{ item.bulet }}</li>
                  <li>{{ item.bulet1 }}</li>
                  <li>{{ item.bulet2 }}</li>
                </ul>
              </div>
              <div class="text-subtitle1 text-red text-bold">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container q-pb-xl q-mb-xl lt-md">
      <div class="q-gutter-y-md">
        <div class="text-h5 text-center text-primary text-bold">Products</div>
        <div v-for="item in products" :key="item">
          <div class="row q-pa-md">
            <div class="col-12 flex flex-center">
              <div>
                <div class="text-h6 text-center text-bold">
                  {{ item.name }}
                </div>
                <div class="q-pa-sm">
                  <q-img :src="item.img" height="auto" width="190px" />
                </div>
              </div>
            </div>
            <div class="col-12" align="justify">
              <div class="text-subtitle1 text-primary">
                <ul>
                  <li>{{ item.bulet }}</li>
                  <li>{{ item.bulet1 }}</li>
                  <li>{{ item.bulet2 }}</li>
                </ul>
              </div>
              <div class="text-subtitle1 text-red text-bold">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>


<script>
import img1 from "../assets/loadbank.png";
import img2 from "../assets/dynamometer.jpeg";
import img3 from "../assets/man.png";
import img4 from "../assets/drilling.jpeg";
import img5 from "../assets/fabrication.png";
import img6 from "../assets/pumps.png";
import img7 from "../assets/generator.png";
import img8 from "../assets/compressor.png";
import img9 from "../assets/panels.jpeg";
import img10 from "../assets/field.png";
import img11 from "../assets/bop.jpeg";
import img12 from "../assets/rotating.jpeg";

export default {
  setup() {
    return {
      services: [
        {
          img: img1,
          name: "Resistive Load Bank",
          description:
            "Our variable load bank system offers you full variation loads to a maximum capacity of 2,500KW at 600 VAC, 3PH and 60Hz The system provides a protected and perfectly safe method of applying incremental resistance through the use of load elements, logic control functions, breakers, and a governor module.The system is highly mobile, allowing usage on land, quayside, and offshore locations with the use of a forklift or crane module. With one operator and one assistant, the system can be used easily, and effectively to ensure hook-up and smooth running.",
          title: "Top Oilfield ensures reliability",
        },
        {
          img: img2,
          name: "Dynamometer",
          description:
            "The new Top Oilfield dynamometer is a unique system, and is the only model in the region that has these specifications. It offers variable load capacity to a maximum continuous HP rating of 2,700 that is fed by PowerNet software that features detailed load-curve readouts, as well as all comprehensive engine parameters. The dynamometer is used as standard to our engine overhaul service, and can be witnessed by clients to oversee the test, as well as being available for those who wish to load test their engines as a 3rd party option. This works particularly well when satisfying the requirements of ABS, DNV, or Lloyd's certification. We are the best alternative to OEM.",
          title: "Top Oilfield is perfectly suited to your operation",
        },
        {
          img: img3,
          name: "Technical Manpower Supply",
          description:
            "Top Oilfield provides skilled and responsive manpower for your project needs, whether it's electricians, mechanics, or drilling personnel. Our experienced professionals are ready to travel at short notice, conducting on-site inspections and repairs to certified high standards. Operating in the challenging terrains of the Middle East, the Caucasus, and North Africa, our adaptable workforce ensures efficient and reliable project support. Trust Top Oilfield for a dedicated team committed to excellence in every aspect of your operations.",
          title: "Whatever your need, we have the team for the job.",
        },

        {
          img: img4,
          name: "Drilling Equipment",
          description:
            "Drawworks, mud pumps, rotary tables, travelling equipment and BOP control units: all of this specialist equipment will at some point in their lifecycle, need repair, recertification, or replacement. We offer a series of programmes that will survey. inspect, and repair your equipment - whatever you need, and fixed quickly, efficiently, and at a cost that you can afford. We are certified to conduct the routine inspection of any drilling system you may have, in addition to category III and IV mast and sub-base inspections, repair and overhaul, all to API certified standards.",
          title: "Top Oilfield is the obvious choice for this kind of service.",
        },
        {
          img: img5,
          name: "Fabrication",
          description:
            "If your need is fabrication, Top Oilfield is ideally placed to help you with your specialist project. We ensure that your need is followed up precisely, and that the right specifications are carried out quickly, and effectively. Our team of fabricators are prepared to manufacture your tank systems, skids for mud pumps and power modules, trailerize equipment for fast moves, fabricate your batch mixers, HP pumping units, pony subs, rig matts, mast and substructures to requirement, and ensure that our project supervisors work effectively to build your project from the ground up with precision. With certified welders for 36, 6G, MIG & TIG (ASME, DNV, AWS & ABS Standards) you can be assured that your job will meet the highest specifications. We adhere closely to international standards that ensure your fabrication is matched by the right provisions and procedures, receive approved methods of testing and inspection, follow testing plans which indicate the acceptance criteria you specified when setting up the project, as well as the QC documentation that is required for placement.",
          title: "Top Oilfield works hard to help build success.",
        },
      ],
      products: [
        {
          img: img6,
          name: "Pumps",
          bulet: " Centrifugal, Reciprocating & Diaphragm Pumps.",
          bulet1: "Firefighting & Water Pumps.",
          bulet2: "Triplex Mud Pumps & HP Pumps for Cementing Units.",
        },
        {
          img: img7,
          name: "Power Generator",
          bulet: "Prime Generators.",
          bulet1: "Standby Generators",
          bulet2: "Engines for any drive applications.",
        },
        {
          img: img8,
          name: "Compressor",
          bulet: "Reciprocating, Centrifugal Compressor.",
          bulet1: "Gas & Air applications.",
          bulet2: "Screw & Rotary Compressor.",
        },
        {
          img: img9,
          name: "Remote Panels",
          bulet:
            "Drillers and auxiliary control panels in pneumatic, PLC, or touch screen options.",
          bulet1:
            "Visual and audible alarms for low fluid, air pressure, and manifold pressure.",
          bulet2: "Configurable to exact monitoring and alarm specs.",
        },
        {
          img: img10,
          name: "Field Service Technicians",
          bulet:
            "Centrally located in the Middle East oil and gas producing regions.",
          bulet1:
            "Fully qualified and experienced Technicians for prompt site visits.",
          bulet2: "Quick diagnosis and repair of issues or BOP servicing.",
        },
        {
          img: img11,
          name: "BOP Control Units",
          bulet:
            "Essential API certified BOP control systems for drilling rigs.",
          bulet1:
            "Top Oilfield, an OEM with API monogram, specializes in new and refurbished units.",
          bulet2: "Certified API 16D, API Q1, and ISO 001 facility.",
        },
        {
          img: img12,
          name: "Rotating Equipment",
          bulet:
            "High-quality packaged systems designed for challenging industry conditions.",
          bulet1:
            "Utilizing latest design techniques and standards (DNV GL, Lloyds, ABS, API, etc.).",
          bulet2:
            "Weatherproof or Class I/Div II with purge system solutions available.",
        },
      ],
    };
  },
};
</script>



<style lang="scss">
.bg-img {
  background-image: url("../assets/service.png");
  height: 70vh;
  margin-top: -10vh;
  width: 100%;
}
</style>



