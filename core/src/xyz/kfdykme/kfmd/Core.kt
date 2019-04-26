package xyz.kfdykme.kfmd

import xyz.kfdykme.kfmd.model.ListObject

fun main() {

}

open class Core {

    val REGEX_LINE =  Regex(".*?((\r)?\n)")
    var REGEX_LIST = Regex("^( )*- .*")
    var REGEX_LIST_GRADE = Regex("- ")
    var REGEX_LIST_CONTENT = Regex("- (.*)")

    open fun transMultLine(source: String): String {


        var res = transList(source)
        println(res)
        var out = parseString(res)


        return out
    }


    private fun parseString(list: List<String>) :String {
        var out = ""
        list.forEach {
            out = "$out$it"
        }
        return out
    }

    private fun transList(source: String): List<String> {
        var list = mutableListOf<Int>()
        var stack = mutableListOf<Int>()
        var res = mutableListOf<String>()

        REGEX_LINE
            .findAll(source)
            .forEach {
                var result = REGEX_LIST.find(it.value)

                var out = it.value


                if (result != null) {
                    var grade = indexOfReg(REGEX_LIST_GRADE, result)
                    var content = REGEX_LIST_CONTENT.find(result.value)!!.groupValues[1]
                    var last = if(list.size != 0)  list.last() else null

                    var currentList = ListObject()

                    when {
                        last == null -> {
                            out = "<ul><li>$content</li>"

                            stack.add(grade)
                        }
                        last == grade -> {
                            out = "<li>$content</li>"
                        }
                        last < grade -> {
                            out = "<ul><li>$content</li>"
                            stack.add(grade)
                        }
                        last > grade -> {
                            var arr= mutableListOf<Int>()
                            list.forEach {
                                if (it <= last && it >= grade && arr.indexOf(it) == -1) {
                                    arr.add(it)
                                }
                            }
                            out = "<li>$content</li>"

                            for ( x in 1..(arr.size-1)) {
                                out = "</ul>$out"
                            }

                            stack.removeAt(stack.size-1)
                        }
                    }
                    list.add(grade)
                } else {
                    while (!stack.isEmpty()) {
                        out = "</ul>$out"
                        stack.removeAt(stack.size-1)
                    }

                    stack = mutableListOf()
                    list = mutableListOf()
                }
                res.add(out)
            }

        return res
    }

    /**
     * ＠method indexOfReg 确保 reg 与 result之间的关系
     */
    private fun indexOfReg(reg: Regex, result: MatchResult) :Int{
        return result.value.indexOf(reg.find(result.value)!!.value)
    }

}