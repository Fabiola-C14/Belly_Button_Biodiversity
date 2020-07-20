//Create dropdown selection by ID
function init() {
    var dropdown=d3.select("#selDataset");

    //Pull data from json file
    d3.json("data/samples.json").then((data) => {
        //console.log(data)

    //Display selection on dashboard    
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });
        updateBarChart(data.names[0]);
        updateInfo(data.names[0]);
    });
    
}

init();

function updateInfo(id) {
    d3.json("data/samples.json").then((data) => {
        var sampleData=data.metadata;
        // console.log(sampleData)

        var result=sampleData.filter(row => row.id.toString()=== id)[0];
        var panelData=d3.select("#sample-metadata");

        panelData.html("");

        Object.entries(result).forEach((key) => {
            panelData.append("h5").text(key[0].toUpperCase() + ":" + '\n' + key[1] + '\n');
        });
    });
}

function optionChanged(id) {
    updateBarChart(id);
    updateBubbleChart(id);
    updateInfo(id);
}

function updateBarChart(id) {
    d3.json("data/samples.json").then((data) => {
        //console.log(data);

    var sampleIDs=data.samples.filter(row => row.id.toString()=== id)[0];
        //console.log(sampleIDs)

    var otuData=sampleIDs.otu_ids.slice(0,10).reverse();
    var otuIDs=otuData.map(otuId => "OTU" +  " " + otuId)
        //console.log(otuIDs)

    var otuLabels=sampleIDs.otu_labels.slice(0,10).reverse();
        //console.log(otuLabels)

    var sampleValues=sampleIDs.sample_values.slice(0,10).reverse();
        //console.log(sampleValues)

    var trace1 = {
        x: sampleValues,
        y: otuIDs,
        type: "bar",
        text: otuLabels,
        orientation: "h"
    };
    
    var data=[trace1];

    var layout ={
        title: "Top 10 OTU"
    }
    
    Plotly.newPlot("bar", data, layout);

    });
}

function updateBubbleChart(id) {
    d3.json("data/samples.json").then((data) => {
        //console.log(data);

    var sampleIDs=data.samples.filter(row => row.id.toString()=== id)[0];
        //console.log(sampleIDs)

    var otuData=sampleIDs.otu_ids;
        //console.log(otuData)

    var otuLabels=sampleIDs.otu_labels;
        //console.log(otuLabels)

    var sampleValues=sampleIDs.sample_values;
        console.log(sampleValues)

    var trace2 = {
        x: otuData,
        y: sampleValues,
        mode: 'markers',
        text: otuLabels,
        marker: {
            size: sampleValues,
            color:otuData,
            colorscale: "Earth"
        }
    };
          
    var data = [trace2];
          
    var layout = {
        showlegend: false,
        height: 600,
        width: 1200,
        sizemode:"area",
        hovermode:"closet",
        xaxis:{title:"OTU_IDS"}
    };
          
    Plotly.newPlot('bubble', data, layout);

    });
}