import {Callback, Context} from "aws-lambda"
import fetch from 'node-fetch'
const result = {
  statusCode: 200,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
}

export function info(event, context : Context, callback : Callback) : void {
  callback(undefined, {
    ...result,
    body: JSON.stringify([{"id":3,"createDate":[2017,6,28,10,44,47],"updateDate":[2017,6,28,10,44,47],"img_path1":"/ifj/assets/images/no_image.png","img_path2":"/ifj/assets/images/no_image.png","img_path3":"/ifj/assets/images/no_image.png","jobType":"システムエンジニア","adoptionNumber":"１","jobDescription":"あｄふぁだdsafasfd","vacation":"あ","twoDayOff":"なし","income":"199","wageStructure":"あ","increase":"あ","bonus":"あ","maternityLeave":"あ","paidVacation":"あああ","transportationExpenses":"あ","socialInsurance":"あ","trialPeriod":"あ","trainingSystem":"あ","place":"東京都","station":"あ","needCertificate":[{"id":9,"createDate":[2017,6,28,10,44,47],"updateDate":[2017,6,28,10,44,47],"name":"IoT"}],"needSkill":"あ","pr":"あ","age":"0","jobSkill":"5","communication":"5","responsibility":"5","kindness":"5","employType":"正社員","registDate":"2017/06/07 15:28","updateTime":"2017/06/28 10:44","dormitory":"なし","state":0,"restDays":60,"registAgentId":"4","registAgentName":"あらしランド","applicantName":null,"applicantId":null,"applicantStatus":null,"agent":{"id":4,"createDate":[2017,6,7,15,27,49],"updateDate":[2017,6,7,15,27,49],"officeName":"あらしランド","postalcode":"1111111","prefectures":"東京都","municipality":"田畑","address":"1-13-10","building":"1-13-10","mailAddress":"y-arashi@uknet.co.jp","password":"sos12345","facility":"","postalcode2":"","prefectures2":"","municipality2":"","address2":"","building2":"","adoptionName":"ああ","adoptionKana":"アラシ","phoneNumber":"11111111111","faxNumber":"","adoptionMailAddress":"y-arashi@uknet.co.jp","createTime":"2017/06/07 15:27","freeWord":null,"status":0,"stopStatus":0},"aptitude":[]},{"id":4,"createDate":[2017,6,28,0,31,54],"updateDate":[2017,6,28,0,31,54],"img_path1":"/ifj/assets/images/no_image.png","img_path2":"/ifj/assets/images/no_image.png","img_path3":"/ifj/assets/images/no_image.png","jobType":"フロントエンジニア","adoptionNumber":"2～３人","jobDescription":"楽しいお仕事です。","vacation":"週休二日","twoDayOff":"あり","income":"600","wageStructure":"なし","increase":"なし","bonus":"年五回","maternityLeave":"あり","paidVacation":"あり","transportationExpenses":"全額支給","socialInsurance":"あり","trialPeriod":"三ヶ月","trainingSystem":"あり","place":"東京都","station":"JR山手線　田端駅","needCertificate":[{"id":4,"createDate":[2017,6,28,0,31,54],"updateDate":[2017,6,28,0,31,54],"name":"Windows"},{"id":5,"createDate":[2017,6,28,0,31,54],"updateDate":[2017,6,28,0,31,54],"name":"iOS"},{"id":6,"createDate":[2017,6,28,0,31,54],"updateDate":[2017,6,28,0,31,54],"name":"C"},{"id":7,"createDate":[2017,6,28,0,31,54],"updateDate":[2017,6,28,0,31,54],"name":"Python"}],"needSkill":"英語話せる方優遇","pr":"とても楽しい職場です。","age":"1","jobSkill":"1","communication":"2","responsibility":"5","kindness":"5","employType":"フリーランス","registDate":"2017/06/19 13:39","updateTime":"2017/06/28 00:31","dormitory":"あり","state":0,"restDays":60,"registAgentId":"6","registAgentName":"株式会社オープン・システム・ソリューションズ","applicantName":null,"applicantId":null,"applicantStatus":null,"agent":{"id":6,"createDate":[2017,6,19,18,40,7],"updateDate":[2017,6,19,18,40,7],"officeName":"株式会社オープン・システム・","postalcode":"1","prefectures":"東京都","municipality":"1","address":"1","building":"1","mailAddress":"k-kawai@uknet.co.jp","password":"tutinoko","facility":"","postalcode2":"","prefectures2":"","municipality2":"","address2":"","building2":"","adoptionName":"株式会社OKnet","adoptionKana":"ア","phoneNumber":"01","faxNumber":"","adoptionMailAddress":"k-kawai@uknet.co.jp","createTime":"2017/06/15 16:50","freeWord":null,"status":0,"stopStatus":0},"aptitude":[{"id":7,"createDate":[2017,6,19,18,25,10],"updateDate":[2017,6,19,18,25,10],"userId":"4","percentage":"9E+1"}]}])
  });
}

