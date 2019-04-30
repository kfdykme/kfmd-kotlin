package xyz.kfdykme.kfmd.js

import xyz.kfdykme.kfmd.Core
import xyz.kfdykme.kfmd.parser.ListParser


class JsCore {

    @JsName("trans")
    fun trans(source: String) : String {
        return Core().trans(source)
    }

    @JsName("ListParser")
    fun ListParser():ListParser {
        return ListParser()
    }
}