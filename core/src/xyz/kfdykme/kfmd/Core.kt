package xyz.kfdykme.kfmd

import xyz.kfdykme.kfmd.model.*
import xyz.kfdykme.kfmd.parser.InLineParser


open class Core {



    fun trans(source: String): String {
        var res = transObjects(source)
        res = transMultLine(res)
        res = transSingleLine(res)
        return transInLine(res.joinToString(""))
    }


    /**
     * @method transInline 弃用
     */
    private fun transInLine(source: MutableList<MarkDownObject>) :MutableList<MarkDownObject> {
        return mutableListOf()
    }

    /**
     * @method transInline
     * @param source {String} 输入字符串
     * @return 将行内md标签进行处理后返回
     */
    private fun transInLine(source: String) : String {

        return  source.replace(MdRegex.REGEX_STRONG, transform = {
            var content = if (it.groupValues[1] != "" ) it.groupValues[2] else it.groupValues[4]
            return@replace InLineParser.parseStrong(content)
        }).replace(MdRegex.REGEX_EM, transform = {
            var content = if (it.groupValues[1] != "" ) it.groupValues[2] else it.groupValues[4]
            return@replace InLineParser.parseEm(content)
        }).replace(MdRegex.REGEX_IMAGE, transform = {
            var href = it.groupValues[2]
            var desc = it.groupValues[1]
            return@replace InLineParser.parseImg(href,desc)
        }).replace(MdRegex.REGEX_HYPER_LINK, transform = {
            var href = it.groupValues[2]
            var desc = it.groupValues[1]
            return@replace InLineParser.parseA(href,desc)
        })
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
                var result = MdRegex.REGEX_BLOCKQUOTE.find(src)

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
                var result = MdRegex.REGEX_HR.find(src)
                if (result != null) {
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
                var result = MdRegex.REGEX_TITLE.find(src)

                if (result != null) {
                    var grade = MdRegex.REGEX_TITLE_GRADE.findAll(src).count()
                    var content = MdRegex.REGEX_TITLE_CONTENT.find(src)!!.groupValues[1]

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
                if (MdRegex.REGEX_CODE.find((it as UnObject).content) != null) {
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
        MdRegex.REGEX_LINE
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
            var result = MdRegex.REGEX_LIST.find((it as UnObject).content)

            unObject = it
            if (result != null) {
                var grade = indexOfReg(MdRegex.REGEX_LIST_GRADE, result)
                var content = MdRegex.REGEX_LIST_CONTENT.find(result.value)!!.groupValues[1]

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