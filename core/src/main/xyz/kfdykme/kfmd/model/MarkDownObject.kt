package xyz.kfdykme.kfmd.model

open class MarkDownObject {
    open fun type():String {
        return Type.TYPE_MARKDOWN
    }

    open fun data():Any? {
        return null
    }
}