package xyz.kfdykme.kfmd

class MdRegex {

    companion object {

        val REGEX_LINE =  Regex(".*?((\r)?\n)")
        val REGEX_LIST = Regex("^( )*- .*")
        val REGEX_LIST_GRADE = Regex("- ")
        val REGEX_LIST_CONTENT = Regex("- (.*)")
        val REGEX_CODE = Regex("^```")
        val REGEX_TITLE = Regex("^#+ ")
        val REGEX_TITLE_GRADE = Regex("#")
        val REGEX_TITLE_CONTENT = Regex("^#+ (.*)")
        val REGEX_HR = Regex("^-----*(\n)")
        val REGEX_BLOCKQUOTE = Regex("^>(.*)")
        val REGEX_STRONG = Regex("(\\*\\*(.*)\\*\\*)|(__(.*)__)")

        var REGEX_EM = Regex("(\\*(.*)\\*)|(_(.*)_)")

        var REGEX_IMAGE = Regex("\\!\\[(.*?)\\]\\((.*?)\\)")

        var REGEX_HYPER_LINK = Regex("\\[(.*?)\\]\\((.*?)\\)")
    }

}