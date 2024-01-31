const usb = require("usb");

// Replace these values with your scanner's vendor and product IDs
const VENDOR_ID = 1008; // HP
const PRODUCT_ID = 24581; // ScanJet Pro 2500 f1

const term = usb.findByIds(VENDOR_ID, PRODUCT_ID);

term.open();

var endpoints = term.interfaces[0].endpoints,
    inEndpoint = endpoints[0],
    outEndpoint = endpoints[1];

inEndpoint.transferType = 2;
inEndpoint.startStream(1, 64);
inEndpoint.transfer(64, function (error, data) {
    if (!error) {
        console.log(data);
    } else {
        console.log(error);
    }
});
inEndpoint.on("data", function (data) {
    console.log(data);
});
inEndpoint.on("error", function (error) {
    console.log(error);
});
outEndpoint.transferType = 2;
outEndpoint.startStream(1, 64);
outEndpoint.transfer(new Buffer("d\n"), function (err) {
    console.log(err);
});
