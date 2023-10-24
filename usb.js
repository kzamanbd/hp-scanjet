const usb = require("usb");

function listConnectedDevices() {
    // connect to the USB subsystem
    // vendorId: "1008", productId: "24581"
    var device = usb.findByIds(1008, 24581);
    console.log(device);
}

// Call the function to list connected devices
listConnectedDevices();
