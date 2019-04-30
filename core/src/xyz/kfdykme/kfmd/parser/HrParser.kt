package xyz.kfdykme.kfmd.parser

import xyz.kfdykme.kfmd.model.HrObject

class HrParser : BaseParser{
    companion object {
        const val DEFAULT_HR = "<hr>"

//        private var sInstance: HrParser? = null
//            get() {
//                if(field == null) {
//                    field = HrParser()
//                }
//
//                return field
//            }

        fun parse(source: HrObject) :String{
            return DEFAULT_HR
        }
    }


}