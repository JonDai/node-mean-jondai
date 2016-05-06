/**
 * Created by JonDai on 2016/4/28.
 */

module.exports = {
  getYYMMDD: getYYMMDD()
}

function getYYMMDD(date) {
    var date =  date || new Date();
    var Y = date.getFullYear();
    var M = date.getMonth()+1;
    var D = date.getDate();
    if(M < 10) M = '0'+M.toString();
    if(D < 10) D = '0'+D.toString();
    return Y.toString()+M.toString()+D.toString();
}
