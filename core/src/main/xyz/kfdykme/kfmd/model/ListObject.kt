package xyz.kfdykme.kfmd.model

import xyz.kfdykme.kfmd.parser.ListParser


class ListObject : MarkDownObject() {

    var list: MutableList<ListItem> = mutableListOf()

    fun push(grade: Int, content: String) {
        list.add(ListItem(grade,content))
    }

    override fun type(): String {
        return Type.TYPE_LIST
    }

    override fun data(): Any{
        return list
    }

    override fun toString(): String {
        return ListParser.parse(this)
    }

    class ListItem(val grade: Int, val content: String) {
        override fun toString(): String {
            return "{ 'grade': '$grade', 'content': '$content' }"
        }
    }
}