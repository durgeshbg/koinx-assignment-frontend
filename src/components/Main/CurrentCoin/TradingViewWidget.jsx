import { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|7D"
            ]
          ],
          "chartOnly": true,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": true,
          "hideSymbolLogo": true,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "no-values",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "headerFontSize": "medium",
          "lineWidth": 2,
          "lineType": 1,
          "dateRanges": [
            "1d|1",
            "1w|15",
            "1m|30",
            "3m|60",
            "6m|120",
            "12m|1D",
            "all|1M"
          ]
        }`;

    container.current.innerHTML = '';
    container.current.appendChild(script);
  }, []);

  return (
    <div className='h-96 p-1 mb-7'>
      <div className='font-semibold pb-2'>Bitcoin Price Chart (USD)</div>
      <div className='tradingview-widget-container' ref={container}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
