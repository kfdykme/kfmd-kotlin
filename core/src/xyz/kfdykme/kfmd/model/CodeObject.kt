package xyz.kfdykme.kfmd.model

import xyz.kfdykme.kfmd.parser.CodeParser

class CodeObject(val content: String): MarkDownObject() {



    override fun type(): String {
        return Type.TYPE_CODE
    }

    override fun data(): Any? {
        return content
    }

    override fun toString(): String {
        return CodeParser.parse(this)
    }
}