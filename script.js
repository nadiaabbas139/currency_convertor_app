    async function convertCurrency() {
      const input_amount = document.getElementById("amount");
      const from_currency = document.getElementById("fromCurrency").value;
      const to_currency = document.getElementById("ToCurrency").value;
      const result_div = document.getElementById("result");

      const amount = input_amount.value;

      if (!amount) {
        result_div.innerHTML = " Please enter an amount.";
        return;
      }

      try {
        
        const url = `${CONFIG.BASE_URL}${CONFIG.API_KEY}/latest/${from_currency}`;
        const res = await fetch(url);
        const data = await res.json();
        const rate = data.conversion_rates[to_currency];

        if (rate) {
          const converted = (amount * rate).toFixed(2);
          result_div.innerHTML = `${amount} ${from_currency} = ${converted} ${to_currency}`;
        } else {
          result_div.innerHTML = " Invalid currency selected.";
        }
      } catch (err) {
        result_div.innerHTML = " Error fetching exchange rates.";
      }
    }