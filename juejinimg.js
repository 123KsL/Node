


const axios = require('axios');
const headers = {
    cookie: "ttcid=c6b2f042821b4296a39ddc4e876288e333; _tea_utm_cache_2608={%22utm_source%22:%22web10%22%2C%22utm_medium%22:%22feed%22%2C%22utm_campaign%22:%22yyplan04%22}; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227153528380016297512%2522%252C%2522user_unique_id%2522%253A%25227153528380016297512%2522%252C%2522timestamp%2522%253A1665560630428%257D; _ga=GA1.2.2130123547.1665560631; sid_guard=72224b75312cf42b00ad5166b6a89e28%7C1665629652%7C31536000%7CFri%2C+13-Oct-2023+02%3A54%3A12+GMT; uid_tt=0115c493bcccab399d6de21032fc593b; uid_tt_ss=0115c493bcccab399d6de21032fc593b; sid_tt=72224b75312cf42b00ad5166b6a89e28; sessionid=72224b75312cf42b00ad5166b6a89e28; sessionid_ss=72224b75312cf42b00ad5166b6a89e28; sid_ucp_v1=1.0.0-KDk3M2ZmYjQ2MmRmMGM5OGFhM2QxYmY2M2E2ZWMyMzgyMTRhZGU3MjMKFgi-oeCQkIyvAhDU-52aBhiwFDgIQDgaAmxmIiA3MjIyNGI3NTMxMmNmNDJiMDBhZDUxNjZiNmE4OWUyOA; ssid_ucp_v1=1.0.0-KDk3M2ZmYjQ2MmRmMGM5OGFhM2QxYmY2M2E2ZWMyMzgyMTRhZGU3MjMKFgi-oeCQkIyvAhDU-52aBhiwFDgIQDgaAmxmIiA3MjIyNGI3NTMxMmNmNDJiMDBhZDUxNjZiNmE4OWUyOA; msToken=oSIF5vuTZTLf1fmrwgK3qpKqE4uifOkhwNgSCAIaisiL2PFOb5CVJrMKkaysvEFwq5EKKZEY4RdjHJqgdeMnrd1KHfYoooeRYSd9F6CsB8Q=; s_v_web_id=verify_lfro4t7f_9phGf97H_EH5k_4USX_9j99_ffhd2BeSo806; tt_scid=GRelcFh9SesW266YTAzEV5vjAmxIbPQCK8U5oeB8wZYXmx36Hv4tKyGRVXNFUtrqf3dc"
}

function updateImg() {

    const data = {
        aid: 2608, // 个人信息页面，上传一张图片，看一下接口的aid（每个人都是一个固定值）
        //avatar: './chrome-capture-2023-0-10.gif' // 似乎只能用这个域名的oss地址
        avatar: "https://p3-passport.byteimg.com/img/user-avatar/bc2d29879201f1e960e9916ab444d826~180x180.awebp"
    }
    // console.log(body)
    //https://juejin.cn/user/update/upload_avatar/ 
    axios.post('https://juejin.cn/web/user/update/user_info/', data, { headers })
        .then((res) => {
            console.log(res.data)
            // return res.data.res.vertical
        })
        .catch((err) => {
            console.log(err)
        })
}
updateImg()