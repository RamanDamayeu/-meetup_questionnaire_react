A simple meetup questionnaire built up with AWS Amplify

With the help of ChatGPT
```
Please, create a web application with the help of AWS Amplify and React JS without authentication that will have two pages: first to be a  questionnaire and the second that will graphically represent results. 
A questionnaire page should look like a table with three rows and three columns. Each row should represent a question from the list: 
1) "What was an average number of Data Sources * Data Products?" 
2) "What was an average number of years a company is on market?" 
3) "What was an average number of data pipelines per Data Engineer?". 

Each Column will represent an "era" and has names: 
1) "Classic on-prem Data Warehouse Era"; 
2) "HDFS/MapReduce Era"; 
3) "Cloud Era". 

Each cell of the table should accept floating point value and also have "Not Applicable" radio button that should hide an entry field.


The page with results should build a chart: 
on X axis the should be three values the same as as questions; 
on Y axis there should be values from cells. 
There should also be a single point for each question withing "Era" that represent an average value of answers. 
Points with average values for each question should  be connected with lines.
```
First page has been created successfully! For sure with a little curation :)
On the second page I did insist as QuickSight worked for me as well.
