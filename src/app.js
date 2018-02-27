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
        isWechat: NxDetectWechat.isWechat()
      }
    }
  }

  render() {
    return (
      <div className="app-container">
        APP CONTENT!
      </div>
    );
  }
}
