<!--
<template>
  <div
    class="tradingview-widget-container"
    ref="containerRef"
    style="width: 100%"
  >
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
import { ref, onMounted } from "vue";

export default {
  name: "TradingViewWidget",
  setup() {
    const containerRef = ref(null);

    onMounted(() => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        width: 300,
        height: 450,
        symbolsGroups: [
          {
            name: "Indices",
            originalName: "Indices",
            symbols: [
              {
                name: "NASDAQ:TSLA",
                displayName: "Tesla",
              },
              {
                name: "NASDAQ:AAPL",
                displayName: "Apple",
              },
              {
                name: "NASDAQ:NVDA",
                displayName: "NVDA",
              },
              {
                name: "NASDAQ:GOOGL",
                displayName: "Google",
              },
              {
                name: "NASDAQ:AMZN",
                displayName: "Amazon",
              },
              {
                name: "NASDAQ:MSFT",
                displayName: "MS",
              },
              {
                name: "NASDAQ:NFLX",
                displayName: "Netflix",
              },
              {
                name: "NASDAQ:PYPL",
                displayName: "Paypal",
              },
              {
                name: "NASDAQ:META",
                displayName: "Meta",
              },
              {
                name: "NYSE:UBER",
                displayName: "Uber",
              },
              {
                name: "FOREXCOM:SPXUSD",
                displayName: "S&P 500",
              },
              {
                name: "FOREXCOM:NSXUSD",
                displayName: "US 100",
              },
              {
                name: "FOREXCOM:DJI",
                displayName: "Dow 30",
              },
              {
                name: "INDEX:NKY",
                displayName: "Nikkei 225",
              },
              {
                name: "INDEX:DEU40",
                displayName: "DAX Index",
              },
              {
                name: "FOREXCOM:UKXGBP",
                displayName: "UK 100",
              },
            ],
          },
          {
            name: "Futures",
            originalName: "Futures",
            symbols: [
              {
                name: "CME_MINI:ES1!",
                displayName: "S&P 500",
              },
              {
                name: "CME:6E1!",
                displayName: "Euro",
              },
              {
                name: "COMEX:GC1!",
                displayName: "Gold",
              },
              {
                name: "NYMEX:CL1!",
                displayName: "WTI Crude Oil",
              },
              {
                name: "NYMEX:NG1!",
                displayName: "Gas",
              },
              {
                name: "CBOT:ZC1!",
                displayName: "Corn",
              },
            ],
          },
          {
            name: "Bonds",
            originalName: "Bonds",
            symbols: [
              {
                name: "CBOT:ZB1!",
                displayName: "T-Bond",
              },
              {
                name: "CBOT:UB1!",
                displayName: "Ultra T-Bond",
              },
              {
                name: "EUREX:FGBL1!",
                displayName: "Euro Bund",
              },
              {
                name: "EUREX:FBTP1!",
                displayName: "Euro BTP",
              },
              {
                name: "EUREX:FGBM1!",
                displayName: "Euro BOBL",
              },
            ],
          },
          {
            name: "Forex",
            originalName: "Forex",
            symbols: [
              {
                name: "FX:EURUSD",
                displayName: "EUR to USD",
              },
              {
                name: "FX:GBPUSD",
                displayName: "GBP to USD",
              },
              {
                name: "FX:USDJPY",
                displayName: "USD to JPY",
              },
              {
                name: "FX:USDCHF",
                displayName: "USD to CHF",
              },
              {
                name: "FX:AUDUSD",
                displayName: "AUD to USD",
              },
              {
                name: "FX:USDCAD",
                displayName: "USD to CAD",
              },
            ],
          },
        ],
        showSymbolLogo: true,
        isTransparent: false,
        colorTheme: "light",
        locale: "en",
      });

      containerRef.value.appendChild(script);
    });

    return { containerRef };
  },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style> -->



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
import { ref, onMounted } from "vue";

export default {
  name: "TradingViewHotlistsWidget",
  setup() {
    const containerRef = ref(null);

    onMounted(() => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "light",
        dateRange: "12M",
        exchange: "US",
        showChart: true,
        locale: "en",
        width: "100%",
        height: "500px",
        largeChartUrl: "",
        isTransparent: true,
        showSymbolLogo: true,
        showFloatingTooltip: false,
        plotLineColorGrowing: "rgba(41, 98, 255, 1)",
        plotLineColorFalling: "rgba(41, 98, 255, 1)",
        gridLineColor: "rgba(240, 243, 250, 0)",
        scaleFontColor: "rgba(106, 109, 120, 1)",
        belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
        belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
        symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      });

      containerRef.value.appendChild(script);
    });

    return { containerRef };
  },
};
</script>
