package xyz.kfdykme.kfmd.model

class UnObject(val content:String): MarkDownObject() {


    override fun type(): String {
        return Type.TYPE_NORMAL
    }


    override fun toString(): String {
        return "<p>$content</p>"
    }
}