export function detail(event, context : Context, callback : Callback) : void {
  callback(undefined, {
    ...result,
    body: JSON.stringify({"id":3,"createDate":[2017,6,28,10,44,47],"updateDate":[2017,6,28,10,44,47],"img_path1":"/ifj/assets/images/no_image.png","img_path2":"/ifj/assets/images/no_image.png","img_path3":"/ifj/assets/images/no_image.png","jobType":"システムエンジニア","adoptionNumber":"１","jobDescription":"あｄふぁだdsafasfd","vacation":"あ","twoDayOff":"なし","income":"199","wageStructure":"あ","increase":"あ","bonus":"あ","maternityLeave":"あ","paidVacation":"あああ","transportationExpenses":"あ","socialInsurance":"あ","trialPeriod":"あ","trainingSystem":"あ","place":"東京都","station":"あ","needCertificate":[{"id":9,"createDate":[2017,6,28,10,44,47],"updateDate":[2017,6,28,10,44,47],"name":"IoT"}],"needSkill":"あ","pr":"あ","age":"0","jobSkill":"5","communication":"5","responsibility":"5","kindness":"5","employType":"正社員","registDate":"2017/06/07 15:28","updateTime":"2017/06/28 10:44","dormitory":"なし","state":0,"restDays":60,"registAgentId":"4","registAgentName":"あらしランド","applicantName":null,"applicantId":null,"applicantStatus":null,"agent":{"id":4,"createDate":[2017,6,7,15,27,49],"updateDate":[2017,6,7,15,27,49],"officeName":"あらしランド","postalcode":"1111111","prefectures":"東京都","municipality":"田畑","address":"1-13-10","building":"1-13-10","mailAddress":"y-arashi@uknet.co.jp","password":"sos12345","facility":"","postalcode2":"","prefectures2":"","municipality2":"","address2":"","building2":"","adoptionName":"ああ","adoptionKana":"アラシ","phoneNumber":"11111111111","faxNumber":"","adoptionMailAddress":"y-arashi@uknet.co.jp","createTime":"2017/06/07 15:27","freeWord":null,"status":0,"stopStatus":0},"aptitude":[]})
  });
}

export function info_api(event, context : Context, callback : Callback) : void {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";  
  fetch('https://163.44.174.193/ifj/api/v1/offer/info', {rejectUnauthorized : false})
  .then(res => res.json())
  .then(json => {
    callback(undefined, {
      ...result,
      body: JSON.stringify(json)
    });
  })
  .catch(err => {
    callback(undefined, {
      ...result,
      body: JSON.stringify(err)
    });
  });
}

export function detail_api(event, context : Context, callback : Callback) : void {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";  
  fetch('https://163.44.174.193/ifj/api/v1/offer/detail/3', {rejectUnauthorized : false})
  .then(res => res.json())
  .then(json => {
    callback(undefined, {
      ...result,
      body: JSON.stringify(json)
    });
  })
  .catch(err => {
    callback(undefined, {
      ...result,
      body: JSON.stringify(err)
    });
  });
}