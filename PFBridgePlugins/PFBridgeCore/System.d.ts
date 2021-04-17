
/**
 * .net : System
 */
declare namespace System {
    class Byte {
        constructor()
        constructor(size: number)
    }
    /**
     * Contains types that allow reading and writing to files and data streams, and types that provide basic file and directory support.
     * 包含允许读写文件和数据流的类型以及提供基本文件和目录支持的类型。
     */
    namespace IO {
        /**
         * Provides static methods for the creation, copying, deletion, moving, and opening of a single file, and aids in the creation of System.IO.FileStream objects.
         * 提供用于创建、复制、删除、移动和打开单一文件的静态方法，并协助创建 FileStream 对象。
         */
        module File {
            /**
             * Opens a text file, reads all the text in the file, and then closes the file.
             * 打开一个文本文件，读取文件中的所有文本，然后关闭此文件。
             * @param path The file to open for reading.
             * 要打开以进行读取的文件。
             */
            function ReadAllText(path: string): string
            /**
             * Opens a text file, reads all the text in the file, and then closes the file.
             * 打开一个文本文件，读取文件中的所有文本，然后关闭此文件。
             * @param path The file to open for reading.
             * 要打开以进行读取的文件。
             * @param encoding The encoding applied to the contents of the file.
             * 应用到文件内容的编码。
             */
            function ReadAllText(path: string, encoding: Text.Encoding): string
            /**
             * Creates a new file, writes the specified string to the file using the specified encoding, and then closes the file. If the target file already exists, it is overwritten.
             * 创建一个新文件，使用指定编码向其中写入指定的字符串，然后关闭文件。 如果目标文件已存在，则覆盖该文件。
             * @param path The file to write to.
             * 要打开以进行读取的文件。
             * @param contents The string to write to the file.
             * 要写入文件的字符串。
             */
            function WriteAllText(path: string, contents: string): string
            /**
             * Creates a new file, writes the specified string to the file using the specified encoding, and then closes the file. If the target file already exists, it is overwritten.
             * 创建一个新文件，使用指定编码向其中写入指定的字符串，然后关闭文件。 如果目标文件已存在，则覆盖该文件。
             * @param path The file to write to.
             * 要打开以进行读取的文件。
             * @param contents The string to write to the file.
             * 要写入文件的字符串。
             * @param encoding The encoding to apply to the string.
             * 应用于字符串的编码。
             */
            function WriteAllText(path: string, contents: string, encoding: Text.Encoding): string
        }
    }
    /**
     * Contains classes that represent ASCII and Unicode character encodings; abstract base classes for converting blocks of characters to and from blocks of bytes; and a helper class that manipulates and formats String objects without creating intermediate instances of String.
     * 包含表示 ASCII 和 Unicode 字符编码的类；用于字符块和字节块相互转换的抽象基类；以及无需创建 String 的中间实例即可操作 String 对象并设置其格式的帮助程序类。
     */
    namespace Text {
        abstract class Encoding {
            static ASCII: Encoding
            static Unicode: Encoding
            static UTF32: Encoding
            static UTF7: Encoding
            static UTF8: Encoding
            static Default: Encoding
            static BigEndianUnicode: Encoding
        }
        //    class ASCIIEncoding extends Encoding { }
        //    class UnicodeEncoding extends Encoding { }
        //    class UTF32Encoding extends Encoding { }
        //    class UTF7Encoding extends Encoding { }
        //    class UTF8Encoding extends Encoding { }
    }

