/// <reference path="./PFBridgeCore/index.d.ts" />
moduleInfo.Author = "littlegao233"
moduleInfo.Description = "测试"
moduleInfo.Version = "0.0.1"

const sendData = System.Convert.FromBase64String("AQAAAAAAA2oHAP//AP7+/v79/f39EjRWeJx0FrwC/0lw")
const apis = importNamespace(Namespaces.Core).APIs
const api = apis.API
const utils = importNamespace(Namespaces.Utils)
const SocketApi = utils.Net.Sockets.Socket
/*
0:MCPE
1:Dedicated Server
2:431
3:1.16.220
4:0
5:10
6:9761407514957423030
7:Bedrock level
8:Survival
9:1
10:19130
11:19131
12:
*/
class name {
    constructor(strs:string[]) {
        
    }
    
}
/**
 * Motd协议查询服务器信息
 * @param ip IP地址
 * @param port 端口
 */
function MotdBE(ip: string, port: number) {
    let client = SocketApi.CreateSocket(
        System.Net.Sockets.SocketType.Dgram,
        System.Net.Sockets.ProtocolType.Udp
    );
    SocketApi.SendData(client, sendData, ip, port)
    const receive = SocketApi.ReceiveData(client, 0, 256, System.Net.Sockets.SocketFlags.None).slice(35)
    const strs = System.Text.Encoding.UTF8.GetString(receive).split(';')
    for (let i = 0; i < strs.length; i++) {
        const element = strs[i];

        api.Log(i + ":" + element)
    }
}

const ta = System.Threading.Tasks.Task
ta.Delay(1000).ContinueWith(() => {
    MotdBE("127.0.0.1", 19130)
    api.Log("test")
})
