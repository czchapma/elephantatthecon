

var $ = require('jquery');
// ID of the Google Spreadsheet
//var spreadsheetID = "1MzVPabJWKxnmShilL0iO1KYEQDGoTJi-S_ly5ofdthU";
var spreadsheetID = "1NU5mgpaL6Ukzcg5m8-7xORabHyc8VUtp0OFe-JRrs4I";


/**
 * This function takes in the Google Sheets ID of the cleaned data and returns a JS Object that contains all of the questions and the answers with their individual counts + a preassigned color (for visualization).
 */
export function getData(spreadsheetID) {
    // Make sure it is public or set to Anyone with link can view
    var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

    /**
     * This function takes in a single entry (one row of the Google Sheet) and creates a Javascript Object that has the questions as keys and the individuals answer as the value.
     * The prefix is because Google Sheets converts every header column to a cleaned version of the text, starting with 'gsx$' (e.g. a header of 'I felt safe.' would be converted to 'gsx$ifeltsafe')
     */
    function findValueByPrefix(object, prefix) {
        var ret = []
        for (var property in object) {
            if (object.hasOwnProperty(property) &&
            property.toString().startsWith(prefix)) {
                // TODO find the VALUE OF THE THINGS
                ret[property.replace(prefix,'')] = object[property].$t;
            }
        }
        return ret;
    }

    /**
     * Depending on the input, will return a preassigned color for the d3 visualization.
     */
    function assignColor(key) {
        var color = "#000000";
        switch(key) {
            case "yes":
                color = "#000000";
                break;
            case "no":
                color = "#000000";
                break;
            case "always":
                color = "#000000";
                break;
            case "often":
                color = "#000000";
                break;
            case "sometimes":
                color = "#000000";
                break;
            case "rarely":
                color = "#000000";
                break;
            case "never":
                color = "#000000";
                break;
            case "male":
                color = "#000000";
                break;
            case "female":
                color = "#000000";
                break;
            case "nonbinary/genderqueer":
                color = "#000000";
                break;
            case "agender":
                color = "#000000";
                break;
            case "straight":
                color = "#000000";
                break;
            case "lesbian":
                color = "#000000";
                break;
            case "gay":
                color = "#000000";
                break;
            case "bisexual":
                color = "#000000";
                break;
            case "pansexual":
                color = "#000000";
                break;
            case "asexual":
                color = "#000000";
                break;
            case "queer":
                color = "#000000";
                break;
            case "questioning":
                color = "#000000";
                break;
            case "white":
                color = "#000000";
                break;
            case "asian":
                color = "#000000";
                break;
            case "biracial/multiracial":
                color = "#000000";
                break;
            case "middle eastern":
                color = "#000000";
                break;
            case "hispanic/latinx":
                color = "#000000";
                break;
            case "black":
                color = "#000000";
                break;
            case "native american":
                color = "#000000";
                break;
            case "pacific islander":
                color = "#000000";
                break;
        }

        return color;
    }

    /**
     * This function ensures that for any question, all the proper
     */
    function completeEntries(entry) {

        if (entry['straight'] !== void(0)) {
            // sexuality
        } else if (entry['white'] !== void(0)) {
            if (entry['asian'] === void(0)) {
                entry['asian'] = 0;
            }
            if (entry['biracial/multiracial'] === void(0)) {
                entry['biracial/multiracial'] = 0;
            }
            if (entry['middle eastern'] === void(0)) {
                entry['middle eastern'] = 0;
            }
            if (entry['latinx/hispanic'] === void(0)) {
                entry['latinx/hispanic'] = 0;
            }
            if (entry['black'] === void(0)) {
                entry['black'] = 0;
            }
            if (entry['native american'] === void(0)) {
                entry['native american'] = 0;
            }
            if (entry['pacific islander'] === void(0)) {
                entry['pacific islander'] = 0;
            }
        } else if (entry['no'] !== void(0)) {
            if (entry['yes'] === void(0)) {
                entry['yes'] = 0;
            }
        } else if (entry['always'] !== void(0)) {
            if (entry['often'] === void(0)) {
                entry['often'] = 0;
            }
            if (entry['sometimes'] === void(0)) {
                entry['sometimes'] = 0;
            }
            if (entry['never'] === void(0)) {
                entry['never'] = 0;
            }
        }

        return entry;
    }

    var formatted_data = {};

    $.getJSON(url, function(data) {

        var entry = data.feed.entry;


        $(entry).each(function(){
            let temp = Object.entries(findValueByPrefix(this, 'gsx$'));

            for (var i = 0; i < temp.length; i++) {
                // if first row, initialize new array
                if (formatted_data[temp[i][0]] === void(0)) {
                    formatted_data[temp[i][0]] = [];
                }
                formatted_data[temp[i][0]] = formatted_data[temp[i][0]].concat(temp[i][1])
            }

        });

        for (var item in formatted_data) {
            // TODO test things here
            let new_count = formatted_data[item].reduce(function (allResponses, response) {
                response = response.toLowerCase().split('/ ').join('/');


                if (response in allResponses) {
                    allResponses[response]++;
                } else {
                    if (response !== "") {
                        allResponses[response] = 1;
                    }
                }

                return allResponses;
            }, []);

            new_count = completeEntries(new_count);

            let final_count = Object.keys(new_count).map(function(key) {
                return [key, new_count[key], assignColor(key)]
            })

            formatted_data[item] = final_count;
        }

        // console.log(formatted_data);
    });
    return formatted_data;
}
