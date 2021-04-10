"use strict";
/// <reference path="./PFBridgeCore/index.d.ts" />
ModuleInfo.Author = "littlegao233";
ModuleInfo.Description = "测试";
ModuleInfo.Version = "0.0.1";
let sendData = System.Convert.FromBase64String("AQAAAAAAA2oHAP//AP7+/v79/f39EjRWeJx0FrwC/0lw");
for (let i = 0; i < sendData.length; i++) {
    const element = sendData[i];
    const api = importNamespace('PFBridgeCore').APIs.API;
    api.log(element);
    importNamespace('System').Enum.GetValues(typeof System.Net.Sockets.SocketType).forEach(x => {
        api.log(x);
    });
}
let client = new System.Net.Sockets.Socket(System.Net.Sockets.SocketType.Dgram, System.Net.Sockets.ProtocolType.Udp);
let receiveData = new System.Byte[256];
/*
            byte[] receiveData = new byte[256];
            Task queryTask = Task.Run(() =>
            {
                try
                {
                    client.SendTo(sendData, new IPEndPoint(IPAddress.TryParse(address, out IPAddress ipAddress) ? ipAddress : Dns.GetHostAddresses(address).First(), port));
                    client.Receive(receiveData, receiveData.Length, SocketFlags.None);
                }
                catch (Exception) { }
            }
            );
            queryTask.Wait(TimeSpan.FromSeconds(10));
            if (!queryTask.IsCompleted || queryTask.IsFaulted) { throw new ArgumentNullException("Query Failed", "Unable to connect to the server!"); }
            queryTask.Dispose();
            int i = 0;
*/ 
