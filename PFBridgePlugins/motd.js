"use strict";
/// <reference path="./PFBridgeCore/index.d.ts" />
moduleInfo.Author = "littlegao233";
moduleInfo.Description = "测试";
moduleInfo.Version = "0.0.1";
let sendData = System.Convert.FromBase64String("AQAAAAAAA2oHAP//AP7+/v79/f39EjRWeJx0FrwC/0lw");
const api = importNamespace('PFBridgeCore').APIs.API;
let client = importNamespace("PFBridgeCore.Utils").Net.Sockets.Socket.
    CreateSocket(2 /* Dgram */, 17 /* Udp */);
let receiveData = [new System.Byte()];
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
