import xyz.kfdykme.kfmd.Core
import java.io.File

var testFilePath = "/home/chenxiaofang/wor/new/kfmd-kotlin/test/src/test.md"
var outFilePath = "/home/chenxiaofang/wor/new/kfmd-kotlin/test/out/test.html"

fun main() {
    var testFile = File(testFilePath)
    var c = Core()
    var outFile = File(outFilePath)
    if (!outFile.exists())
        outFile.createNewFile()

    outFile.writeText(
            c.trans(testFile.readText())
    )
}