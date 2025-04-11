# Web Development Project 6 - _Brewery Explorer | Data Dashboard Visualized_

Submitted by: **Quynh Giang Ho**

This web app: **An interactive brewery explorer dashboard that allows users to browse, search, and filter brewery data from across the United States. The app features visualizations showing brewery distribution by state and type, and provides detailed information for each brewery.**

Time spent: **4.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset

The following **optional** features are implemented:

- [x] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [x] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

The following **additional** features are implemented:

- [x] Implemented responsive design to ensure the dashboard looks good on different screen sizes
- [x] Added a Google Maps link in the detail view when brewery coordinates are available
- [x] Included a search feature that filters breweries by name in real-time
- [x] Added a state filter dropdown to quickly find breweries in specific locations
- [x] Added a sidebar with additional helpful resources

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='./src/assets/brewery2demo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with [Chrome Capture - screenshot & GIF](https://chromewebstore.google.com/detail/chrome-capture-screenshot/ggaabchcecdbomdcnbahdfddfikjmphe)

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

- Working with React Router to create dynamic routes for brewery details was initially challenging, but once I understood the pattern, it became straightforward
- Implementing the charts with Recharts required some trial and error to get the styling and layout right
- Ensuring proper state management between different views required careful planning
- The API occasionally returned incomplete data for some breweries, requiring additional error handling
- Creating a responsive design that worked well on both desktop and mobile views took some additional time

## License

    Copyright 2025 Quynh Giang Ho (Shepe1304)

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
