(function (_, Kotlin) {
  'use strict';
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var equals = Kotlin.equals;
  var throwCCE = Kotlin.throwCCE;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var count = Kotlin.kotlin.sequences.count_veqyi0$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  BlockquoteObject.prototype = Object.create(MarkDownObject.prototype);
  BlockquoteObject.prototype.constructor = BlockquoteObject;
  CodeObject.prototype = Object.create(MarkDownObject.prototype);
  CodeObject.prototype.constructor = CodeObject;
  HrObject.prototype = Object.create(MarkDownObject.prototype);
  HrObject.prototype.constructor = HrObject;
  ListObject.prototype = Object.create(MarkDownObject.prototype);
  ListObject.prototype.constructor = ListObject;
  TitleObject.prototype = Object.create(MarkDownObject.prototype);
  TitleObject.prototype.constructor = TitleObject;
  UnObject.prototype = Object.create(MarkDownObject.prototype);
  UnObject.prototype.constructor = UnObject;
  InlineTransObject.prototype = Object.create(MarkDownObject.prototype);
  InlineTransObject.prototype.constructor = InlineTransObject;
  StrongObject.prototype = Object.create(InlineTransObject.prototype);
  StrongObject.prototype.constructor = StrongObject;
  function Core() {
  }
  Core.prototype.trans_61zpoe$ = function (source) {
    var res = this.transObjects_qjosur$_0(source);
    res = this.transMultLine_lb8eyc$_0(res);
    res = this.transSingleLine_kbv4f8$_0(res);
    return this.transInLine_h3ypr2$_0(joinToString(res, ''));
  };
  Core.prototype.transInLine_si6qm9$_0 = function (source) {
    return ArrayList_init();
  };
  Core.prototype.transInLine_h3ypr2$_0 = function (source) {
    var regex = MdRegex$Companion_getInstance().REGEX_STRONG;
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = regex.find_905azu$(source);
      if (match == null) {
        replace_20wsma$result = source.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = source.length;
      var sb = StringBuilder_init(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$(source, lastStart, foundMatch.range.start);
        var tmp$ = sb.append_gw00v9$;
        var content = !equals(foundMatch.groupValues.get_za3lpa$(1), '') ? foundMatch.groupValues.get_za3lpa$(2) : foundMatch.groupValues.get_za3lpa$(4);
        tmp$.call(sb, InLineParser$Companion_getInstance().parseStrong_61zpoe$(content));
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$(source, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    var $receiver = replace_20wsma$result;
    var regex_0 = MdRegex$Companion_getInstance().REGEX_EM;
    var replace_20wsma$result_0;
    replace_20wsma$break: do {
      var match_0 = regex_0.find_905azu$($receiver);
      if (match_0 == null) {
        replace_20wsma$result_0 = $receiver.toString();
        break replace_20wsma$break;
      }
      var lastStart_0 = 0;
      var length_0 = $receiver.length;
      var sb_0 = StringBuilder_init(length_0);
      do {
        var foundMatch_0 = ensureNotNull(match_0);
        sb_0.append_ezbsdh$($receiver, lastStart_0, foundMatch_0.range.start);
        var tmp$_0 = sb_0.append_gw00v9$;
        var content_0 = !equals(foundMatch_0.groupValues.get_za3lpa$(1), '') ? foundMatch_0.groupValues.get_za3lpa$(2) : foundMatch_0.groupValues.get_za3lpa$(4);
        tmp$_0.call(sb_0, InLineParser$Companion_getInstance().parseEm_61zpoe$(content_0));
        lastStart_0 = foundMatch_0.range.endInclusive + 1 | 0;
        match_0 = foundMatch_0.next();
      }
       while (lastStart_0 < length_0 && match_0 != null);
      if (lastStart_0 < length_0) {
        sb_0.append_ezbsdh$($receiver, lastStart_0, length_0);
      }
      replace_20wsma$result_0 = sb_0.toString();
    }
     while (false);
    var $receiver_0 = replace_20wsma$result_0;
    var regex_1 = MdRegex$Companion_getInstance().REGEX_IMAGE;
    var replace_20wsma$result_1;
    replace_20wsma$break: do {
      var match_1 = regex_1.find_905azu$($receiver_0);
      if (match_1 == null) {
        replace_20wsma$result_1 = $receiver_0.toString();
        break replace_20wsma$break;
      }
      var lastStart_1 = 0;
      var length_1 = $receiver_0.length;
      var sb_1 = StringBuilder_init(length_1);
      do {
        var foundMatch_1 = ensureNotNull(match_1);
        sb_1.append_ezbsdh$($receiver_0, lastStart_1, foundMatch_1.range.start);
        var tmp$_1 = sb_1.append_gw00v9$;
        var href = foundMatch_1.groupValues.get_za3lpa$(2);
        var desc = foundMatch_1.groupValues.get_za3lpa$(1);
        tmp$_1.call(sb_1, InLineParser$Companion_getInstance().parseImg_puj7f4$(href, desc));
        lastStart_1 = foundMatch_1.range.endInclusive + 1 | 0;
        match_1 = foundMatch_1.next();
      }
       while (lastStart_1 < length_1 && match_1 != null);
      if (lastStart_1 < length_1) {
        sb_1.append_ezbsdh$($receiver_0, lastStart_1, length_1);
      }
      replace_20wsma$result_1 = sb_1.toString();
    }
     while (false);
    var $receiver_1 = replace_20wsma$result_1;
    var regex_2 = MdRegex$Companion_getInstance().REGEX_HYPER_LINK;
    var replace_20wsma$result_2;
    replace_20wsma$break: do {
      var match_2 = regex_2.find_905azu$($receiver_1);
      if (match_2 == null) {
        replace_20wsma$result_2 = $receiver_1.toString();
        break replace_20wsma$break;
      }
      var lastStart_2 = 0;
      var length_2 = $receiver_1.length;
      var sb_2 = StringBuilder_init(length_2);
      do {
        var foundMatch_2 = ensureNotNull(match_2);
        sb_2.append_ezbsdh$($receiver_1, lastStart_2, foundMatch_2.range.start);
        var tmp$_2 = sb_2.append_gw00v9$;
        var href_0 = foundMatch_2.groupValues.get_za3lpa$(2);
        var desc_0 = foundMatch_2.groupValues.get_za3lpa$(1);
        tmp$_2.call(sb_2, InLineParser$Companion_getInstance().parseA_puj7f4$(href_0, desc_0));
        lastStart_2 = foundMatch_2.range.endInclusive + 1 | 0;
        match_2 = foundMatch_2.next();
      }
       while (lastStart_2 < length_2 && match_2 != null);
      if (lastStart_2 < length_2) {
        sb_2.append_ezbsdh$($receiver_1, lastStart_2, length_2);
      }
      replace_20wsma$result_2 = sb_2.toString();
    }
     while (false);
    return replace_20wsma$result_2;
  };
  Core.prototype.transSingleLine_kbv4f8$_0 = function (source) {
    var out = source;
    out = this.transTitle_8tsiq2$_0(out);
    out = this.transHr_7au442$_0(out);
    out = this.transBlockquote_brwz8p$_0(out);
    return out;
  };
  Core.prototype.transBlockquote_brwz8p$_0 = function (source) {
    var tmp$;
    var destination = ArrayList_init_0(collectionSizeOrDefault(source, 10));
    var tmp$_0;
    tmp$_0 = source.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var transform$result;
      var tmp$_2;
      if (equals(item.type(), Type$Companion_getInstance().TYPE_NORMAL)) {
        Kotlin.isType(tmp$_2 = item, UnObject) ? tmp$_2 : throwCCE();
        var src = item.content;
        var result = MdRegex$Companion_getInstance().REGEX_BLOCKQUOTE.find_905azu$(src);
        if (result != null) {
          transform$result = new BlockquoteObject(result.groupValues.get_za3lpa$(1));
        }
         else {
          transform$result = item;
        }
      }
       else {
        transform$result = item;
      }
      tmp$_1.call(destination, transform$result);
    }
    return Kotlin.isType(tmp$ = destination, MutableList) ? tmp$ : throwCCE();
  };
  Core.prototype.transHr_7au442$_0 = function (source) {
    var tmp$;
    var list = source;
    var destination = ArrayList_init_0(collectionSizeOrDefault(list, 10));
    var tmp$_0;
    tmp$_0 = list.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var transform$result;
      var tmp$_2;
      if (equals(item.type(), Type$Companion_getInstance().TYPE_NORMAL)) {
        Kotlin.isType(tmp$_2 = item, UnObject) ? tmp$_2 : throwCCE();
        var src = item.content;
        var result = MdRegex$Companion_getInstance().REGEX_HR.find_905azu$(src);
        if (result != null) {
          transform$result = new HrObject();
        }
         else {
          transform$result = item;
        }
      }
       else {
        transform$result = item;
      }
      tmp$_1.call(destination, transform$result);
    }
    return Kotlin.isType(tmp$ = destination, MutableList) ? tmp$ : throwCCE();
  };
  Core.prototype.transTitle_8tsiq2$_0 = function (source) {
    var tmp$;
    var list = source;
    var $receiver = list;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var transform$result;
      var tmp$_2;
      if (equals(item.type(), Type$Companion_getInstance().TYPE_NORMAL)) {
        Kotlin.isType(tmp$_2 = item, UnObject) ? tmp$_2 : throwCCE();
        var src = item.content;
        var result = MdRegex$Companion_getInstance().REGEX_TITLE.find_905azu$(src);
        if (result != null) {
          var grade = count(MdRegex$Companion_getInstance().REGEX_TITLE_GRADE.findAll_905azu$(src));
          var content = ensureNotNull(MdRegex$Companion_getInstance().REGEX_TITLE_CONTENT.find_905azu$(src)).groupValues.get_za3lpa$(1);
          transform$result = new TitleObject(grade, content);
        }
         else {
          transform$result = item;
        }
      }
       else {
        transform$result = item;
      }
      tmp$_1.call(destination, transform$result);
    }
    list = Kotlin.isType(tmp$ = destination, MutableList) ? tmp$ : throwCCE();
    return list;
  };
  Core.prototype.transMultLine_lb8eyc$_0 = function (source) {
    var res = this.transList_sfx2l6$_0(source);
    res = this.transCode_rphq5x$_0(res);
    return res;
  };
  Core.prototype.transCode_rphq5x$_0 = function (source) {
    var code = {v: false};
    var res = {v: ArrayList_init()};
    var content = {v: ArrayList_init()};
    var destination = ArrayList_init_0(collectionSizeOrDefault(source, 10));
    var tmp$;
    tmp$ = source.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var transform$result;
      var tmp$_1;
      if (equals(item.type(), Type$Companion_getInstance().TYPE_NORMAL)) {
        if (MdRegex$Companion_getInstance().REGEX_CODE.find_905azu$((Kotlin.isType(tmp$_1 = item, UnObject) ? tmp$_1 : throwCCE()).content) != null) {
          transform$result = (code.v = !code.v, Unit);
        }
         else {
          if (code.v) {
            transform$result = content.v.add_11rb$(item.content);
          }
           else {
            if (content.v.size !== 0) {
              res.v.add_11rb$(new CodeObject(joinToString(content.v, '')));
              transform$result = (content.v = ArrayList_init(), Unit);
            }
             else {
              transform$result = res.v.add_11rb$(item);
            }
          }
        }
      }
       else {
        code.v = false;
        transform$result = res.v.add_11rb$(item);
      }
      tmp$_0.call(destination, transform$result);
    }
    return res.v;
  };
  Core.prototype.transObjects_qjosur$_0 = function (source) {
    var list = {v: ArrayList_init()};
    var tmp$;
    tmp$ = MdRegex$Companion_getInstance().REGEX_LINE.findAll_905azu$(source).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      list.v.add_11rb$(new UnObject(element.value));
    }
    return list.v;
  };
  Core.prototype.transList_sfx2l6$_0 = function (source) {
    var res = {v: ArrayList_init()};
    var lastType = {v: Type$Companion_getInstance().TYPE_NORMAL};
    var listObject = {v: new ListObject()};
    var unObject = {v: null};
    var destination = ArrayList_init_0(collectionSizeOrDefault(source, 10));
    var tmp$;
    tmp$ = source.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var result = MdRegex$Companion_getInstance().REGEX_LIST.find_905azu$((Kotlin.isType(tmp$_1 = item, UnObject) ? tmp$_1 : throwCCE()).content);
      unObject.v = item;
      if (result != null) {
        var grade = this.indexOfReg_h2a3m1$_0(MdRegex$Companion_getInstance().REGEX_LIST_GRADE, result);
        var content = ensureNotNull(MdRegex$Companion_getInstance().REGEX_LIST_CONTENT.find_905azu$(result.value)).groupValues.get_za3lpa$(1);
        listObject.v.push_19mbxw$(grade, content);
        lastType.v = Type$Companion_getInstance().TYPE_LIST;
      }
       else {
        if (equals(lastType.v, Type$Companion_getInstance().TYPE_LIST)) {
          res.v.add_11rb$(listObject.v);
          listObject.v = new ListObject();
        }
         else
          equals(lastType.v, Type$Companion_getInstance().TYPE_NORMAL);
        res.v.add_11rb$(unObject.v);
        lastType.v = Type$Companion_getInstance().TYPE_NORMAL;
      }
      tmp$_0.call(destination, Unit);
    }
    return res.v;
  };
  Core.prototype.indexOfReg_h2a3m1$_0 = function (reg, result) {
    return indexOf(result.value, ensureNotNull(reg.find_905azu$(result.value)).value);
  };
  Core.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Core',
    interfaces: []
  };
  function MdRegex() {
    MdRegex$Companion_getInstance();
  }
  function MdRegex$Companion() {
    MdRegex$Companion_instance = this;
    this.REGEX_LINE = Regex_init('.*?((\r)?\n)');
    this.REGEX_LIST = Regex_init('^( )*- .*');
    this.REGEX_LIST_GRADE = Regex_init('- ');
    this.REGEX_LIST_CONTENT = Regex_init('- (.*)');
    this.REGEX_CODE = Regex_init('^```');
    this.REGEX_TITLE = Regex_init('^#+ ');
    this.REGEX_TITLE_GRADE = Regex_init('#');
    this.REGEX_TITLE_CONTENT = Regex_init('^#+ (.*)');
    this.REGEX_HR = Regex_init('^-----*(\n)');
    this.REGEX_BLOCKQUOTE = Regex_init('^>(.*)');
    this.REGEX_STRONG = Regex_init('(\\*\\*(.*)\\*\\*)|(__(.*)__)');
    this.REGEX_EM = Regex_init('(\\*(.*)\\*)|(_(.*)_)');
    this.REGEX_IMAGE = Regex_init('\\!\\[(.*?)\\]\\((.*?)\\)');
    this.REGEX_HYPER_LINK = Regex_init('\\[(.*?)\\]\\((.*?)\\)');
  }
  MdRegex$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MdRegex$Companion_instance = null;
  function MdRegex$Companion_getInstance() {
    if (MdRegex$Companion_instance === null) {
      new MdRegex$Companion();
    }
    return MdRegex$Companion_instance;
  }
  MdRegex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MdRegex',
    interfaces: []
  };
  function JsCore() {
  }
  JsCore.prototype.trans = function (source) {
    return (new Core()).trans_61zpoe$(source);
  };
  JsCore.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsCore',
    interfaces: []
  };
  function BlockquoteObject(content) {
    MarkDownObject.call(this);
    this.content = content;
  }
  BlockquoteObject.prototype.type = function () {
    return Type$Companion_getInstance().TYPE_BLOCKQUOTE;
  };
  BlockquoteObject.prototype.toString = function () {
    return BlockquoteParser$Companion_getInstance().parse_50rm2n$(this);
  };
  BlockquoteObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockquoteObject',
    interfaces: [MarkDownObject]
  };
  function CodeObject(content) {
    MarkDownObject.call(this);
    this.content = content;
  }
  CodeObject.prototype.type = function () {
    return Type$Companion_getInstance().TYPE_CODE;
  };
  CodeObject.prototype.data = function () {
    return this.content;
  };
  CodeObject.prototype.toString = function () {
    return CodeParser$Companion_getInstance().parse_8pycmb$(this);
  };
  CodeObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CodeObject',
    interfaces: [MarkDownObject]
  };
  function HrObject() {
    MarkDownObject.call(this);
  }
  HrObject.prototype.type = function () {
    return Type$Companion_getInstance().TYPE_HR;
  };
  HrObject.prototype.toString = function () {
    return HrParser$Companion_getInstance().parse_p8w3wm$(this);
  };
  HrObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HrObject',
    interfaces: [MarkDownObject]
  };
  function ListObject() {
    MarkDownObject.call(this);
    this.list = ArrayList_init();
  }
  ListObject.prototype.push_19mbxw$ = function (grade, content) {
    this.list.add_11rb$(new ListObject$ListItem(grade, content));
  };
  ListObject.prototype.type = function () {
    return Type$Companion_getInstance().TYPE_LIST;
  };
  ListObject.prototype.data = function () {
    return this.list;
  };
  ListObject.prototype.toString = function () {
    return ListParser$Companion_getInstance().parse_cjsuj2$(this);
  };
  function ListObject$ListItem(grade, content) {
    this.grade = grade;
    this.content = content;
  }
  ListObject$ListItem.prototype.toString = function () {
    return "{ 'grade': '" + this.grade + "', 'content': '" + this.content + "' }";
  };
  ListObject$ListItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListItem',
    interfaces: []
  };
  ListObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListObject',
    interfaces: [MarkDownObject]
  };
  function MarkDownObject() {
  }
  MarkDownObject.prototype.type = function () {
    return Type$Companion_getInstance().TYPE_MARKDOWN;
  };
  MarkDownObject.prototype.data = function () {
    return null;
  };
  MarkDownObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MarkDownObject',
    interfaces: []
  };
  function TitleObject(grade, content) {
    MarkDownObject.call(this);
    this.grade = grade;
    this.content = content;
  }
  TitleObject.prototype.type = function () {
    return Type$Companion_getInstance().TYPE_TITLE;
  };
  TitleObject.prototype.toString = function () {
    return TitleParser$Companion_getInstance().instance().parse_8gwmd6$(this);
  };
  TitleObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TitleObject',
    interfaces: [MarkDownObject]
  };
  function Type() {
    Type$Companion_getInstance();
  }
  function Type$Companion() {
    Type$Companion_instance = this;
    this.TYPE_TITLE = 'title';
    this.TYPE_LIST = 'list';
    this.TYPE_CODE = 'code';
    this.TYPE_NORMAL = 'normal';
    this.TYPE_MARKDOWN = 'markdown';
    this.TYPE_HR = 'hr';
    this.TYPE_BLOCKQUOTE = 'blockquote';
    this.TYPE_STRONG = 'strong';
    this.TYPE_EM = 'em';
    this.TYPE_HYPER_LINE = 'a';
    this.INLINE_CODE = 'inline_code';
  }
  Type$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Type$Companion_instance = null;
  function Type$Companion_getInstance() {
    if (Type$Companion_instance === null) {
      new Type$Companion();
    }
    return Type$Companion_instance;
  }
  Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: []
  };
  function UnObject(content) {
    MarkDownObject.call(this);
    this.content = content;
  }
  UnObject.prototype.type = function () {
    return Type$Companion_getInstance().TYPE_NORMAL;
  };
  UnObject.prototype.toString = function () {
    return '<p>' + this.content + '<\/p>';
  };
  UnObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnObject',
    interfaces: [MarkDownObject]
  };
  function InlineTransObject() {
    MarkDownObject.call(this);
  }
  InlineTransObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InlineTransObject',
    interfaces: [MarkDownObject]
  };
  function StrongObject() {
    InlineTransObject.call(this);
  }
  StrongObject.prototype.type = function () {
    return Type$Companion_getInstance().TYPE_STRONG;
  };
  StrongObject.prototype.toString = function () {
    return '';
  };
  StrongObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StrongObject',
    interfaces: [InlineTransObject]
  };
  function BaseParser() {
  }
  BaseParser.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BaseParser',
    interfaces: []
  };
  function BlockquoteParser() {
    BlockquoteParser$Companion_getInstance();
    this.start = BlockquoteParser$Companion_getInstance().DEFAULT_BQ_START;
    this.end = BlockquoteParser$Companion_getInstance().DEFAULT_BQ_END;
  }
  function BlockquoteParser$Companion() {
    BlockquoteParser$Companion_instance = this;
    this.DEFAULT_BQ_START = '<blockquote><p>';
    this.DEFAULT_BQ_END = '<\/p><\/blockquote>';
    this.sInstance_bhelwv$_0 = null;
  }
  Object.defineProperty(BlockquoteParser$Companion.prototype, 'sInstance_0', {
    get: function () {
      if (this.sInstance_bhelwv$_0 == null)
        this.sInstance_bhelwv$_0 = BlockquoteParser_init();
      return this.sInstance_bhelwv$_0;
    },
    set: function (sInstance) {
      this.sInstance_bhelwv$_0 = sInstance;
    }
  });
  BlockquoteParser$Companion.prototype.instance = function () {
    return ensureNotNull(this.sInstance_0);
  };
  BlockquoteParser$Companion.prototype.parse_50rm2n$ = function (source) {
    return this.instance().start + ' ' + source.content + ' ' + this.instance().end;
  };
  BlockquoteParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BlockquoteParser$Companion_instance = null;
  function BlockquoteParser$Companion_getInstance() {
    if (BlockquoteParser$Companion_instance === null) {
      new BlockquoteParser$Companion();
    }
    return BlockquoteParser$Companion_instance;
  }
  BlockquoteParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockquoteParser',
    interfaces: [BaseParser]
  };
  function BlockquoteParser_init($this) {
    $this = $this || Object.create(BlockquoteParser.prototype);
    BlockquoteParser.call($this);
    return $this;
  }
  function CodeParser() {
    CodeParser$Companion_getInstance();
    this.start = CodeParser$Companion_getInstance().DEFAULT_CODE_START;
    this.end = CodeParser$Companion_getInstance().DEFAULT_CODE_END;
  }
  function CodeParser$Companion() {
    CodeParser$Companion_instance = this;
    this.DEFAULT_CODE_START = '<code><div>';
    this.DEFAULT_CODE_END = '<\/div><\/code>';
    this.sInstance_ovcfgt$_0 = null;
  }
  Object.defineProperty(CodeParser$Companion.prototype, 'sInstance_0', {
    get: function () {
      if (this.sInstance_ovcfgt$_0 == null) {
        this.sInstance_ovcfgt$_0 = CodeParser_init();
      }
      return this.sInstance_ovcfgt$_0;
    },
    set: function (sInstance) {
      this.sInstance_ovcfgt$_0 = sInstance;
    }
  });
  CodeParser$Companion.prototype.instance = function () {
    return ensureNotNull(this.sInstance_0);
  };
  CodeParser$Companion.prototype.parse_8pycmb$ = function (source) {
    return this.instance().start + source.content + this.instance().end;
  };
  CodeParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CodeParser$Companion_instance = null;
  function CodeParser$Companion_getInstance() {
    if (CodeParser$Companion_instance === null) {
      new CodeParser$Companion();
    }
    return CodeParser$Companion_instance;
  }
  CodeParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CodeParser',
    interfaces: [BaseParser]
  };
  function CodeParser_init($this) {
    $this = $this || Object.create(CodeParser.prototype);
    CodeParser.call($this);
    return $this;
  }
  function HrParser() {
    HrParser$Companion_getInstance();
  }
  function HrParser$Companion() {
    HrParser$Companion_instance = this;
    this.DEFAULT_HR = '<hr>';
  }
  HrParser$Companion.prototype.parse_p8w3wm$ = function (source) {
    return this.DEFAULT_HR;
  };
  HrParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HrParser$Companion_instance = null;
  function HrParser$Companion_getInstance() {
    if (HrParser$Companion_instance === null) {
      new HrParser$Companion();
    }
    return HrParser$Companion_instance;
  }
  HrParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HrParser',
    interfaces: [BaseParser]
  };
  function InLineParser() {
    InLineParser$Companion_getInstance();
    this.strongStart = InLineParser$Companion_getInstance().DEFAULT_STRONG_START;
    this.strongEnd = InLineParser$Companion_getInstance().DEFAULT_STRONG_END;
    this.emStart = InLineParser$Companion_getInstance().DEFAULT_EM_START;
    this.emEnd = InLineParser$Companion_getInstance().DEFAULT_EM_END;
    this.templateImg = InLineParser$Companion_getInstance().DEFAULT_TEMPLATE_IMG;
    this.templateA = InLineParser$Companion_getInstance().DEFAULT_TEMPLATE_A;
  }
  function InLineParser$Companion() {
    InLineParser$Companion_instance = this;
    this.DEFAULT_STRONG_START = ' <strong>';
    this.DEFAULT_STRONG_END = '<\/strong> ';
    this.DEFAULT_EM_START = ' <em>';
    this.DEFAULT_EM_END = '<\/em> ';
    this.TEMPLATE_SRC = '$(src)';
    this.TEMPLATE_DESC = '$(desc)';
    this.DEFAULT_TEMPLATE_IMG = '<img src="$(src)" alt="$(desc)"/> ';
    this.DEFAULT_TEMPLATE_A = '<a href="$(src)" > $(desc) <\/a> ';
    this.sInstance_mch49l$_0 = null;
  }
  Object.defineProperty(InLineParser$Companion.prototype, 'sInstance_0', {
    get: function () {
      if (this.sInstance_mch49l$_0 == null) {
        this.sInstance_mch49l$_0 = new InLineParser();
      }
      return this.sInstance_mch49l$_0;
    },
    set: function (sInstance) {
      this.sInstance_mch49l$_0 = sInstance;
    }
  });
  InLineParser$Companion.prototype.instance = function () {
    return ensureNotNull(this.sInstance_0);
  };
  InLineParser$Companion.prototype.parseStrong_61zpoe$ = function (content) {
    return this.instance().strongStart + content + this.instance().strongEnd;
  };
  InLineParser$Companion.prototype.parseEm_61zpoe$ = function (content) {
    return this.instance().emStart + content + this.instance().emEnd;
  };
  InLineParser$Companion.prototype.parseA_puj7f4$ = function (href, desc) {
    return replace(replace(this.instance().templateA, this.TEMPLATE_SRC, href), this.TEMPLATE_DESC, desc);
  };
  InLineParser$Companion.prototype.parseImg_puj7f4$ = function (src, alt) {
    return replace(replace(this.instance().templateImg, this.TEMPLATE_SRC, src), this.TEMPLATE_DESC, alt);
  };
  InLineParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var InLineParser$Companion_instance = null;
  function InLineParser$Companion_getInstance() {
    if (InLineParser$Companion_instance === null) {
      new InLineParser$Companion();
    }
    return InLineParser$Companion_instance;
  }
  InLineParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InLineParser',
    interfaces: [BaseParser]
  };
  function ListParser() {
    ListParser$Companion_getInstance();
    this.listStart = ListParser$Companion_getInstance().DEFAULT_LIST_START;
    this.listEnd = ListParser$Companion_getInstance().DEFAULT_LIST_END;
    this.listItemStart = ListParser$Companion_getInstance().DEFAULT_LIST_ITEM_START;
    this.listItemEnd = ListParser$Companion_getInstance().DEFAULT_LIST_ITEM_END;
  }
  function ListParser$Companion() {
    ListParser$Companion_instance = this;
    this.DEFAULT_LIST_START = '<ul>';
    this.DEFAULT_LIST_END = '<\/ul>';
    this.DEFAULT_LIST_ITEM_START = '<li>';
    this.DEFAULT_LIST_ITEM_END = '<\/li>\n';
    this.sInstance_73erha$_0 = null;
  }
  Object.defineProperty(ListParser$Companion.prototype, 'sInstance_0', {
    get: function () {
      if (this.sInstance_73erha$_0 == null) {
        this.sInstance_73erha$_0 = ListParser_init();
      }
      return this.sInstance_73erha$_0;
    },
    set: function (sInstance) {
      this.sInstance_73erha$_0 = sInstance;
    }
  });
  ListParser$Companion.prototype.instance = function () {
    return ensureNotNull(this.sInstance_0);
  };
  ListParser$Companion.prototype.parse_cjsuj2$ = function (source) {
    var tmp$;
    var list = {v: ArrayList_init()};
    var stack = {v: ArrayList_init()};
    var out = {v: ''};
    var $receiver = Kotlin.isType(tmp$ = source.data(), MutableList) ? tmp$ : throwCCE();
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var tmp$_2;
      var last_0 = {v: list.v.size !== 0 ? last(list.v) : null};
      if (last_0.v == null) {
        out.v = this.instance().listStart + this.instance().listItemStart + item.content + this.instance().listItemEnd;
        stack.v.add_11rb$(item.grade);
      }
       else if (last_0.v === item.grade)
        out.v += this.instance().listItemStart + item.content + this.instance().listItemEnd;
      else if (last_0.v < item.grade) {
        out.v += this.instance().listStart + this.instance().listItemStart + item.content + this.instance().listItemEnd;
        stack.v.add_11rb$(item.grade);
      }
       else if (last_0.v > item.grade) {
        var arr = {v: ArrayList_init()};
        var grade = {v: item.grade};
        var tmp$_3;
        tmp$_3 = list.v.iterator();
        while (tmp$_3.hasNext()) {
          var element = tmp$_3.next();
          if (element <= last_0.v && element >= grade.v && arr.v.indexOf_11rb$(element) === -1) {
            arr.v.add_11rb$(element);
          }
        }
        tmp$_2 = arr.v.size - 1 | 0;
        for (var x = 1; x <= tmp$_2; x++) {
          out.v = out.v + this.instance().listEnd;
        }
        out.v += this.instance().listItemStart + item.content + this.instance().listItemEnd;
        stack.v.removeAt_za3lpa$(stack.v.size - 1 | 0);
      }
      tmp$_1.call(destination, list.v.add_11rb$(item.grade));
    }
    while (!stack.v.isEmpty()) {
      out.v = out.v + this.instance().listEnd;
      stack.v.removeAt_za3lpa$(stack.v.size - 1 | 0);
    }
    stack.v = ArrayList_init();
    list.v = ArrayList_init();
    return out.v;
  };
  ListParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ListParser$Companion_instance = null;
  function ListParser$Companion_getInstance() {
    if (ListParser$Companion_instance === null) {
      new ListParser$Companion();
    }
    return ListParser$Companion_instance;
  }
  ListParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListParser',
    interfaces: [BaseParser]
  };
  function ListParser_init($this) {
    $this = $this || Object.create(ListParser.prototype);
    ListParser.call($this);
    return $this;
  }
  function TitleParser() {
    TitleParser$Companion_getInstance();
    this.template = TitleParser$Companion_getInstance().DEFAULT_TEMPLATE;
  }
  function TitleParser$Companion() {
    TitleParser$Companion_instance = this;
    this.GRADE_TEMPLATE = '$(grade)';
    this.CONTENT_TEMPLATE = '$(content)';
    this.DEFAULT_TEMPLATE = '<h$(grade) id="$(content)">$(content)<\/h$(grade)>';
    this.sInstance_qx12ha$_0 = null;
  }
  Object.defineProperty(TitleParser$Companion.prototype, 'sInstance_0', {
    get: function () {
      if (this.sInstance_qx12ha$_0 == null) {
        this.sInstance_qx12ha$_0 = new TitleParser();
      }
      return this.sInstance_qx12ha$_0;
    },
    set: function (sInstance) {
      this.sInstance_qx12ha$_0 = sInstance;
    }
  });
  TitleParser$Companion.prototype.instance = function () {
    return ensureNotNull(this.sInstance_0);
  };
  TitleParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TitleParser$Companion_instance = null;
  function TitleParser$Companion_getInstance() {
    if (TitleParser$Companion_instance === null) {
      new TitleParser$Companion();
    }
    return TitleParser$Companion_instance;
  }
  TitleParser.prototype.parse_8gwmd6$ = function (source) {
    return replace(replace(TitleParser$Companion_getInstance().instance().template, TitleParser$Companion_getInstance().GRADE_TEMPLATE, source.grade.toString()), TitleParser$Companion_getInstance().CONTENT_TEMPLATE, source.content);
  };
  TitleParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TitleParser',
    interfaces: [BaseParser]
  };
  var package$xyz = _.xyz || (_.xyz = {});
  var package$kfdykme = package$xyz.kfdykme || (package$xyz.kfdykme = {});
  var package$kfmd = package$kfdykme.kfmd || (package$kfdykme.kfmd = {});
  package$kfmd.Core = Core;
  Object.defineProperty(MdRegex, 'Companion', {
    get: MdRegex$Companion_getInstance
  });
  package$kfmd.MdRegex = MdRegex;
  var package$js = package$kfmd.js || (package$kfmd.js = {});
  package$js.JsCore = JsCore;
  var package$model = package$kfmd.model || (package$kfmd.model = {});
  package$model.BlockquoteObject = BlockquoteObject;
  package$model.CodeObject = CodeObject;
  package$model.HrObject = HrObject;
  ListObject.ListItem = ListObject$ListItem;
  package$model.ListObject = ListObject;
  package$model.MarkDownObject = MarkDownObject;
  package$model.TitleObject = TitleObject;
  Object.defineProperty(Type, 'Companion', {
    get: Type$Companion_getInstance
  });
  package$model.Type = Type;
  package$model.UnObject = UnObject;
  var package$inline = package$model.inline || (package$model.inline = {});
  package$inline.InlineTransObject = InlineTransObject;
  package$inline.StrongObject = StrongObject;
  var package$parser = package$kfmd.parser || (package$kfmd.parser = {});
  package$parser.BaseParser = BaseParser;
  Object.defineProperty(BlockquoteParser, 'Companion', {
    get: BlockquoteParser$Companion_getInstance
  });
  package$parser.BlockquoteParser_init = BlockquoteParser_init;
  package$parser.BlockquoteParser = BlockquoteParser;
  Object.defineProperty(CodeParser, 'Companion', {
    get: CodeParser$Companion_getInstance
  });
  package$parser.CodeParser = CodeParser;
  Object.defineProperty(HrParser, 'Companion', {
    get: HrParser$Companion_getInstance
  });
  package$parser.HrParser = HrParser;
  Object.defineProperty(InLineParser, 'Companion', {
    get: InLineParser$Companion_getInstance
  });
  package$parser.InLineParser = InLineParser;
  Object.defineProperty(ListParser, 'Companion', {
    get: ListParser$Companion_getInstance
  });
  package$parser.ListParser = ListParser;
  Object.defineProperty(TitleParser, 'Companion', {
    get: TitleParser$Companion_getInstance
  });
  package$parser.TitleParser = TitleParser;
  Kotlin.defineModule('kfmd', _);
  return _;
}(module.exports, require('kotlin')));
