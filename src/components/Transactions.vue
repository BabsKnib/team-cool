<template>
  <div>
    <h1 class="transactions_title">Transactions</h1>
    <h2 class="transactions_subtitle">Balance</h2>
    <div class="transactions_balance">
      <span>{{ getBalance("COOL") }} COOL</span> &nbsp;
      <span>{{ getBalance("SAVER") }} SAVER</span>
    </div>
    <div class="transactions_button">
      <v-btn
        outlined
        class="transactions_button-1"
        @click="getAllTransactions()"
        >All</v-btn
      >
      <v-btn
        outlined
        class="transactions_button-2"
        @click="getSentTransactions(userAddress)"
        >Send</v-btn
      >
      <v-btn
        outlined
        class="transactions_button-3"
        @click="getReceivedTransactions(userAddress)"
        >Received</v-btn
      >
    </div>

    <v-simple-table width="50%" class="transactions_table">
      <template v-slot:default>
        <tbody v-for="tx in showTransactions" :key="tx.id">
          <tr :class="getCssTransactionStatus(tx.sender, tx.recipient)">
            <td class="pa-2">
              <h4 :class="tx.tokenName">
                {{ tx.tokenName }}
                {{ getTransactionStatus(tx.sender, tx.recipient) }}
              </h4>
              <p class="ma-0">
                {{ convertTimestamp(tx.timestamp) }},
                {{ getToOrFromAddress(tx.sender, tx.recipient) }}
              </p>
            </td>
            <td class="pa-2">
              <h4>
                {{
                  getTransactionAmount(
                    tx.sender,
                    tx.recipient,
                    tx.amount,
                    tx.tokenName
                  )
                }}
              </h4>
              <p class="ma-0">
                {{
                  getTransactionAmountUSD(
                    tx.sender,
                    tx.recipient,
                    tx.amount,
                    tx.tokenName
                  )
                }}
              </p>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import transactionData from "../data/transactionData.json";

export default {
  name: "Transactions",
  data() {
    return {
      transactionsHistory: transactionData.transaction,
      userAddress: "3PBSHtr4znZEEjCkgxd1CzGXT18m9eFdpYH",
      marketValueSaverUSD: 1.45,
      showTransactions: transactionData.transaction,
    };
  },
  methods: {
    getBalance(token) {
      let balance = 0;

      for (let i = 0; i < this.transactionsHistory.length; i++) {
        let { tokenName, amount, recipient, sender } = this.transactionsHistory[
          i
        ];

        if (token == tokenName && this.userAddress == recipient)
          balance += amount;
        else if (token == tokenName && this.userAddress == sender)
          balance -= amount;
      }

      return balance.toFixed(1);
    },
    convertTimestamp(timestamp) {
      const date = new Date(timestamp);
      return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    },
    getTransactionAmount(sender, receiver, amount, token) {
      if (sender == this.userAddress) {
        return `- ${amount} ${token}`;
      } else if (receiver == this.userAddress) {
        return `+ ${amount} ${token}`;
      }
    },
    getTransactionAmountUSD(sender, receiver, amount, token) {
      if (token === "COOL" && sender == this.userAddress) {
        return `- ${amount} USD`;
      } else if (token === "COOL" && receiver == this.userAddress) {
        return `+ ${amount} USD`;
      } else if (token === "SAVER" && sender == this.userAddress) {
        return `- ${amount * this.marketValueSaverUSD} USD`;
      } else if (token === "SAVER" && receiver == this.userAddress) {
        return `+ ${amount * this.marketValueSaverUSD} USD`;
      }
    },
    getTransactionStatus(sender, receiver) {
      //If the wallet from the user is equal to the address of the sender show that he send the transactions
      if (sender == this.userAddress) {
        return "Send";
      } else if (receiver == this.userAddress) {
        return "Received";
      }
    },
    getToOrFromAddress(sender, receiver) {
      // If the wallet is from the sender show the address who recieved the tokens. If the wallet is from the recipient show the address who send the tokens
      if (sender == this.userAddress) {
        return `to address ${receiver}`;
      } else if (receiver == this.userAddress) {
        return `from address ${sender}`;
      }
    },
    getCssTransactionStatus(sender, receiver) {
      if (sender === this.userAddress) {
        return "send";
      } else if (receiver === this.userAddress) {
        return "received";
      } else {
        return "d-none";
      }
    },
    getSentTransactions(address) {
      const sentTransactions = this.transactionsHistory.filter(
        (each) => each.sender === address
      );
      return (this.showTransactions = sentTransactions);
    },
    getReceivedTransactions(address) {
      const receivedTransactions = this.transactionsHistory.filter(
        (each) => each.sender !== address
      );
      return (this.showTransactions = receivedTransactions);
    },
    getAllTransactions() {
      return (this.showTransactions = this.transactionsHistory);
    },
  },
};
</script>

<style scoped lang="scss">
.transactions {
  &_title {
    text-align: center;
  }
  &_subtitle {
    text-align: center;
  }
  &_balance {
    text-align: center;
  }
  &_table {
    margin-bottom: 20px;
  }
  &_button {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;

    &-1 {
      margin-right: 10px;
    }
    &-2 {
      margin-left: 10px;
    }
    &-3 {
      margin-left: 10px;
    }
  }
}
.v-data-table {
  max-width: 80%;
  margin: auto;
}
tr.send {
  background-color: rgba(0, 167, 155, 0.5);
}
tr.received {
  background-color: rgba(0, 120, 80, 0.5);
}
</style>
