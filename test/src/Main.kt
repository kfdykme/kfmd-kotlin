import xyz.kfdykme.kfmd.Core
import java.io.File

/**
 * Created by chenxiaofang on 2019-08-23
 */

/**
 * 测试jar包， 需要编译完jar包后手动引入依赖然后运行
 */

fun main() {
    var file = File("./")
    print(file.absolutePath)
    var core = Core()
    var html = core.setContainorClass("kfmd-containor")
            .trans(File("./node-publish/test/test.md").readText())
    print(html)
}