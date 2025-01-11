import { atom, selector } from 'recoil';

export const bitcoinDataAtom = atom({
  key: 'bitcoinData',
  default: selector({
    key: 'bitcoinDataSelector',
    get: async () => {
      try {
        const url =
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': 'CG-1Nb8bc2Hjg6iTvAiR69v8X57',
          },
        };

        const res = await fetch(url, options);
        const data = res.json();
        return data;
      } catch (e) {
        console.error(e);
      }
    },
  }),
});
