/*===default start===*/
export default require('./app-base').default;
/*===default start===*/


/*===mixins start===*/
export const OnChangeMixin = require('mixins/on-change').default;
/*===mixins end===*/


/*===services start===*/
export const $api = require('services/api').default;
export const $config = require('services/config').default;
export const $app = require('services/app').default;
export const $http = require('services/http').default;
export const $route = require('services/route').default;
export const $store = require('next-store');
export const $date = require('next-date');

/*===services end===*/


/*===components start===*/
export const TestComp = require('./test-comp').default;
export const DcVideo=require('./dc-video').default;
export const DcRotateMusicIcon=require('./dc-rotate-music-icon').default;
export const DcAudio=require('./dc-audio').default;
export const DcPage1=require('./dc-page1').default;
export const DcPage2=require('./dc-page2').default;
export const DcPage3=require('./dc-page3').default;
export const DcBlinkArrow=require('./dc-blink-arrow').default;
/*===components end===*/

