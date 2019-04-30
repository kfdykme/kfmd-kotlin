package xyz.kfdykme.kfmd.parser

import xyz.kfdykme.kfmd.model.CodeObject

class CodeParser: BaseParser {

    var start = DEFAULT_CODE_START
    var end = DEFAULT_CODE_END

    private constructor()

    companion object {
        const val DEFAULT_CODE_START = "<code><div>"
        const val DEFAULT_CODE_END = "</div></code>"

        private var sInstance: CodeParser? = null
            get() {
                if (field == null) {
                    field = CodeParser()
                }
                return field
            }

        fun instance(): CodeParser { return sInstance!!}

        fun parse(source: CodeObject): String{

            return "${instance().start}${source.content}${instance().end}"
        }
    }
}