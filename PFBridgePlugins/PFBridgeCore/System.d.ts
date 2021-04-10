
/**
 * .net : System
 */
declare namespace System {
    /**
     * Provides static methods for the creation, copying, deletion, moving, and opening of a single file, and aids in the creation of System.IO.FileStream objects.
     */
    namespace IO {
        module File {
            /**
             * 
             * @param path
             */
            function ReadAllText(path: string): string
        }
    }
}
//declare const System: typeof SystemA;
