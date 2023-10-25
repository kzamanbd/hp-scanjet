const usb = require("usb");

// Replace these values with your scanner's vendor and product IDs
const VENDOR_ID = 1008; // HP
const PRODUCT_ID = 24581; // ScanJet Pro 2500 f1

const scannerDevice = usb.findByIds(VENDOR_ID, PRODUCT_ID);

if (!scannerDevice) {
    console.error("Scanner not found");
    process.exit(1);
}
