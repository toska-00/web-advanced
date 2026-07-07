window.QUESTION_BANK = [
  {
    "id": "s1-sec1-q1",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 1,
    "stem": "货道编号的生成依据是？",
    "options": [
      {
        "label": "A",
        "text": "设备型号ID"
      },
      {
        "label": "B",
        "text": "点位ID"
      },
      {
        "label": "C",
        "text": "设备类型表的行、列信息"
      },
      {
        "label": "D",
        "text": "设备编号"
      }
    ],
    "answer": "C",
    "analysis": "货道编号根据设备类型表的行、列信息动态生成，如“1-1”“1-2”。"
  },
  {
    "id": "s1-sec1-q2",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 2,
    "stem": "若依代码生成器提供的三种生成模板中，适用于展示层级关系数据（如部门表）的是以下哪种模板？",
    "options": [
      {
        "label": "A",
        "text": "单表模板"
      },
      {
        "label": "B",
        "text": "树表模板"
      },
      {
        "label": "C",
        "text": "主子表模板"
      },
      {
        "label": "D",
        "text": "以上都不是"
      }
    ],
    "answer": "B",
    "analysis": "树表模板适用于数据之间存在层级关系的场景，如部门表的父子层级展示，而单表模板适用于简单的增删改查，主子表模板适用于一对多关系的数据处理。"
  },
  {
    "id": "s1-sec1-q3",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 3,
    "stem": "在新增设备窗口中，选择点位的下拉列表数据是通过以下哪个方法获取的？（）",
    "options": [
      {
        "label": "A",
        "text": "listNode"
      },
      {
        "label": "B",
        "text": "listRegion"
      },
      {
        "label": "C",
        "text": "listVmType"
      },
      {
        "label": "D",
        "text": "listPartner"
      }
    ],
    "answer": "A",
    "analysis": "选择点位的下拉列表数据是通过调用listNode方法获取的，该方法从后台接口获取点位列表，并将数据存储在nodeList数组中，然后通过v-for指令遍历生成选项。"
  },
  {
    "id": "s1-sec1-q4",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 4,
    "stem": "在Web高级开发实践课程中，创建设备状态页面时，应在VSCode的views目录的manage目录下新建哪个文件夹？",
    "options": [
      {
        "label": "A",
        "text": "vm"
      },
      {
        "label": "B",
        "text": "vmStatus"
      },
      {
        "label": "C",
        "text": "deviceStatus"
      },
      {
        "label": "D",
        "text": "status"
      }
    ],
    "answer": "B",
    "analysis": "根据课程内容，创建设备状态页面时，需在views/manage目录下新建vmStatus文件夹存放相关视图组件。"
  },
  {
    "id": "s1-sec1-q5",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 5,
    "stem": "在Web高级开发实践课程中，设备管理流程涉及三个功能模块。其中，允许管理员定义新的售货机型号，包括其规格和容量的功能模块是？",
    "options": [
      {
        "label": "A",
        "text": "新增设备"
      },
      {
        "label": "B",
        "text": "新增设备类型"
      },
      {
        "label": "C",
        "text": "设备类型管理"
      },
      {
        "label": "D",
        "text": "新增货道"
      }
    ],
    "answer": "B",
    "analysis": "根据设备管理流程，新增设备类型允许管理员定义新的售货机型号，包括其规格和容量。设备类型管理是通过类型分类管理设备，新增设备是添加新的售货机实例，新增货道是为设备定义货道。因此正确答案是B。"
  },
  {
    "id": "s1-sec1-q6",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 6,
    "stem": "在查看详情方法getNodeInfo中，用于获取设备列表数据的API方法是以下哪一个？",
    "options": [
      {
        "label": "A",
        "text": "getDeviceList"
      },
      {
        "label": "B",
        "text": "fetchVmData"
      },
      {
        "label": "C",
        "text": "listVm"
      },
      {
        "label": "D",
        "text": "queryDeviceByPoint"
      }
    ],
    "answer": "C",
    "analysis": "功能描述中提到需要引入设备管理API方法listVm，在点击事件触发后调用该方法查询设备列表数据。"
  },
  {
    "id": "s1-sec1-q7",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 7,
    "stem": "在新增设备窗口中，设备型号的选项值是通过以下哪个属性绑定的？（）",
    "options": [
      {
        "label": "A",
        "text": "label"
      },
      {
        "label": "B",
        "text": "value"
      },
      {
        "label": "C",
        "text": "key"
      },
      {
        "label": "D",
        "text": "name"
      }
    ],
    "answer": "B",
    "analysis": "在<el-option>组件中，:value属性用于绑定选项的值，这里绑定的是item.id，而:label属性用于显示选项的文本内容，所以选项B正确。"
  },
  {
    "id": "s1-sec1-q8",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 8,
    "stem": "在智能售货机系统中，主要负责补货操作的是哪个角色？",
    "options": [
      {
        "label": "A",
        "text": "管理员"
      },
      {
        "label": "B",
        "text": "运维人员"
      },
      {
        "label": "C",
        "text": "运营人员"
      },
      {
        "label": "D",
        "text": "合作商"
      }
    ],
    "answer": "C",
    "analysis": "运营人员的主要职责是处理运营工单业务，其中包括补货操作；管理员负责基础数据管理和工单创建；运维人员负责设备投放、维修等；合作商仅提供点位。"
  },
  {
    "id": "s1-sec1-q9",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 9,
    "stem": "设备表中的详细地址字段名为addr，而点位表中对应的字段名为address，后端处理时应如何赋值？",
    "options": [
      {
        "label": "A",
        "text": "通过BeanUtil.copyProperties自动映射"
      },
      {
        "label": "B",
        "text": "直接调用vendingMachine.setAddr(node.getAddress())"
      },
      {
        "label": "C",
        "text": "忽略该字段，无需同步"
      },
      {
        "label": "D",
        "text": "手动修改数据库表结构统一字段名"
      }
    ],
    "answer": "B",
    "analysis": "由于设备表和点位表中地址字段名不同（addr vs address），无法通过BeanUtil.copyProperties自动映射，需手动调用setAddr方法将点位表的address属性赋值给设备表的addr属性。"
  },
  {
    "id": "s1-sec1-q10",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 10,
    "stem": "在人员管理模块中，导入生成的SQL脚本时，应优先导入哪个文件？",
    "options": [
      {
        "label": "A",
        "text": "roleMenu.sql"
      },
      {
        "label": "B",
        "text": "empMenu.sql"
      },
      {
        "label": "C",
        "text": "userMenu.sql"
      },
      {
        "label": "D",
        "text": "systemMenu.sql"
      }
    ],
    "answer": "B",
    "analysis": "前端仅需员工管理菜单，故应导入empMenu.sql脚本。"
  },
  {
    "id": "s1-sec1-q11",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 11,
    "stem": "将课程学科改为数据字典维护后，搜索功能无法找到数据的原因是？（）",
    "options": [
      {
        "label": "A",
        "text": "前端未正确传递字典类型参数"
      },
      {
        "label": "B",
        "text": "数据库中原有课程学科字段存储的是文本值，而非字典值"
      },
      {
        "label": "C",
        "text": "字典数据表未正确关联字典类型表"
      },
      {
        "label": "D",
        "text": "后端接口未实现字典数据的查询逻辑"
      }
    ],
    "answer": "B",
    "analysis": "修改数据字典前录入的课程数据，其学科字段存储的是文本值（如“JavaEE”），而数据字典维护后搜索传递的是字典值（如“0”），导致不匹配。需手动将历史数据的学科字段改为字典值。"
  },
  {
    "id": "s1-sec1-q12",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 12,
    "stem": "点位表(tb_node)中，region_id字段的外键约束设置为ON DELETE CASCADE，意味着当删除tb_region表中的某条记录时，会发生什么？",
    "options": [
      {
        "label": "A",
        "text": "禁止删除"
      },
      {
        "label": "B",
        "text": "同时删除tb_node表中所有关联该region_id的记录"
      },
      {
        "label": "C",
        "text": "仅删除tb_region表中的记录，tb_node表中的关联记录保持不变"
      },
      {
        "label": "D",
        "text": "将tb_node表中关联的region_id设置为NULL"
      }
    ],
    "answer": "B",
    "analysis": "ON DELETE CASCADE表示级联删除，当主表（tb_region）中的记录被删除时，从表（tb_node）中所有关联该主键的记录也会被删除，因此正确答案是B。"
  },
  {
    "id": "s1-sec1-q13",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 13,
    "stem": "若需将性别数据字典的“男”“女”改为“男性”“女性”，正确的操作步骤是？（）",
    "options": [
      {
        "label": "A",
        "text": "直接修改字典类型表的dict_name字段"
      },
      {
        "label": "B",
        "text": "进入字典数据管理界面，修改对应字典标签（dict_label）"
      },
      {
        "label": "C",
        "text": "删除原有字典类型，重新创建新的字典类型"
      },
      {
        "label": "D",
        "text": "修改字典数据表的dict_value字段"
      }
    ],
    "answer": "B",
    "analysis": "字典标签（dict_label）用于页面显示，修改性别显示文本需直接修改字典数据表中的dict_label字段，无需修改dict_value或字典类型。"
  },
  {
    "id": "s1-sec1-q14",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 14,
    "stem": "设备管理页面中，搜索表单的显示与隐藏由哪个变量控制？",
    "options": [
      {
        "label": "A",
        "text": "showSearch"
      },
      {
        "label": "B",
        "text": "queryParams"
      },
      {
        "label": "C",
        "text": "queryRef"
      },
      {
        "label": "D",
        "text": "innerCode"
      }
    ],
    "answer": "A",
    "analysis": "搜索表单通过v-show=\"showSearch\"控制显示与隐藏，showSearch为布尔类型变量。"
  },
  {
    "id": "s1-sec1-q15",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 15,
    "stem": "密码安全存储应使用哪种工具加密？",
    "options": [
      {
        "label": "A",
        "text": "MD5"
      },
      {
        "label": "B",
        "text": "SHA-1"
      },
      {
        "label": "C",
        "text": "Spring Security"
      },
      {
        "label": "D",
        "text": "Base64"
      }
    ],
    "answer": "C",
    "analysis": "使用Spring Security的SecurityUtils.encryptPassword方法对密码加密存储。"
  },
  {
    "id": "s1-sec1-q16",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 16,
    "stem": "在新增设备时，设备编号的生成方式是？",
    "options": [
      {
        "label": "A",
        "text": "手动输入"
      },
      {
        "label": "B",
        "text": "通过工具类生成八位唯一标识"
      },
      {
        "label": "C",
        "text": "使用当前时间戳"
      },
      {
        "label": "D",
        "text": "随机生成"
      }
    ],
    "answer": "B",
    "analysis": "根据数据库分析，设备编号通过工具类生成八位唯一标识，确保编号唯一性。"
  },
  {
    "id": "s1-sec1-q17",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 17,
    "stem": "新增设备后，货道批量新增的主要优势是？",
    "options": [
      {
        "label": "A",
        "text": "减少代码量"
      },
      {
        "label": "B",
        "text": "提高数据库访问效率"
      },
      {
        "label": "C",
        "text": "支持动态SQL"
      },
      {
        "label": "D",
        "text": "无需事务管理"
      }
    ],
    "answer": "B",
    "analysis": "批量新增方法能减少访问数据库的次数，相比循环插入单条记录，显著提高执行效率。"
  },
  {
    "id": "s1-sec1-q18",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 18,
    "stem": "修改项目名称后，启动类的正确操作是？",
    "options": [
      {
        "label": "A",
        "text": "直接启动原RuoYiApplication类"
      },
      {
        "label": "B",
        "text": "将RuoYiApplication重命名为SkyApplication"
      },
      {
        "label": "C",
        "text": "删除原启动类重新创建"
      },
      {
        "label": "D",
        "text": "修改启动类的包路径"
      }
    ],
    "answer": "B",
    "analysis": "根据课程步骤，修改项目名称后需要将RuoYiApplication类重命名为SkyApplication（使用Shift+F6快捷键），因此B选项正确。"
  },
  {
    "id": "s1-sec1-q19",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 19,
    "stem": "关于修改窗口和新增窗口的复用，以下哪种说法是正确的？（）",
    "options": [
      {
        "label": "A",
        "text": "两个窗口完全相同，不需要区分"
      },
      {
        "label": "B",
        "text": "通过v-if指令根据form.innerCode是否存在来区分显示内容"
      },
      {
        "label": "C",
        "text": "修改窗口是新增窗口的子组件"
      },
      {
        "label": "D",
        "text": "两个窗口使用不同的Vue组件实现"
      }
    ],
    "answer": "B",
    "analysis": "修改窗口复用了新增窗口的内容，通过v-if指令判断form.innerCode是否存在来区分显示不同的字段，例如供货时间、设备类型等字段只在修改窗口中显示。"
  },
  {
    "id": "s1-sec1-q20",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 20,
    "stem": "更新时间列改造为年月日和时分秒格式时，使用的parseTime函数参数格式是？",
    "options": [
      {
        "label": "A",
        "text": "'{y}-{m}-{d}'"
      },
      {
        "label": "B",
        "text": "'{y}-{m}-{d} {h}:{i}:{s}'"
      },
      {
        "label": "C",
        "text": "'{Y}-{M}-{D} {H}:{I}:{S}'"
      },
      {
        "label": "D",
        "text": "'{yyyy}-{mm}-{dd} {hh}:{ii}:{ss}'"
      }
    ],
    "answer": "B",
    "analysis": "课程中给出的改造后代码为：<span>{{ parseTime(scope.row.updateTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>，其中参数格式为'{y}-{m}-{d} {h}:{i}:{s}'。"
  },
  {
    "id": "s1-sec1-q21",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 21,
    "stem": "在若依系统中创建小智用户并关联课研人员角色时，为了和管理员密码一致，密码设置为？",
    "options": [
      {
        "label": "A",
        "text": "123456"
      },
      {
        "label": "B",
        "text": "015itheima.CN032@"
      },
      {
        "label": "C",
        "text": "admin123"
      },
      {
        "label": "D",
        "text": "demo"
      }
    ],
    "answer": "C",
    "analysis": "根据案例步骤，创建小智用户时密码设置为admin123（与超级管理员保持一致）。"
  },
  {
    "id": "s1-sec1-q22",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 22,
    "stem": "根据库表设计要求，每张表都必须包含的通用字段不包括以下哪一项？",
    "options": [
      {
        "label": "A",
        "text": "create_time"
      },
      {
        "label": "B",
        "text": "update_time"
      },
      {
        "label": "C",
        "text": "delete_time"
      },
      {
        "label": "D",
        "text": "create_by"
      }
    ],
    "answer": "C",
    "analysis": "需求说明中明确每张表需包含create_time、update_time、create_by、update_by、remark字段，delete_time不在要求范围内，因此正确答案是C。"
  },
  {
    "id": "s1-sec1-q23",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 23,
    "stem": "在修改设备窗口中，区分新增窗口和修改窗口的依据是什么？（）",
    "options": [
      {
        "label": "A",
        "text": "title属性的值"
      },
      {
        "label": "B",
        "text": "open属性的值"
      },
      {
        "label": "C",
        "text": "form.innerCode是否存在"
      },
      {
        "label": "D",
        "text": "vmRef是否存在"
      }
    ],
    "answer": "C",
    "analysis": "修改窗口和新增窗口是通过判断设备编号是否存在来区分的，即form.innerCode是否为null。如果form.innerCode为null，则是新增窗口；否则是修改窗口。"
  },
  {
    "id": "s1-sec1-q24",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 24,
    "stem": "RuoYi-Vue版本后端未使用以下哪种技术？",
    "options": [
      {
        "label": "A",
        "text": "Spring Boot"
      },
      {
        "label": "B",
        "text": "MyBatis"
      },
      {
        "label": "C",
        "text": "Spring Cloud"
      },
      {
        "label": "D",
        "text": "Jwt"
      }
    ],
    "answer": "C",
    "analysis": "RuoYi-Vue是前后端分离单体架构，Spring Cloud用于微服务版本（RuoYi-Cloud），因此未使用。"
  },
  {
    "id": "s1-sec1-q25",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 25,
    "stem": "使用若依代码生成器生成树表代码后，需要将下载的前端文件复制到对应目录。以下哪个文件是树表生成后需要替换的前端文件之一？",
    "options": [
      {
        "label": "A",
        "text": "index.vue"
      },
      {
        "label": "B",
        "text": "main.js"
      },
      {
        "label": "C",
        "text": "App.vue"
      },
      {
        "label": "D",
        "text": "router.js"
      }
    ],
    "answer": "A",
    "analysis": "树表生成后需要替换的前端文件包括index.vue和dept.js，这些文件负责页面的展示和交互逻辑。"
  },
  {
    "id": "s1-sec1-q26",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 26,
    "stem": "在角色控件改造中，将角色文本框改为下拉框，数据来源为后台查询的角色列表。下拉框的选项需要绑定角色名称和角色ID。请问，在el-option标签中，哪个属性用于绑定选项的显示文本？",
    "options": [
      {
        "label": "A",
        "text": "label"
      },
      {
        "label": "B",
        "text": "value"
      },
      {
        "label": "C",
        "text": "key"
      },
      {
        "label": "D",
        "text": "prop"
      }
    ],
    "answer": "A",
    "analysis": "在Element UI的el-option标签中，label属性用于设置选项的显示文本，value属性用于设置选项的值，key属性用于标识选项的唯一性。因此，绑定角色名称应使用label属性。"
  },
  {
    "id": "s1-sec1-q27",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 27,
    "stem": "在点位管理列表查询前端改造任务中，需要打开的文件路径是？",
    "options": [
      {
        "label": "A",
        "text": "src/views/manage/node/index.vue"
      },
      {
        "label": "B",
        "text": "src/views/region/manage/index.vue"
      },
      {
        "label": "C",
        "text": "src/components/manage/node/index.vue"
      },
      {
        "label": "D",
        "text": "src/views/manage/region/index.vue"
      }
    ],
    "answer": "A",
    "analysis": "根据任务要求，需要打开的文件路径是src/views/manage/node/index.vue。"
  },
  {
    "id": "s1-sec1-q28",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 28,
    "stem": "在区域管理列表的操作按钮中，若需移除修改、删除按钮的图标属性，正确的做法是？",
    "options": [
      {
        "label": "A",
        "text": "删除按钮的icon-class属性"
      },
      {
        "label": "B",
        "text": "删除按钮的icon属性"
      },
      {
        "label": "C",
        "text": "将icon属性值设为空字符串"
      },
      {
        "label": "D",
        "text": "将icon属性值设为null"
      }
    ],
    "answer": "B",
    "analysis": "题目明确指出移除操作按钮图标需删除修改、删除按钮的icon属性，因此正确答案为B。"
  },
  {
    "id": "s1-sec1-q29",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 29,
    "stem": "菜品表tb_dish中，哪个字段用于标识菜品的售卖状态？",
    "options": [
      {
        "label": "A",
        "text": "status"
      },
      {
        "label": "B",
        "text": "status_cd"
      },
      {
        "label": "C",
        "text": "sale_status"
      },
      {
        "label": "D",
        "text": "is_sale"
      }
    ],
    "answer": "A",
    "analysis": "根据课程提供的SQL表结构，tb_dish表中的status字段用于标识售卖状态（0停售，1起售），因此A选项正确。"
  },
  {
    "id": "s1-sec1-q30",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 30,
    "stem": "在区域管理的查看详情功能中，为了展示区域下所有点位列表并减少开发量，计划复用的接口是？",
    "options": [
      {
        "label": "A",
        "text": "区域列表接口/manage/region/list"
      },
      {
        "label": "B",
        "text": "点位列表接口/manage/node/list"
      },
      {
        "label": "C",
        "text": "区域详情接口/manage/region/detail"
      },
      {
        "label": "D",
        "text": "点位详情接口/manage/node/detail"
      }
    ],
    "answer": "B",
    "analysis": "题目明确指出查看详情功能计划复用现有查询点位列表接口，因此正确答案为B。"
  },
  {
    "id": "s1-sec1-q31",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 31,
    "stem": "后端重置密码时，初始密码123456需要经过什么处理？",
    "options": [
      {
        "label": "A",
        "text": "直接存储明文"
      },
      {
        "label": "B",
        "text": "使用MD5加密"
      },
      {
        "label": "C",
        "text": "使用SHA-256加密"
      },
      {
        "label": "D",
        "text": "使用SecurityUtils.encryptPassword加密"
      }
    ],
    "answer": "D",
    "analysis": "根据后端代码示例，密码需通过SecurityUtils.encryptPassword方法加密"
  },
  {
    "id": "s1-sec1-q32",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 32,
    "stem": "合作商表(tb_partner)中的分成比例字段profit_ratio的数据类型是？",
    "options": [
      {
        "label": "A",
        "text": "VARCHAR"
      },
      {
        "label": "B",
        "text": "INT"
      },
      {
        "label": "C",
        "text": "DECIMAL"
      },
      {
        "label": "D",
        "text": "FLOAT"
      }
    ],
    "answer": "B",
    "analysis": "根据需求说明，合作商表的分成比例字段profit_ratio明确要求为int类型，因此正确答案是B。"
  },
  {
    "id": "s1-sec1-q33",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 33,
    "stem": "若依项目中，通用工具模块的名称是？",
    "options": [
      {
        "label": "A",
        "text": "ruoyi-system"
      },
      {
        "label": "B",
        "text": "ruoyi-common"
      },
      {
        "label": "C",
        "text": "ruoyi-framework"
      },
      {
        "label": "D",
        "text": "ruoyi-generator"
      }
    ],
    "answer": "B",
    "analysis": "ruoyi-common模块是通用工具模块，包含annotation、config、constant等子模块，提供项目通用的工具类和配置。"
  },
  {
    "id": "s1-sec1-q34",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 34,
    "stem": "修改若依框架项目的页面标题为“外卖管理系统”时，发现修改index.html的title后仍被覆盖，还需要修改哪个文件？",
    "options": [
      {
        "label": "A",
        "text": "src/views/login.vue"
      },
      {
        "label": "B",
        "text": "src/setting.js"
      },
      {
        "label": "C",
        "text": ".env.development"
      },
      {
        "label": "D",
        "text": "src/store/modules/settings.js"
      }
    ],
    "answer": "C",
    "analysis": "环境配置文件.env.development中的VITE_APP_TITLE属性会覆盖index.html的title设置"
  },
  {
    "id": "s1-sec1-q35",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 35,
    "stem": "后端重置密码接口需要添加的权限控制注解是？",
    "options": [
      {
        "label": "A",
        "text": "@PreAuthorize(\"@ss.hasPermi('manage:partner:edit')\")"
      },
      {
        "label": "B",
        "text": "@PreAuthorize(\"@ss.hasPermi('manage:partner:add')\")"
      },
      {
        "label": "C",
        "text": "@PreAuthorize(\"@ss.hasPermi('manage:partner:list')\")"
      },
      {
        "label": "D",
        "text": "@PreAuthorize(\"@ss.hasPermi('manage:partner:delete')\")"
      }
    ],
    "answer": "A",
    "analysis": "根据后端代码示例，重置密码接口需要添加@PreAuthorize(\"@ss.hasPermi('manage:partner:edit')\")权限控制"
  },
  {
    "id": "s1-sec1-q36",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 36,
    "stem": "若依项目中，可移除的模块是？",
    "options": [
      {
        "label": "A",
        "text": "ruoyi-system"
      },
      {
        "label": "B",
        "text": "ruoyi-generator"
      },
      {
        "label": "C",
        "text": "ruoyi-admin"
      },
      {
        "label": "D",
        "text": "ruoyi-common"
      }
    ],
    "answer": "B",
    "analysis": "ruoyi-generator是代码生成模块，属于可移除模块，不影响项目核心功能运行。"
  },
  {
    "id": "s1-sec1-q37",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 37,
    "stem": "若依框架系统页面中的标题引用的是哪个环境的配置？",
    "options": [
      {
        "label": "A",
        "text": "生产环境(.env.production)"
      },
      {
        "label": "B",
        "text": "开发环境(.env.development)"
      },
      {
        "label": "C",
        "text": "测试环境(.env.test)"
      },
      {
        "label": "D",
        "text": "无需配置，自动继承index.html的title"
      }
    ],
    "answer": "B",
    "analysis": "系统页面标题依赖开发环境配置中的VITE_APP_TITLE属性"
  },
  {
    "id": "s1-sec1-q38",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 38,
    "stem": "在点位管理系统的数据库设计中，点位表(tb_node)与区域表(tb_region)之间的关系是一对多，请问在tb_node表中用于关联区域表的字段是？",
    "options": [
      {
        "label": "A",
        "text": "region_name"
      },
      {
        "label": "B",
        "text": "region_id"
      },
      {
        "label": "C",
        "text": "area_id"
      },
      {
        "label": "D",
        "text": "district_id"
      }
    ],
    "answer": "B",
    "analysis": "根据库表设计要求，区域与点位是一对多关系，需用字段表示并建立外键约束。在tb_node表中，region_id字段用于关联tb_region表的主键id，因此正确答案是B。"
  },
  {
    "id": "s1-sec1-q39",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 39,
    "stem": "在新增设备窗口中，设备型号的选择使用了以下哪个组件？（）",
    "options": [
      {
        "label": "A",
        "text": "<el-input>"
      },
      {
        "label": "B",
        "text": "<el-select>"
      },
      {
        "label": "C",
        "text": "<el-checkbox>"
      },
      {
        "label": "D",
        "text": "<el-radio>"
      }
    ],
    "answer": "B",
    "analysis": "在新增设备窗口中，设备型号的选择使用了<el-select>组件，通过v-for指令遍历vmTypeList数组生成选项，替代了原来的<el-input>组件。"
  },
  {
    "id": "s1-sec1-q40",
    "set": "Web高级开发实践复习题1",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 40,
    "stem": "若依框架中，使用字典值（dict_value）存储静态数据的主要目的是？（）",
    "options": [
      {
        "label": "A",
        "text": "提高数据的可读性"
      },
      {
        "label": "B",
        "text": "简化数据的查询逻辑"
      },
      {
        "label": "C",
        "text": "减少数据库存储空间，提升系统性能"
      },
      {
        "label": "D",
        "text": "便于数据的加密存储"
      }
    ],
    "answer": "C",
    "analysis": "字典值（如“0”“1”）通常为短字符，相比长文本的字典标签，可显著减少存储空间，提升磁盘利用率和系统性能。"
  },
  {
    "id": "s1-sec2-q41",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 41,
    "stem": "后端重置密码接口的实现需要包含哪些步骤？",
    "options": [
      {
        "label": "A",
        "text": "接收合作商ID参数"
      },
      {
        "label": "B",
        "text": "创建合作商对象并设置ID"
      },
      {
        "label": "C",
        "text": "设置加密后的初始密码"
      },
      {
        "label": "D",
        "text": "调用Service更新合作商信息"
      }
    ],
    "answer": "ABCD",
    "analysis": "后端实现步骤包括接收ID参数、创建合作商对象、设置加密密码、调用Service更新"
  },
  {
    "id": "s1-sec2-q42",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 42,
    "stem": "智能售货机相比传统售货机具有哪些优势？",
    "options": [
      {
        "label": "A",
        "text": "物联网技术支持远程监控"
      },
      {
        "label": "B",
        "text": "智能分析与推荐功能"
      },
      {
        "label": "C",
        "text": "支持移动支付"
      },
      {
        "label": "D",
        "text": "需要人工值守"
      }
    ],
    "answer": "ABC",
    "analysis": "智能售货机的优势包括物联网技术支持远程监控、智能分析与推荐功能、支持移动支付等，而传统售货机往往需要人工值守，智能售货机则无需人工值守。"
  },
  {
    "id": "s1-sec2-q43",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 43,
    "stem": "查询区域列表时，loadAllParams对象包含哪些参数？",
    "options": [
      {
        "label": "A",
        "text": "pageNum: 1"
      },
      {
        "label": "B",
        "text": "pageSize: 10000"
      },
      {
        "label": "C",
        "text": "regionName: ''"
      },
      {
        "label": "D",
        "text": "id: ''"
      }
    ],
    "answer": "AB",
    "analysis": "loadAllParams对象包含pageNum和pageSize参数，用于查询所有区域，因此AB正确。"
  },
  {
    "id": "s1-sec2-q44",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 44,
    "stem": "在区域Service层的updateRegion方法中添加事务管理的原因包括：",
    "options": [
      {
        "label": "A",
        "text": "确保区域表和员工表的更新要么都成功，要么都失败"
      },
      {
        "label": "B",
        "text": "提高查询效率"
      },
      {
        "label": "C",
        "text": "防止数据不一致"
      },
      {
        "label": "D",
        "text": "简化代码编写"
      }
    ],
    "answer": "AC",
    "analysis": "事务管理的主要目的是保证多个数据库操作的原子性，防止数据不一致，与查询效率和代码简化无关。"
  },
  {
    "id": "s1-sec2-q45",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 45,
    "stem": "设备状态二级菜单的配置信息包括以下哪些？",
    "options": [
      {
        "label": "A",
        "text": "菜单类型：二级菜单"
      },
      {
        "label": "B",
        "text": "显示排序：2"
      },
      {
        "label": "C",
        "text": "路由地址：vmStatus/index"
      },
      {
        "label": "D",
        "text": "权限字符串：manage:vm:add"
      }
    ],
    "answer": "ABC",
    "analysis": "根据课程内容，设备状态二级菜单的权限字符串应为manage:vm:list，选项D错误，其他选项均正确。"
  },
  {
    "id": "s1-sec2-q46",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 46,
    "stem": "在新增设备类型的对话框改造中，货道行和列的输入框需要满足以下哪些要求？",
    "options": [
      {
        "label": "A",
        "text": "在同一行显示"
      },
      {
        "label": "B",
        "text": "只能输入数字"
      },
      {
        "label": "C",
        "text": "限制输入范围在1-10之间"
      },
      {
        "label": "D",
        "text": "使用普通文本框"
      }
    ],
    "answer": "ABC",
    "analysis": "根据题目中的原型要求，货道行和列的输入框需要在同一行显示、只能输入数字且限制在1-10之间。使用普通文本框不符合要求，需要改为el-input-number组件。因此正确答案是ABC。"
  },
  {
    "id": "s1-sec2-q47",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 47,
    "stem": "实现点位查看详情功能需要进行的前端改造包括以下哪些步骤？",
    "options": [
      {
        "label": "A",
        "text": "添加查看详情按钮并绑定点击事件"
      },
      {
        "label": "B",
        "text": "引入设备管理API方法listVm"
      },
      {
        "label": "C",
        "text": "开发后端设备查询接口"
      },
      {
        "label": "D",
        "text": "添加点位详情对话框并配置表格"
      }
    ],
    "answer": "ABD",
    "analysis": "功能描述中提到后端接口已完成开发，仅需前端页面改造，因此选项C（开发后端接口）不属于前端改造步骤。"
  },
  {
    "id": "s1-sec2-q48",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 48,
    "stem": "修改设备点位后，功能测试应验证哪些字段的同步更新？",
    "options": [
      {
        "label": "A",
        "text": "详细地址（addr）"
      },
      {
        "label": "B",
        "text": "商圈类型（business_type）"
      },
      {
        "label": "C",
        "text": "区域ID（region_id）"
      },
      {
        "label": "D",
        "text": "设备ID（id）"
      }
    ],
    "answer": "ABC",
    "analysis": "修改设备点位后，需验证详细地址（addr）、商圈类型（business_type）、区域ID（region_id）等冗余字段是否从点位表同步更新，设备ID属于主键不应被修改。"
  },
  {
    "id": "s1-sec2-q49",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 49,
    "stem": "若依系统中，“页面菜单”的特点是？",
    "options": [
      {
        "label": "A",
        "text": "点击后展示页面"
      },
      {
        "label": "B",
        "text": "属于二级菜单（如系统管理下的用户管理）"
      },
      {
        "label": "C",
        "text": "需要指定组件路径"
      },
      {
        "label": "D",
        "text": "点开是按钮弹窗"
      }
    ],
    "answer": "ABC",
    "analysis": "页面菜单的特点是点击展示页面、属于二级菜单、需要组件路径；按钮弹窗是按钮菜单的特点。"
  },
  {
    "id": "s1-sec2-q50",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 50,
    "stem": "前端重置密码功能的正确实现包括哪些部分？",
    "options": [
      {
        "label": "A",
        "text": "点击重置按钮弹出确认对话框"
      },
      {
        "label": "B",
        "text": "确认后调用重置密码接口"
      },
      {
        "label": "C",
        "text": "成功后显示操作提示"
      },
      {
        "label": "D",
        "text": "取消操作时发送取消请求"
      }
    ],
    "answer": "ABC",
    "analysis": "前端实现包括弹出确认框、调用接口、显示提示；取消操作不发送请求"
  },
  {
    "id": "s1-sec2-q51",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 51,
    "stem": "在区域详情查看对话框中，以下哪些表单控件的设置是正确的？",
    "options": [
      {
        "label": "A",
        "text": "区域名称输入框添加disabled属性"
      },
      {
        "label": "B",
        "text": "点位数显示使用el-table组件"
      },
      {
        "label": "C",
        "text": "备注输入框添加readonly属性"
      },
      {
        "label": "D",
        "text": "操作按钮设置为隐藏"
      }
    ],
    "answer": "ABCD",
    "analysis": "区域详情查看对话框应设置输入框为禁用状态，使用表格显示点位数，备注输入框设为只读，并隐藏操作按钮以防止修改。"
  },
  {
    "id": "s1-sec2-q52",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 52,
    "stem": "平台管理员在智能售货机系统中的主要职责包括哪些？",
    "options": [
      {
        "label": "A",
        "text": "管理基础数据（区域、点位等）"
      },
      {
        "label": "B",
        "text": "创建工单指派人员"
      },
      {
        "label": "C",
        "text": "查看订单和统计报表"
      },
      {
        "label": "D",
        "text": "直接进行商品补货"
      }
    ],
    "answer": "ABC",
    "analysis": "平台管理员负责管理基础数据、创建工单、查看订单和报表等，商品补货由运营人员负责，管理员不直接进行补货操作。"
  },
  {
    "id": "s1-sec2-q53",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 53,
    "stem": "以下关于点位表与其他表关系的描述正确的是？",
    "options": [
      {
        "label": "A",
        "text": "点位表与区域表是一对多关系"
      },
      {
        "label": "B",
        "text": "点位表与合作商表是一对多关系"
      },
      {
        "label": "C",
        "text": "点位表与设备表是一对多关系"
      },
      {
        "label": "D",
        "text": "区域表与点位表是一对多关系"
      }
    ],
    "answer": "CD",
    "analysis": "一个区域可包含多个点位（区域表与点位表一对多），一个点位可包含多个设备（点位表与设备表一对多）。"
  },
  {
    "id": "s1-sec2-q54",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 54,
    "stem": "解决员工表区域名称与区域表不同步问题的正确步骤包括：",
    "options": [
      {
        "label": "A",
        "text": "编写根据区域ID更新员工表区域名称的SQL语句"
      },
      {
        "label": "B",
        "text": "在员工表Mapper层接口添加新方法实现SQL映射"
      },
      {
        "label": "C",
        "text": "在区域Service层更新方法中先更新区域表，再调用新方法同步更新员工表"
      },
      {
        "label": "D",
        "text": "在员工Service层更新方法中先更新员工表，再更新区域表"
      }
    ],
    "answer": "ABC",
    "analysis": "正确的步骤包括编写SQL语句、Mapper层添加方法、Service层按正确顺序更新两张表，D选项顺序错误。"
  },
  {
    "id": "s1-sec2-q55",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 55,
    "stem": "设备管理页面改造中，涉及的前端技术点包括哪些？",
    "options": [
      {
        "label": "A",
        "text": "Vue模板语法"
      },
      {
        "label": "B",
        "text": "Element Plus组件使用"
      },
      {
        "label": "C",
        "text": "Axios API调用"
      },
      {
        "label": "D",
        "text": "SQL语句编写"
      }
    ],
    "answer": "ABCD",
    "analysis": "改造涉及Vue模板自定义列、Element Plus表单和表格组件使用、Axios调用API获取数据，以及SQL语句更新设备表数据。"
  },
  {
    "id": "s1-sec2-q56",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 56,
    "stem": "在人员管理页面的界面优化中，需要删除修改和删除按钮的图标以保持界面简洁。原操作按钮代码中，el-button标签包含icon属性。请问，以下哪些方法可以实现删除图标的功能？",
    "options": [
      {
        "label": "A",
        "text": "删除el-button标签中的icon属性"
      },
      {
        "label": "B",
        "text": "将icon属性值改为空字符串"
      },
      {
        "label": "C",
        "text": "保留icon属性但删除其值"
      },
      {
        "label": "D",
        "text": "将icon属性值改为\"none\""
      }
    ],
    "answer": "ABC",
    "analysis": "删除el-button标签中的icon属性、将icon属性值改为空字符串或保留icon属性但删除其值，都可以实现删除图标的功能。而将icon属性值改为\"none\"并不能删除图标，因为Element UI中没有\"none\"这个图标类型。"
  },
  {
    "id": "s1-sec2-q57",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 57,
    "stem": "若依代码生成器生成的代码包中包含以下哪些内容？",
    "options": [
      {
        "label": "A",
        "text": "后端Java代码"
      },
      {
        "label": "B",
        "text": "前端Vue代码"
      },
      {
        "label": "C",
        "text": "数据库SQL脚本"
      },
      {
        "label": "D",
        "text": "服务器部署脚本"
      }
    ],
    "answer": "ABC",
    "analysis": "根据步骤分析，生成的代码包含后端代码、前端代码和菜单SQL，不包含服务器部署脚本。"
  },
  {
    "id": "s1-sec2-q58",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 58,
    "stem": "创建RegionVo类时，为了包含区域ID、区域名称、备注说明和点位数，正确的做法是？",
    "options": [
      {
        "label": "A",
        "text": "直接定义所有四个字段"
      },
      {
        "label": "B",
        "text": "继承Region实体类（包含前三个字段）并新增点位数字段"
      },
      {
        "label": "C",
        "text": "仅定义点位数字段，其他字段通过关联查询自动获取"
      },
      {
        "label": "D",
        "text": "实现Serializable接口"
      }
    ],
    "answer": "ABD",
    "analysis": "RegionVo需包含四个字段，可直接定义或继承Region类后新增点位数字段，同时实体类通常需实现Serializable接口；C选项无法获取前三个字段，因此错误，正确答案为ABD。"
  },
  {
    "id": "s1-sec2-q59",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 59,
    "stem": "若依框架中关于主题风格和菜单图标的配置，正确的说法有哪些？",
    "options": [
      {
        "label": "A",
        "text": "点击右上角头像的布局设置可切换主题，仅对当前用户有效"
      },
      {
        "label": "B",
        "text": "修改src/setting.js可实现全局主题配置"
      },
      {
        "label": "C",
        "text": "自定义菜单图标需从阿里巴巴矢量图库下载SVG文件"
      },
      {
        "label": "D",
        "text": "添加的自定义图标会自动显示在菜单管理界面"
      }
    ],
    "answer": "ABC",
    "analysis": "自定义图标需放入指定目录后，在菜单管理中手动选择，不会自动显示"
  },
  {
    "id": "s1-sec2-q60",
    "set": "Web高级开发实践复习题1",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 60,
    "stem": "若依系统的菜单类型包括以下哪些？",
    "options": [
      {
        "label": "A",
        "text": "目录菜单"
      },
      {
        "label": "B",
        "text": "页面菜单"
      },
      {
        "label": "C",
        "text": "按钮菜单"
      },
      {
        "label": "D",
        "text": "外链菜单"
      }
    ],
    "answer": "ABC",
    "analysis": "若依系统的菜单类型明确分为目录菜单、页面菜单和按钮菜单三种，“是否外链”是菜单的属性（是否为外部链接），而非菜单类型。"
  },
  {
    "id": "s1-sec3-q61",
    "set": "Web高级开发实践复习题1",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 61,
    "stem": "设备状态二级菜单的权限字符串应为______，与设备管理权限一致。",
    "options": [],
    "answer": "第1空:manage:vm:list",
    "analysis": "根据课程内容，设备状态二级菜单的权限字符串参考设备管理权限，为manage:vm:list。"
  },
  {
    "id": "s1-sec3-q62",
    "set": "Web高级开发实践复习题1",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 62,
    "stem": "使用若依框架修改器处理压缩包后，会在压缩包的______生成新的项目文件夹。",
    "options": [],
    "answer": "第1空:统计目录",
    "analysis": "课程中提到处理完成后，新的项目文件夹会生成在压缩包的统计目录下。"
  },
  {
    "id": "s1-sec3-q63",
    "set": "Web高级开发实践复习题1",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 63,
    "stem": "在修改设备窗口中，需要回显供货时间字段。相关代码为：<el-form-item label=\"供货时间\" v-if=\"form.innerCode != null\"> <span>{{ parseTime(form.lastSupplyTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span> </el-form-item>。这里使用了____1____方法来格式化时间，并且通过____2____指令判断是否显示该字段。",
    "options": [],
    "answer": "第1空:parseTime 第2空:v-if",
    "analysis": "parseTime是一个自定义的时间格式化方法，用于将时间戳或日期对象转换为指定格式的字符串。v-if指令用于根据条件渲染元素，这里当form.innerCode不为null时显示供货时间字段。"
  },
  {
    "id": "s1-sec3-q64",
    "set": "Web高级开发实践复习题1",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 64,
    "stem": "新增设备时，设备容量通过____1____查询设备类型表获取对应值；点位的详细地址通过____2____查询点位表补充。",
    "options": [],
    "answer": "第1空:设备型号ID 第2空:点位ID",
    "analysis": "设备容量根据设备型号ID关联设备类型表，点位信息通过点位ID关联点位表。"
  },
  {
    "id": "s1-sec3-q65",
    "set": "Web高级开发实践复习题1",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 65,
    "stem": "定义口味名称和口味列表的静态数据时，使用的Vue3响应式数据方法是______。",
    "options": [],
    "answer": "第1空:ref",
    "analysis": "课程中给出的静态数据定义代码使用了ref方法：const dishFlavorListSelect=ref([...])。"
  },
  {
    "id": "s1-sec4-q66",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 66,
    "stem": "货道编号是固定格式，与设备类型无关。",
    "options": [],
    "answer": "错误",
    "analysis": "货道编号根据设备类型表的行、列信息动态生成，与设备类型直接相关。"
  },
  {
    "id": "s1-sec4-q67",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 67,
    "stem": "创建sky-merchant子模块时，子模块的SDK版本可以与父项目不同。",
    "options": [],
    "answer": "错误",
    "analysis": "课程明确指出子项目的SDK必须与父项目一致，否则会报错。因此该说法错误。"
  },
  {
    "id": "s1-sec4-q68",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 68,
    "stem": "使用主子表模板生成代码时，后端代码需要手动编写，无法自动生成。",
    "options": [],
    "answer": "错误",
    "analysis": "主子表模板可以自动生成前后端代码，包括一对多关系的处理逻辑，无需手动编写后端代码。"
  },
  {
    "id": "s1-sec4-q69",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 69,
    "stem": "密码加密处理应在PartnerServiceImpl.java的insertPartner方法中完成。",
    "options": [],
    "answer": "正确",
    "analysis": "在新增方法中使用SecurityUtils.encryptPassword方法加密密码。"
  },
  {
    "id": "s1-sec4-q70",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 70,
    "stem": "在代码生成后的菜单导入中，需要导入货道动态菜单sql和前端代码。",
    "options": [],
    "answer": "错误",
    "analysis": "根据代码生成的配置，货道没有单独的页面原型，是集成到设备管理视图页面中的组件，因此不需要导入货道动态菜单sql和前端代码。正确答案是错。"
  },
  {
    "id": "s1-sec4-q71",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 71,
    "stem": "所有表的主键id都设置为自增。",
    "options": [],
    "answer": "正确",
    "analysis": "需求说明中明确要求每张表的主键都是自增的，因此该描述正确。"
  },
  {
    "id": "s1-sec4-q72",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 72,
    "stem": "若依代码生成器生成的课程管理模块默认在“系统工具”菜单下。",
    "options": [],
    "answer": "正确",
    "analysis": "根据步骤分析，代码生成器默认生成的课程管理模块在系统工具菜单下。"
  },
  {
    "id": "s1-sec4-q73",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 73,
    "stem": "若依前端工程的src目录中，后端工程师重点操作的是api和views目录。",
    "options": [],
    "answer": "正确",
    "analysis": "根据课程内容，后端工程师在前端开发中主要关注api（接口请求）和views（视图展示）目录。"
  },
  {
    "id": "s1-sec4-q74",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 74,
    "stem": "BeanUtil.copyProperties(node, vendingMachine, \"id\")会将点位表中的id属性覆盖设备表中的id属性。",
    "options": [],
    "answer": "错误",
    "analysis": "该方法的第三个参数是排除属性列表，指定\"id\"后会跳过id属性的拷贝，避免主键冲突。"
  },
  {
    "id": "s1-sec4-q75",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 75,
    "stem": "运维人员的主要职责是进行商品补货。",
    "options": [],
    "answer": "错误",
    "analysis": "运维人员的职责是投放、撤除和维修设备，商品补货由运营人员负责，因此该说法错误。"
  },
  {
    "id": "s1-sec4-q76",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 76,
    "stem": "RBAC（基于角色的访问控制）模型中，用户直接关联菜单权限，无需通过角色。",
    "options": [],
    "answer": "错误",
    "analysis": "RBAC模型通过角色分配和管理用户的菜单权限，用户需关联角色，角色关联权限，并非用户直接关联权限。"
  },
  {
    "id": "s1-sec4-q77",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 77,
    "stem": "若依框架修改器可以直接修改未打包的项目文件。",
    "options": [],
    "answer": "错误",
    "analysis": "根据课程内容，使用若依框架修改器时需要先将初始化项目打成压缩包，再进行处理。因此该说法错误。"
  },
  {
    "id": "s1-sec4-q78",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 78,
    "stem": "getVmInfo方法中需要调用getVm接口获取设备详情数据。",
    "options": [],
    "answer": "正确",
    "analysis": "根据课程内容，getVmInfo方法通过调用getVm接口获取设备详情数据并显示在弹窗中。"
  },
  {
    "id": "s1-sec4-q79",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 79,
    "stem": "物联网（IoT）是让各种物品通过互联网连接起来，实现信息交换和通信的技术。",
    "options": [],
    "answer": "正确",
    "analysis": "物联网的定义就是让各种物品通过互联网连接，实现信息交换和通信，因此该说法正确。"
  },
  {
    "id": "s1-sec4-q80",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 80,
    "stem": "若依系统中，课程管理菜单默认位于“系统工具”下，无法修改其上级菜单。",
    "options": [],
    "answer": "错误",
    "analysis": "案例中提到可以修改课程管理菜单的上级菜单，将其提升为顶级菜单栏（与统计分析、系统管理并列）。"
  },
  {
    "id": "s1-sec4-q81",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 81,
    "stem": "修改窗口和新增窗口使用的是同一个el-dialog组件，通过title属性区分。（）",
    "options": [],
    "answer": "错误",
    "analysis": "修改窗口和新增窗口使用的是同一个el-dialog组件，但区分的依据是form.innerCode是否存在，而不是title属性。title属性用于显示对话框的标题，例如“新增设备”或“修改设备”。"
  },
  {
    "id": "s1-sec4-q82",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 82,
    "stem": "若依代码生成器的单表模板仅能生成简单的增删改查代码，不支持分页和条件查询功能。",
    "options": [],
    "answer": "错误",
    "analysis": "单表模板不仅能生成增删改查代码，还支持分页和条件查询功能，入门案例中已实现相关功能。"
  },
  {
    "id": "s1-sec4-q83",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 83,
    "stem": "设备状态二级菜单的上级菜单应为系统管理。",
    "options": [],
    "answer": "错误",
    "analysis": "根据课程内容，设备状态二级菜单的上级菜单应为设备管理，而非系统管理。"
  },
  {
    "id": "s1-sec4-q84",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 84,
    "stem": "字典数据表中的dict_type字段与字典类型表中的dict_type字段是主键与外键的关系。（）",
    "options": [],
    "answer": "错误",
    "analysis": "字典类型表的主键通常为id，dict_type是用于分类的字段，字典数据表的dict_type字段与字典类型表的dict_type字段是普通关联关系，非主键外键关系。"
  },
  {
    "id": "s1-sec4-q85",
    "set": "Web高级开发实践复习题1",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 85,
    "stem": "若依框架中，.env.development配置的VITE_APP_TITLE优先级高于index.html中的title设置",
    "options": [],
    "answer": "正确",
    "analysis": "环境配置文件中的标题设置会覆盖HTML文件中的默认标题"
  },
  {
    "id": "s1-sec5-q86",
    "set": "Web高级开发实践复习题1",
    "section": "五、 简答题",
    "type": "简答题",
    "number": 86,
    "stem": "RuoYi-Vue项目中Redis的启动方式是什么？如何修改Redis的密码配置？",
    "options": [],
    "answer": "启动方式：在Redis解压目录执行`redis-server.exe redis.windows.conf`；修改密码需编辑ruoyi-admin模块下的application.yml文件中的Redis相关配置项。",
    "analysis": "本题考查RuoYi-Vue项目的Redis配置与启动，需掌握启动命令及配置文件位置。"
  },
  {
    "id": "s1-sec5-q87",
    "set": "Web高级开发实践复习题1",
    "section": "五、 简答题",
    "type": "简答题",
    "number": 87,
    "stem": "简述若依表单构建工具的优势。",
    "options": [],
    "answer": "若依表单构建工具的优势包括：1. 可视化操作，无需编写代码即可创建表单；2. 支持自定义表单组件和验证规则；3. 提供导出Vue文件功能，快速集成到前端工程；4. 结合动态菜单创建，实现页面快速访问；5. 适用于复杂业务场景，可替代后端工程师手动编写表单页面。",
    "analysis": "若依表单构建工具通过可视化拖拽、灵活配置和快速导出，降低了表单开发难度，提高了开发效率，尤其适用于复杂业务场景。"
  },
  {
    "id": "s2-sec1-q1",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 1,
    "stem": "在Spring中，@Transactional注解的rollbackFor = Exception.class属性的作用是：",
    "options": [
      {
        "label": "A",
        "text": "仅当抛出RuntimeException时回滚事务"
      },
      {
        "label": "B",
        "text": "当抛出任何Exception或其子类异常时回滚事务"
      },
      {
        "label": "C",
        "text": "事务永不回滚"
      },
      {
        "label": "D",
        "text": "仅当抛出Error时回滚事务"
      }
    ],
    "answer": "B",
    "analysis": "rollbackFor = Exception.class指定事务在遇到任何Exception或其子类异常时都会回滚，而默认情况下Spring事务仅在遇到RuntimeException和Error时回滚。"
  },
  {
    "id": "s2-sec1-q2",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 2,
    "stem": "售货机货道表中的货道编号规则是什么？",
    "options": [
      {
        "label": "A",
        "text": "行号+列号（如1-1表示第一行第一列）"
      },
      {
        "label": "B",
        "text": "列号+行号（如1-1表示第一列第一行）"
      },
      {
        "label": "C",
        "text": "设备编号+行号+列号（如VM001-1-1）"
      },
      {
        "label": "D",
        "text": "随机生成的唯一标识"
      }
    ],
    "answer": "A",
    "analysis": "根据售货机货道表的设计，货道编号规则为行号+列号，例如1-1表示第一行第一列。因此正确答案是A。"
  },
  {
    "id": "s2-sec1-q3",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 3,
    "stem": "在修改设备窗口中，设备类型的回显是通过以下哪种方式实现的？（）",
    "options": [
      {
        "label": "A",
        "text": "直接显示form.vmTypeId的值"
      },
      {
        "label": "B",
        "text": "通过v-for遍历vmTypeList数组，找到与form.vmTypeId匹配的item.name"
      },
      {
        "label": "C",
        "text": "调用listVmType接口重新获取数据"
      },
      {
        "label": "D",
        "text": "使用parseTime方法格式化显示"
      }
    ],
    "answer": "B",
    "analysis": "设备类型的回显是通过v-for指令遍历vmTypeList数组，找到与form.vmTypeId匹配的item.name并显示，这是因为设备类型需要通过关联查询获取，无法直接从form.vmTypeId中得到名称。"
  },
  {
    "id": "s2-sec1-q4",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 4,
    "stem": "在ChannelMapper.xml中实现批量新增时，主要使用哪个MyBatis标签？",
    "options": [
      {
        "label": "A",
        "text": "<if>"
      },
      {
        "label": "B",
        "text": "<foreach>"
      },
      {
        "label": "C",
        "text": "<choose>"
      },
      {
        "label": "D",
        "text": "<trim>"
      }
    ],
    "answer": "B",
    "analysis": "批量插入操作需使用MyBatis的<foreach>标签遍历集合元素，生成批量插入SQL语句。"
  },
  {
    "id": "s2-sec1-q5",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 5,
    "stem": "查看合作商详情时，需要调用哪个方法获取数据？",
    "options": [
      {
        "label": "A",
        "text": "getPartner"
      },
      {
        "label": "B",
        "text": "editPartner"
      },
      {
        "label": "C",
        "text": "deletePartner"
      },
      {
        "label": "D",
        "text": "addPartner"
      }
    ],
    "answer": "A",
    "analysis": "查看详情时通过getPartner方法查询合作商数据并显示对话框。"
  },
  {
    "id": "s2-sec1-q6",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 6,
    "stem": "前端调用重置密码接口时，正确的参数传递方式是？",
    "options": [
      {
        "label": "A",
        "text": "将id作为请求体参数"
      },
      {
        "label": "B",
        "text": "将id作为路径参数"
      },
      {
        "label": "C",
        "text": "将id作为查询参数"
      },
      {
        "label": "D",
        "text": "将id作为请求头参数"
      }
    ],
    "answer": "B",
    "analysis": "接口路径为/manage/partner/resetPwd/:id，id是路径参数"
  },
  {
    "id": "s2-sec1-q7",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 7,
    "stem": "在若依表单构建工具中，若要在一行内放置2个表单项，需调整组件的哪个属性？",
    "options": [
      {
        "label": "A",
        "text": "组件名称"
      },
      {
        "label": "B",
        "text": "栅格占比"
      },
      {
        "label": "C",
        "text": "验证规则"
      },
      {
        "label": "D",
        "text": "字段类型"
      }
    ],
    "answer": "B",
    "analysis": "栅格占比用于控制组件在一行内的宽度分配，满格为24份，调整栅格占比可实现一行内放置多个组件。"
  },
  {
    "id": "s2-sec1-q8",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 8,
    "stem": "点位表(tb_node)中的address字段的comment是？",
    "options": [
      {
        "label": "A",
        "text": "点位名称"
      },
      {
        "label": "B",
        "text": "详细地址"
      },
      {
        "label": "C",
        "text": "商圈类型"
      },
      {
        "label": "D",
        "text": "区域ID"
      }
    ],
    "answer": "B",
    "analysis": "根据tb_node表的创建语句，address字段的comment明确为'详细地址'，因此正确答案是B。"
  },
  {
    "id": "s2-sec1-q9",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 9,
    "stem": "在设备管理页面的表格列改造中，需要将设备型号id改为显示名称，应使用哪个Vue模板语法？",
    "options": [
      {
        "label": "A",
        "text": "<template #default=\"scope\">"
      },
      {
        "label": "B",
        "text": "<slot name=\"default\">"
      },
      {
        "label": "C",
        "text": "<v-slot:default=\"scope\">"
      },
      {
        "label": "D",
        "text": "<template v-slot:scope=\"default\">"
      }
    ],
    "answer": "A",
    "analysis": "Element Plus表格中使用<template #default=\"scope\">语法来自定义列内容，通过scope.row获取当前行数据，从而实现id到名称的转换。"
  },
  {
    "id": "s2-sec1-q10",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 10,
    "stem": "在设备表的查询条件配置中，以下哪个字段被保留用于统计某一个点位下的设备列表？",
    "options": [
      {
        "label": "A",
        "text": "设备容量"
      },
      {
        "label": "B",
        "text": "点位ID"
      },
      {
        "label": "C",
        "text": "详细地址"
      },
      {
        "label": "D",
        "text": "上次捕获时间"
      }
    ],
    "answer": "B",
    "analysis": "根据设备表的字段配置，点位ID被保留用于统计某一个点位下的设备列表，设备容量、详细地址、上次捕获时间等字段被取消作为查询条件。因此正确答案是B。"
  },
  {
    "id": "s2-sec1-q11",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 11,
    "stem": "在区域列表中显示点位数时，以下哪种SQL编写方案无需额外处理空值？",
    "options": [
      {
        "label": "A",
        "text": "先聚合统计每个区域的点位数，再与区域表关联查询"
      },
      {
        "label": "B",
        "text": "直接左外连接区域表和点位表，再按区域ID分组统计"
      },
      {
        "label": "C",
        "text": "使用子查询统计点位数并关联区域表"
      },
      {
        "label": "D",
        "text": "使用内连接区域表和点位表，再按区域ID分组统计"
      }
    ],
    "answer": "B",
    "analysis": "根据题目中的SQL编写方案对比，AI生成的方案（直接左外连接后分组统计）无需使用IFNULL处理空值，因此正确答案为B。"
  },
  {
    "id": "s2-sec1-q12",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 12,
    "stem": "设备状态的页面存放在vmStatus目录下，页面名称为index.vue，设备状态二级菜单的路由地址应设置为以下哪项？",
    "options": [
      {
        "label": "A",
        "text": "vm/index"
      },
      {
        "label": "B",
        "text": "vmStatus/index"
      },
      {
        "label": "C",
        "text": "deviceStatus/index"
      },
      {
        "label": "D",
        "text": "status/index"
      }
    ],
    "answer": "B",
    "analysis": "设备状态菜单的路由地址需映射到views/manage/vmStatus/index视图组件，因此路由地址应为vmStatus/index。"
  },
  {
    "id": "s2-sec1-q13",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 13,
    "stem": "在使用若依代码生成器生成树表时，需要配置树的编码字段、树的父编码字段和树的名称字段。对于部门表（dept表），树的编码字段应选择以下哪个字段？",
    "options": [
      {
        "label": "A",
        "text": "parent_id"
      },
      {
        "label": "B",
        "text": "dept_id"
      },
      {
        "label": "C",
        "text": "dept_name"
      },
      {
        "label": "D",
        "text": "ancestors"
      }
    ],
    "answer": "B",
    "analysis": "树的编码字段指的是当前树的主键，部门表的主键是dept_id，因此应选择dept_id作为树的编码字段。"
  },
  {
    "id": "s2-sec1-q14",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 14,
    "stem": "在点位管理界面改造中，查看详情按钮需要绑定的权限是以下哪一个？",
    "options": [
      {
        "label": "A",
        "text": "manage:vm:view"
      },
      {
        "label": "B",
        "text": "manage:vm:list"
      },
      {
        "label": "C",
        "text": "manage:point:detail"
      },
      {
        "label": "D",
        "text": "manage:device:query"
      }
    ],
    "answer": "B",
    "analysis": "根据功能描述，查看详情按钮需要绑定的权限为设备列表查询权限manage:vm:list，该权限需从设备Controller中复制。"
  },
  {
    "id": "s2-sec1-q15",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 15,
    "stem": "在点位管理列表查询的SQL语句中，为了修复按区域搜索的错误，需要确保SELECT子句中的非聚合列都包含在GROUP BY子句中。以下哪个选项是正确的GROUP BY子句？",
    "options": [
      {
        "label": "A",
        "text": "GROUP BY n.id"
      },
      {
        "label": "B",
        "text": "GROUP BY n.id, n.node_name, n.region_id, n.partner_id"
      },
      {
        "label": "C",
        "text": "GROUP BY vm.id"
      },
      {
        "label": "D",
        "text": "GROUP BY n.id, vm.id"
      }
    ],
    "answer": "B",
    "analysis": "为了修复SQL完整性错误，需要将SELECT子句中的所有非聚合列（如n.id、n.node_name、n.region_id、n.partner_id等）都包含在GROUP BY子句中。"
  },
  {
    "id": "s2-sec1-q16",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 16,
    "stem": "若要在Node实体中添加合作商信息，应定义哪种类型的属性？",
    "options": [
      {
        "label": "A",
        "text": "String partnerName"
      },
      {
        "label": "B",
        "text": "Integer partnerId"
      },
      {
        "label": "C",
        "text": "Partner partner"
      },
      {
        "label": "D",
        "text": "Map partnerInfo"
      }
    ],
    "answer": "C",
    "analysis": "合作商信息包含id和partnerName，应定义为Partner类型的对象属性，以便完整映射关联数据。"
  },
  {
    "id": "s2-sec1-q17",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 17,
    "stem": "设备状态页面未自动生成的原因是？",
    "options": [
      {
        "label": "A",
        "text": "后端代码未完成"
      },
      {
        "label": "B",
        "text": "设备管理与设备状态共用同一套后端代码"
      },
      {
        "label": "C",
        "text": "前端框架不支持"
      },
      {
        "label": "D",
        "text": "权限未配置"
      }
    ],
    "answer": "B",
    "analysis": "根据课程内容，设备管理与设备状态共用同一套后端代码，因此未自动生成前端页面。"
  },
  {
    "id": "s2-sec1-q18",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 18,
    "stem": "前端展示代码如下：{{ scope.row.runningStatus!=null? JSON.parse(scope.row.runningStatus).status==true?'正常':'异常' :'异常'}} 设备状态列根据数据库running_states字段判断显示正常或异常，以下哪种情况会显示'正常'？",
    "options": [
      {
        "label": "A",
        "text": "running_states为'{\"status\":true}'"
      },
      {
        "label": "B",
        "text": "running_states为'{\"status\":false}'"
      },
      {
        "label": "C",
        "text": "running_states为null"
      },
      {
        "label": "D",
        "text": "running_states为'{\"status\":\"normal\"}'"
      }
    ],
    "answer": "A",
    "analysis": "设备状态列通过判断running_states字段，当running_states为null时，显示异常。当JSON.parse后的status为true时显示正常，其余的显示异常。"
  },
  {
    "id": "s2-sec1-q19",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 19,
    "stem": "在人员管理模块中，员工表生成代码时，其生成包路径应设置为？",
    "options": [
      {
        "label": "A",
        "text": "com.dkd.manage"
      },
      {
        "label": "B",
        "text": "com.dkd.system"
      },
      {
        "label": "C",
        "text": "com.dkd.api"
      },
      {
        "label": "D",
        "text": "com.dkd.web"
      }
    ],
    "answer": "A",
    "analysis": "代码生成信息配置中明确要求员工表生成包路径为com.dkd.manage。"
  },
  {
    "id": "s2-sec1-q20",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 20,
    "stem": "执行以下SQL语句后，设备表中node_id为1的设备addr字段会被更新为？update tb_vending_machine set addr=(select address from tb_node where id = 1) where node_id=1;",
    "options": [
      {
        "label": "A",
        "text": "tb_node表中id为1的address值"
      },
      {
        "label": "B",
        "text": "tb_node表中id为2的address值"
      },
      {
        "label": "C",
        "text": "tb_vending_machine表中原有addr值"
      },
      {
        "label": "D",
        "text": "空值"
      }
    ],
    "answer": "A",
    "analysis": "该SQL语句通过子查询获取tb_node表中id为1的address值，并将其更新到tb_vending_machine表中node_id为1的设备addr字段。"
  },
  {
    "id": "s2-sec1-q21",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 21,
    "stem": "区域详情查看按钮的权限控制应使用哪个权限标识？",
    "options": [
      {
        "label": "A",
        "text": "manage:region:view"
      },
      {
        "label": "B",
        "text": "manage:node:list"
      },
      {
        "label": "C",
        "text": "manage:region:edit"
      },
      {
        "label": "D",
        "text": "manage:node:edit"
      }
    ],
    "answer": "B",
    "analysis": "根据任务要求，区域详情查看按钮的权限设置应使用manage:node:list权限。"
  },
  {
    "id": "s2-sec1-q22",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 22,
    "stem": "点位列表接口返回的rows数组中，每个item包含的设备数字段名称是？",
    "options": [
      {
        "label": "A",
        "text": "machineCount"
      },
      {
        "label": "B",
        "text": "deviceNum"
      },
      {
        "label": "C",
        "text": "vmCount"
      },
      {
        "label": "D",
        "text": "vendingMachineCount"
      }
    ],
    "answer": "C",
    "analysis": "根据接口文档，设备数字段名称为vmCount，用于表示点位包含的售货机数量。"
  },
  {
    "id": "s2-sec1-q23",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 23,
    "stem": "修改设备时，前端仅提交点位ID，后端同步更新设备表冗余字段的核心目的是？",
    "options": [
      {
        "label": "A",
        "text": "减少前端代码复杂度"
      },
      {
        "label": "B",
        "text": "提升后端查询效率"
      },
      {
        "label": "C",
        "text": "确保设备表与点位表数据一致性"
      },
      {
        "label": "D",
        "text": "增加数据库表的冗余字段数量"
      }
    ],
    "answer": "C",
    "analysis": "后端通过点位ID同步更新设备表冗余字段，核心是维护设备表与点位表的数据一致性，避免因前端传参不全导致的信息不一致问题。"
  },
  {
    "id": "s2-sec1-q24",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 24,
    "stem": "菜品管理界面中隐藏主键列的正确方式是？",
    "options": [
      {
        "label": "A",
        "text": "直接删除主键列代码"
      },
      {
        "label": "B",
        "text": "使用HTML注释包裹主键列代码"
      },
      {
        "label": "C",
        "text": "设置主键列的visible属性为false"
      },
      {
        "label": "D",
        "text": "设置主键列的display属性为none"
      }
    ],
    "answer": "B",
    "analysis": "根据课程内容，隐藏主键列的正确方式是使用注释将其包裹，例如：<!-- <el-table-column label=\"主键\" align=\"center\" prop=\"id\" /> -->"
  },
  {
    "id": "s2-sec1-q25",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 25,
    "stem": "新增对话框中密码文本框应设置type属性为？",
    "options": [
      {
        "label": "A",
        "text": "text"
      },
      {
        "label": "B",
        "text": "password"
      },
      {
        "label": "C",
        "text": "number"
      },
      {
        "label": "D",
        "text": "hidden"
      }
    ],
    "answer": "B",
    "analysis": "新增对话框中密码文本框需设置type=\"password\"实现掩码显示。"
  },
  {
    "id": "s2-sec1-q26",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 26,
    "stem": "以下哪项不属于智能售货机相比传统售货机的核心优势？",
    "options": [
      {
        "label": "A",
        "text": "支持移动支付"
      },
      {
        "label": "B",
        "text": "具备自我管理能力"
      },
      {
        "label": "C",
        "text": "需要人工值守"
      },
      {
        "label": "D",
        "text": "能进行智能分析与推荐"
      }
    ],
    "answer": "C",
    "analysis": "智能售货机的核心优势包括支持移动支付、具备自我管理能力、能进行智能分析与推荐等，而传统售货机往往需要人工值守，智能售货机则无需人工值守。"
  },
  {
    "id": "s2-sec1-q27",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 27,
    "stem": "在区域管理列表中显示点位数时，涉及多表查询，区域表（tb_region）和点位表（tb_node）的关联字段是？",
    "options": [
      {
        "label": "A",
        "text": "tb_region.id与tb_node.region_id"
      },
      {
        "label": "B",
        "text": "tb_region.region_id与tb_node.id"
      },
      {
        "label": "C",
        "text": "tb_region.name与tb_node.region_name"
      },
      {
        "label": "D",
        "text": "tb_region.code与tb_node.region_code"
      }
    ],
    "answer": "A",
    "analysis": "根据题目中的SQL示例，区域表和点位表通过tb_region.id与tb_node.region_id进行关联，因此正确答案为A。"
  },
  {
    "id": "s2-sec1-q28",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 28,
    "stem": "在区域详情查看功能中，查看详情按钮需要绑定哪个方法来获取区域信息？",
    "options": [
      {
        "label": "A",
        "text": "handleUpdate"
      },
      {
        "label": "B",
        "text": "getRegionInfo"
      },
      {
        "label": "C",
        "text": "handleDelete"
      },
      {
        "label": "D",
        "text": "handleSelectionChange"
      }
    ],
    "answer": "B",
    "analysis": "查看详情按钮需要绑定getRegionInfo方法，并传递当前行数据来获取区域详情信息。"
  },
  {
    "id": "s2-sec1-q29",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 29,
    "stem": "在测试点位管理列表查询功能时，按区域搜索出现SQL完整性错误。经分析，以下哪个选项是可能的原因？",
    "options": [
      {
        "label": "A",
        "text": "SQL语句中缺少GROUP BY子句"
      },
      {
        "label": "B",
        "text": "LEFT JOIN关联条件错误"
      },
      {
        "label": "C",
        "text": "WHERE子句中regionId的判断条件缺失"
      },
      {
        "label": "D",
        "text": "SELECT子句中包含非聚合列且未在GROUP BY中列出"
      }
    ],
    "answer": "D",
    "analysis": "SQL完整性错误通常是由于SELECT子句中包含非聚合列（如n.*中的列），但未在GROUP BY子句中列出，导致数据库无法确定如何聚合这些列的值。"
  },
  {
    "id": "s2-sec1-q30",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 30,
    "stem": "若依框架中修改主题风格文件的位置是？",
    "options": [
      {
        "label": "A",
        "text": "src/setting.js"
      },
      {
        "label": "B",
        "text": "src/store/modules/settings.js"
      },
      {
        "label": "C",
        "text": ".env.development"
      },
      {
        "label": "D",
        "text": "src/assets/css/theme"
      }
    ],
    "answer": "A",
    "analysis": "主题风格配置位于src/setting.js文件中，可修改全局主题设置"
  },
  {
    "id": "s2-sec1-q31",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 31,
    "stem": "下列场景中，最适合使用数据字典管理的是？（）",
    "options": [
      {
        "label": "A",
        "text": "用户的动态积分数据"
      },
      {
        "label": "B",
        "text": "系统中的订单状态（如“待支付”“已完成”）"
      },
      {
        "label": "C",
        "text": "用户上传的头像图片"
      },
      {
        "label": "D",
        "text": "实时变化的股票价格数据"
      }
    ],
    "answer": "B",
    "analysis": "订单状态属于不经常变动的静态数据，适合通过数据字典统一管理；动态积分、头像图片、股票价格均为动态数据，不适合使用数据字典。"
  },
  {
    "id": "s2-sec1-q32",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 32,
    "stem": "导出的添加课程页面add.vue存放路径是src/ views/course/course/add.vue,添加课程菜单的组件路径应填写为？",
    "options": [
      {
        "label": "A",
        "text": "src/views/course/course/add"
      },
      {
        "label": "B",
        "text": "views/course/add"
      },
      {
        "label": "C",
        "text": "course/course/add"
      },
      {
        "label": "D",
        "text": "src/views/course/add"
      }
    ],
    "answer": "C",
    "analysis": "组件路径需与路由地址对应，路由地址为course/add时，组件路径应为course/course/add（假设views下存在course目录）。"
  },
  {
    "id": "s2-sec1-q33",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 33,
    "stem": "若依项目中，数据库连接池的配置文件是？",
    "options": [
      {
        "label": "A",
        "text": "application.yml"
      },
      {
        "label": "B",
        "text": "application-druid.yml"
      },
      {
        "label": "C",
        "text": "logback.xml"
      },
      {
        "label": "D",
        "text": "vite.config.js"
      }
    ],
    "answer": "B",
    "analysis": "application-druid.yml是若依项目中数据库连接池的配置文件，负责数据源的配置。"
  },
  {
    "id": "s2-sec1-q34",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 34,
    "stem": "员工表列表展示字段中，以下哪项属于从其他子表中动态查询字段？",
    "options": [
      {
        "label": "A",
        "text": "人员名称"
      },
      {
        "label": "B",
        "text": "归属区"
      },
      {
        "label": "C",
        "text": "角色名称"
      },
      {
        "label": "D",
        "text": "联系电话"
      }
    ],
    "answer": "B",
    "analysis": "归属区需根据区域表动态查询，属于动态展示字段。"
  },
  {
    "id": "s2-sec1-q35",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 35,
    "stem": "前端点击重置密码按钮后，首先需要执行的操作是？",
    "options": [
      {
        "label": "A",
        "text": "直接发送重置请求"
      },
      {
        "label": "B",
        "text": "显示操作成功提示"
      },
      {
        "label": "C",
        "text": "弹出确认对话框"
      },
      {
        "label": "D",
        "text": "刷新合作商列表"
      }
    ],
    "answer": "C",
    "analysis": "根据重置密码流程，管理员点击重置密码需先触发确认对话框"
  },
  {
    "id": "s2-sec1-q36",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 36,
    "stem": "后端修改设备时，以下哪一步是正确的流程顺序？",
    "options": [
      {
        "label": "A",
        "text": "接收点位ID → 查询点位表 → 拷贝属性 → 更新设备表 → 设置更新时间"
      },
      {
        "label": "B",
        "text": "接收点位ID → 查询点位表 → 拷贝属性 → 设置更新时间 → 更新设备表"
      },
      {
        "label": "C",
        "text": "查询点位表 → 接收点位ID → 拷贝属性 → 设置更新时间 → 更新设备表"
      },
      {
        "label": "D",
        "text": "接收点位ID → 拷贝属性 → 查询点位表 → 设置更新时间 → 更新设备表"
      }
    ],
    "answer": "B",
    "analysis": "正确流程为：前端提交点位ID → 后端查询点位表获取信息 → 拷贝属性（含排除id） → 设置更新时间 → 调用Mapper更新设备表，确保数据一致性。"
  },
  {
    "id": "s2-sec1-q37",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 37,
    "stem": "前端调用重置密码接口成功后，需要执行什么操作？",
    "options": [
      {
        "label": "A",
        "text": "刷新当前页面"
      },
      {
        "label": "B",
        "text": "显示操作成功提示"
      },
      {
        "label": "C",
        "text": "跳转到合作商列表页面"
      },
      {
        "label": "D",
        "text": "重新登录系统"
      }
    ],
    "answer": "B",
    "analysis": "根据重置密码流程，操作成功后应显示完成提示"
  },
  {
    "id": "s2-sec1-q38",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 38,
    "stem": "在点位详情对话框的设备状态列中，用于显示设备状态的组件是以下哪一个？",
    "options": [
      {
        "label": "A",
        "text": "<el-tag>"
      },
      {
        "label": "B",
        "text": "<dict-tag>"
      },
      {
        "label": "C",
        "text": "<status-label>"
      },
      {
        "label": "D",
        "text": "<el-text>"
      }
    ],
    "answer": "B",
    "analysis": "根据对话框代码示例，设备状态列使用了<dict-tag>组件，并通过:options=\"vm_status\"绑定数据字典选项。"
  },
  {
    "id": "s2-sec1-q39",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 39,
    "stem": "若依官方微服务版本（RuoYi-Cloud）基于以下哪种微服务架构？",
    "options": [
      {
        "label": "A",
        "text": "Spring Cloud & Alibaba"
      },
      {
        "label": "B",
        "text": "Dubbo"
      },
      {
        "label": "C",
        "text": "Kubernetes"
      },
      {
        "label": "D",
        "text": "gRPC"
      }
    ],
    "answer": "A",
    "analysis": "内容明确说明RuoYi-Cloud基于Spring Cloud & Alibaba微服务架构，支持服务发现等特性。"
  },
  {
    "id": "s2-sec1-q40",
    "set": "Web高级开发实践复习题2",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 40,
    "stem": "口味列表改造中出现“Cannot deserialize value of type java.lang.String from Array value”错误的原因是？",
    "options": [
      {
        "label": "A",
        "text": "前端传递的是数组类型，后端期望是字符串类型"
      },
      {
        "label": "B",
        "text": "前端传递的是字符串类型，后端期望是数组类型"
      },
      {
        "label": "C",
        "text": "前端传递的是数字类型，后端期望是字符串类型"
      },
      {
        "label": "D",
        "text": "前端传递的是布尔类型，后端期望是字符串类型"
      }
    ],
    "answer": "A",
    "analysis": "该错误提示表明后端无法将数组类型反序列化为字符串类型，原因是前端传递的是数组类型，而后端接口期望接收字符串类型的数据。"
  },
  {
    "id": "s2-sec2-q41",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 41,
    "stem": "实现点位关联查询合作商信息的可行方式有哪些？",
    "options": [
      {
        "label": "A",
        "text": "使用嵌套查询"
      },
      {
        "label": "B",
        "text": "使用SQL JOIN语句"
      },
      {
        "label": "C",
        "text": "手动调用合作商查询接口"
      },
      {
        "label": "D",
        "text": "通过resultMap配置关联"
      }
    ],
    "answer": "ABD",
    "analysis": "MyBatis中可通过嵌套查询、SQL JOIN或resultMap配置实现关联查询，手动调用接口不属于MyBatis的关联查询方式。"
  },
  {
    "id": "s2-sec2-q42",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 42,
    "stem": "若依项目的ruoyi-common模块包含以下哪些子模块？",
    "options": [
      {
        "label": "A",
        "text": "annotation"
      },
      {
        "label": "B",
        "text": "config"
      },
      {
        "label": "C",
        "text": "security"
      },
      {
        "label": "D",
        "text": "utils"
      }
    ],
    "answer": "ABD",
    "analysis": "ruoyi-common模块包含annotation（自定义注解）、config（全局配置）、utils（通用类处理）等子模块，security属于ruoyi-framework模块。"
  },
  {
    "id": "s2-sec2-q43",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 43,
    "stem": "在若依框架中，将课程管理的学科字段改为数据字典维护时，需要执行的操作有（）",
    "options": [
      {
        "label": "A",
        "text": "添加学科对应的字典类型和字典数据"
      },
      {
        "label": "B",
        "text": "修改代码生成器，将学科字段的显示类型设为下拉并关联对应的字典类型"
      },
      {
        "label": "C",
        "text": "下载生成的前端代码，覆盖原有前端页面文件"
      },
      {
        "label": "D",
        "text": "手动修改数据库中已存在的课程学科字段值为对应的字典值"
      }
    ],
    "answer": "ABCD",
    "analysis": "将字段改为数据字典维护需依次完成添加字典数据、配置代码生成器、替换前端代码和修正历史数据四个步骤，确保新老数据兼容。"
  },
  {
    "id": "s2-sec2-q44",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 44,
    "stem": "关于所属区域的关联查询实现，以下哪些步骤是正确的？（）",
    "options": [
      {
        "label": "A",
        "text": "导入listRegion方法"
      },
      {
        "label": "B",
        "text": "定义regionList数组存储区域列表"
      },
      {
        "label": "C",
        "text": "编写getRegionList方法调用listRegion接口获取数据"
      },
      {
        "label": "D",
        "text": "在mounted钩子函数中调用getRegionList方法"
      }
    ],
    "answer": "ABC",
    "analysis": "所属区域的关联查询实现步骤包括导入listRegion方法、定义regionList数组、编写getRegionList方法并调用listRegion接口。调用getRegionList方法的时机通常是在组件创建后或需要更新数据时，不一定是在mounted钩子函数中，所以选项D错误。"
  },
  {
    "id": "s2-sec2-q45",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 45,
    "stem": "导致设备状态列无内容显示的原因可能包括以下哪些？",
    "options": [
      {
        "label": "A",
        "text": "未预加载数据字典vm_status"
      },
      {
        "label": "B",
        "text": "设备状态字段prop绑定错误"
      },
      {
        "label": "C",
        "text": "对话框宽度设置过小"
      },
      {
        "label": "D",
        "text": "API请求未携带点位ID"
      }
    ],
    "answer": "AB",
    "analysis": "功能描述中提到设备状态无内容是因为未预加载数据字典vm_status，此外prop绑定错误也会导致数据无法正确显示。对话框宽度不影响内容加载，API请求未携带点位ID会导致无设备数据，而非状态列无内容。"
  },
  {
    "id": "s2-sec2-q46",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 46,
    "stem": "使用若依代码生成器实现课程管理功能的步骤包括以下哪些？",
    "options": [
      {
        "label": "A",
        "text": "准备课程表结构和数据SQL文件"
      },
      {
        "label": "B",
        "text": "登录系统并导入课程表"
      },
      {
        "label": "C",
        "text": "修改代码生成器的字段信息"
      },
      {
        "label": "D",
        "text": "下载生成的代码并导入到项目中"
      }
    ],
    "answer": "ABCD",
    "analysis": "根据步骤分析，使用若依代码生成器实现课程管理功能的步骤包括准备SQL文件、导入课程表、修改字段信息、下载并导入代码等。"
  },
  {
    "id": "s2-sec2-q47",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 47,
    "stem": "点位表(tb_node)中的必填字段有？",
    "options": [
      {
        "label": "A",
        "text": "node_name"
      },
      {
        "label": "B",
        "text": "address"
      },
      {
        "label": "C",
        "text": "business_type"
      },
      {
        "label": "D",
        "text": "region_id"
      }
    ],
    "answer": "AB",
    "analysis": "根据tb_node表的创建语句，node_name和address字段设置为NOT NULL，是必填项；business_type和region_id字段未设置NOT NULL，为可选字段。因此正确答案是AB。"
  },
  {
    "id": "s2-sec2-q48",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 48,
    "stem": "在查看详情功能中，需要定义的响应式对象包括以下哪些？",
    "options": [
      {
        "label": "A",
        "text": "vmList"
      },
      {
        "label": "B",
        "text": "nodeOpen"
      },
      {
        "label": "C",
        "text": "loadAllParams"
      },
      {
        "label": "D",
        "text": "vm_status"
      }
    ],
    "answer": "AB",
    "analysis": "实现思路中提到需要将返回数据封装至响应式对象vmList，并通过nodeOpen控制对话框显示，这两个对象均需定义为响应式。loadAllParams用于参数传递，vm_status是数据字典，不属于响应式对象。"
  },
  {
    "id": "s2-sec2-q49",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 49,
    "stem": "以下哪些业务场景适合使用若依代码生成器的主子表模板？",
    "options": [
      {
        "label": "A",
        "text": "订单表与订单明细表的一对多关系"
      },
      {
        "label": "B",
        "text": "部门表的层级关系展示"
      },
      {
        "label": "C",
        "text": "商品表与商品图片表的一对多关系"
      },
      {
        "label": "D",
        "text": "用户表的简单增删改查"
      }
    ],
    "answer": "AC",
    "analysis": "主子表模板适用于一对多关系的数据处理，如订单与订单明细、商品与商品图片；部门层级关系使用树表模板，用户表简单操作使用单表模板。"
  },
  {
    "id": "s2-sec2-q50",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 50,
    "stem": "在人员管理模块中，员工新增表单中需进行必填校验的字段包括？",
    "options": [
      {
        "label": "A",
        "text": "人员名称"
      },
      {
        "label": "B",
        "text": "所属区域ID"
      },
      {
        "label": "C",
        "text": "联系电话"
      },
      {
        "label": "D",
        "text": "员工头像"
      }
    ],
    "answer": "ABCD",
    "analysis": "员工新增表单中人员名称、所属区域ID、角色ID、联系电话、员工头像、是否启用均需必填校验。"
  },
  {
    "id": "s2-sec2-q51",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 51,
    "stem": "在设备管理页面中，导入并调用的API包括哪些？",
    "options": [
      {
        "label": "A",
        "text": "listVmType"
      },
      {
        "label": "B",
        "text": "listPartner"
      },
      {
        "label": "C",
        "text": "loadAllParams"
      },
      {
        "label": "D",
        "text": "getVmTypeList"
      }
    ],
    "answer": "ABC",
    "analysis": "导入的API包括listVmType、listPartner和loadAllParams，getVmTypeList是自定义方法，不是导入的API。"
  },
  {
    "id": "s2-sec2-q52",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 52,
    "stem": "在角色控件改造中，调用listRole方法查询角色列表时使用了loadAllParams参数。请问，loadAllParams参数的作用是什么？",
    "options": [
      {
        "label": "A",
        "text": "设置分页查询条件"
      },
      {
        "label": "B",
        "text": "查询所有角色列表"
      },
      {
        "label": "C",
        "text": "限制查询结果数量"
      },
      {
        "label": "D",
        "text": "排序查询结果"
      }
    ],
    "answer": "AB",
    "analysis": "根据题目中的描述，loadAllParams是分页查询条件，设置的分页是1-10000页，主要功能是查询出所有的role角色列表。因此，loadAllParams的作用是设置分页查询条件并查询所有角色列表。"
  },
  {
    "id": "s2-sec2-q53",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 53,
    "stem": "在Web项目中使用数据字典管理静态数据的主要优势包括（）",
    "options": [
      {
        "label": "A",
        "text": "提高静态数据的复用性，实现一处编写多处使用"
      },
      {
        "label": "B",
        "text": "简化静态数据的修改流程，无需逐个修改使用该数据的页面"
      },
      {
        "label": "C",
        "text": "减少数据库存储空间，提升系统性能"
      },
      {
        "label": "D",
        "text": "支持动态数据的实时更新，无需重启系统"
      }
    ],
    "answer": "ABC",
    "analysis": "数据字典主要用于管理静态数据，其优势包括复用性、易维护性和存储优化。动态数据的实时更新并非数据字典的核心优势，因此D选项错误。"
  },
  {
    "id": "s2-sec2-q54",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 54,
    "stem": "以下哪些属于若依官方框架版本的适用场景？",
    "options": [
      {
        "label": "A",
        "text": "快速构建传统Web应用（前后端混合版本）"
      },
      {
        "label": "B",
        "text": "现代化前后端分离Web应用开发"
      },
      {
        "label": "C",
        "text": "大型分布式企业级应用（微服务版本）"
      },
      {
        "label": "D",
        "text": "跨平台移动端应用开发"
      }
    ],
    "answer": "ABCD",
    "analysis": "若依官方提供的四个版本分别对应传统Web、前后端分离、微服务、移动端应用场景。"
  },
  {
    "id": "s2-sec2-q55",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 55,
    "stem": "在使用若依代码生成器生成树表时，需要配置以下哪些字段？",
    "options": [
      {
        "label": "A",
        "text": "树的编码字段"
      },
      {
        "label": "B",
        "text": "树的父编码字段"
      },
      {
        "label": "C",
        "text": "树的名称字段"
      },
      {
        "label": "D",
        "text": "树的排序字段"
      }
    ],
    "answer": "ABC",
    "analysis": "树表生成需要配置树的编码字段、树的父编码字段和树的名称字段，排序字段不属于树表的必要配置字段。"
  },
  {
    "id": "s2-sec2-q56",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 56,
    "stem": "区域详情查看功能的实现步骤包括以下哪些？",
    "options": [
      {
        "label": "A",
        "text": "在区域列表操作栏添加查看详情按钮"
      },
      {
        "label": "B",
        "text": "为查看详情按钮设置manage:node:list权限"
      },
      {
        "label": "C",
        "text": "绑定getRegionInfo方法到查看详情按钮"
      },
      {
        "label": "D",
        "text": "创建查看详情对话框并设置标题为\"区域详情\""
      }
    ],
    "answer": "ABCD",
    "analysis": "区域详情查看功能的实现需要完成添加按钮、设置权限、绑定方法和创建对话框等步骤。"
  },
  {
    "id": "s2-sec2-q57",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 57,
    "stem": "实现区域文本框改下拉框的步骤包括以下哪些？",
    "options": [
      {
        "label": "A",
        "text": "引入区域API的listRegion方法"
      },
      {
        "label": "B",
        "text": "定义查询条件对象loadAllParams"
      },
      {
        "label": "C",
        "text": "实现getRegionList方法查询区域列表"
      },
      {
        "label": "D",
        "text": "将el-input替换为el-select并绑定区域列表"
      }
    ],
    "answer": "ABCD",
    "analysis": "区域下拉框的实现步骤包括引入API方法、定义查询参数、实现查询方法、替换输入框为下拉框，因此ABCD均正确。"
  },
  {
    "id": "s2-sec2-q58",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 58,
    "stem": "使用通义灵码改造售价列的步骤包括？",
    "options": [
      {
        "label": "A",
        "text": "找到售价列，右键-通义灵码-解释代码"
      },
      {
        "label": "B",
        "text": "输入提示词“使用vue3语法在售价前显示￥”"
      },
      {
        "label": "C",
        "text": "复制生成的代码，替换原始代码"
      },
      {
        "label": "D",
        "text": "无需测试修改后的代码"
      }
    ],
    "answer": "ABC",
    "analysis": "课程中给出的售价列改造步骤包括解释代码、输入提示词、复制替换代码和测试修改后的代码，所以D选项错误。"
  },
  {
    "id": "s2-sec2-q59",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 59,
    "stem": "设备状态页面列表展示区改造包括以下哪些操作？",
    "options": [
      {
        "label": "A",
        "text": "移除批量操作复选框"
      },
      {
        "label": "B",
        "text": "新增序号列"
      },
      {
        "label": "C",
        "text": "删除合作商列"
      },
      {
        "label": "D",
        "text": "保留设备状态列标题不变"
      }
    ],
    "answer": "ABC",
    "analysis": "根据课程内容，列表展示区改造需移除批量操作复选框、新增序号列、删除合作商列，设备状态列标题需改为运营状态，因此选项D错误。"
  },
  {
    "id": "s2-sec2-q60",
    "set": "Web高级开发实践复习题2",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 60,
    "stem": "设备类型表的主要字段包括以下哪些？",
    "options": [
      {
        "label": "A",
        "text": "主键（自增）"
      },
      {
        "label": "B",
        "text": "型号名称与编码"
      },
      {
        "label": "C",
        "text": "设备图片"
      },
      {
        "label": "D",
        "text": "货道行列规格"
      }
    ],
    "answer": "ABCD",
    "analysis": "根据设备类型表的设计，其主要字段包括主键（自增）、型号名称与编码、设备图片、货道行列规格、货道容量等。因此正确答案是ABCD。"
  },
  {
    "id": "s2-sec3-q61",
    "set": "Web高级开发实践复习题2",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 61,
    "stem": "在新增设备窗口中，设备编号不需要手动录入，系统自动生成。相关代码为：<el-form-item label=\"设备编号\"> <span>{{ form.innerCode == null ? '系统自动生成' : form.innerCode }}</span> </el-form-item>。这里使用了Vue的{{}}语法进行数据绑定，判断{{form.innerCode}}是否为null，若为null则显示'系统自动生成'，否则显示{{form.innerCode}}的值。请问这里的{{form.innerCode}}是通过____1____方式获取的，而判断条件使用的是____2____运算符。",
    "options": [],
    "answer": "第1空:v-model双向绑定 第2空:== null",
    "analysis": "在Vue中，form.innerCode通常是通过v-model指令与表单元素进行双向绑定的，这样可以实时获取和更新表单数据。而判断form.innerCode是否为null时，使用的是== null运算符，它会同时判断null和undefined。"
  },
  {
    "id": "s2-sec3-q62",
    "set": "Web高级开发实践复习题2",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 62,
    "stem": "员工表代码生成时，生成模块名应设置为____1____，上级菜单选择____2____。",
    "options": [],
    "answer": "第1空:manage 第2空:人员管理",
    "analysis": "员工表生成信息配置中，生成模块名为manage，上级菜单为人员管理。"
  },
  {
    "id": "s2-sec3-q63",
    "set": "Web高级开发实践复习题2",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 63,
    "stem": "在若依项目中，ruoyi-admin模块依赖的核心模块是______，前端工程中类似于Maven的pom.xml的配置文件是______。",
    "options": [],
    "answer": "第1空:ruoyi-framework 第2空:package.json",
    "analysis": "ruoyi-admin模块的pom.xml中依赖了ruoyi-framework核心模块；前端工程的package.json用于管理依赖和项目配置，类似于后端的pom.xml。"
  },
  {
    "id": "s2-sec3-q64",
    "set": "Web高级开发实践复习题2",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 64,
    "stem": "若依系统的菜单分为三种类型，分别是目录菜单、页面菜单和______菜单。",
    "options": [],
    "answer": "第1空:按钮",
    "analysis": "根据若依系统的菜单类型说明，菜单有目录菜单、页面菜单和按钮菜单三种类型，按钮菜单点开是一个按钮的弹窗。"
  },
  {
    "id": "s2-sec3-q65",
    "set": "Web高级开发实践复习题2",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 65,
    "stem": "点位列表查询接口的Path是______，请求方法是______。",
    "options": [],
    "answer": "第1空:/manage/node/list 第2空:GET",
    "analysis": "根据接口文档，点位列表查询接口的Path为/manage/node/list，请求方法为GET。"
  },
  {
    "id": "s2-sec4-q66",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 66,
    "stem": "若依代码生成器生成的代码包中包含菜单数据的SQL文件。",
    "options": [],
    "answer": "正确",
    "analysis": "根据步骤分析，生成的代码包中包含菜单SQL文件，需要导入到数据库中。"
  },
  {
    "id": "s2-sec4-q67",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 67,
    "stem": "新增点位对话框中的区域下拉框与列表查询的区域下拉框使用相同的regionList数据，因此无需重新实现查询逻辑。",
    "options": [],
    "answer": "正确",
    "analysis": "新增对话框和列表查询使用同一区域列表数据，可复用查询逻辑，描述正确。"
  },
  {
    "id": "s2-sec4-q68",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 68,
    "stem": "新增设备和货道的操作不需要事务管理。",
    "options": [],
    "answer": "错误",
    "analysis": "需添加事务注解确保两张表操作的原子性，保证数据一致性。"
  },
  {
    "id": "s2-sec4-q69",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 69,
    "stem": "修改课程学科为数据字典维护后，只需替换前端Vue页面代码，无需重启后端服务即可生效。（）",
    "options": [],
    "answer": "正确",
    "analysis": "前端Vue页面代码替换后，刷新浏览器即可加载新的页面逻辑，无需重启后端服务。"
  },
  {
    "id": "s2-sec4-q70",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 70,
    "stem": "更新时间列改造时，需要使用通义灵码的“解释代码”功能来生成改造后的代码。",
    "options": [],
    "answer": "正确",
    "analysis": "课程中提到“找到更新时间列，使用通义灵码添加时分秒。点击‘解释代码’，会生成代码的解释”，然后通过关键词提示生成改造后的代码。"
  },
  {
    "id": "s2-sec4-q71",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 71,
    "stem": "如果不设置@Transactional的rollbackFor属性，当方法抛出IOException（受检异常）时，事务会自动回滚。",
    "options": [],
    "answer": "错误",
    "analysis": "默认情况下，Spring事务仅在遇到RuntimeException和Error时回滚，受检异常不会触发回滚，需要设置rollbackFor = Exception.class才能回滚。"
  },
  {
    "id": "s2-sec4-q72",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 72,
    "stem": "在点位管理列表查询前端改造中，原代码中区域ID的显示使用的是prop=\"regionId\"，改造后应使用prop=\"region.regionName\"来显示所在区域的名称。",
    "options": [],
    "answer": "正确",
    "analysis": "改造后将区域ID的显示替换为所在区域的名称，通过prop绑定到region对象的regionName属性。"
  },
  {
    "id": "s2-sec4-q73",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 73,
    "stem": "在若依框架中添加自定义菜单图标时，需将SVG文件放入src/assets/icons/svg目录",
    "options": [],
    "answer": "正确",
    "analysis": "系统会自动扫描该目录下的SVG文件作为可选菜单图标"
  },
  {
    "id": "s2-sec4-q74",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 74,
    "stem": "导入后端代码时，Role实体类可能出现换行错误，需手动调整。",
    "options": [],
    "answer": "正确",
    "analysis": "根据项目总结，Role实体类导入后可能出现换行错误，需手动修复。"
  },
  {
    "id": "s2-sec4-q75",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 75,
    "stem": "区域搜索改造后，管理员可以直接选择区域名称进行查询，提交时使用区域ID，因此需要多表查询获取区域名称。",
    "options": [],
    "answer": "正确",
    "analysis": "区域下拉框展示名称但提交ID，因此需要通过多表查询将ID转换为名称显示，题目描述正确。"
  },
  {
    "id": "s2-sec4-q76",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 76,
    "stem": "点位管理的业务流程顺序是：登录系统→新增合作商→新增区域→新增区域点位。",
    "options": [],
    "answer": "错误",
    "analysis": "根据业务流程说明，正确顺序应为登录系统→新增区域→新增合作商→新增区域点位。因此该描述错误。"
  },
  {
    "id": "s2-sec4-q77",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 77,
    "stem": "在员工表Mapper层接口中，使用@Update注解映射SQL语句时，如果SQL语句比较简单，可以不在XML中编写SQL语句。",
    "options": [],
    "answer": "正确",
    "analysis": "MyBatis支持注解方式直接编写简单SQL语句，无需在XML中配置。"
  },
  {
    "id": "s2-sec4-q78",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 78,
    "stem": "合作商ID搜索功能需要直接删除，因此在代码中只需删除对应的el-form-item标签即可。",
    "options": [],
    "answer": "正确",
    "analysis": "题目要求直接删除合作商ID搜索功能，删除对应的el-form-item标签即可实现，描述正确。"
  },
  {
    "id": "s2-sec4-q79",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 79,
    "stem": "在所属区域下拉列表改造中，数据是通过API查询区域列表获取的。",
    "options": [],
    "answer": "正确",
    "analysis": "根据题目中的所属区域下拉列表改造步骤，数据通过API查询区域列表获取，因此该说法正确。"
  },
  {
    "id": "s2-sec4-q80",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 80,
    "stem": "点位管理列表查询的SQL语句中，GROUP BY子句只需要包含n.id即可，不需要包含其他非聚合列。",
    "options": [],
    "answer": "错误",
    "analysis": "为了避免SQL完整性错误，GROUP BY子句需要包含SELECT子句中的所有非聚合列。"
  },
  {
    "id": "s2-sec4-q81",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 81,
    "stem": "在设备管理流程中，员工负责录入设备信息，管理员负责设备投放和商品补货工作。",
    "options": [],
    "answer": "错误",
    "analysis": "根据设备管理流程，管理员录入设备信息后，员工负责设备投放和商品补货工作。因此题目中的角色职责描述错误，正确答案是错。"
  },
  {
    "id": "s2-sec4-q82",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 82,
    "stem": "设备表中的addr字段可以通过BeanUtil.copyProperties自动从点位表的address字段获取。",
    "options": [],
    "answer": "错误",
    "analysis": "由于设备表和点位表中地址字段名不同（addr vs address），BeanUtil.copyProperties无法自动映射，需手动调用setAddr方法赋值。"
  },
  {
    "id": "s2-sec4-q83",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 83,
    "stem": "ruoyi-system模块中的domain目录存放的是系统代码的业务层实现。",
    "options": [],
    "answer": "错误",
    "analysis": "ruoyi-system模块的domain目录存放的是实体类，业务层代码位于service目录下。"
  },
  {
    "id": "s2-sec4-q84",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 84,
    "stem": "在编写区域列表的分页查询SQL语句时，末尾可以包含分号。",
    "options": [],
    "answer": "错误",
    "analysis": "题目中提到分页查询语句末尾不能包含分号，因此该说法错误。"
  },
  {
    "id": "s2-sec4-q85",
    "set": "Web高级开发实践复习题2",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 85,
    "stem": "多表关联查询时，若关联条件不正确可能产生笛卡尔积，导致数据量剧增。",
    "options": [],
    "answer": "正确",
    "analysis": "多表关联时若缺少正确的关联条件（如ON子句），会产生笛卡尔积，导致结果集行数呈指数级增长。"
  },
  {
    "id": "s2-sec5-q86",
    "set": "Web高级开发实践复习题2",
    "section": "五、 简答题",
    "type": "简答题",
    "number": 86,
    "stem": "在RuoYi-Vue项目中，修改数据库连接信息需要编辑哪个配置文件？该文件中需要配置哪些核心参数？",
    "options": [],
    "answer": "需要编辑ruoyi-admin模块下的application-druid.yml文件，核心参数包括数据库URL、用户名、密码。",
    "analysis": "本题考查RuoYi-Vue项目的数据源配置，需定位到具体配置文件及关键参数。"
  },
  {
    "id": "s2-sec5-q87",
    "set": "Web高级开发实践复习题2",
    "section": "五、 简答题",
    "type": "简答题",
    "number": 87,
    "stem": "简述口味列表改造中，改变口味名称时更新当前选中的口味列表的实现步骤。",
    "options": [],
    "answer": "1. 在index.vue的js中定义响应式数据checkValueList存储当前选中口味列表数组；2. 定义changeFlavorName函数，函数参数为当前行数据row；3. 在函数中清空当前行的value（row.value=[]）；4. 根据选中的name从dishFlavorListSelect中查找对应的value，并赋值给checkValueList；5. 在口味名称的下拉框中绑定@change事件，调用changeFlavorName函数并传递当前行数据。",
    "analysis": "课程中给出的实现步骤包括定义响应式数据、定义函数、清空value、查找value并更新checkValueList、绑定事件。"
  },
  {
    "id": "s3-sec1-q1",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 1,
    "stem": "定义口味名称和口味列表的静态数据时，采用的格式是？",
    "options": [
      {
        "label": "A",
        "text": "XML格式"
      },
      {
        "label": "B",
        "text": "JSON数组格式"
      },
      {
        "label": "C",
        "text": "YAML格式"
      },
      {
        "label": "D",
        "text": "CSV格式"
      }
    ],
    "answer": "B",
    "analysis": "课程中明确说明“定义口味名称和口味列表的静态数据，采用JSON数组格式”。"
  },
  {
    "id": "s3-sec1-q2",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 2,
    "stem": "需要删除“修改”和“删除”按钮的图标，下列哪个操作是正确的？",
    "options": [
      {
        "label": "A",
        "text": "删除el-button标签中的icon属性"
      },
      {
        "label": "B",
        "text": "将icon属性值改为空字符串"
      },
      {
        "label": "C",
        "text": "删除el-button标签中的type属性"
      },
      {
        "label": "D",
        "text": "将el-button标签改为el-link标签"
      }
    ],
    "answer": "A",
    "analysis": "删除按钮图标需移除el-button标签中的icon属性，因此A选项正确。"
  },
  {
    "id": "s3-sec1-q3",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 3,
    "stem": "修改若依框架登录页面的背景图，需要修改哪个文件？",
    "options": [
      {
        "label": "A",
        "text": "src/views/login.vue"
      },
      {
        "label": "B",
        "text": "src/assets/login-bg.jpg"
      },
      {
        "label": "C",
        "text": "public/login-bg.png"
      },
      {
        "label": "D",
        "text": "src/setting.js"
      }
    ],
    "answer": "A",
    "analysis": "登录页面的背景图设置在src/views/login.vue组件中，需修改该文件的背景图引用"
  },
  {
    "id": "s3-sec1-q4",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 4,
    "stem": "在区域下拉框的el-option中，:label和:value应分别绑定区域的哪个属性？",
    "options": [
      {
        "label": "A",
        "text": ":label绑定regionId，:value绑定regionName"
      },
      {
        "label": "B",
        "text": ":label绑定regionName，:value绑定id"
      },
      {
        "label": "C",
        "text": ":label绑定id，:value绑定regionName"
      },
      {
        "label": "D",
        "text": ":label绑定regionName，:value绑定regionId"
      }
    ],
    "answer": "B",
    "analysis": "根据题目中的代码示例，el-option的:label绑定item.regionName，:value绑定item.id，因此B选项正确。"
  },
  {
    "id": "s3-sec1-q5",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 5,
    "stem": "若依框架中，字典类型表（sys_dict_type）与字典数据表的关系是？（）",
    "options": [
      {
        "label": "A",
        "text": "一对一关系"
      },
      {
        "label": "B",
        "text": "一对多关系"
      },
      {
        "label": "C",
        "text": "多对多关系"
      },
      {
        "label": "D",
        "text": "无直接关系"
      }
    ],
    "answer": "B",
    "analysis": "一个字典类型（如“性别”）可以对应多个字典数据（如“男”“女”“未知”），因此两者为一对多关系。"
  },
  {
    "id": "s3-sec1-q6",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 6,
    "stem": "若依代码生成器的主子表模板适用于以下哪种业务场景？",
    "options": [
      {
        "label": "A",
        "text": "展示层级关系的部门数据"
      },
      {
        "label": "B",
        "text": "单表的分页条件查询"
      },
      {
        "label": "C",
        "text": "菜品表与口味表的一对多关系处理"
      },
      {
        "label": "D",
        "text": "简单的增删改查操作"
      }
    ],
    "answer": "C",
    "analysis": "主子表模板适用于数据之间存在一对多关系的场景，如菜品表和口味表的关系，而层级关系数据使用树表模板，单表操作使用单表模板。"
  },
  {
    "id": "s3-sec1-q7",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 7,
    "stem": "物联网（IoT）的核心是让什么通过互联网连接起来实现信息交换？",
    "options": [
      {
        "label": "A",
        "text": "人类用户"
      },
      {
        "label": "B",
        "text": "各种物品"
      },
      {
        "label": "C",
        "text": "计算机设备"
      },
      {
        "label": "D",
        "text": "移动终端"
      }
    ],
    "answer": "B",
    "analysis": "物联网（IoT）的核心是让各种物品通过互联网连接起来，实现信息的交换和通信，而不仅仅是人类用户、计算机设备或移动终端。"
  },
  {
    "id": "s3-sec1-q8",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 8,
    "stem": "合作商列表展示部分主键改为序号时，需要设置type属性值为？",
    "options": [
      {
        "label": "A",
        "text": "index"
      },
      {
        "label": "B",
        "text": "seq"
      },
      {
        "label": "C",
        "text": "number"
      },
      {
        "label": "D",
        "text": "id"
      }
    ],
    "answer": "A",
    "analysis": "修改主键ID为序号时，需指定type属性值为index并设置宽度为50像素。"
  },
  {
    "id": "s3-sec1-q9",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 9,
    "stem": "在若依代码生成器中，“上级菜单”选项的作用是什么？",
    "options": [
      {
        "label": "A",
        "text": "设置代码生成的优先级"
      },
      {
        "label": "B",
        "text": "决定生成的菜单在系统中的位置"
      },
      {
        "label": "C",
        "text": "指定代码生成的模板文件"
      },
      {
        "label": "D",
        "text": "设置数据库连接信息"
      }
    ],
    "answer": "B",
    "analysis": "根据步骤分析，上级菜单决定生成好的代码放到哪个菜单下，默认在系统工具下。"
  },
  {
    "id": "s3-sec1-q10",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 10,
    "stem": "在Vue组件中，定义设备类型列表的响应式数据应使用哪个方法？",
    "options": [
      {
        "label": "A",
        "text": "ref()"
      },
      {
        "label": "B",
        "text": "reactive()"
      },
      {
        "label": "C",
        "text": "computed()"
      },
      {
        "label": "D",
        "text": "watch()"
      }
    ],
    "answer": "A",
    "analysis": "使用ref()可以定义基本类型或对象类型的响应式数据，设备类型列表vmTypeList使用ref()定义为响应式数组。"
  },
  {
    "id": "s3-sec1-q11",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 11,
    "stem": "在sky-admin模块中引入sky-merchant依赖时，以下哪个说法正确？",
    "options": [
      {
        "label": "A",
        "text": "需要指定sky-merchant的版本号"
      },
      {
        "label": "B",
        "text": "依赖的groupId是com.ruoyi"
      },
      {
        "label": "C",
        "text": "依赖的artifactId是sky-merchant"
      },
      {
        "label": "D",
        "text": "不需要在sky-admin的pom.xml中添加依赖"
      }
    ],
    "answer": "C",
    "analysis": "课程中提到在sky-admin的pom.xml中引入sky-merchant依赖时，artifactId为sky-merchant，且由于父工程已做版本锁定，不需要指定版本号。因此C选项正确。"
  },
  {
    "id": "s3-sec1-q12",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 12,
    "stem": "替换若依框架系统页面中的logo标识，需要修改哪个文件？",
    "options": [
      {
        "label": "A",
        "text": "public/favicon.ico"
      },
      {
        "label": "B",
        "text": "src/assets/logo/logo.png"
      },
      {
        "label": "C",
        "text": "src/components/Logo.vue"
      },
      {
        "label": "D",
        "text": ".env.development"
      }
    ],
    "answer": "B",
    "analysis": "系统页面中的logo通过src/assets/logo/logo.png文件控制，替换该文件即可更新页面logo"
  },
  {
    "id": "s3-sec1-q13",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 13,
    "stem": "创建sky-merchant子模块时，以下哪个操作是错误的？",
    "options": [
      {
        "label": "A",
        "text": "选择Maven结构创建子模块"
      },
      {
        "label": "B",
        "text": "子模块SDK与父项目保持一致"
      },
      {
        "label": "C",
        "text": "在sky-merchant的pom.xml中导入sky-framework依赖"
      },
      {
        "label": "D",
        "text": "父工程中不需要添加sky-merchant的版本锁定"
      }
    ],
    "answer": "D",
    "analysis": "课程明确指出需要在父工程的pom.xml中添加sky-merchant的版本锁定，这样子模块在引入依赖时不需要指定版本。因此D选项的说法是错误的。"
  },
  {
    "id": "s3-sec1-q14",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 14,
    "stem": "将口味名称的文本框改为下拉框时，使用的Vue3组件是？",
    "options": [
      {
        "label": "A",
        "text": "<el-input>"
      },
      {
        "label": "B",
        "text": "<el-select>"
      },
      {
        "label": "C",
        "text": "<el-button>"
      },
      {
        "label": "D",
        "text": "<el-table>"
      }
    ],
    "answer": "B",
    "analysis": "课程中给出的改造后代码使用了<el-select>组件来实现下拉框功能。"
  },
  {
    "id": "s3-sec1-q15",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 15,
    "stem": "在若依框架项目中，要替换浏览器标签页的logo标识，正确的操作是？",
    "options": [
      {
        "label": "A",
        "text": "将新logo.png放入public文件夹，无需重命名"
      },
      {
        "label": "B",
        "text": "删除public文件夹中原有的favicon.ico，将新logo重命名为favicon.ico放入该文件夹"
      },
      {
        "label": "C",
        "text": "修改src/assets/logo/logo.png文件"
      },
      {
        "label": "D",
        "text": "在.env.development中配置logo路径"
      }
    ],
    "answer": "B",
    "analysis": "浏览器标签页logo通过public文件夹中的favicon.ico控制，需替换该文件并保持名称一致"
  },
  {
    "id": "s3-sec1-q16",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 16,
    "stem": "若依框架中，用户表的性别字段存储的是字典数据表中的哪个值？（）",
    "options": [
      {
        "label": "A",
        "text": "字典标签（dict_label）"
      },
      {
        "label": "B",
        "text": "字典值（dict_value）"
      },
      {
        "label": "C",
        "text": "字典类型（dict_type）"
      },
      {
        "label": "D",
        "text": "字典类型名称（dict_name）"
      }
    ],
    "answer": "B",
    "analysis": "为优化存储，用户表中存储的是字典数据表中的dict_value（如性别对应的“0”“1”），而非显示用的dict_label。"
  },
  {
    "id": "s3-sec1-q17",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 17,
    "stem": "在创建区域详情查看对话框时，应复制以下哪个对话框的模板进行修改？",
    "options": [
      {
        "label": "A",
        "text": "删除对话框"
      },
      {
        "label": "B",
        "text": "修改对话框"
      },
      {
        "label": "C",
        "text": "新增对话框"
      },
      {
        "label": "D",
        "text": "搜索对话框"
      }
    ],
    "answer": "B",
    "analysis": "区域详情查看对话框的结构与修改对话框相似，因此应复制修改对话框的模板进行修改。"
  },
  {
    "id": "s3-sec1-q18",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 18,
    "stem": "为避免数据字典修改后历史数据不兼容的问题，正确的做法是？（）",
    "options": [
      {
        "label": "A",
        "text": "在添加业务数据前先配置好数据字典"
      },
      {
        "label": "B",
        "text": "每次修改数据字典后重启系统"
      },
      {
        "label": "C",
        "text": "将所有历史数据删除后重新录入"
      },
      {
        "label": "D",
        "text": "修改数据库表结构，增加字典值字段"
      }
    ],
    "answer": "A",
    "analysis": "提前配置数据字典可确保业务数据录入时直接使用字典值，避免后续手动修改历史数据的麻烦，是数据字典维护的最佳实践。"
  },
  {
    "id": "s3-sec1-q19",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 19,
    "stem": "在点位详情对话框的设备编号列中，prop属性绑定的字段是以下哪一个？",
    "options": [
      {
        "label": "A",
        "text": "deviceCode"
      },
      {
        "label": "B",
        "text": "innerCode"
      },
      {
        "label": "C",
        "text": "vmCode"
      },
      {
        "label": "D",
        "text": "equipmentId"
      }
    ],
    "answer": "B",
    "analysis": "根据对话框代码示例，设备编号列的prop属性绑定为innerCode：<el-table-column label=\"设备编号\" align=\"center\" prop=\"innerCode\" />。"
  },
  {
    "id": "s3-sec1-q20",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 20,
    "stem": "在Vue组件中，若要在页面加载时调用getVmTypeList()和getPartnerList()方法，应在哪个生命周期钩子中执行？",
    "options": [
      {
        "label": "A",
        "text": "onMounted"
      },
      {
        "label": "B",
        "text": "onBeforeMount"
      },
      {
        "label": "C",
        "text": "onUpdated"
      },
      {
        "label": "D",
        "text": "onUnmounted"
      }
    ],
    "answer": "A",
    "analysis": "onMounted钩子在组件挂载完成后执行，适合用于调用API获取初始化数据，如设备类型和合作商列表。"
  },
  {
    "id": "s3-sec1-q21",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 21,
    "stem": "点位表中region_id字段的外键约束作用是？",
    "options": [
      {
        "label": "A",
        "text": "确保region_id对应的区域存在"
      },
      {
        "label": "B",
        "text": "提高查询性能"
      },
      {
        "label": "C",
        "text": "自动填充区域名称"
      },
      {
        "label": "D",
        "text": "防止重复插入"
      }
    ],
    "answer": "A",
    "analysis": "外键约束用于维护数据完整性，确保点位表中的region_id必须存在于区域表中，避免无效数据插入。"
  },
  {
    "id": "s3-sec1-q22",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 22,
    "stem": "在设备类型视图组件的搜索条件改造中，需要删除型号编码的搜索条件，只保留型号名称搜索框。以下哪种操作能正确实现这一需求？",
    "options": [
      {
        "label": "A",
        "text": "删除型号编码和型号名称两个搜索框"
      },
      {
        "label": "B",
        "text": "删除型号编码搜索框的HTML代码，仅保留型号名称搜索框"
      },
      {
        "label": "C",
        "text": "将型号编码搜索框的type属性改为hidden"
      },
      {
        "label": "D",
        "text": "在型号编码搜索框上添加v-if=\"false\"指令"
      }
    ],
    "answer": "B",
    "analysis": "根据题目要求，需要删除型号编码的搜索条件，因此正确的操作是直接删除型号编码搜索框的HTML代码，仅保留型号名称搜索框。其他选项如隐藏或条件渲染虽然能暂时不显示，但并未真正删除该搜索条件，不符合题目中的“删除”要求。"
  },
  {
    "id": "s3-sec1-q23",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 23,
    "stem": "在VendingMachineServiceImpl的insertVendingMachine方法中，使用哪个工具类复制点位表信息到设备表？",
    "options": [
      {
        "label": "A",
        "text": "BeanUtil"
      },
      {
        "label": "B",
        "text": "MapStruct"
      },
      {
        "label": "C",
        "text": "Jackson"
      },
      {
        "label": "D",
        "text": "Gson"
      }
    ],
    "answer": "A",
    "analysis": "代码中使用BeanUtil.copyProperties方法拷贝点位表中与设备表属性名称一致的字段，忽略主键ID冲突。"
  },
  {
    "id": "s3-sec1-q24",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 24,
    "stem": "若依框架中，数据字典主要用于维护系统中的哪种数据？（）",
    "options": [
      {
        "label": "A",
        "text": "高频变动的动态业务数据"
      },
      {
        "label": "B",
        "text": "不经常变动的静态数据"
      },
      {
        "label": "C",
        "text": "用户上传的多媒体数据"
      },
      {
        "label": "D",
        "text": "系统日志数据"
      }
    ],
    "answer": "B",
    "analysis": "数据字典的核心作用是管理系统中不经常变动的静态数据（如性别、状态等），实现数据的统一维护与复用。"
  },
  {
    "id": "s3-sec1-q25",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 25,
    "stem": "在创建点位管理目录菜单时，上级菜单应选择？",
    "options": [
      {
        "label": "A",
        "text": "系统管理"
      },
      {
        "label": "B",
        "text": "主类目"
      },
      {
        "label": "C",
        "text": "区域管理"
      },
      {
        "label": "D",
        "text": "合作商管理"
      }
    ],
    "answer": "B",
    "analysis": "根据需求说明，点位管理作为一级菜单，与系统管理、系统监控等同级，因此上级菜单应选择主类目，正确答案是B。"
  },
  {
    "id": "s3-sec1-q26",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 26,
    "stem": "在点位管理列表查询前端改造中，原代码中合作商ID的显示使用的是prop=\"partnerId\"，改造后应使用以下哪个prop来显示合作商名称？",
    "options": [
      {
        "label": "A",
        "text": "partner.partnerName"
      },
      {
        "label": "B",
        "text": "partnerId.name"
      },
      {
        "label": "C",
        "text": "partnerName"
      },
      {
        "label": "D",
        "text": "partner.id"
      }
    ],
    "answer": "A",
    "analysis": "改造后通过partner对象的partnerName属性来显示合作商名称，即partner.partnerName。"
  },
  {
    "id": "s3-sec1-q27",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 27,
    "stem": "在修改课程管理的学科字段为数据字典维护时，下载代码生成器生成的代码后，需要替换的是哪个部分的代码？（）",
    "options": [
      {
        "label": "A",
        "text": "后端Java代码"
      },
      {
        "label": "B",
        "text": "数据库SQL脚本"
      },
      {
        "label": "C",
        "text": "前端Vue页面代码"
      },
      {
        "label": "D",
        "text": "配置文件（application.yml）"
      }
    ],
    "answer": "C",
    "analysis": "代码生成器修改字段显示类型后，只需替换前端Vue页面代码即可实现下拉列表的展示，后端代码和数据库无需修改。"
  },
  {
    "id": "s3-sec1-q28",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 28,
    "stem": "若需生成独立访问的表单页面，应选择哪种导出类型？",
    "options": [
      {
        "label": "A",
        "text": "页面"
      },
      {
        "label": "B",
        "text": "弹窗"
      },
      {
        "label": "C",
        "text": "组件"
      },
      {
        "label": "D",
        "text": "模板"
      }
    ],
    "answer": "A",
    "analysis": "导出为“页面”类型可生成独立的Vue页面文件，支持直接访问；“弹窗”类型适用于对话框形式展示表单。"
  },
  {
    "id": "s3-sec1-q29",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 29,
    "stem": "若依前端项目中，类似于Maven的pom.xml的配置文件是？",
    "options": [
      {
        "label": "A",
        "text": "vite.config.js"
      },
      {
        "label": "B",
        "text": "package.json"
      },
      {
        "label": "C",
        "text": "main.js"
      },
      {
        "label": "D",
        "text": "App.vue"
      }
    ],
    "answer": "B",
    "analysis": "package.json是前端项目的配置文件，用于管理依赖包和项目信息，类似于Maven的pom.xml。"
  },
  {
    "id": "s3-sec1-q30",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 30,
    "stem": "在员工表（tb_emp）中，根据区域ID（region_id）更新区域名称（region_name）的SQL语句正确的是：",
    "options": [
      {
        "label": "A",
        "text": "UPDATE tb_emp SET region_name=#{regionName} WHERE region_id=#{regionId}"
      },
      {
        "label": "B",
        "text": "UPDATE tb_emp SET region_id=#{regionId} WHERE region_name=#{regionName}"
      },
      {
        "label": "C",
        "text": "UPDATE tb_emp SET region_name=#{regionName}, region_id=#{regionId}"
      },
      {
        "label": "D",
        "text": "UPDATE tb_emp WHERE region_id=#{regionId} SET region_name=#{regionName}"
      }
    ],
    "answer": "A",
    "analysis": "正确的SQL语句格式应为UPDATE 表名 SET 列名=值 WHERE 条件，A选项符合要求，其他选项存在语法错误或逻辑错误。"
  },
  {
    "id": "s3-sec1-q31",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 31,
    "stem": "点位列表查询接口的regionId参数属于以下哪种类型？",
    "options": [
      {
        "label": "A",
        "text": "Path参数"
      },
      {
        "label": "B",
        "text": "Query参数"
      },
      {
        "label": "C",
        "text": "Body参数"
      },
      {
        "label": "D",
        "text": "Header参数"
      }
    ],
    "answer": "B",
    "analysis": "根据接口文档，regionId是可选的Query参数，用于筛选特定区域的点位列表。"
  },
  {
    "id": "s3-sec1-q32",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 32,
    "stem": "在人员管理模块中，导入前端代码时，需复制的视图组件文件夹是？",
    "options": [
      {
        "label": "A",
        "text": "role"
      },
      {
        "label": "B",
        "text": "emp"
      },
      {
        "label": "C",
        "text": "user"
      },
      {
        "label": "D",
        "text": "system"
      }
    ],
    "answer": "B",
    "analysis": "前端仅需员工管理视图，故复制emp文件夹。"
  },
  {
    "id": "s3-sec1-q33",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 33,
    "stem": "表单中设置的“字段名”主要用于？",
    "options": [
      {
        "label": "A",
        "text": "显示标签名称"
      },
      {
        "label": "B",
        "text": "数据双向绑定"
      },
      {
        "label": "C",
        "text": "验证规则定义"
      },
      {
        "label": "D",
        "text": "组件样式控制"
      }
    ],
    "answer": "B",
    "analysis": "字段名用于Vue的v-model双向绑定，提交数据时的属性名即为设置的字段名。"
  },
  {
    "id": "s3-sec1-q34",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 34,
    "stem": "在人员管理模块中，员工状态字典中，\"启用\"对应的字典值应为？",
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "1"
      },
      {
        "label": "C",
        "text": "1001"
      },
      {
        "label": "D",
        "text": "1002"
      }
    ],
    "answer": "B",
    "analysis": "数据字典配置中明确规定员工状态字典值为：1=启用，0=停用。"
  },
  {
    "id": "s3-sec1-q35",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 35,
    "stem": "在设备修改功能中，后端通过点位ID查询点位表后，使用BeanUtil.copyProperties(node, vendingMachine, \"id\")的目的是？",
    "options": [
      {
        "label": "A",
        "text": "将点位表中所有属性复制到设备实体，包括id"
      },
      {
        "label": "B",
        "text": "将点位表中除id外的相同属性复制到设备实体"
      },
      {
        "label": "C",
        "text": "仅复制点位表中的address属性到设备实体"
      },
      {
        "label": "D",
        "text": "直接更新设备表中的所有冗余字段"
      }
    ],
    "answer": "B",
    "analysis": "BeanUtil.copyProperties(node, vendingMachine, \"id\")的作用是将点位表实体中除id外的相同属性（如business_type、region_id、partner_id）复制到设备实体，确保属性拷贝时排除主键冲突。"
  },
  {
    "id": "s3-sec1-q36",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 36,
    "stem": "在使用若依框架修改器修改项目名称时，以下哪个步骤是正确的？",
    "options": [
      {
        "label": "A",
        "text": "直接修改初始化项目的文件夹名称"
      },
      {
        "label": "B",
        "text": "将初始化项目打成压缩包后用修改器处理"
      },
      {
        "label": "C",
        "text": "修改完成后直接启动原项目"
      },
      {
        "label": "D",
        "text": "修改器会直接覆盖原项目文件"
      }
    ],
    "answer": "B",
    "analysis": "根据课程内容，使用若依框架修改器时需要先将初始化项目打成压缩包，再用修改器处理该压缩包，处理后会生成新的项目文件夹。直接修改文件夹名称或启动原项目都是错误的，修改器不会覆盖原文件而是生成新文件。"
  },
  {
    "id": "s3-sec1-q37",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 37,
    "stem": "重置合作商密码接口的正确请求方式是？",
    "options": [
      {
        "label": "A",
        "text": "GET"
      },
      {
        "label": "B",
        "text": "POST"
      },
      {
        "label": "C",
        "text": "PUT"
      },
      {
        "label": "D",
        "text": "DELETE"
      }
    ],
    "answer": "C",
    "analysis": "根据接口文档，重置密码接口的请求方式为PUT"
  },
  {
    "id": "s3-sec1-q38",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 38,
    "stem": "在新增设备类型的对话框改造中，需要将设备图片移到表单底部。以下哪种操作正确？",
    "options": [
      {
        "label": "A",
        "text": "将设备图片的el-form-item标签移动到表单的最后位置"
      },
      {
        "label": "B",
        "text": "在设备图片的el-form-item标签上添加style=\"position: absolute; bottom: 0\""
      },
      {
        "label": "C",
        "text": "将设备图片的el-form-item标签放在对话框的footer部分"
      },
      {
        "label": "D",
        "text": "在设备图片的el-form-item标签上添加v-if=\"false\"，需要时再显示"
      }
    ],
    "answer": "A",
    "analysis": "根据题目中的原型要求，设备图片需要移到表单底部，因此正确的操作是将设备图片的el-form-item标签移动到表单的最后位置。其他选项如使用绝对定位、放在footer部分或条件渲染均不符合题目中的“移到表单底部”的要求，因此正确答案是A。"
  },
  {
    "id": "s3-sec1-q39",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 39,
    "stem": "在设备类型对话框中，货道容量需要使用el-input-number组件，并限制最小值为1，最大值为10。以下哪个属性设置是正确的？",
    "options": [
      {
        "label": "A",
        "text": "<el-input-number v-model=\"form.channelMaxCapacity\" :min=\"1\" :max=\"10\" />"
      },
      {
        "label": "B",
        "text": "<el-input-number v-model=\"form.channelMaxCapacity\" min=\"1\" max=\"10\" />"
      },
      {
        "label": "C",
        "text": "<el-input-number v-model=\"form.channelMaxCapacity\" :min=\"0\" :max=\"10\" />"
      },
      {
        "label": "D",
        "text": "<el-input-number v-model=\"form.channelMaxCapacity\" :min=\"1\" :max=\"20\" />"
      }
    ],
    "answer": "A",
    "analysis": "Element Plus的el-input-number组件中，min和max是props属性，需要使用v-bind（即冒号语法）来绑定数值。因此正确的属性设置是:min=\"1\"和:max=\"10\"。选项B中没有使用v-bind，会被视为字符串而非数值；选项C的最小值设置为0不符合要求；选项D的最大值设置为20不符合要求。因此正确答案是A。"
  },
  {
    "id": "s3-sec1-q40",
    "set": "Web高级开发实践复习题3",
    "section": "一、 单选题",
    "type": "单选题",
    "number": 40,
    "stem": "在若依代码生成器中，生成的代码文件不包含以下哪个部分？",
    "options": [
      {
        "label": "A",
        "text": "后端代码"
      },
      {
        "label": "B",
        "text": "前端代码"
      },
      {
        "label": "C",
        "text": "数据库SQL脚本"
      },
      {
        "label": "D",
        "text": "服务器配置文件"
      }
    ],
    "answer": "D",
    "analysis": "根据步骤分析，生成的代码包含后端代码、前端代码和菜单SQL，不包含服务器配置文件。"
  },
  {
    "id": "s3-sec2-q41",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 41,
    "stem": "根据Git安装教程，以下哪些是正确的安装步骤？",
    "options": [
      {
        "label": "A",
        "text": "下载安装程序后直接运行，无需处理用户账户控制提示"
      },
      {
        "label": "B",
        "text": "可以选择默认安装路径或自定义路径"
      },
      {
        "label": "C",
        "text": "默认使用Vim作为Git的默认编辑器"
      },
      {
        "label": "D",
        "text": "安装完成后必须启动Git Bash"
      }
    ],
    "answer": "BC",
    "analysis": "安装时需处理UAC提示（点击是），安装完成后可选择是否启动Git Bash，因此AD错误，BC正确。"
  },
  {
    "id": "s3-sec2-q42",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 42,
    "stem": "在设备类型列表展示改造中，需要进行以下哪些调整？",
    "options": [
      {
        "label": "A",
        "text": "删除主键ID列"
      },
      {
        "label": "B",
        "text": "保留复选框用于批量操作"
      },
      {
        "label": "C",
        "text": "调整列顺序与原型保持一致"
      },
      {
        "label": "D",
        "text": "添加创建时间列"
      }
    ],
    "answer": "ABC",
    "analysis": "根据题目中的列表展示部分改造要求，需要删除主键ID列、保留复选框用于批量操作、调整列顺序与原型一致。创建时间字段因数据库不存在故不展示，因此不需要添加。因此正确答案是ABC。"
  },
  {
    "id": "s3-sec2-q43",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 43,
    "stem": "设备管理页面表格列改造中，需要修改的列包括哪些？",
    "options": [
      {
        "label": "A",
        "text": "设备型号列"
      },
      {
        "label": "B",
        "text": "合作商列"
      },
      {
        "label": "C",
        "text": "设备状态列"
      },
      {
        "label": "D",
        "text": "操作列"
      }
    ],
    "answer": "ABD",
    "analysis": "改造要求将设备型号id和合作商id改为显示名称，操作列删除删除按钮保留修改按钮，设备状态列未提及修改。"
  },
  {
    "id": "s3-sec2-q44",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 44,
    "stem": "修改对话框需要隐藏哪些字段？",
    "options": [
      {
        "label": "A",
        "text": "账号"
      },
      {
        "label": "B",
        "text": "密码"
      },
      {
        "label": "C",
        "text": "创建时间"
      },
      {
        "label": "D",
        "text": "合作商名称"
      }
    ],
    "answer": "AB",
    "analysis": "修改时需隐藏账号和密码字段，显示创建时间字段。"
  },
  {
    "id": "s3-sec2-q45",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 45,
    "stem": "在编写区域列表的SQL查询语句时，需要注意的要点包括？",
    "options": [
      {
        "label": "A",
        "text": "分页查询语句末尾不能包含分号"
      },
      {
        "label": "B",
        "text": "多表查询需添加表别名前缀"
      },
      {
        "label": "C",
        "text": "动态查询条件需使用<where><if>标签"
      },
      {
        "label": "D",
        "text": "返回字段名必须与VO类属性名完全一致（不考虑MyBatis配置）"
      }
    ],
    "answer": "ABC",
    "analysis": "题目中提到SQL编写要点包括分页查询语句末尾不能包含分号、处理动态查询条件、多表查询添加表别名前缀；而通过MyBatis的mapUnderscoreToCamelCase参数可实现下划线到驼峰的自动转换，无需字段名完全一致，因此D错误，正确答案为ABC。"
  },
  {
    "id": "s3-sec2-q46",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 46,
    "stem": "关于若依框架中字典类型表（sys_dict_type）和字典数据表的关系，下列描述正确的有（）",
    "options": [
      {
        "label": "A",
        "text": "字典类型表与字典数据表为一对多关系"
      },
      {
        "label": "B",
        "text": "字典数据表通过dict_type字段与字典类型表的dict_type字段建立关联"
      },
      {
        "label": "C",
        "text": "字典类型表中的dict_type字段是主键，字典数据表中的dict_type字段是外键"
      },
      {
        "label": "D",
        "text": "通过字典类型可以查询到该类型下所有的字典数据"
      }
    ],
    "answer": "ABD",
    "analysis": "字典类型表与字典数据表是一对多关系，通过dict_type字段关联，但dict_type并非字典类型表的主键（主键通常为id），因此C选项错误。"
  },
  {
    "id": "s3-sec2-q47",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 47,
    "stem": "若依项目的ruoyi-framework模块包含以下哪些子模块？",
    "options": [
      {
        "label": "A",
        "text": "aspectj"
      },
      {
        "label": "B",
        "text": "datasource"
      },
      {
        "label": "C",
        "text": "interceptor"
      },
      {
        "label": "D",
        "text": "xss"
      }
    ],
    "answer": "ABC",
    "analysis": "ruoyi-framework模块包含aspectj（AOP配置）、datasource（多数据源配置）、interceptor（拦截器）等子模块，xss属于ruoyi-common模块。"
  },
  {
    "id": "s3-sec2-q48",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 48,
    "stem": "若依项目的配置文件中，以下哪些是重要的配置文件？",
    "options": [
      {
        "label": "A",
        "text": "application.yml"
      },
      {
        "label": "B",
        "text": "application-druid.yml"
      },
      {
        "label": "C",
        "text": "logback.xml"
      },
      {
        "label": "D",
        "text": "banner.txt"
      }
    ],
    "answer": "ABCD",
    "analysis": "application.yml（系统配置）、application-druid.yml（数据库连接池）、logback.xml（日志配置）、banner.txt（启动图案）均是若依项目的重要配置文件。"
  },
  {
    "id": "s3-sec2-q49",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 49,
    "stem": "新增点位对话框需要进行哪些改造？",
    "options": [
      {
        "label": "A",
        "text": "点位名称输入框改为下拉框"
      },
      {
        "label": "B",
        "text": "所在区域输入框改为下拉框"
      },
      {
        "label": "C",
        "text": "商圈类型使用el-select选择"
      },
      {
        "label": "D",
        "text": "合作商ID输入框改为下拉框"
      }
    ],
    "answer": "BC",
    "analysis": "新增对话框改造包括区域输入框改下拉框、商圈类型使用el-select，因此BC正确。"
  },
  {
    "id": "s3-sec2-q50",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 50,
    "stem": "sky-merchant子模块正确的依赖配置包括哪些？",
    "options": [
      {
        "label": "A",
        "text": "在sky-merchant的pom.xml中导入sky-framework依赖"
      },
      {
        "label": "B",
        "text": "在父工程的pom.xml中添加sky-merchant的版本锁定"
      },
      {
        "label": "C",
        "text": "在sky-admin的pom.xml中引入sky-merchant依赖"
      },
      {
        "label": "D",
        "text": "子模块依赖的groupId为org.springframework"
      }
    ],
    "answer": "ABC",
    "analysis": "课程中提到了ABC三个正确的依赖配置步骤，而sky-merchant依赖的groupId是com.sky，不是org.springframework，因此正确选项为ABC。"
  },
  {
    "id": "s3-sec2-q51",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 51,
    "stem": "以下哪些属于点位查询接口需要扩展的功能？",
    "options": [
      {
        "label": "A",
        "text": "返回点位的设备数量"
      },
      {
        "label": "B",
        "text": "关联查询区域信息"
      },
      {
        "label": "C",
        "text": "支持分页查询"
      },
      {
        "label": "D",
        "text": "关联查询合作商信息"
      }
    ],
    "answer": "ABD",
    "analysis": "根据需求，接口需要扩展vmCount、region和partner信息，分页查询属于若依框架自动生成的基础功能。"
  },
  {
    "id": "s3-sec2-q52",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 52,
    "stem": "在VS Code中安装通义灵码插件的正确步骤包括？",
    "options": [
      {
        "label": "A",
        "text": "打开扩展选项"
      },
      {
        "label": "B",
        "text": "搜索tongyi插件"
      },
      {
        "label": "C",
        "text": "安装插件"
      },
      {
        "label": "D",
        "text": "无需重启VS Code"
      }
    ],
    "answer": "ABC",
    "analysis": "VS Code中安装通义灵码插件的步骤是：打开扩展选项，搜索tongyi插件，安装并重启VS Code。重启是必要的，所以D选项错误。"
  },
  {
    "id": "s3-sec2-q53",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 53,
    "stem": "在若依系统中创建课研人员角色并分配权限的步骤包括？",
    "options": [
      {
        "label": "A",
        "text": "创建课程管理和统计分析菜单"
      },
      {
        "label": "B",
        "text": "创建课研人员角色并关联菜单权限"
      },
      {
        "label": "C",
        "text": "创建小智用户并关联课研人员角色"
      },
      {
        "label": "D",
        "text": "直接为小智用户分配菜单权限"
      }
    ],
    "answer": "ABC",
    "analysis": "案例中创建课研人员角色并关联权限的步骤为：创建菜单→创建角色并分配菜单→创建用户并关联角色，RBAC模型中通过角色分配权限，而非直接给用户分配。"
  },
  {
    "id": "s3-sec2-q54",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 54,
    "stem": "以下关于RuoYi-Vue项目配置的说法正确的有哪些？",
    "options": [
      {
        "label": "A",
        "text": "数据库连接配置在application-druid.yml文件中"
      },
      {
        "label": "B",
        "text": "Redis配置信息位于application.yml文件中"
      },
      {
        "label": "C",
        "text": "application-druid.yml用于配置Redis密码"
      },
      {
        "label": "D",
        "text": "application.yml用于配置数据库连接"
      }
    ],
    "answer": "AB",
    "analysis": "数据库连接配置在application-druid.yml，Redis配置在application.yml，因此AB正确，CD错误。"
  },
  {
    "id": "s3-sec2-q55",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 55,
    "stem": "在创建点位管理相关菜单时，可能用到的菜单类型有？",
    "options": [
      {
        "label": "A",
        "text": "目录"
      },
      {
        "label": "B",
        "text": "菜单"
      },
      {
        "label": "C",
        "text": "按钮"
      },
      {
        "label": "D",
        "text": "链接"
      }
    ],
    "answer": "ABC",
    "analysis": "根据菜单管理需求，点位管理作为一级目录，其下的区域、点位、合作商管理为二级菜单，菜单中可能包含按钮（如新增、编辑）。选项D的链接类型未提及，因此正确答案是ABC。"
  },
  {
    "id": "s3-sec2-q56",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 56,
    "stem": "若依代码生成器提供了多种生成模板以满足不同业务场景，以下哪些属于其提供的模板类型？",
    "options": [
      {
        "label": "A",
        "text": "单表模板"
      },
      {
        "label": "B",
        "text": "树表模板"
      },
      {
        "label": "C",
        "text": "主子表模板"
      },
      {
        "label": "D",
        "text": "多表联查模板"
      }
    ],
    "answer": "ABC",
    "analysis": "若依代码生成器提供的三种模板类型为单表、树表和主子表（一对多），不包含多表联查模板。"
  },
  {
    "id": "s3-sec2-q57",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 57,
    "stem": "货道表中需要从其他表获取的字段有哪些？",
    "options": [
      {
        "label": "A",
        "text": "售货机ID（从设备表）"
      },
      {
        "label": "B",
        "text": "货道最大容量（从设备类型表）"
      },
      {
        "label": "C",
        "text": "商品ID（从商品表）"
      },
      {
        "label": "D",
        "text": "点位ID（从点位表）"
      }
    ],
    "answer": "AB",
    "analysis": "货道表的售货机ID及编号从设备表获取，货道最大容量通过设备类型表查询；商品ID和点位ID不属于货道表关联字段。"
  },
  {
    "id": "s3-sec2-q58",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 58,
    "stem": "区域详情中显示点位设备数，复用点位列表查询接口的优势有哪些？",
    "options": [
      {
        "label": "A",
        "text": "减少开发工作量"
      },
      {
        "label": "B",
        "text": "统一数据查询逻辑"
      },
      {
        "label": "C",
        "text": "提高接口性能"
      },
      {
        "label": "D",
        "text": "便于维护和扩展"
      }
    ],
    "answer": "ABD",
    "analysis": "复用接口可避免重复开发，统一逻辑便于维护，但不会直接提高接口性能，性能取决于查询实现。"
  },
  {
    "id": "s3-sec2-q59",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 59,
    "stem": "使用若依框架时，需要替换的系统标识内容包括哪些？",
    "options": [
      {
        "label": "A",
        "text": "浏览器标签页logo和标题"
      },
      {
        "label": "B",
        "text": "系统页面中的logo和标题"
      },
      {
        "label": "C",
        "text": "源码地址和文档地址"
      },
      {
        "label": "D",
        "text": "登录页面背景图和名称"
      }
    ],
    "answer": "ABCD",
    "analysis": "系统标识替换需覆盖浏览器标签、页面内容、链接信息、登录界面等多个维度"
  },
  {
    "id": "s3-sec2-q60",
    "set": "Web高级开发实践复习题3",
    "section": "二、 多选题",
    "type": "多选题",
    "number": 60,
    "stem": "在区域管理列表的改造中，以下哪些属于需要修改的内容？",
    "options": [
      {
        "label": "A",
        "text": "将主键ID改为序号并设置宽度为50"
      },
      {
        "label": "B",
        "text": "移除操作按钮中的图标属性"
      },
      {
        "label": "C",
        "text": "删除条件搜索功能中的区域名称输入框"
      },
      {
        "label": "D",
        "text": "修改列表中的点位数显示为多表查询结果"
      }
    ],
    "answer": "ABD",
    "analysis": "根据题目要求，条件搜索功能（区域名称）与原型一致无需修改，因此C选项错误；A、B、D均为需要修改的内容，故正确答案为ABD。"
  },
  {
    "id": "s3-sec3-q61",
    "set": "Web高级开发实践复习题3",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 61,
    "stem": "在sky-merchant的pom.xml中，需要导入的核心模块依赖是______。",
    "options": [],
    "answer": "第1空:sky-framework",
    "analysis": "根据课程内容，sky-merchant子模块需要导入的核心模块依赖是sky-framework。"
  },
  {
    "id": "s3-sec3-q62",
    "set": "Web高级开发实践复习题3",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 62,
    "stem": "在人员管理模块的新增对话框改造中，需要将角色文本框改为下拉框，数据来源为后台查询的角色列表。为此，需要引入角色API文件并调用相应的方法。请问，引入角色API文件时需要导入的方法是：1______；调用该方法时使用的参数是：2______。",
    "options": [],
    "answer": "第1空: listRole 第2空: loadAllParams",
    "analysis": "根据题目中的角色控件改造步骤，需要引入角色API文件中的listRole方法，并使用loadAllParams作为参数调用该方法来获取所有角色列表。"
  },
  {
    "id": "s3-sec3-q63",
    "set": "Web高级开发实践复习题3",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 63,
    "stem": "为了实现数据库下划线命名（如node_count）到Java类驼峰命名（如nodeCount）的自动转换，需要在MyBatis配置文件中开启______参数。",
    "options": [],
    "answer": "第1空:mapUnderscoreToCamelCase",
    "analysis": "题目中明确提到开启mapUnderscoreToCamelCase参数可实现下划线到驼峰的自动转换。"
  },
  {
    "id": "s3-sec3-q64",
    "set": "Web高级开发实践复习题3",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 64,
    "stem": "若依项目中，后台服务模块ruoyi-admin的启动类是______，而数据库连接池的相关配置文件是______。",
    "options": [],
    "answer": "第1空:RuoYiApplication 第2空:application-druid.yml",
    "analysis": "若依项目的启动类位于ruoyi-admin模块下，文件名为RuoYiApplication；数据库连接池的配置在application-druid.yml中，该文件属于ruoyi-admin模块的resources目录。"
  },
  {
    "id": "s3-sec3-q65",
    "set": "Web高级开发实践复习题3",
    "section": "三、 填空题",
    "type": "填空题",
    "number": 65,
    "stem": "在若依代码生成器中，生成树表时需要配置三个关键字段：树的编码字段、树的父编码字段和树的名称字段。对于部门表（dept表），树的父编码字段应选择______字段，树的名称字段应选择______字段。",
    "options": [],
    "answer": "第1空:parent_id 第2空:dept_name",
    "analysis": "树的父编码字段对应部门表中的parent_id（父部门id），树的名称字段对应dept_name（部门名称）。"
  },
  {
    "id": "s3-sec4-q66",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 66,
    "stem": "在VS Code中安装通义灵码插件时，需要在扩展选项中搜索tongyi插件。",
    "options": [],
    "answer": "正确",
    "analysis": "课程中明确说明“VS Code安装：在扩展选项中搜索tongyi插件，安装并重启VS Code”。"
  },
  {
    "id": "s3-sec4-q67",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 67,
    "stem": "在人员管理模块中，角色表属于动态数据表，提供管理界面。",
    "options": [],
    "answer": "错误",
    "analysis": "角色表为静态数据表，不提供管理界面。"
  },
  {
    "id": "s3-sec4-q68",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 68,
    "stem": "满格栅格占比为12份。",
    "options": [],
    "answer": "错误",
    "analysis": "根据题目描述，满格栅格占比为24份，而非12份。"
  },
  {
    "id": "s3-sec4-q69",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 69,
    "stem": "若依框架自动生成的点位列表接口已包含所有关联信息（如区域、合作商）。",
    "options": [],
    "answer": "错误",
    "analysis": "根据文档，若依自动生成的接口仅返回基本数据，需手动扩展关联信息。"
  },
  {
    "id": "s3-sec4-q70",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 70,
    "stem": "RuoYi-Vue-Plus扩展版本后端集成了Mybatis-Plus、Hutool等组件。",
    "options": [],
    "answer": "正确",
    "analysis": "内容明确说明RuoYi-Vue-Plus集成了Mybatis-Plus、Hutool、OSS存储等组件。"
  },
  {
    "id": "s3-sec4-q71",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 71,
    "stem": "点位的设备数量可通过查询设备表中对应点位ID的记录数得到。",
    "options": [],
    "answer": "正确",
    "analysis": "设备数量是设备表中属于该点位的记录总数，可通过COUNT函数统计对应node_id的记录数。"
  },
  {
    "id": "s3-sec4-q72",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 72,
    "stem": "树表数据的查询需要使用传统的分页查询方式。",
    "options": [],
    "answer": "错误",
    "analysis": "树表数据存在层级关系，传统分页查询无法满足需求，需要通过计算父子关系并以树形结构展示。"
  },
  {
    "id": "s3-sec4-q73",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 73,
    "stem": "设备状态页面列表展示区的运营状态列是由原设备状态列改造而来。",
    "options": [],
    "answer": "正确",
    "analysis": "根据课程内容，列表展示区需将设备状态列标题改为运营状态。"
  },
  {
    "id": "s3-sec4-q74",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 74,
    "stem": "在点位详情对话框的表格中，序号列通过设置type=\"index\"实现自动生成序号，无需绑定prop属性。",
    "options": [],
    "answer": "正确",
    "analysis": "根据对话框代码示例，序号列配置为<el-table-column label=\"序号\" type=\"index\" width=\"80\" align=\"center\" prop=\"id\" />，虽然代码中保留了prop=\"id\"，但type=\"index\"会自动生成序号，即使删除prop属性也不影响序号显示。"
  },
  {
    "id": "s3-sec4-q75",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 75,
    "stem": "在若依代码生成器中，“必填列”设置仅影响新增功能，不影响修改功能。",
    "options": [],
    "answer": "错误",
    "analysis": "根据步骤分析，“必填列”设置决定在新增或修改时哪些字段是必填的，同时影响新增和修改功能。"
  },
  {
    "id": "s3-sec4-q76",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 76,
    "stem": "在区域管理列表的操作按钮中，移除修改、删除按钮的图标属性，只需将icon属性值设为空字符串即可。",
    "options": [],
    "answer": "错误",
    "analysis": "根据题目要求，移除图标属性需删除icon属性，而非设为空字符串，因此该说法错误。"
  },
  {
    "id": "s3-sec4-q77",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 77,
    "stem": "RuoYi-Vue项目的数据库连接配置在ruoyi-admin模块的application.yml文件中。",
    "options": [],
    "answer": "错误",
    "analysis": "数据库连接配置在application-druid.yml文件，application.yml用于Redis等配置。"
  },
  {
    "id": "s3-sec4-q78",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 78,
    "stem": "RuoYi-Vue3属于若依官方框架版本。",
    "options": [],
    "answer": "错误",
    "analysis": "RuoYi-Vue3是第三方开发者扩展版本（非官方），官方版本为RuoYi-Vue。"
  },
  {
    "id": "s3-sec4-q79",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 79,
    "stem": "RuoYi-Vue采用前后端分离的微服务架构设计。",
    "options": [],
    "answer": "错误",
    "analysis": "RuoYi-Vue是前后端分离的单体架构，微服务架构对应RuoYi-Cloud版本。"
  },
  {
    "id": "s3-sec4-q80",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 80,
    "stem": "调用getVmTypeList()方法后，vmTypeList数组会自动更新为API返回的设备类型列表。",
    "options": [],
    "answer": "正确",
    "analysis": "getVmTypeList()方法调用listVmType API，将返回的response.rows赋值给vmTypeList.value，由于vmTypeList是ref定义的响应式数据，页面会自动更新。"
  },
  {
    "id": "s3-sec4-q81",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 81,
    "stem": "删除ruoyi-generator模块会导致若依项目无法正常启动。",
    "options": [],
    "answer": "错误",
    "analysis": "ruoyi-generator和ruoyi-quartz模块是可选的，删除后不影响项目核心功能的运行。"
  },
  {
    "id": "s3-sec4-q82",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 82,
    "stem": "使用树表模板生成部门管理页面后，若需要还原原有页面，只需覆盖前端文件即可，无需处理数据库。",
    "options": [],
    "answer": "正确",
    "analysis": "还原原有页面时，只需将备份的前端文件（如index.vue和dept.js）覆盖当前文件即可，数据库未发生变更，无需额外处理。"
  },
  {
    "id": "s3-sec4-q83",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 83,
    "stem": "在若依代码生成器中，ID字段在“列表列”中必须勾选才能显示。",
    "options": [],
    "answer": "错误",
    "analysis": "根据步骤分析，ID字段勾不勾选在列表列中都可以默认自动生成，不是必须勾选的。"
  },
  {
    "id": "s3-sec4-q84",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 84,
    "stem": "设备表的主键ID需要手动设置。",
    "options": [],
    "answer": "错误",
    "analysis": "设备表主键ID由数据库自动增长生成，无需手动设置。"
  },
  {
    "id": "s3-sec4-q85",
    "set": "Web高级开发实践复习题3",
    "section": "四、 判断题",
    "type": "判断题",
    "number": 85,
    "stem": "设备状态页面的视图组件需要从设备管理视图组件复制而来。",
    "options": [],
    "answer": "正确",
    "analysis": "根据课程内容，创建设备状态页面时需将设备管理的视图组件复制到vmStatus文件夹中。"
  },
  {
    "id": "s3-sec5-q86",
    "set": "Web高级开发实践复习题3",
    "section": "五、 简答题",
    "type": "简答题",
    "number": 86,
    "stem": "简述使用若依框架进行外卖管理系统二次开发的主要步骤。",
    "options": [],
    "answer": "1. 使用若依框架修改器修改项目名称：将初始化项目打包，用修改器处理生成新命名的项目；2. 修改启动类名称：将RuoYiApplication重命名为SkyApplication；3. 创建业务子模块：在父工程下创建sky-merchant子模块，配置SDK与父项目一致；4. 配置依赖：在sky-merchant中导入sky-framework依赖，父工程添加版本锁定，sky-admin引入sky-merchant依赖；5. 生成业务代码：利用若依代码生成器的主子表模板生成菜品管理等功能的前后端代码；6. 测试运行：启动项目验证功能是否正常。",
    "analysis": "本题综合考察若依二次开发的核心流程，需涵盖项目名称修改、子模块创建、依赖配置、代码生成等关键步骤。"
  },
  {
    "id": "s3-sec5-q87",
    "set": "Web高级开发实践复习题3",
    "section": "五、 简答题",
    "type": "简答题",
    "number": 87,
    "stem": "请简述使用若依代码生成器实现CRM系统课程管理功能的主要步骤。",
    "options": [],
    "answer": "1. 准备课程表结构和数据SQL文件，导入到数据库中；2. 登录系统，进入系统工具 -> 代码生成菜单，导入课程表；3. 在代码生成列表中找到课程表，点击编辑修改基本信息和字段信息（包括插入列、编辑列、列表列、查询列等设置）；4. 修改生成信息，设置生成路径、模块名等；5. 下载生成的代码包，导入菜单SQL和前后端代码到项目中；6. 重启服务，测试课程管理功能。",
    "analysis": "根据步骤分析，使用若依代码生成器实现课程管理功能需要完成SQL准备、代码生成配置、代码导入和功能测试等步骤。"
  }
];