    module Convert {
        function FromBase64String(s: string): Byte[]
        function ToBase64String(inArray: Byte[]): string
    }
    namespace Net.Sockets {
        //#region Enum
        const    enum SocketType {
            //
            // 摘要:
            //     指定未知的 System.Net.Sockets.Socket 类型。
            Unknown = -1,
            //
            // 摘要:
            //     支持可靠、双向、基于连接的字节流，而不重复数据，也不保留边界。 此类型的 System.Net.Sockets.Socket 与单个对方主机通信，并且在通信开始之前需要建立远程主机连接。
            //     System.Net.Sockets.SocketType.Stream 使用传输控制协议 (ProtocolType.System.Net.Sockets.ProtocolType.Tcp)
            //     和 AddressFamily。System.Net.Sockets.AddressFamily.InterNetwork 地址族。
            Stream = 1,
            //
            // 摘要:
            //     支持数据报，即最大长度固定（通常很小）的无连接、不可靠消息。 消息可能会丢失或重复并可能在到达时不按顺序排列。 System.Net.Sockets.Socket
            //     类型的 System.Net.Sockets.SocketType.Dgram 在发送和接收数据之前不需要任何连接，并且可以与多个对方主机进行通信。 System.Net.Sockets.SocketType.Dgram
            //     使用数据报协议 (ProtocolType.System.Net.Sockets.ProtocolType.Udp) 和 AddressFamily.System.Net.Sockets.AddressFamily.InterNetwork
            //     地址族。
            Dgram = 2,
            //
            // 摘要:
            //     支持对基础传输协议的访问。 通过使用 System.Net.Sockets.SocketType.Raw，可以使用 Internet 控制消息协议 (ProtocolType.System.Net.Sockets.ProtocolType.Icmp)
            //     和 Internet 组管理协议 (ProtocolType.System.Net.Sockets.ProtocolType.Igmp) 这样的协议来进行通信。
            //     在发送时，您的应用程序必须提供完整的 IP 标头。 所接收的数据报在返回时会保持其 IP 标头和选项不变。
            Raw = 3,
            //
            // 摘要:
            //     支持无连接、面向消息、以可靠方式发送的消息，并保留数据中的消息边界。 RDM（以可靠方式发送的消息）消息会依次到达，不会重复。 此外，如果消息丢失，将会通知发送方。
            //     如果使用 System.Net.Sockets.SocketType.Rdm 初始化 System.Net.Sockets.Socket，则在发送和接收数据之前无需建立远程主机连接。
            //     利用 System.Net.Sockets.SocketType.Rdm，您可以与多个对方主机进行通信。
            Rdm = 4,
            //
            // 摘要:
            //     在网络上提供排序字节流的面向连接且可靠的双向传输。 System.Net.Sockets.SocketType.Seqpacket 不重复数据，它在数据流中保留边界。
            //     System.Net.Sockets.SocketType.Seqpacket 类型的 System.Net.Sockets.Socket 与单个对方主机通信，并且在通信开始之前需要建立远程主机连接。
            Seqpacket = 5
        }
        const    enum ProtocolType {
            //
            // 摘要:
            //     未知的协议。
            Unknown = -1,
            //
            // 摘要:
            //     Internet 协议。
            IP = 0,
            //
            // 摘要:
            //     IPv6 逐跳选项标头。
            IPv6HopByHopOptions = 0,
            //
            // 摘要:
            //     未指定的协议。
            Unspecified = 0,
            //
            // 摘要:
            //     Internet 控制消息协议。
            Icmp = 1,
            //
            // 摘要:
            //     Internet 组管理协议。
            Igmp = 2,
            //
            // 摘要:
            //     网关到网关协议。
            Ggp = 3,
            //
            // 摘要:
            //     Internet 协议版本 4。
            IPv4 = 4,
            //
            // 摘要:
            //     传输控制协议。
            Tcp = 6,
            //
            // 摘要:
            //     PARC 通用数据包协议。
            Pup = 12,
            //
            // 摘要:
            //     用户数据报协议。
            Udp = 17,
            //
            // 摘要:
            //     Internet 数据报协议。
            Idp = 22,
            //
            // 摘要:
            //     Internet 协议版本 6 (IPv6)。
            IPv6 = 41,
            //
            // 摘要:
            //     IPv6 路由标头。
            IPv6RoutingHeader = 43,
            //
            // 摘要:
            //     IPv6 片段标头。
            IPv6FragmentHeader = 44,
            //
            // 摘要:
            //     IPv6 封装安全负载标头。
            IPSecEncapsulatingSecurityPayload = 50,
            //
            // 摘要:
            //     IPv6 身份验证标头。 有关详细信息，请参阅 https://www.ietf.org 上的 RFC 2292，第 2.2.1 节。
            IPSecAuthenticationHeader = 51,
            //
            // 摘要:
            //     IPv6 的 Internet 控制消息协议。
            IcmpV6 = 58,
            //
            // 摘要:
            //     IPv6 无下一个标头。
            IPv6NoNextHeader = 59,
            //
            // 摘要:
            //     IPv6 目标选项标头。
            IPv6DestinationOptions = 60,
            //
            // 摘要:
            //     网络磁盘协议（非正式）。
            ND = 77,
            //
            // 摘要:
            //     原始 IP 数据包协议。
            Raw = 255,
            //
            // 摘要:
            //     Internet 数据包交换协议。
            Ipx = 1000,
            //
            // 摘要:
            //     顺序包交换协议。
            Spx = 1256,
            //
            // 摘要:
            //     顺序包交换版本 2 协议。
            SpxII = 1257
        }
        const      enum AddressFamily {
            //
            // 摘要:
            //     未知的地址族。
            Unknown = -1,
            //
            // 摘要:
            //     未指定的地址族。
            Unspecified = 0,
            //
            // 摘要:
            //     Unix 本地到主机地址。
            Unix = 1,
            //
            // 摘要:
            //     IP 版本 4 的地址。
            InterNetwork = 2,
            //
            // 摘要:
            //     ARPANET IMP 地址。
            ImpLink = 3,
            //
            // 摘要:
            //     PUP 协议的地址。
            Pup = 4,
            //
            // 摘要:
            //     MIT CHAOS 协议的地址。
            Chaos = 5,
            //
            // 摘要:
            //     Xerox NS 协议的地址。
            NS = 6,
            //
            // 摘要:
            //     IPX 或 SPX 地址。
            Ipx = 6,
            //
            // 摘要:
            //     ISO 协议的地址。
            Iso = 7,
            //
            // 摘要:
            //     OSI 协议的地址。
            Osi = 7,
            //
            // 摘要:
            //     欧洲计算机制造商协会 (ECMA) 地址。
            Ecma = 8,
            //
            // 摘要:
            //     Datakit 协议的地址。
            DataKit = 9,
            //
            // 摘要:
            //     CCITT 协议（如 X.25）的地址。
            Ccitt = 10,
            //
            // 摘要:
            //     IBM SNA 地址。
            Sna = 11,
            //
            // 摘要:
            //     DECnet 地址。
            DecNet = 12,
            //
            // 摘要:
            //     直接数据链接接口地址。
            DataLink = 13,
            //
            // 摘要:
            //     LAT 地址。
            Lat = 14,
            //
            // 摘要:
            //     NSC Hyperchannel 地址。
            HyperChannel = 15,
            //
            // 摘要:
            //     AppleTalk 地址。
            AppleTalk = 16,
            //
            // 摘要:
            //     NetBios 地址。
            NetBios = 17,
            //
            // 摘要:
            //     VoiceView 地址。
            VoiceView = 18,
            //
            // 摘要:
            //     FireFox 地址。
            FireFox = 19,
            //
            // 摘要:
            //     Banyan 地址。
            Banyan = 21,
            //
            // 摘要:
            //     本机 ATM 服务地址。
            Atm = 22,
            //
            // 摘要:
            //     IP 版本 6 的地址。
            InterNetworkV6 = 23,
            //
            // 摘要:
            //     Microsoft 群集产品的地址。
            Cluster = 24,
            //
            // 摘要:
            //     IEEE 1284.4 工作组地址。
            Ieee12844 = 25,
            //
            // 摘要:
            //     IrDA 地址。
            Irda = 26,
            //
            // 摘要:
            //     支持网络设计器 OSI 网关的协议的地址。
            NetworkDesigners = 28,
            //
            // 摘要:
            //     MAX 地址。
            Max = 29
        }
        //#endregion
    }
    class Type {
        static GetType(name: string): any
    }
    class Enum {
        static ToObject<T>(t: Type, value: number): T
        static Parse<T>(t: Type, name: string): T
    }
    namespace Collections {
        namespace Generic {
            class List<T> {
                [index: number]: T
                constructor()
                constructor(x: any)
                public get Count(): number
                Contains(item: T): boolean
                IndexOf(item: T, index: number): number
                IndexOf(item: T, index: number, count: number): number
            }
        }
    }
}
//declare const System: typeof SystemA;
