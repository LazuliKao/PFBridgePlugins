/// <reference types="PFBridgeCore" />
let t = new System.Threading.Thread(() => {

})
t.SetApartmentState(System.Threading.ApartmentState.STA)
t.Start()