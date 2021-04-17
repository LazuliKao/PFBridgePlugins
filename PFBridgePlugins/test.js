"use strict";
/// <reference path="./PFBridgeCore/index.d.ts" />
let t = new System.Threading.Thread(() => {
});
t.SetApartmentState(0 /* STA */);
t.Start();
