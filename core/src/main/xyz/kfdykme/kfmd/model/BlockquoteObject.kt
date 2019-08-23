package xyz.kfdykme.kfmd.model

import xyz.kfdykme.kfmd.parser.BlockquoteParser

class BlockquoteObject(val content: String) : MarkDownObject() {
    override fun type(): String {
        return Type.TYPE_BLOCKQUOTE
    }

    override fun toString(): String {
        return BlockquoteParser.parse(this)
    }
}