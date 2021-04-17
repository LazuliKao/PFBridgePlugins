/// <reference path="./System.d.ts" />
declare interface PFBridgeCoreAPIs {
    /**
     * 社交系统的简洁API
     */
    API: IBridgeIMBase
    Events: IBridgeEventsMap
}
declare interface IBridgeIMBase {
    /**
     * 获取插件数据目录(只读属性)
     */
    PluginDataPath: string
    /**
     * 群聊消息的转换格式
     * 用于 群聊天=>服务器 的富文本消息转换
     */
    ParseMessageFormat: IParseMessageFormat
    /**
     * 输出框架日志信息
     * @param Message 信息
     */
    Log(Message: any): void
    /**
     * 输出框架错误日志信息
     * @param Message 信息
     */
    LogErr(Message: any): void
    /**
     * 发送群消息
     * @param TargetGroup 目标群号
     * @param Message 消息内容
     */
    SendGroupMessage(TargetGroup: number, Message: string): void
    /**
     * 通过某个群向指定QQ号发送临时会话（私聊消息）
     * @param TargetGroup 群号
     * @param QQid 目标QQ
     * @param Message 消息内容
     */
    SendPrivateMessageFromGroup(TargetGroup: number, QQid: number, Message: string): void
}


declare interface IParseMessageFormat {
    At: string
    AtAll: string
    Image: string
    Emoji: string
    Face: string
    Bface: string
    Record: string
    Video: string
    Share: string
    Music: string
    Reply: string
    Forward: string
    Node: string
    Xml: string
    Json: string
    File: string
    Unknown: string
}
declare interface IBridgeEventsMap {
    /**
     * IM聊天事件
     * （如：QQ信息触发的事件）
     */
    IM: IBridgeIMEventsMap
    /**
     * MC远程事件
     * （如：mc反馈的玩家事件）
     */
    MC: IBridgeMCEventsMap
}
declare interface IEventsMapItem<T> {
    /**
     * 添加事件回调函数
     * @param callback 回调函数
     */
    Add(callback: ((eventArgs: T) => void)): void
    /**
     * 清除所有事件回调函数
     */
    Clear(): void
}
declare interface IBridgeIMEventsMap {
    /**
     * 群消息回调
     */
    OnGroupMessage: IEventsMapItem<IBridgeIMEventsOnGroupMessage>
}
declare interface IBridgeIMEventsOnGroupMessage {
    /**
     * 消息来源群号码
     */
    groupId: number
    /**
     * 消息来源群名称
     */
    groupName: string
    /**
     * 消息发送者ID（QQ号）
     */
    senderId: number
    /**
     * 消息发送者昵称
     */
    senderNick: string
    /**
     * 消息发送者群名片
     */
    memberCard: string
    /**
     * 消息发送者(群成员)类型
     */
    memberType: memberTypeEnum|number
    message: string
    messageMatch: MessageMatchCmd
    parsedMessage: string
    /*Func<string> getGroupName { get; }
    Func<string> getQQNick { get; }
    Func<string> getQQCard { get; }
    Func<int> getMemberType { get; }
    Action<string> feedback { get; }
    Func<string> getParsedMessage { get; }*/
    /**
     * 回复此消息
     * @param message 消息内容
     */
    feedback(message: string): void

}
declare const enum memberTypeEnum {
    /**
     * 未知
     */
    Unknown = 0,
    /**
     * 成员
     */
    Member = 1,
    /**
     * 管理员
     */
    Admin = 2,
    /**
     * 群主
     */
    Owner = 3
}
declare interface MessageMatchCmd {
    getCommands(start: string[]): System.Collections.Generic.List<string>
}
declare interface IBridgeMCEventsMap {

}

declare interface IBridgeMCBase {
    Id: number
    Tag: any
    State: boolean
    RunCmdCallback(cmd: string, callback: ((result: string) => void)): void
    RunCmd(cmd: string): void
    CheckConnect(): void
}