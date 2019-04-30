package xyz.kfdykme.kfmd.parser

import xyz.kfdykme.kfmd.model.TitleObject

class TitleParser: BaseParser {

    var template = DEFAULT_TEMPLATE

    companion object {
        const val GRADE_TEMPLATE = "$(grade)"
        const val CONTENT_TEMPLATE = "$(content)"
        const val DEFAULT_TEMPLATE = "<h$GRADE_TEMPLATE id=$CONTENT_TEMPLATE>$CONTENT_TEMPLATE</h$GRADE_TEMPLATE>"

        private var sInstance : TitleParser? = null
            get() {
                if (field == null) {
                    field = TitleParser()
                }

                return field
            }

        fun instance() :TitleParser {
            return sInstance!!
        }
    }

    fun parse(source: TitleObject): String {
        return instance().template.replace(GRADE_TEMPLATE, "${source.grade}").replace(CONTENT_TEMPLATE, "${source.content}")
    }
}