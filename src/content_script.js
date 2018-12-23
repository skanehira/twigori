//----------------------
$(function () {
    makeUho = function(val) {
        let result = ""
        for (i in val) {
            if (val[i] == "\n") {
                result += val[i]
                continue
            }
            if (i % 2 == 0) {
                result += "ｳ"
            } else if (i % 5 == 0) {
                result += "ﾎ"
            } else if (i % 6 == 0) {
                result += "ｯ"
            } else {
                result += "ｳﾎｯ"
            }
        }
        return result
    }

    // my account 
    var user_name = document.getElementsByClassName('u-textInheritColor js-nav')[0];
    user_name.text = makeUho(user_name.text);
});


