package xyz.kfdykme.kfmd.model.inline

import xyz.kfdykme.kfmd.model.MarkDownObject
import xyz.kfdykme.kfmd.model.Type

class StrongObject<T:MarkDownObject>: InlineTransObject(){

    override fun type(): String {
        return Type.TYPE_STRONG
    }


    override fun toString(): String {
        return ""
    }
}