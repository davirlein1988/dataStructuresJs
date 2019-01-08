//It works only on sorted arrays
let states = ["Alaska",
                  "Alabama",
                  "Arkansas",
                  "American Samoa",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "District of Columbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Guam",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "North Carolina",
                  " North Dakota",
                  "Nebraska",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "Puerto Rico",
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "Virgin Islands",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "West Virginia",
                  "Wyoming"];
/////////////////
/**
 * Create a function that accepts a sorted array and a value with binary search,
 * if th value is not in the array return -1
 */
search = (arr, val) => {
    var low = 0;
    var high =  arr.length-1;
    var middle = Math.floor((low + high) / 2);

    while(arr[middle] !== val && low <= high){ 
        if(val < arr[middle]) high = middle - 1
        else low = middle + 1;
        middle = Math.floor((low + high) / 2);
    }
    return arr[middle] === val ? middle : -1
}

console.log(search(states,  "Indiana"));
