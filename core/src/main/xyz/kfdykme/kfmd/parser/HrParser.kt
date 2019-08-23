package xyz.kfdykme.kfmd.parser

import xyz.kfdykme.kfmd.model.HrObject

class HrParser : BaseParser{
    companion object {
        const val DEFAULT_HR = "<hr>"

/**
 * 暂时不需要用这个单例，所以注释掉了
 */
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