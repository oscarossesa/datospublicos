//licitaciones
//labels: ["Todas", "Publicadas", "Cerradas", "Desiertas", "Adjudicadas", "Revocadas", "Suspendidas"],

//ordenes de compra
//labels: ["Todas", "Enviada a Proveedor", "Aceptada", "Cancelada", "Recepción Conforme", "Pendiente de Recepcionar", "Recepcionada Parcialmente", "Recepcion Conforme Incompleta"],

options = {
    // Boolean - Whether to animate the chart
    animation: true,

    // Number - Number of animation steps
    animationSteps: 60,

    // String - Animation easing effect
    animationEasing: "easeOutQuart",

    // Boolean - If we should show the scale at all
    showScale: true,

    // Boolean - If we want to override with a hard coded scale
    scaleOverride: false,

    // ** Required if scaleOverride is true **
    // Number - The number of steps in a hard coded scale
    scaleSteps: null,
    // Number - The value jump in the hard coded scale
    scaleStepWidth: null,
    // Number - The scale starting value
    scaleStartValue: null,

    // String - Colour of the scale line
    scaleLineColor: "rgba(0,0,0,.1)",

    // Number - Pixel width of the scale line
    scaleLineWidth: 1,

    // Boolean - Whether to show labels on the scale
    scaleShowLabels: true,

    // Interpolated JS string - can access value
    scaleLabel: "<%=value%>",

    // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
    scaleIntegersOnly: true,

    // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: false,

    // String - Scale label font declaration for the scale label
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Scale label font size in pixels
    scaleFontSize: 12,

    // String - Scale label font weight style
    scaleFontStyle: "normal",

    // String - Scale label font colour
    scaleFontColor: "#666",

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: false,

    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,

    // Boolean - Determines whether to draw tooltips on the canvas or not
    showTooltips: true,

    // Array - Array of string names to attach tooltip events
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],

    // String - Tooltip background colour
    tooltipFillColor: "rgba(0,0,0,0.8)",

    // String - Tooltip label font declaration for the scale label
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip label font size in pixels
    tooltipFontSize: 14,

    // String - Tooltip font weight style
    tooltipFontStyle: "normal",

    // String - Tooltip label font colour
    tooltipFontColor: "#fff",

    // String - Tooltip title font declaration for the scale label
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip title font size in pixels
    tooltipTitleFontSize: 14,

    // String - Tooltip title font weight style
    tooltipTitleFontStyle: "bold",

    // String - Tooltip title font colour
    tooltipTitleFontColor: "#fff",

    // Number - pixel width of padding around tooltip text
    tooltipYPadding: 6,

    // Number - pixel width of padding around tooltip text
    tooltipXPadding: 6,

    // Number - Size of the caret on the tooltip
    tooltipCaretSize: 8,

    // Number - Pixel radius of the tooltip border
    tooltipCornerRadius: 6,

    // Number - Pixel offset from point x to tooltip edge
    tooltipXOffset: 10,

    // String - Template string for single tooltips
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

    // String - Template string for single tooltips
    multiTooltipTemplate: "<%= value %>",

    // Function - Will fire on animation progression.
    onAnimationProgress: function () { },

    // Function - Will fire on animation completion.
    onAnimationComplete: function () { }
}

$(document).ready(function () {

    var dataLc = [
        {
            value: 0,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 0,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: 4,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: 27,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        },
        {
            value: 0,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: 0,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }
    ];

    var dataOc = [
        {
            value: 3,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 185,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: 1,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: 47,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        },
        {
            value: 0,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 0,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: 0,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        }
    ];

    new Chart(document.getElementById("pie-chart-lc").getContext("2d")).Pie(dataLc);
    new Chart(document.getElementById("pie-chart-oc").getContext("2d")).PolarArea(dataOc);

    var dataBarraLc = {
        labels: ["T", "P", "C", "D", "A", "R", "S"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [31, 0, 0, 4, 27, 0, 0]
            },
        ]
    };

    new Chart(document.getElementById("bar-chart-lc").getContext("2d")).Bar(dataBarraLc, options);

    var dataBarraOc = {
        labels: ["T", "EP", "A", "C", "RC", "PR", "RP", "RCI"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [0, 3, 185, 1, 47, 0, 0, 0]
            },
        ]
    };

    new Chart(document.getElementById("bar-chart-oc").getContext("2d")).Bar(dataBarraOc);

    var lineChartData = {
        labels: ["T", "P", "C", "D", "A", "R", "S"],
        datasets: [
			{
			    fillColor: "rgba(151,187,205,0.5)",
			    strokeColor: "rgba(151,187,205,1)",
			    pointColor: "rgba(151,187,205,1)",
			    pointStrokeColor: "#fff",
			    data: [28, 48, 40, 19, 96, 27, 100]
			}
		]
    }

    //new Chart(document.getElementById("line-chart-lc").getContext("2d")).Line(lineChartData);
    var ctx = document.getElementById("line-chart-lc").getContext("2d");
    var myLineChart = new Chart(ctx).Line(lineChartData, options);

});

