package xyz.kfdykme.kfmd.model

import xyz.kfdykme.kfmd.parser.TitleParser

class TitleObject(val grade:Int, val content: String) :MarkDownObject() {

    override fun type(): String {
        return Type.TYPE_TITLE
    }

    override fun toString(): String {
        return TitleParser.instance().parse(this)
    }
}