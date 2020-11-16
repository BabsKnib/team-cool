<template>
  <div class="sendToken_form">
    <h1 class="sendToken_title">Send Tokens</h1>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <div class="balance_detail">
        <div>My Balance</div>
        <div><strong>COOL</strong><span class="balance_total">-2.0</span></div>
        <span><v-btn class="balance_btn">BUY</v-btn></span>
        <span><v-btn class="balance_btn">SELL</v-btn></span>

        <div><strong>SAVER</strong><span class="balance_total">0.4</span></div>
        <span><v-btn class="balance_btn">BUY</v-btn></span>
        <span><v-btn class="balance_btn">SELL</v-btn></span>
      </div>
      <form @submit.prevent="submit" class="balance_form">
        <validation-provider
          v-slot="{ errors }"
          name="name"
          rules="required|max:10"
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :error-messages="errors"
            label="Recipient"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="amount"
          rules="required|digits:2"
        >
          <v-text-field
            v-model="amount"
            :error-messages="errors"
            label="Amount"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="select" rules="required">
          <v-select
            v-model="select"
            :items="items"
            :error-messages="errors"
            label="Select Token"
            data-vv-name="select"
            required
          ></v-select>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          rules="required"
          name="checkbox"
        >
          <v-checkbox
            v-model="checkbox"
            :error-messages="errors"
            value="1"
            label="Add Description"
            type="checkbox"
            required
          ></v-checkbox>
        </validation-provider>

        <v-btn class="mr-4" type="submit" :disabled="invalid">
          send
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { required, digits, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("digits", {
  ...digits,
  message: "Numbers only",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    amount: 0,
    select: null,
    items: ["COOL", "SAVER"],
    checkbox: null,
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.amount = 0;
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
};
</script>

<style scoped lang="scss">
.sendToken {
  &_form {
    position: fixed;
    top: 13%;
    left: 35%;
    width: 400px;
  }
  &_title {
    text-align: center;
  }
}
.balance_total {
  margin-left: 320px;
}
.balance_detail {
  font-weight: bold;
  color: black;
}
.balance_btn {
  margin-right: 8px;
  min-width: 0;
}
</style>
