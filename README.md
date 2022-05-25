# xml-tree-viewer
Website where a user can upload an XML file and automatically see it in a tree view form.<br>

# Run the website
● run *npm install* to install dependencies.<br>
● run *npm start* to start react App.<br>

# Functionalities
● Website where a user can upload a XML file.<br>
● The XML is parsed and presented to the user graphically as a tree diagram.<br>

# Incompleted Tasks
● The file import fom local machine is not implemented, so the react App always uses an example xml file called 'xmldata.xml'.<br>
● Not much attention was taken to the user interface part. The intention would be to have a tree element with clickable elements and collapsable items.<br>
● There is not a xml branch rule verification.<br>

# Packages
● axios used for xml file data upload.<br>
● xml2js used for data parsing from xml to js object.<br>
● webpack < 5 used to include polyfills for node.js.
● Packages not included in webpack v5: timers-browserify, buffer, stream-browserify. To solve this, fallbacks were added to the webpack.config.js file.<br>
