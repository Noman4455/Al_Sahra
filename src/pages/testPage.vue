<!-- <template>
  <q-container class="q-pa-md flex absolute-center">
    <div
      class="tradingview-widget-container margin"
      ref="tradingviewContainer"
    ></div>
  </q-container>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const tradingviewContainer = ref(null);

    onMounted(() => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
      script.async = true;

      script.onload = () => {
        if (window.TradingView && window.TradingView.MediumWidget) {
          new window.TradingView.MediumWidget({
            container_id: tradingviewContainer.value,
          });
        } else {
          console.error("TradingView widget library not available.");
        }
      };

      document.body.appendChild(script);
    });

    return {
      tradingviewContainer,
    };
  },
};
</script> -->


 <!-- <template>
  <div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright">
      <a
        href="https://www.tradingview.com/"
        rel="noopener nofollow"
        target="_blank"
      >
        <span class="blue-text">Track all markets on TradingView</span>
      </a>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const tradingviewContainer = ref(null);

    onMounted(() => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
      script.async = true;

      script.onload = () => {
        if (window.TradingView && window.TradingView.MediumWidget) {
          new window.TradingView.MediumWidget({
            container_id: tradingviewContainer.value.id,
          });
        } else {
          console.error("TradingView widget library not available.");
        }
      };

      document.body.appendChild(script);
    });

    return {
      tradingviewContainer,
    };
  },
}; -->

// export default {
//   mounted() {
//     const script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
//     script.async = true;
//     script.innerHTML = JSON.stringify({
//       width: 770,
//       height: 450,
//       symbolsGroups: [
//         // ... your symbolsGroups data here ...
//       ],
//       showSymbolLogo: true,
//       colorTheme: "light",
//       isTransparent: false,
//       locale: "en",
//     });

//     this.$el.appendChild(script);
//   },
// };
<!-- </script> -->



<template>
  <div class="tradingview-widget-container" ref="containerRef">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright">
      <a
        href="https://www.tradingview.com/"
        rel="noopener nofollow"
        target="_blank"
      >
        <span class="blue-text">Track all markets on TradingView</span>
      </a>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";

export default {
  name: "TradingViewWidget",
  setup() {
    const containerRef = ref(null);

    onMounted(async () => {
      await nextTick();

      console.log("Container Ref:", containerRef.value);

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
      script.async = true;

      console.log("Script Element:", script);

      containerRef.value.appendChild(script);
    });

    return { containerRef };
  },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
