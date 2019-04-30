package xyz.kfdykme.kfmd

import xyz.kfdykme.kfmd.model.*


open class Core {


    companion object {

        val REGEX_LINE =  Regex(".*?((\r)?\n)")
        var REGEX_LIST = Regex("^( )*- .*")
        var REGEX_LIST_GRADE = Regex("- ")
        var REGEX_LIST_CONTENT = Regex("- (.*)")
        var REGEX_CODE = Regex("^```")
        var REGEX_TITLE = Regex("^#+ ")
        var REGEX_TITLE_GRADE = Regex("#")
        var REGEX_TITLE_CONTENT = Regex("^#+ (.*)")
        var REGEX_HR = Regex("^-----*(\n)")
        var REGEX_BLOCKQUOTE = Regex("^>(.*)")
    }


    fun trans(source: String): String {
        var out = ""

        var res = transObjects(source)
        res = transMultLine(res)
        res = transSingleLine(res)
        return res.joinToString("")
    }


    private fun transSingleLine(source: MutableList<MarkDownObject>) :MutableList<MarkDownObject> {
        var out = source

        out = transTitle(out)
        out = transHr(out)
        out = transBlockquote(out)
        return out

    }

    private fun transBlockquote(source: MutableList<MarkDownObject>): MutableList<MarkDownObject> {

        return source.map {
            if (it.type().equals(Type.TYPE_NORMAL)) {
                it as UnObject
                var src = it.content
                var result = REGEX_BLOCKQUOTE.find(src)

                if (result != null) {
                    BlockquoteObject(result.groupValues[1])
                } else {
                    it
                }
            } else {
                it
            }

        } as MutableList<MarkDownObject>
    }

    private fun transHr(source: MutableList<MarkDownObject>):MutableList<MarkDownObject> {
        var list = source

        return list.map {
            if (it.type().equals(Type.TYPE_NORMAL)) {
                it as UnObject
                var src  =it.content
                var result = REGEX_HR.find(src)
                if (result != null) {
                    println(result.value)
                    HrObject()
                } else {
                    it
                }
            } else {
                it
            }
        } as MutableList
    }

    private fun transTitle(source: MutableList<MarkDownObject>): MutableList<MarkDownObject> {

        var list = source


        list = list.map {
            if (it.type().equals(Type.TYPE_NORMAL)) {
                it as UnObject
                var src = it.content
                var result = REGEX_TITLE.find(src)

                if (result != null) {
                    var grade = REGEX_TITLE_GRADE.findAll(src).count()
                    var content = REGEX_TITLE_CONTENT.find(src)!!.groupValues[1]

                    TitleObject(grade, content)

                } else {

                    it
                }

            } else {

                it
            }
        } as MutableList

        return list
    }


    private fun transMultLine(source: MutableList<MarkDownObject>): MutableList<MarkDownObject>{

        var res = transList(source)
        res = transCode(res)

        return res
    }

    private fun transCode(source: MutableList<MarkDownObject>): MutableList<MarkDownObject> {
        var code = false
        var res = mutableListOf<MarkDownObject>()
        var content = mutableListOf<String>()
        source.map {
            if (it.type().equals(Type.TYPE_NORMAL)) {
                if (REGEX_CODE.find((it as UnObject).content) != null) {
                    code = !code


                } else {

                    if (code) {
                        // start a code
                        content.add(it.content)
                    } else {
                        // end a code
                        if (content.size != 0) {

                            res.add(CodeObject(content.joinToString("")))
                            content = mutableListOf()
                        } else {
                            res.add(it)
                        }
                    }
                }

            } else {
                code = false
                res.add(it)
            }
        }

        return res
    }



    private fun transObjects(source: String) :MutableList<MarkDownObject> {
        var list = mutableListOf<MarkDownObject>()
        REGEX_LINE
                .findAll(source)
                .forEach {
                    list.add(UnObject(it.value))
                }
        return list
    }


    private fun transList(source: MutableList<MarkDownObject>): MutableList<MarkDownObject> {
        var res = mutableListOf<MarkDownObject>()
        var lastType: String = Type.TYPE_NORMAL
        var listObject = ListObject()
        var unObject :UnObject

        source.map {
            var result = REGEX_LIST.find((it as UnObject).content)

            unObject = it
            if (result != null) {
                var grade = indexOfReg(REGEX_LIST_GRADE, result)
                var content = REGEX_LIST_CONTENT.find(result.value)!!.groupValues[1]

                listObject.push(grade, content)

                lastType = Type.TYPE_LIST
            } else {
                if (lastType == Type.TYPE_LIST) {
                    res.add(listObject)
                    listObject = ListObject()
                } else if (lastType == Type.TYPE_NORMAL){
                }
                res.add(unObject)

                lastType = Type.TYPE_NORMAL
            }
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