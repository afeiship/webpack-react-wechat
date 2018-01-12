import AppBase, {
  $api, $store,
  DcVideo,
  DcAudio,
  DcRotateMusicIcon,
  DcPage1,
  DcPage2,
  DcPage3,
  DcBlinkArrow
} from 'components/scripts/index';
import NxDetectWechat from 'next-detect-wechat';
import NxDomEvent from 'next-dom-event';
export default class extends AppBase {

  static initialState() {
    return {
      memory: {
        isWechat: NxDetectWechat.isWechat(),
        rotateValue: true,
        initialed: {},
        member: null,
        activeIndex: 0
      }
    }
  }

  componentDidMount() {
    this._swiper = new Swiper('.swiper-container', {direction: 'vertical',});
    this._autoPlay();
    this._onWechatReadyAttach();
    this._onDocAttachEvents();
    this._onSyncIndex();
    this.loadData();
  }

  loadData() {
    Promise.all([
      $api.getWeixinShareSign_220({url: window.location.href.split('#')[0]}),
      $api.memberRegisterTime_230(nx.hashlize())
    ]).then(([resp1, member]) => {
      AppBase.$.memory = {member};
      console.log(AppBase.$.memory);
      const options = nx.mix({
        debug: false,
        jsApiList: [
          'checkJsApi',
          'onMenuShareAppMessage',
          'onMenuShareTimeline'
        ]
      }, resp1);

      wx.config(options);
      wx.ready(function () {
        ['onMenuShareAppMessage',
          'onMenuShareTimeline'].forEach(function (item) {
          wx[item]({
            title: '龘藏·永往无前',
            desc: '秋风碧水映长天，与君共泛远舟行',
            link: window.location.href,
            imgUrl: ['http://', location.host, '/auction/invitation/images/autumn_2017/shared-icon.jpg'].join('')
          });
        });
      });
    });
  }

  _autoPlay() {
    const {video, audio} = this.refs;
    video.action('load');
    video.action('play');
    audio.action('load');
    audio.action('play');
  }

  _onSyncIndex() {
    this._swiper.on('slideChange', (e) => {
      const {initialed} = AppBase.$.memory;
      const activeIndex = this._swiper.activeIndex;
      initialed[activeIndex] = true;
      AppBase.$.memory = {activeIndex, initialed};
    });
  }

  _onWechatReadyAttach() {
    this._docWxRes = NxDomEvent.on(document, "WeixinJSBridgeReady", () => {
      this._autoPlay();
      this._docWxRes.destroy();
    });
  }

  _onDocAttachEvents() {
    this._docTouchRes = NxDomEvent.on(document, 'touchstart', () => {
      this._autoPlay();
      this._docTouchRes.destroy();
    });
  }

  _onChange = e => {
    const {video, audio} = this.refs;
    const {value} = e.target;
    const action = value ? 'play' : 'pause';
    audio.action(action);
    AppBase.$.memory = {rotateValue: value};
  };

  _onEnded = e => {
    const {activeIndex, initialed} = AppBase.$.memory;
    if (activeIndex === 0) {
      const timer = setTimeout(() => {
        this._swiper.slideNext();
        clearTimeout(timer);
      }, 500);
    }
  };

  render() {
    const {rotateValue, activeIndex, initialed} = AppBase.$.memory;
    return (
      <div className="app-container">
        <div className="swiper-container h100">
          <div className="swiper-wrapper">
            <section className="swiper-slide page0">
              <DcVideo ref="video" onEnded={this._onEnded}/>
            </section>
            <section className="swiper-slide page1">
              {(activeIndex === 1 || initialed[1]) && <DcPage1 />}
            </section>
            <section className="swiper-slide page2">
              {(activeIndex === 2 || initialed[2]) && <DcPage2 />}
            </section>
            <section className="swiper-slide page3">
              {(activeIndex === 3 || initialed[3]) && <DcPage3 />}
            </section>
          </div>
        </div>

        {/*Global element*/}
        { activeIndex > 0 && <DcBlinkArrow />}
        <DcRotateMusicIcon onChange={this._onChange} value={rotateValue}/>
        <DcAudio ref="audio"/>
      </div>
    );
  }
}
