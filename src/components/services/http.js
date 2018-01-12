import nx from 'next-js-core2';
import NxAxios from 'next-axios';

const Http = nx.declare({
  extends: NxAxios,
  statics: {
    instance: null,
    getInstance: function () {
      if (!Http.instance) {
        Http.instance = new Http();
      }
      return Http.instance;
    }
  },
  methods: {
    setRequestInterceptor: function () {
      this.axios.interceptors.request.use((config) => {
        nx.mix(config.headers.common, {clientType: 'h5'});
        return config;
      });
    },
    contentType: function () {
      return 'application/x-www-form-urlencoded';
    },
    transformParam: function (inData) {
      return nx.param(inData);
    },
    toData: function (inResponse) {
      return inResponse.data;
    },
    error: function (inError) {
      console.log('error!');
      console.log(inError);
    }
  }
});

export default Http.getInstance();