window.utli = {
    /**
     * 获取url中的参数
     */
    getUrlParam: (name) => {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return decodeURI(r[2]); return null; //返回参数值
    },
    /**
     * 手机号验证
     * @param {string} value 
     */
    isPhoneAvailable: (value) => {
        var reg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
        if (!reg.test(value)) {
            return false;
        } else {
            return true;
        }
    },

    isEmailAvailable: (value) => {
        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (!reg.test(value)) {
            return false;
        } else {
            return true;
        }
    }
}

