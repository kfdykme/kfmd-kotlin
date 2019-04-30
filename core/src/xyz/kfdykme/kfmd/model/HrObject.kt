package xyz.kfdykme.kfmd.model

import xyz.kfdykme.kfmd.parser.HrParser


class HrObject: MarkDownObject() {
    override fun type(): String {
        return Type.TYPE_HR
    }

    override fun toString(): String {
        return HrParser.parse(this)
    }
}