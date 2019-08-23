package xyz.kfdykme.kfmd.parser

import xyz.kfdykme.kfmd.model.BlockquoteObject

class BlockquoteParser : BaseParser {

    var start = DEFAULT_BQ_START
    var end = DEFAULT_BQ_END

    constructor()

    companion object {
        const val DEFAULT_BQ_START = "<blockquote><p>"
        const val DEFAULT_BQ_END = "</p></blockquote>"

        private var sInstance: BlockquoteParser? = null
            get (){
                if (field == null)
                    field = BlockquoteParser()
                return field
            }


        fun instance() :BlockquoteParser {
            return sInstance!!
        }

        fun parse(source: BlockquoteObject) :String {
            return "${instance().start} ${source.content} ${instance().end}"
        }
    }
}