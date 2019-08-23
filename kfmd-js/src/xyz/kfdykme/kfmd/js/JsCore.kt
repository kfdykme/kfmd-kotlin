package xyz.kfdykme.kfmd.js

import xyz.kfdykme.kfmd.Core
import xyz.kfdykme.kfmd.parser.ListParser


class JsCore {

    var core : Core = Core()


    @JsName("trans")
    fun trans(source: String) : String {
        return core.trans(source)
    }

    @JsName("setContainorClass")
    fun setContainorClass(name: String) : JsCore {
        core =  core.setContainorClass(name)
        return this
    }

    @JsName("setContainorTag")
    fun setContainorTag(name: String) : JsCore {
        core = core.setContainorTag(name)
        return this
    }

}