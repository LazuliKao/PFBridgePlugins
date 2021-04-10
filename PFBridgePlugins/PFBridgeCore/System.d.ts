
/**
 * .net : System
 */
declare namespace System {
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
}
//declare const System: typeof SystemA;
