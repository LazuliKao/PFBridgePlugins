/// <reference path="./Utils.d.ts" />
/// <reference path="./APIs.d.ts" />

declare function importNamespace(name: "PFBridgeCore.Utils" | Namespaces.Utils): Utils
declare function importNamespace(name: "PFBridgeCore" | Namespaces.Core): PFBridgeCore
/**
 * 导入.Net命名空间
 * @param name 命名空间
 */
declare function importNamespace(name: string): any
declare const enum Namespaces {
    Core = "PFBridgeCore",
    Utils = "PFBridgeCore.Utils"
}
declare interface PFBridgeCore {
    Utils: Utils;
    APIs: PFBridgeCoreAPIs;
}