var appId = "67e63e4e";
var appKey = "7a4fefa0bfa8b4cf8254e7cad6e808dc";
// Submit button
function submitButton(searchValue) {
    //document.getElementById("label").innerHTML = searchValue;
    var phrase = searchValue;
    var brand_id = "";
    var results = "0%3A20";
    var cal_min = 0;
    var cal_max = 50000;
    var fields = "*";
    var url = "https://api.nutritionix.com/v1_1/search/";
    $.ajax({
        url: url + phrase + "?" + "results=" + results + "&cal_min=" + cal_min + "&cal_max=" + cal_max + "&fields=" + fields + "&appId=" + appId + "&appKey=" + appKey,
        type: "GET",
        success: function (result) {
            $("#label").html(result);
        }
    });
}
//# sourceMappingURL=functions.js.map