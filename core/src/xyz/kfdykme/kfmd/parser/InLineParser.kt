package xyz.kfdykme.kfmd.parser

class InLineParser: BaseParser{


    var strongStart = DEFAULT_STRONG_START
    var strongEnd = DEFAULT_STRONG_END
    var emStart = DEFAULT_EM_START
    var emEnd = DEFAULT_EM_END
    var templateImg = DEFAULT_TEMPLATE_IMG
    var templateA = DEFAULT_TEMPLATE_A


    companion object {

        const val DEFAULT_STRONG_START = " <strong>"
        const val DEFAULT_STRONG_END = "</strong> "
        const val DEFAULT_EM_START = " <em>"
        const val DEFAULT_EM_END  ="</em> "
        const val TEMPLATE_SRC = "$(src)"
        const val TEMPLATE_DESC = "$(desc)"
        const val DEFAULT_TEMPLATE_IMG = "<img src=\"$TEMPLATE_SRC\" alt=\"$TEMPLATE_DESC\"/> "
        const val DEFAULT_TEMPLATE_A = "<a href=\"$TEMPLATE_SRC\" > $TEMPLATE_DESC </a> "

        private var sInstance: InLineParser? = null
            get() {
                if (field == null) {
                    field = InLineParser()
                }
                return field
            }

        fun instance(): InLineParser {
            return sInstance!!
        }

        fun parseStrong(content:String) :String {
            return "${instance().strongStart}$content${instance().strongEnd}"
        }

        fun parseEm(content: String) :String {
            return "${instance().emStart}$content${instance().emEnd}"
        }

        fun parseA (href:String, desc: String) :String {
            return instance().templateA.replace(TEMPLATE_SRC,href).replace(TEMPLATE_DESC, desc)
        }

        fun parseImg (src: String, alt: String) :String {
            return instance().templateImg.replace(TEMPLATE_SRC, src).replace(TEMPLATE_DESC, alt)
        }
    }
}