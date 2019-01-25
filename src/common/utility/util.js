window.utli = {
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

