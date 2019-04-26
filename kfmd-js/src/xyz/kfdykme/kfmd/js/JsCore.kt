package xyz.kfdykme.kfmd.js

import xyz.kfdykme.kfmd.Core


class JsCore {

    @JsName("transMultLine")
    fun transMultLine(source: String) : String {
        return Core().transMultLine(source)
    }
}