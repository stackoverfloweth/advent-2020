const sample = [
    {instruction:'F', amount:10},
    {instruction:'N', amount:3},
    {instruction:'F', amount:7},
    {instruction:'R', amount:180},
    {instruction:'F', amount:11},
]
const input = [
    {instruction:'S', amount:1},
    {instruction:'R', amount:270},
    {instruction:'S', amount:5},
    {instruction:'W', amount:2},
    {instruction:'F', amount:63},
    {instruction:'S', amount:3},
    {instruction:'L', amount:90},
    {instruction:'W', amount:4},
    {instruction:'F', amount:59},
    {instruction:'S', amount:1},
    {instruction:'F', amount:21},
    {instruction:'W', amount:4},
    {instruction:'R', amount:90},
    {instruction:'W', amount:1},
    {instruction:'R', amount:180},
    {instruction:'S', amount:2},
    {instruction:'W', amount:2},
    {instruction:'F', amount:91},
    {instruction:'W', amount:5},
    {instruction:'R', amount:270},
    {instruction:'F', amount:97},
    {instruction:'R', amount:90},
    {instruction:'E', amount:2},
    {instruction:'R', amount:90},
    {instruction:'F', amount:6},
    {instruction:'W', amount:1},
    {instruction:'R', amount:90},
    {instruction:'W', amount:3},
    {instruction:'F', amount:1},
    {instruction:'S', amount:4},
    {instruction:'F', amount:1},
    {instruction:'N', amount:3},
    {instruction:'F', amount:76},
    {instruction:'S', amount:4},
    {instruction:'W', amount:5},
    {instruction:'F', amount:88},
    {instruction:'W', amount:4},
    {instruction:'N', amount:3},
    {instruction:'W', amount:2},
    {instruction:'F', amount:48},
    {instruction:'N', amount:1},
    {instruction:'F', amount:50},
    {instruction:'E', amount:3},
    {instruction:'F', amount:18},
    {instruction:'L', amount:90},
    {instruction:'F', amount:30},
    {instruction:'S', amount:3},
    {instruction:'R', amount:90},
    {instruction:'W', amount:1},
    {instruction:'N', amount:5},
    {instruction:'W', amount:1},
    {instruction:'R', amount:90},
    {instruction:'R', amount:90},
    {instruction:'E', amount:1},
    {instruction:'S', amount:2},
    {instruction:'F', amount:73},
    {instruction:'R', amount:90},
    {instruction:'S', amount:4},
    {instruction:'F', amount:89},
    {instruction:'F', amount:34},
    {instruction:'L', amount:90},
    {instruction:'F', amount:11},
    {instruction:'S', amount:3},
    {instruction:'F', amount:20},
    {instruction:'S', amount:5},
    {instruction:'E', amount:3},
    {instruction:'R', amount:180},
    {instruction:'E', amount:3},
    {instruction:'L', amount:90},
    {instruction:'E', amount:2},
    {instruction:'F', amount:1},
    {instruction:'E', amount:3},
    {instruction:'N', amount:3},
    {instruction:'F', amount:84},
    {instruction:'R', amount:90},
    {instruction:'E', amount:4},
    {instruction:'R', amount:180},
    {instruction:'F', amount:24},
    {instruction:'N', amount:3},
    {instruction:'L', amount:90},
    {instruction:'F', amount:15},
    {instruction:'W', amount:4},
    {instruction:'F', amount:52},
    {instruction:'S', amount:5},
    {instruction:'L', amount:180},
    {instruction:'N', amount:4},
    {instruction:'R', amount:90},
    {instruction:'E', amount:5},
    {instruction:'F', amount:11},
    {instruction:'S', amount:4},
    {instruction:'F', amount:27},
    {instruction:'R', amount:180},
    {instruction:'E', amount:4},
    {instruction:'R', amount:180},
    {instruction:'W', amount:3},
    {instruction:'N', amount:2},
    {instruction:'W', amount:1},
    {instruction:'S', amount:3},
    {instruction:'W', amount:4},
    {instruction:'E', amount:5},
    {instruction:'F', amount:97},
    {instruction:'L', amount:180},
    {instruction:'E', amount:3},
    {instruction:'N', amount:4},
    {instruction:'E', amount:3},
    {instruction:'S', amount:4},
    {instruction:'L', amount:90},
    {instruction:'S', amount:4},
    {instruction:'R', amount:90},
    {instruction:'N', amount:5},
    {instruction:'E', amount:1},
    {instruction:'S', amount:5},
    {instruction:'F', amount:19},
    {instruction:'E', amount:1},
    {instruction:'S', amount:2},
    {instruction:'L', amount:180},
    {instruction:'F', amount:36},
    {instruction:'S', amount:2},
    {instruction:'L', amount:90},
    {instruction:'W', amount:1},
    {instruction:'F', amount:8},
    {instruction:'W', amount:1},
    {instruction:'F', amount:67},
    {instruction:'E', amount:3},
    {instruction:'L', amount:90},
    {instruction:'F', amount:33},
    {instruction:'N', amount:4},
    {instruction:'F', amount:35},
    {instruction:'W', amount:2},
    {instruction:'F', amount:33},
    {instruction:'L', amount:180},
    {instruction:'N', amount:1},
    {instruction:'L', amount:90},
    {instruction:'R', amount:90},
    {instruction:'N', amount:3},
    {instruction:'W', amount:4},
    {instruction:'S', amount:1},
    {instruction:'F', amount:36},
    {instruction:'E', amount:2},
    {instruction:'F', amount:2},
    {instruction:'L', amount:90},
    {instruction:'W', amount:3},
    {instruction:'L', amount:90},
    {instruction:'E', amount:5},
    {instruction:'F', amount:4},
    {instruction:'L', amount:90},
    {instruction:'N', amount:1},
    {instruction:'N', amount:5},
    {instruction:'W', amount:4},
    {instruction:'N', amount:5},
    {instruction:'R', amount:90},
    {instruction:'W', amount:4},
    {instruction:'N', amount:5},
    {instruction:'W', amount:2},
    {instruction:'N', amount:5},
    {instruction:'F', amount:43},
    {instruction:'N', amount:3},
    {instruction:'W', amount:3},
    {instruction:'S', amount:2},
    {instruction:'W', amount:2},
    {instruction:'R', amount:90},
    {instruction:'E', amount:1},
    {instruction:'R', amount:90},
    {instruction:'F', amount:26},
    {instruction:'R', amount:90},
    {instruction:'E', amount:4},
    {instruction:'L', amount:270},
    {instruction:'F', amount:97},
    {instruction:'L', amount:180},
    {instruction:'N', amount:2},
    {instruction:'F', amount:2},
    {instruction:'R', amount:90},
    {instruction:'F', amount:33},
    {instruction:'E', amount:2},
    {instruction:'F', amount:85},
    {instruction:'E', amount:4},
    {instruction:'F', amount:80},
    {instruction:'R', amount:90},
    {instruction:'N', amount:2},
    {instruction:'L', amount:90},
    {instruction:'S', amount:5},
    {instruction:'F', amount:96},
    {instruction:'W', amount:1},
    {instruction:'S', amount:5},
    {instruction:'L', amount:180},
    {instruction:'F', amount:54},
    {instruction:'E', amount:3},
    {instruction:'F', amount:84},
    {instruction:'E', amount:3},
    {instruction:'L', amount:90},
    {instruction:'W', amount:1},
    {instruction:'N', amount:2},
    {instruction:'W', amount:4},
    {instruction:'L', amount:90},
    {instruction:'W', amount:4},
    {instruction:'F', amount:26},
    {instruction:'E', amount:5},
    {instruction:'R', amount:180},
    {instruction:'W', amount:1},
    {instruction:'F', amount:43},
    {instruction:'N', amount:4},
    {instruction:'E', amount:1},
    {instruction:'S', amount:4},
    {instruction:'S', amount:3},
    {instruction:'L', amount:90},
    {instruction:'N', amount:3},
    {instruction:'E', amount:1},
    {instruction:'F', amount:14},
    {instruction:'E', amount:1},
    {instruction:'N', amount:2},
    {instruction:'F', amount:93},
    {instruction:'S', amount:1},
    {instruction:'W', amount:3},
    {instruction:'N', amount:5},
    {instruction:'F', amount:15},
    {instruction:'W', amount:5},
    {instruction:'R', amount:90},
    {instruction:'F', amount:93},
    {instruction:'L', amount:90},
    {instruction:'E', amount:5},
    {instruction:'S', amount:4},
    {instruction:'E', amount:4},
    {instruction:'L', amount:90},
    {instruction:'E', amount:2},
    {instruction:'N', amount:4},
    {instruction:'F', amount:98},
    {instruction:'R', amount:90},
    {instruction:'W', amount:3},
    {instruction:'F', amount:100},
    {instruction:'R', amount:90},
    {instruction:'E', amount:2},
    {instruction:'F', amount:100},
    {instruction:'N', amount:5},
    {instruction:'F', amount:9},
    {instruction:'R', amount:90},
    {instruction:'F', amount:36},
    {instruction:'N', amount:3},
    {instruction:'W', amount:3},
    {instruction:'N', amount:4},
    {instruction:'F', amount:35},
    {instruction:'E', amount:3},
    {instruction:'R', amount:90},
    {instruction:'W', amount:4},
    {instruction:'L', amount:90},
    {instruction:'W', amount:3},
    {instruction:'F', amount:15},
    {instruction:'L', amount:90},
    {instruction:'F', amount:73},
    {instruction:'S', amount:2},
    {instruction:'E', amount:1},
    {instruction:'R', amount:180},
    {instruction:'F', amount:93},
    {instruction:'L', amount:270},
    {instruction:'F', amount:37},
    {instruction:'S', amount:1},
    {instruction:'F', amount:36},
    {instruction:'N', amount:1},
    {instruction:'E', amount:1},
    {instruction:'W', amount:1},
    {instruction:'R', amount:90},
    {instruction:'F', amount:46},
    {instruction:'W', amount:2},
    {instruction:'N', amount:4},
    {instruction:'F', amount:50},
    {instruction:'R', amount:90},
    {instruction:'W', amount:4},
    {instruction:'F', amount:90},
    {instruction:'L', amount:90},
    {instruction:'S', amount:3},
    {instruction:'F', amount:2},
    {instruction:'E', amount:1},
    {instruction:'L', amount:90},
    {instruction:'E', amount:5},
    {instruction:'S', amount:2},
    {instruction:'F', amount:91},
    {instruction:'W', amount:2},
    {instruction:'F', amount:21},
    {instruction:'E', amount:2},
    {instruction:'N', amount:2},
    {instruction:'W', amount:5},
    {instruction:'F', amount:79},
    {instruction:'E', amount:1},
    {instruction:'F', amount:77},
    {instruction:'L', amount:90},
    {instruction:'W', amount:5},
    {instruction:'N', amount:2},
    {instruction:'E', amount:3},
    {instruction:'L', amount:180},
    {instruction:'S', amount:2},
    {instruction:'W', amount:1},
    {instruction:'S', amount:1},
    {instruction:'R', amount:90},
    {instruction:'S', amount:5},
    {instruction:'R', amount:180},
    {instruction:'E', amount:2},
    {instruction:'F', amount:55},
    {instruction:'W', amount:4},
    {instruction:'R', amount:90},
    {instruction:'S', amount:3},
    {instruction:'L', amount:90},
    {instruction:'S', amount:1},
    {instruction:'R', amount:180},
    {instruction:'W', amount:4},
    {instruction:'R', amount:180},
    {instruction:'W', amount:5},
    {instruction:'S', amount:5},
    {instruction:'L', amount:180},
    {instruction:'F', amount:35},
    {instruction:'N', amount:1},
    {instruction:'F', amount:72},
    {instruction:'L', amount:90},
    {instruction:'W', amount:4},
    {instruction:'L', amount:180},
    {instruction:'S', amount:1},
    {instruction:'E', amount:1},
    {instruction:'N', amount:5},
    {instruction:'L', amount:90},
    {instruction:'W', amount:5},
    {instruction:'N', amount:1},
    {instruction:'E', amount:2},
    {instruction:'N', amount:4},
    {instruction:'W', amount:3},
    {instruction:'F', amount:3},
    {instruction:'W', amount:4},
    {instruction:'F', amount:96},
    {instruction:'E', amount:1},
    {instruction:'F', amount:20},
    {instruction:'R', amount:90},
    {instruction:'W', amount:4},
    {instruction:'F', amount:99},
    {instruction:'L', amount:90},
    {instruction:'E', amount:4},
    {instruction:'N', amount:3},
    {instruction:'N', amount:3},
    {instruction:'W', amount:3},
    {instruction:'N', amount:5},
    {instruction:'E', amount:2},
    {instruction:'N', amount:4},
    {instruction:'E', amount:4},
    {instruction:'L', amount:90},
    {instruction:'S', amount:2},
    {instruction:'W', amount:3},
    {instruction:'F', amount:3},
    {instruction:'R', amount:90},
    {instruction:'E', amount:2},
    {instruction:'R', amount:90},
    {instruction:'F', amount:23},
    {instruction:'N', amount:5},
    {instruction:'F', amount:39},
    {instruction:'W', amount:3},
    {instruction:'R', amount:90},
    {instruction:'N', amount:3},
    {instruction:'R', amount:180},
    {instruction:'R', amount:90},
    {instruction:'F', amount:94},
    {instruction:'W', amount:1},
    {instruction:'R', amount:90},
    {instruction:'N', amount:3},
    {instruction:'F', amount:16},
    {instruction:'R', amount:90},
    {instruction:'F', amount:61},
    {instruction:'R', amount:90},
    {instruction:'F', amount:67},
    {instruction:'N', amount:4},
    {instruction:'F', amount:72},
    {instruction:'S', amount:2},
    {instruction:'F', amount:39},
    {instruction:'W', amount:1},
    {instruction:'S', amount:1},
    {instruction:'R', amount:90},
    {instruction:'F', amount:67},
    {instruction:'S', amount:1},
    {instruction:'L', amount:90},
    {instruction:'W', amount:5},
    {instruction:'N', amount:5},
    {instruction:'E', amount:3},
    {instruction:'F', amount:65},
    {instruction:'E', amount:2},
    {instruction:'N', amount:1},
    {instruction:'S', amount:4},
    {instruction:'L', amount:90},
    {instruction:'N', amount:4},
    {instruction:'W', amount:5},
    {instruction:'R', amount:90},
    {instruction:'F', amount:49},
    {instruction:'L', amount:180},
    {instruction:'F', amount:22},
    {instruction:'E', amount:2},
    {instruction:'L', amount:90},
    {instruction:'N', amount:3},
    {instruction:'R', amount:90},
    {instruction:'F', amount:61},
    {instruction:'L', amount:180},
    {instruction:'F', amount:57},
    {instruction:'L', amount:90},
    {instruction:'F', amount:90},
    {instruction:'R', amount:90},
    {instruction:'E', amount:5},
    {instruction:'L', amount:180},
    {instruction:'E', amount:1},
    {instruction:'L', amount:180},
    {instruction:'S', amount:3},
    {instruction:'W', amount:4},
    {instruction:'F', amount:55},
    {instruction:'E', amount:1},
    {instruction:'F', amount:95},
    {instruction:'R', amount:180},
    {instruction:'W', amount:5},
    {instruction:'L', amount:180},
    {instruction:'F', amount:23},
    {instruction:'E', amount:3},
    {instruction:'F', amount:97},
    {instruction:'S', amount:1},
    {instruction:'F', amount:19},
    {instruction:'N', amount:2},
    {instruction:'W', amount:4},
    {instruction:'F', amount:10},
    {instruction:'L', amount:90},
    {instruction:'W', amount:4},
    {instruction:'S', amount:1},
    {instruction:'L', amount:90},
    {instruction:'W', amount:5},
    {instruction:'F', amount:64},
    {instruction:'R', amount:90},
    {instruction:'W', amount:4},
    {instruction:'F', amount:60},
    {instruction:'W', amount:4},
    {instruction:'L', amount:90},
    {instruction:'W', amount:3},
    {instruction:'F', amount:15},
    {instruction:'E', amount:5},
    {instruction:'N', amount:5},
    {instruction:'L', amount:90},
    {instruction:'S', amount:2},
    {instruction:'L', amount:180},
    {instruction:'F', amount:64},
    {instruction:'L', amount:180},
    {instruction:'F', amount:93},
    {instruction:'E', amount:5},
    {instruction:'F', amount:13},
    {instruction:'R', amount:270},
    {instruction:'S', amount:4},
    {instruction:'F', amount:58},
    {instruction:'R', amount:180},
    {instruction:'W', amount:5},
    {instruction:'S', amount:1},
    {instruction:'W', amount:4},
    {instruction:'N', amount:1},
    {instruction:'L', amount:270},
    {instruction:'S', amount:4},
    {instruction:'E', amount:4},
    {instruction:'N', amount:5},
    {instruction:'F', amount:38},
    {instruction:'W', amount:4},
    {instruction:'N', amount:2},
    {instruction:'W', amount:2},
    {instruction:'N', amount:1},
    {instruction:'R', amount:90},
    {instruction:'E', amount:1},
    {instruction:'L', amount:90},
    {instruction:'N', amount:2},
    {instruction:'R', amount:90},
    {instruction:'N', amount:3},
    {instruction:'E', amount:3},
    {instruction:'N', amount:3},
    {instruction:'F', amount:90},
    {instruction:'W', amount:2},
    {instruction:'L', amount:90},
    {instruction:'F', amount:95},
    {instruction:'S', amount:1},
    {instruction:'S', amount:4},
    {instruction:'F', amount:48},
    {instruction:'L', amount:270},
    {instruction:'W', amount:2},
    {instruction:'L', amount:90},
    {instruction:'F', amount:34},
    {instruction:'S', amount:3},
    {instruction:'F', amount:23},
    {instruction:'N', amount:2},
    {instruction:'F', amount:13},
    {instruction:'R', amount:180},
    {instruction:'E', amount:2},
    {instruction:'F', amount:95},
    {instruction:'L', amount:90},
    {instruction:'N', amount:2},
    {instruction:'R', amount:90},
    {instruction:'S', amount:2},
    {instruction:'E', amount:3},
    {instruction:'N', amount:1},
    {instruction:'F', amount:41},
    {instruction:'N', amount:2},
    {instruction:'R', amount:180},
    {instruction:'S', amount:4},
    {instruction:'W', amount:3},
    {instruction:'L', amount:90},
    {instruction:'W', amount:5},
    {instruction:'L', amount:90},
    {instruction:'F', amount:35},
    {instruction:'S', amount:5},
    {instruction:'E', amount:2},
    {instruction:'S', amount:5},
    {instruction:'E', amount:3},
    {instruction:'F', amount:81},
    {instruction:'W', amount:4},
    {instruction:'N', amount:3},
    {instruction:'F', amount:28},
    {instruction:'E', amount:1},
    {instruction:'F', amount:93},
    {instruction:'S', amount:3},
    {instruction:'F', amount:53},
    {instruction:'L', amount:90},
    {instruction:'W', amount:5},
    {instruction:'F', amount:59},
    {instruction:'W', amount:1},
    {instruction:'R', amount:90},
    {instruction:'E', amount:2},
    {instruction:'S', amount:5},
    {instruction:'F', amount:80},
    {instruction:'W', amount:3},
    {instruction:'S', amount:5},
    {instruction:'F', amount:6},
    {instruction:'R', amount:90},
    {instruction:'F', amount:8},
    {instruction:'W', amount:1},
    {instruction:'R', amount:180},
    {instruction:'E', amount:2},
    {instruction:'L', amount:270},
    {instruction:'N', amount:3},
    {instruction:'F', amount:59},
    {instruction:'W', amount:5},
    {instruction:'F', amount:51},
    {instruction:'R', amount:90},
    {instruction:'N', amount:2},
    {instruction:'E', amount:4},
    {instruction:'R', amount:90},
    {instruction:'E', amount:4},
    {instruction:'S', amount:1},
    {instruction:'W', amount:2},
    {instruction:'N', amount:1},
    {instruction:'F', amount:45},
    {instruction:'R', amount:90},
    {instruction:'N', amount:5},
    {instruction:'F', amount:28},
    {instruction:'L', amount:90},
    {instruction:'N', amount:4},
    {instruction:'F', amount:78},
    {instruction:'S', amount:1},
    {instruction:'R', amount:90},
    {instruction:'N', amount:5},
    {instruction:'L', amount:90},
    {instruction:'S', amount:2},
    {instruction:'F', amount:92},
    {instruction:'L', amount:180},
    {instruction:'E', amount:3},
    {instruction:'R', amount:90},
    {instruction:'F', amount:26},
    {instruction:'W', amount:1},
    {instruction:'L', amount:180},
    {instruction:'R', amount:90},
    {instruction:'S', amount:3},
    {instruction:'F', amount:51},
    {instruction:'N', amount:1},
    {instruction:'L', amount:90},
    {instruction:'W', amount:2},
    {instruction:'F', amount:84},
    {instruction:'L', amount:180},
    {instruction:'E', amount:1},
    {instruction:'F', amount:54},
    {instruction:'E', amount:4},
    {instruction:'F', amount:65},
    {instruction:'R', amount:90},
    {instruction:'S', amount:5},
    {instruction:'E', amount:2},
    {instruction:'F', amount:78},
    {instruction:'E', amount:1},
    {instruction:'R', amount:90},
    {instruction:'S', amount:1},
    {instruction:'R', amount:90},
    {instruction:'W', amount:3},
    {instruction:'R', amount:180},
    {instruction:'F', amount:99},
    {instruction:'E', amount:5},
    {instruction:'R', amount:90},
    {instruction:'F', amount:44},
    {instruction:'L', amount:90},
    {instruction:'W', amount:3},
    {instruction:'N', amount:3},
    {instruction:'R', amount:180},
    {instruction:'N', amount:4},
    {instruction:'E', amount:1},
    {instruction:'S', amount:4},
    {instruction:'L', amount:180},
    {instruction:'S', amount:4},
    {instruction:'F', amount:59},
    {instruction:'E', amount:4},
    {instruction:'F', amount:1},
    {instruction:'N', amount:5},
    {instruction:'R', amount:180},
    {instruction:'S', amount:5},
    {instruction:'L', amount:180},
    {instruction:'F', amount:38},
    {instruction:'E', amount:4},
    {instruction:'N', amount:3},
    {instruction:'R', amount:180},
    {instruction:'N', amount:1},
    {instruction:'W', amount:4},
    {instruction:'R', amount:90},
    {instruction:'F', amount:30},
    {instruction:'L', amount:90},
    {instruction:'S', amount:3},
    {instruction:'R', amount:90},
    {instruction:'F', amount:71},
    {instruction:'L', amount:90},
    {instruction:'E', amount:5},
    {instruction:'N', amount:4},
    {instruction:'R', amount:90},
    {instruction:'F', amount:50},
    {instruction:'N', amount:2},
    {instruction:'L', amount:180},
    {instruction:'F', amount:3},
    {instruction:'W', amount:5},
    {instruction:'L', amount:90},
    {instruction:'W', amount:5},
    {instruction:'R', amount:90},
    {instruction:'W', amount:5},
    {instruction:'N', amount:5},
    {instruction:'R', amount:180},
    {instruction:'E', amount:2},
    {instruction:'F', amount:39},
    {instruction:'W', amount:5},
    {instruction:'R', amount:90},
    {instruction:'F', amount:72},
    {instruction:'N', amount:5},
    {instruction:'E', amount:3},
    {instruction:'F', amount:37},
    {instruction:'S', amount:5},
    {instruction:'W', amount:1},
    {instruction:'F', amount:11},
    {instruction:'L', amount:180},
    {instruction:'E', amount:3},
    {instruction:'F', amount:55},
    {instruction:'R', amount:90},
    {instruction:'R', amount:90},
    {instruction:'F', amount:85},
    {instruction:'W', amount:4},
    {instruction:'F', amount:53},
    {instruction:'S', amount:1},
    {instruction:'F', amount:33},
    {instruction:'W', amount:4},
    {instruction:'L', amount:90},
    {instruction:'W', amount:5},
    {instruction:'F', amount:64},
    {instruction:'E', amount:5},
    {instruction:'R', amount:90},
    {instruction:'N', amount:1},
    {instruction:'R', amount:90},
    {instruction:'F', amount:14},
    {instruction:'N', amount:4},
    {instruction:'L', amount:180},
    {instruction:'S', amount:3},
    {instruction:'E', amount:1},
    {instruction:'F', amount:21},
    {instruction:'S', amount:2},
    {instruction:'F', amount:26},
    {instruction:'S', amount:5},
    {instruction:'F', amount:6},
    {instruction:'S', amount:2},
    {instruction:'L', amount:90},
    {instruction:'F', amount:50},
    {instruction:'N', amount:2},
    {instruction:'L', amount:180},
    {instruction:'W', amount:4},
    {instruction:'N', amount:2},
    {instruction:'E', amount:2},
    {instruction:'R', amount:90},
    {instruction:'F', amount:35},
    {instruction:'N', amount:1},
    {instruction:'F', amount:69},
    {instruction:'W', amount:3},
    {instruction:'N', amount:2},
    {instruction:'W', amount:3},
    {instruction:'L', amount:90},
    {instruction:'E', amount:1},
    {instruction:'S', amount:3},
    {instruction:'E', amount:4},
    {instruction:'F', amount:58},
    {instruction:'N', amount:1},
    {instruction:'W', amount:5},
    {instruction:'S', amount:5},
    {instruction:'L', amount:90},
    {instruction:'W', amount:1},
    {instruction:'S', amount:3},
    {instruction:'W', amount:1},
    {instruction:'S', amount:4},
    {instruction:'E', amount:4},
    {instruction:'R', amount:90},
    {instruction:'N', amount:5},
    {instruction:'R', amount:180},
    {instruction:'F', amount:57},
    {instruction:'L', amount:90},
    {instruction:'F', amount:69},
    {instruction:'W', amount:4},
    {instruction:'F', amount:2},
    {instruction:'R', amount:90},
    {instruction:'F', amount:1},
    {instruction:'L', amount:90},
    {instruction:'W', amount:1},
    {instruction:'S', amount:2},
    {instruction:'F', amount:40},
    {instruction:'S', amount:1},
    {instruction:'L', amount:180},
    {instruction:'F', amount:31},
    {instruction:'R', amount:180},
    {instruction:'F', amount:24},
    {instruction:'R', amount:90},
    {instruction:'S', amount:3},
    {instruction:'L', amount:180},
    {instruction:'S', amount:1},
    {instruction:'W', amount:2},
    {instruction:'F', amount:64},
    {instruction:'S', amount:1},
    {instruction:'W', amount:1},
    {instruction:'R', amount:180},
    {instruction:'W', amount:5},
    {instruction:'S', amount:3},
    {instruction:'L', amount:90},
    {instruction:'S', amount:5},
    {instruction:'E', amount:5},
    {instruction:'R', amount:90},
    {instruction:'E', amount:1},
    {instruction:'F', amount:5},
    {instruction:'N', amount:5},
    {instruction:'F', amount:3},
    {instruction:'W', amount:3},
    {instruction:'F', amount:57},
    {instruction:'R', amount:180},
    {instruction:'E', amount:3},
    {instruction:'F', amount:94},
    {instruction:'W', amount:1},
    {instruction:'F', amount:54},
    {instruction:'W', amount:4},
    {instruction:'S', amount:2},
    {instruction:'W', amount:2},
    {instruction:'N', amount:1},
    {instruction:'L', amount:90},
    {instruction:'W', amount:5},
    {instruction:'S', amount:4},
    {instruction:'L', amount:180},
    {instruction:'L', amount:90},
    {instruction:'F', amount:100},
    {instruction:'E', amount:3},
    {instruction:'R', amount:90},
    {instruction:'N', amount:5},
    {instruction:'E', amount:1},
    {instruction:'R', amount:90},
    {instruction:'E', amount:5},
    {instruction:'L', amount:90},
    {instruction:'S', amount:5},
    {instruction:'L', amount:90},
    {instruction:'S', amount:1},
    {instruction:'R', amount:90},
    {instruction:'E', amount:4},
    {instruction:'S', amount:1},
    {instruction:'W', amount:4},
    {instruction:'F', amount:65},
    {instruction:'R', amount:90},
    {instruction:'N', amount:3},
    {instruction:'W', amount:5},
    {instruction:'F', amount:64},
    {instruction:'R', amount:90},
    {instruction:'E', amount:5},
    {instruction:'R', amount:180},
    {instruction:'W', amount:5},
    {instruction:'F', amount:28},
    {instruction:'S', amount:5},
    {instruction:'L', amount:180},
    {instruction:'S', amount:5},
    {instruction:'R', amount:90},
    {instruction:'E', amount:4},
    {instruction:'F', amount:82},
]
const position = {lat: 0, long: 0, facing: 'E'}

const execute = {
    N: (set) => position.long += set.amount,
    S: (set) => position.long -= set.amount,
    E: (set) => position.lat += set.amount,
    W: (set) => position.lat -= set.amount,
    L: (set) => repeat(() => turn[position.facing](set.instruction), set.amount / 90),
    R: (set) => repeat(() => turn[position.facing](set.instruction), set.amount / 90),
    F: (set) => forward[position.facing](set),
}

const repeat = (action, times) => {
    for(let i=0; i<times; i++){
        action()
    }
}

const turn = {
    N: (direction) => position.facing = direction == "R" ? "E" : "W",
    S: (direction) => position.facing = direction == "R" ? "W" : "E",
    E: (direction) => position.facing = direction == "R" ? "S" : "N",
    W: (direction) => position.facing = direction == "R" ? "N" : "S",
}

const forward = {
    N: (set) => position.long += set.amount,
    S: (set) => position.long -= set.amount,
    E: (set) => position.lat += set.amount,
    W: (set) => position.lat -= set.amount,
}

input.forEach(set => execute[set.instruction](set))
console.log(Math.abs(position.lat) + Math.abs(position.long))