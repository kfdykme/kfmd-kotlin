package xyz.kfdykme.kfmd.parser

import xyz.kfdykme.kfmd.model.ListObject

class ListParser :BaseParser {

    var listStart = DEFAULT_LIST_START
    var listEnd = DEFAULT_LIST_END
    var listItemStart = DEFAULT_LIST_ITEM_START
    var listItemEnd = DEFAULT_LIST_ITEM_END

    private constructor()

    companion object {
        const val DEFAULT_LIST_START = "<ul>"
        const val DEFAULT_LIST_END = "</ul>"
        const val DEFAULT_LIST_ITEM_START = "<li>"
        const val DEFAULT_LIST_ITEM_END = "</li>\n"

        private var sInstance : ListParser? = null
            get() {
                if (field == null) {
                    field= ListParser()
                }

                return field
            }

        fun instance (): ListParser {
            return sInstance!!
        }

        fun parse (source: ListObject): String {

            var list = mutableListOf<Int>()
            var stack = mutableListOf<Int>()
            var out = ""


            (source.data() as MutableList<ListObject.ListItem>).map {
                var last = if(list.size != 0)  list.last() else null
                when {
                    last == null -> {
                        out = "${instance().listStart}${instance().listItemStart}${it.content}${instance().listItemEnd}"

                        stack.add(it.grade)
                    }

                    last == it.grade -> {
                        out += "${instance().listItemStart}${it.content}${instance().listItemEnd}"
                    }

                    last < it.grade -> {
                        out += "${instance().listStart}${instance().listItemStart}${it.content}${instance().listItemEnd}"
                        stack.add(it.grade)
                    }

                    last > it.grade -> {
                        var arr= mutableListOf<Int>()
                        var grade = it.grade
                        list.forEach {
                            if (it <= last && it >= grade && arr.indexOf(it) == -1) {
                                arr.add(it)
                            }
                        }
                        for ( x in 1..(arr.size-1)) {
                            out = "$out${instance().listEnd}"
                        }

                        out += "${instance().listItemStart}${it.content}${instance().listItemEnd}"


                        stack.removeAt(stack.size-1)
                    }
                }

                list.add(it.grade)
            }
            while (!stack.isEmpty()) {
                out = "$out${instance().listEnd}"
                stack.removeAt(stack.size-1)
            }

            stack = mutableListOf()
            list = mutableListOf()
            return out
        }


    }
}