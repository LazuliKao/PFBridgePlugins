/// <reference path="./PFBridgeCore/index.d.ts" />
let t = new System.Threading.Thread(() => {

})
t.SetApartmentState(System.Threading.ApartmentState.STA)
t.Start()