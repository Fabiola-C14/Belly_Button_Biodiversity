# Plot.ly-Belly_Button_Biodiversity

## Link to site: https://fabiola-c14.github.io/Belly_Button_Biodiversity/

In this project, an interactive dashboard was built to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

To create the dashboard the D3 library was used to read in samples.json.

### Bar Chart
A horizontal bar chart was created to display the top 10 OTUs found in that individual:
* The data in the sample_values field was used to create the bar chart.
* The otu_ids were used as the labels for the bar chart.
* The otu_labels were used as the hovertext for the chart.

### Bubble Chart
The following data was used to create the bubble chart:
* Otu_ids were for the x values.
* Sample_values for the y values.
* Sample_values were for the marker size.
* Otu_ids for the marker colors.
* Otu_labels for the text values.
