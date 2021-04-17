/// <reference path="./System.d.ts" />
declare interface Utils {
    Net: Net;
}
declare interface Net {
    Sockets: Sockets;
}
declare interface Sockets {
    Socket: Socket;
}
declare interface Socket {
    CreateSocket(addressFamily: System.Net.Sockets.AddressFamily, socketType: System.Net.Sockets.SocketType, protocolType: System.Net.Sockets.ProtocolType)
    CreateSocket(socketType: System.Net.Sockets.SocketType, protocolType: System.Net.Sockets.ProtocolType);
}