/*************************************************************************************/
// -->Template Name: Bootstrap Press Admin
// -->Author: Themedesigner
// -->Email: niravjoshi87@gmail.com
// -->File: c3_chart_JS
/*************************************************************************************/
$(function() {
    var n = c3.generate({
        bindto: "#spline-chart",
        size: { height: 400 },
        point: { r: 8 },
        color: { pattern: ["#175CFF", "#F29C1F"] },
        data: {
            columns: [
                ["Month", 30, 200, 100, 250, 100, 250],
                ["Week", 130, 300, 140, 200, 150, 50]
            ],
            type: "spline"
        },
        grid: { y: { show: !0 } }
    });
});