// pages/dome/dome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {listName:'进农村',
       item:[{
         itemName:'总述',
         content:"为进一步推进农村居民信用体系建设，倡导诚实守信行为，构建以信用为核心的社会治理体系，提高农村居民诚信意识和信用水平，营造良好的农村信用环境，助力乡村振兴，依据《威海市文登区信用“五进”工程行动计划》精神，制定本方案。"
       },{
        itemName: '总体要求',
        content: '以习近平新时代中国特色社会主义思想为指导，全面贯彻党的十九大和十九届二中、三中、四中全会精神，按照全区社会信用体系建设总体部署，规范农村信用管理行为，倡树守信激励、失信惩戒的价值导向，建立起政府有力推动、社会共同参与、村民普遍响应的社会信用体系建设新格局。2020年全面铺开信用“进农村”工作，认真落实《文登区农村居民信用积分评价办法》（威文办发〔2019〕20号），增强农村居民守信践诺意识，形成人人讲诚信和人人争先进的浓厚氛围。',
      },{
        itemName: '主要任务',
        content: '（一）建立村民诚信档案库。依据《文登区农村居民信用积分评价办法》，为农村居民建立信用档案数据库，客观记录农村居民的基本信息及其他守信和失信信息，打造农村居民电子版的信用身份证。通过部门间信息共享，实现“一网通办、一次办好”，减少农村居民办事需要提供各类证明的负担。（责任单位：区农业农村局、公安分局，各镇街等）\n（二）加强农村信用宣传。各镇街根据实际情况研究制定农村信用宣传办法，如发放明白纸、张贴海报、播放广播，组织相关活动等形式，加强农村信用宣传，做到家喻户晓，提高村民信用意识，营造“守信文明、失信可耻”的良好氛围。加大对信用先进个人和先进典型的宣传力度，使村民学有榜样、赶有目标，使诚实守信成为广大农村群众的自觉追求。同时，在农村大力推广安装“农村居民信用积分”App，力争全区下载安装率达到30%。（责任单位：区农业农村局、区融媒体中心，各镇街等）\n（三）完善农村信用体系。各镇街和村委成立基层信用管理机构、信用议事会，健全农村信用信息采集、认定、录入机制，有序推进农村居民信用体系建设。制定严格的信息征集工作流程，保证录入信息的客观性和公平公正性。同时，各镇街要配套区级信用惠民政策，出台信用激励政策、待遇，充分调动和激发群众参与农村信用体系建设的积极性和主动性。（责任单位：区农业农村局、区住房城乡建设局，各镇街等）\n（四）加强农村信用应用。创新工作方式，把信用体系建设作为创新乡村治理、推动共建共治共享的重要抓手，与新时代文明实践、乡村振兴、违建拆除、环境整治等当前重点工作深度融合，贯穿党的建设、民生建设、社会建设、平安建设等各个领域，通过奖惩机制，倡导文明新风，约束不良行为，真正使农村信用管理成为农村治理的有效抓手。（责任单位：区农业农村局、区住房城乡建设局，各镇街等）\n（五）发挥示范带动作用。在全面铺开信用“进农村”的基础上，各镇街要重点从村情稳定团结、班子坚强有力、经济条件较好的村居中筛选部分村居，打造信用建设“示范村”，充分发挥典型示范引导作用，引领区域内农村居民信用体系建设。各镇街要设立镇级信用基金，用于奖励开展信用建设较好的镇街（村居）和补助经济薄弱村居。要引导村居建设“暖心食堂”、“便民服务社”、“诚信屋”等信用服务应用场景，进一步提升群众幸福感和满意度。（责任单位：区农业农村局，各镇街等）',
      },{
        itemName: '实施步骤',
        content: '第一阶段：动员部署（2019年10月—11月）\n制定信用“进农村”工作推进方案，拟定具体的行动方案和落实细则，明确责任分工，安排专人负责。组织到外地进行调研学习，邀请信用建设方面的专家培训指导。\n第二阶段：全面推开（2019年11月—2020年11月）\n协调各部门、各镇街整体推进此项工作，在信用制度、信息归集、信用积分、信用标准、联合奖惩等方面探索建设标准，规范有序推进农村居民信用体系建设。指导农村建立健全信用档案，开展信用信息的采集、认定、审核、录入，做好激励、惩戒等农村信用的应用工作。\n第三阶段：总结提升（2020年12月）\n加强对信用“进农村”工作的调查研究，组织召开观摩会议，及时总结、推广优秀成果和典型经验。组织开展“信用示范镇、村”评选活动，宣传一批信用示范样板村进行表彰。',
      },{
        itemName: '保障措施',
        content: '（一）\n加强组织领导。各镇街要建立农村信用体系相应工作机制，将农村信用体系建设纳入重要议事日程，统筹推进农村信用建设各项工作。各镇街要指导各村居成立专门的农村信用管理机构、信用议事会，负责信用“进农村”工作的宣传发动、组织实施。\n（二）\n明确责任分工。各镇街是信用“进农村”工作的重要责任主体，认真履行统筹协调、督导落实等职能，及时发现问题、纠正编差，确保各项任务落地见效。各相关部门要按照“谁主管谁负责”的原则，各司其职、整体联动，积极参与和落实相关工作任务。\n（三）\n建立考核机制。把农村信用体系建设纳入区级考核内容，各镇街要高度重视，根据实际情况制定工作措施，建立相应制度，把信用“进农村”纳入对村居的相关考核中，严格考核奖惩，形成推动工作开展的强大合力，构建目标明确、措施到位、运转高效的工作格局。',
      }]
      }, 
      {
        listName: '进企业',
        item:[{
          itemName:'总述',
          content:"为加强企业信用体系建设，深化信用应用，在全区企业（含企业、商超、个体工商户，下同）中营造“守信光荣、失信可耻”的良好氛围，按照《威海市文登区信用应用“五进”工程行动计划》信用“进企业”工作要求，突出以“海贝分”（个人信用积分，下同）为重点内容的信用应用在企业中的推广使用，特制定本工作方案。"
        },{
         itemName: '总体要求',
         content: '以习近平新时代中国特色社会主义思想为指导，按照中央、国务院和各级党委、政府加快推进社会信用体系建设的决策部署，结合我区社会信用体系建设工作的要求，把信用延伸、融合至全区企业中去，全面提升企业诚信意识和水平，建立科学的信用管理制度，强化企业风险意识和信用意识，营造良好信用环境。',
       },{
        itemName: '工作目标',
        content: '积极引导企业在经营中引入信用管理元素，发展信用经济，优化生产、销售等流程，开展诚信经营和公平竞争，树立企业诚信形象，全区企业信用意识明显增强。',
       },{
         itemName: '主要任务',
         content: "  提高企业诚信水平是社会信用体系建设的重点，是经济关系有效维护、经济运行成本有效降低、营商环境有效改善的基本条件。区工业和信息化局负责指导工业企业和信息化领域企业，区国有资产服务中心负责指导国有企业，区商务局负责指导商贸流通领域企业，区市场监管局负责指导个体工商户，各镇人民政府、各街道办事处、开发区、金山管委（以下简称“各镇街”）负责做好辖区内信用“进企业”工作，区社会信用中心负责指导全区信用“进企业”工作。根据信用“进企业”试点创建工作的实践，进一步完善企业信用管理规范，在职工中积极推广使用“海贝分”，推动企业建立现代企业信用管理制度。"+

         "\n  （一）\n推动企业职工信用档案建设。各企业要根据企业发展实际，建立适合企业的职工信用档案，把所有企业职工的信用档案进行规范化管理，信用档案包括遵守企业内部管理规定、安全生产、年度考核结果、社会领域活动（门前三包、志愿服务、义务献血、见义勇为及其他）等基本信用信息指标，也可根据企业行业特点增加相应信用信息指标。（责任单位：区工业和信息化局、区国有资产服务中心、区商务局、区综合行政执法局，各镇街）"+
         "\n  （二）\n建立职工信用管理评价标准。建立千分制的企业职工信用管理评价标准，将职工的内部考勤、安全生产、年度考评、突出贡献、遵规守纪等信息进行量化积分和综合评价。（责任单位：区工业和信息化局、区国有资产服务中心、区商务局、区综合行政执法局，各镇街）"+
         "\n  （三）\n开展企业诚信承诺活动。各企业要开展以“诚信兴业”为内容的诚信承诺活动，签署信用承诺书，并在“信用文登”网站面向社会进行公示，把诚信守法经营理念奉为信条，在生产经营、财务管理、履行纳税义务、环境管理和劳动用工管理等各环节中建立信用管理流程，强化信用自律，改善信用环境，提升企业综合竞争力。企业要在显著位置张贴信用“二维码”，接受社会监督。（责任单位：区工业和信息化局、区国有资产服务中心、区商务局、区市场监管局、区行政审批服务局，各镇街）"+
         "\n  （四）\n推动企业建立现代信用管理制度。鼓励企业在对外经济合作，签订商务合同时，主动查询或委托第三方出具合作对象的信用记录或者信用报告，规避信用风险，降低交易成本。鼓励企业建立客户信用档案，将客户提供假冒伪劣产品、合同欺诈、恶意拖欠货款等纳入客户信用档案。开展客户诚信综合评价，将客户诚信交易记录纳入应收账款管理、信用销售授信额度计量，建立科学的企业信用管理流程，防范信用风险。（责任单位：区工业和信息化局、区国有资产服务中心、区商务局、区市场监管局，各镇街）"+
         "\n  （五）\n建立企业综合信用评价体系。依托区公共信用信息平台，开发建设企业信用综合评价系统，整合归集企业行政处罚、行业红黑名单、纳税信息、市场监管领域“双随机一公开”信息、履约能力、债务违约、司法判决等信息，从政务、司法、金融、企业、社会五个维度对企业进行评价。评价结果作为构建以信用为基础的新型市场监管机制的重要依据。（责任单位：区工业和信息化局、区国有资产服务中心、区商务局、区市场监管局、区综合行政执法局，各镇街）"+
         "\n  （六）\n推动“海贝分”在企业中的应用。在企业职工中大力推广使用“海贝分”，特别是企业高管人员，要纳入“海贝分”重点评价范围，职工综合信用档案中的相关信息纳入“海贝分”评分体系，引导企业职工珍爱自身信用记录。将“海贝分”与企业员工招聘、内部竞岗等挂钩，优先考虑“海贝分”高的群体。将企业获得的荣誉信息纳入“海贝分”加分体系，计入到企业法定代表人名下。（责任单位：区工业和信息化局、区国有资产服务中心、区商务局、区市场监管局、区综合行政执法局，各镇街）"
       },{
         itemName: '实施步骤',
         content: "\n第一阶段：动员部署（2020年3月）"+
         "\n  制定信用“进企业”工作推进方案，各镇街和相关部门要拟定具体的行动方案和具体的落实细则，明确责任分工，安排专人负责。组织企业到外地进行调研学习，邀请企业信用建设方面的专家来我区进行培训指导。"+
         "\n第二阶段：全面推进（2020年4月—2020年11月）"+
         "\n  各镇街、各相关部门做好信用管理、信息采集、信用承诺、诚信教育等工作的宣传发动和组织实施工作，要做好调度指导、督促检查工作，及时跟进企业信用建设工作开展情况。对工作中好的经验做法及时总结完善，对暴露出来的问题要有针对性整改。"+
         "\n第三阶段：总结提升（2020年12月）"+
         "\n  各镇街、各相关部门要结合开展情况，总结成绩、积累经验，进一步修订完善企业信用制度、信息归集、信用积分、信用标准、联合奖惩等相关制度，建立标准规范，形成可复制、可推广的信用建设模式，为高质量开展信用进企业奠定基础。"
       },{
         itemName: '保障措施',
         content: '（一）\n加强组织领导。各镇街和有关部门要把信用“进企业”工作作为推动我区信用体系建设的重点工作，积极做好工作指导；各镇街要落实属地管理责任，充分结合实际情况，制定落实方案，明确专人负责，加大工作推进力度。\n（二）\n落实政策保障。鼓励各镇街、各部门出台关于支持企业信用建设的政策。有条件的镇街可以对积极开展信用建设的企业给予一定资金政策支持。 \n（三）\n强化宣传引导。各镇街、各部门要充分挖掘工作中涌现出的优秀典型代表，积极总结经验做法，树立诚信企业标杆，进行正向鼓励宣传，在全社会营造“信用进企业、企业有诚信”的良好氛围。',
       }]
      }, {
        listName: '进校园',
        item:[{
          itemName:'总述',
          content:"为深化落实区委关于全面推进社会信用体系建设的工作要求，突出“信用分”在全区教育体育领域推广应用、加强诚信教育与诚信文化建设，推进我区教育体育领域信用体系建设深入开展，根据《威海市文登区信用“五进”工程行动计划》精神，结合我区教育发展实际，制定威海市文登区信用应用“进校园”工作方案。"
        },{
         itemName: '总体要求',
         content: '以习近平新时代中国特色社会主义思想为指导，全面贯彻落实党的十九大精神，紧紧围绕国家、省、市关于加快推进社会信用体系建设的决策部署，推动信用工作向教育领域纵向拓展，加强诚信教育宣传引导，规范信用管理与应用，弘扬“知信、用信、守信”诚信意识，为营造“精致城市 如画文登”的良好信用环境贡献教育力量。',
       },{
        itemName: '工作目标',
        content: '加快推进以学校、教师、学生为主体的校园信用体系建设，培育和践行社会主义核心价值观，规范信用信息归集、信用分级分类监管、信用联合奖惩等标准体系。推广诚信教育宣传，将信用承诺融入学校办学管理各环节，强化教育工作者和学生的个体诚信意识，发挥信用正向激励及负面警示作用，提高守法、守规的自觉性。到2020年底，在全区推进信用应用“进校园”工作，营造各级各类学校各司其职、齐抓共管，教育体育工作者、学生自觉行动的良好信用氛围。',
       },{
         itemName: '主要任务',
         content: ' （一）全面建立校园信用管理体制\n1.完善教师群体信用档案。各学校要根据《威海市文登区信用“进校园”（教职工）积分管理试行办法》，广泛宣传，严格执行，督促全体教育体育工作者，遵守职业道德规范、遵守学校管理规定、履行职业信用承诺，建立教师守信失信行为记录，为职业守信激励与失信惩戒提供基础信息支撑。各学校要定期归集教师信用记录情况并上报区教育和体育局，信用记录情况可作为教师职称评审、课题申报等有效参考。（责任部门：区教育和体育局、文登技师学院，各中小学）\n2.完善校内学生群体信用记录。各学校要根据《威海市文登区信用“进校园”（中小学生）积分管理试行办法》，积极探索学生信用管理方式，可根据学生在校遵守学校管理规定、参与志愿服务活动、信用日常表现等，建立学生信用档案，将信用记录与评先选优、发展团员或党员、贫困生救助、发放助学金、无息助学贷款等挂钩，激发学生群体守信守诺自主性。（责任部门：区教育和体育局、文登技师学院，各中小学）\n3.建立民办学校信用管理办法。各民办学校要严格落实并遵守《威海市文登区民办学校信用管理办法（试行）》，减少学校主体失信行为。区教育和体育局定期统计辖区内所有民办学校信用情况，通过“信用文登”网站按年度公示。（责任部门：区教育和体育局、文登技师学院，各中小学）\n（二）探索实施信用承诺书制度\n1.落实学校主体信用承诺制度。区教育和体育局定期督促各学校对办学资质、规范教学、合理招生、教育收费等方面信息向社会公开行业信用承诺。承诺书签订样式和签订情况通过“信用文登”网站进行公示。（责任部门：区教育和体育局、文登技师学院，各中小学）\n2.实施教师职业信用承诺制度。区教育和体育局定期指导各学校，在开展教师群体入职宣誓、职称评审、课题申报、重大考试等工作时，与相关教师签订职业信用承诺书，承诺书样式和签订情况通过“信用文登”网站公示，接受社会监督。（责任部门：区教育和体育局、文登技师学院，各中小学）\n3.实施学生信用承诺制度。各学校在组织学生群体奖助学金申报、评先选优、重要考试工作时，引导学生参与个人信用承诺，树立诚信规范意识。（责任部门：区教育和体育局、文登技师学院，各中小学）\n（三）全面推广“信用分”校园应用\n1.开展“信用分”推广活动。通过开展主题日活动、张贴宣传海报、志愿者推广服务等措施，到2020年底，实现教师“信用分”下载注册率达到95%，通过与“父母共查信用分”、信用知识课堂、讲信用故事等活动，提高“信用分”在校园领域知晓度与应用率。（责任部门：区教育和体育局、文登技师学院，各中小学）\n2.发挥“信用分”激励导向作用。完善“信用分”信用配套体系，制定教师群体信用管理办法，明确加分减分标准，并按照一定规则将职业信用结果与“信用分”个人信用积分挂钩。积极扩大“信用分”在教育体育领域应用推广力度，充分发挥“信用分”在加强师德管理、提高教师师德修养等方面的正向激励作用，有效运用“信用分”在规范从教行为、严肃师风建设上的警示作用。（责任部门：区教育和体育局、文登技师学院，各中小学）\n3.探索建立信用志愿者队伍。各中小学要组织学生积极参与校内日常志愿服务和各类社会公益活动，探索成立“信用分”志愿服务队，主动开展“信用分”宣传及其他社会公益活动，提高参与社会活动积极性。（责任部门：区教育和体育局、文登技师学院，各中小学）\n（四）深入开展学生诚信主题教育\n1.开展诚信主题教育活动。发挥诚信教育在学校思想品德教育中的重要作用，各中小学校要广泛开展五个主题活动（“国旗下讲诚信”主题教育活动、诚信经典诵读活动、诚信主题班会、诚信征文活动、诚信校外实践活动）；开展以微电影、动漫、绘画、歌曲等形式的征集、评选等诚信主题活动，展现学校特色，营造诚信和谐的社会氛围；在学校中，组织开展政策宣传会，引导学生积极参与社会志愿活动，树立正确的义利观，不断增强风险防控意识，持有正确的信贷消费理念。（责任部门：区教育和体育局、文登技师学院，各中小学）\n2.加强从业人员信用交流与培训。组织开展针对教师的信用知识培训，强化诚信执教理念，教师要率先掌握信用知识，言传身教带动提升学生诚实守信水平。各学校每学年至少要集中开展1次以上教师群体职业信用培训工作。（责任部门：区教育和体育局、文登技师学院，各中小学）\n3.加强信用示范典型的表彰和宣传。积极开展教育体育领域诚信示范创建活动，培育“信用示范学校”。按照省市区有关规定，对教育守信行为给予表彰，通过“信用文登”网站及各类新闻媒体广泛宣传，营造诚信和谐社会氛围。（责任部门：区教育和体育局、文登技师学院，各中小学）'
       },{
         itemName: '实施步骤',
         content: '第一阶段：动员部署（2020年3月）\n根据职责分工，由区教育和体育局牵头信用“进校园”工作，制定区级信用“进校园”工作推进方案；区教育体育主管部门和各级各类学校为信用“进校园”工作的实施主体，要通过召开现场会、组织外出考察以及培训会等方式，统一思想认识，营造良好氛围。\n第二阶段：组织实施（2020年4月—2020年8月）\n区教育体育主管部门要指导学校做好信用管理、信息采集、信用承诺、诚信教育等工作的宣传发动和组织实施工作，要做好调度指导、督促检查工作，及时跟进学校信用建设工作开展情况。对工作中好的经验做法及时总结完善，对暴露出来的问题要针对性整改，形成可复制、可推广的信用建设模式。\n第三阶段：总结提升（2020年9月—12月）\n按照区域一体化原则，区教育和体育局负责在教育体育领域信息归集、信用标准等方面建立标准规范，形成优秀成果和典型经验，到2020年底，在全区各级各类学校全面推开信用“进校园”工作。',
       },{
         itemName: '保障措施',
         content: '（一）加强组织协调。建立和完善区教育体育系统信用信息的组织领导体系，建立社会信用体系建设工作领导小组，加强对区内教育体育信用体系建设工作的指导、督促和检查，明确责任部门，充实信用管理和技术支撑人员，明确专人负责教体系统信用体系建设的具体组织工作。\n（二）明确责任分工。区教育体育主管部门是教育体育领域信用推广工作的重要责任主体，按照“谁主管谁负责”的原则，各司其职、整体联动，认真履行统筹协调、督导落实等职能，及时发现问题、纠正编差，积极参与和落实相关工作任务，稳步推进信用“进校园”各项任务部署。\n（三）强化督导调度。把信用“进校园”工程纳入学校各类评先选优、文明校园创建、先进集体评选、规范办学和特色办学管理等方面，统一工作部署，努力开创“以诚信促规范，以规范带信用”的工作局面。依据区信用办相关考核制度，将学校信用“进校园”工程实施情况，纳入规范办学行为督导考核范畴。',
       }]
      },
      {
        listName: '进机关',
        item:[{
          itemName:'总述',
          content:"为全面推进社会信用体系建设，打造精致城市，根据《威海市文登区信用应用“五进”工程行动计划》精神，结合机关事业单位、医疗领域工作实际，制定文登区信用“进机关”工作方案。"
        },{
         itemName: '指导思想',
         content: '以党的十九大精神和习近平新时代中国特色社会主义思想为指导，以培育和践行社会主义核心价值观为根本，以褒扬诚信、惩戒失信为重点，对照国家、省、市、区社会信用体系建设的总体规划纲要和阶段性目标，大力开展机关事业单位公职人员和医疗领域诚信建设，坚持规定动作和自选动作相结合、集中宣传与活动引导相结合，引导和规范社会信用行为，提升社会信用管理水平，以打造“知信、用信、守信”的信用环境助力精致城市建设。',
       },{
        itemName: '工作目标',
        content: '在机关事业单位，以“重公德、守信用”为重点，开展机关事业单位诚信建设活动，通过门户网站开辟诚信体系建设专栏，增强诚信意识和信用观念，使信用制度更加完善，信用信息实现全面融合，信用记录和信用报告在行政管理领域全面推开。进一步促进“信用文登”的建设，推动机关事业单位诚信意识提升。\n在医疗领域，以医药机构、从业人员、病患为重点，建立医疗信用体系的运行机制，规范信用信息归集、信用分级分类监管、信用联合奖惩等标准体系，强化医药机构从业人员和病患的个体诚信意识，发挥信用正向激励及负面警示作用，提高守法、守规的自觉性。到2020年底，在全区营造主管部门、各级各类医药机构各司其职、齐抓共管，医药机构从业人员、病患自觉行动的良好信用氛围。',
       },{
         itemName: '主要任务',
         content: '（一）机关事业单位\n1.加强公职人员诚信教育。以社会主义核心价值观为引领，深入开展公职人员诚信、守法和道德教育，加强公务人员信用知识学习，提升公职人员信用意识。将信用建设纳入公职人员培训和领导干部党校培训课程。区直机关各单位要围绕诚信主题，广泛开展“诚信服务、执政为民”的宣传教育活动，大兴求真务实之风，使诚信守信良好风尚在实践中发扬光大。大力推广海贝分查询APP，争取在各单位的下载注册率达到90%，在机关事业单位营造“知信、守信、用信”的社会氛围。（牵头单位：区直机关工委，责任单位：区委组织部、区委宣传部、区委党校等）\n2.建立完善公职人员诚信档案。依托区公共信用信息平台，为公职人员建立信用档案。由区直各机关单位整理汇总本单位工作人员的基本信息、近五年的年度考核、表彰奖励信息以及违法违规、失信违约被党纪处分、政务处分、其他处理等信息，统一汇总到区信用管理平台。诚信档案不对外公开，仅用于本人查询或者经本人授权后，由使用部门向区社会信用中心出具公函委托查询。建立信用档案信息分类制度，明确信息公开、授权查询、保密的范围。（牵头单位：区直机关工委，责任单位：区直各部门）\n3.制定信用评价标准。根据各单位的实际情况，确定信息采集范围，主要包括政治品质和道德品行、履行职责、工作作风、廉洁自律和共产党员管理等内容。信用信息的覆盖范围和边界认定要通过机关党组会议讨论、通过，并张榜公示。制定信用信息评价标准，包括信用加分事项内容、信用扣分事项内容，并明确具体分值。（牵头单位：区直机关工委，责任单位：区直有关部门等）\n4.制定信息采集、认定和公开制度。明确信息采集工作流程以及有异议的信息处理办法；要设立信息采集员，专职负责信用信息采集工作，符合“海贝分”评价范围的信息逐级推送区信用管理平台进行统一管理，其他信息在内部管理中使用。明确社会公开范围、授权查询范围和政务共享范围，保护公职人员个人隐私和信息安全。（牵头单位：区直机关工委，责任单位：区直有关部门等）\n5.建立信用奖惩机制。因地制宜出台信用奖励和惩戒机制（如信用良好的公职人员在评优评奖、荣誉申报、资格评定和优惠政策等方面予以倾斜；信用等级较低的公职人员受到信用管理惩戒限制，并在评优评奖、荣誉申报、资格评定等方面受到限制）。将“机关信用分”与公职人员发展党员、评先选优等挂钩。（牵头单位：区直机关工委，责任单位：区直有关部门等）\n6.推动信用记录和信用报告的应用。在行政管理事项中全面推开“办事先查信用”的工作机制，政府机关要率先示范，在项目申报、资金扶持、干部选拔、评先选优、资质审核、政府采购等领域，建立信用核查机制，优先选择信用状况良好的市场主体和个人。在公共资源交易领域率先推广使用第三方信用报告，并将其作为投标人评标、定标和合同签订的重要依据。（牵头单位：区直机关工委，责任单位：区财政局、区公共资源交易中心、区直有关部门等）\n（二）医疗领域\n1.建立医疗系统信用政策体系。根据实际情况探索制定医疗信用分级分类管理办法，制定配套的制度和相关细则，建立医疗信用综合评价指标体系，明确医药机构失信守信具体行为，制定信用信息归集管理方式及具体应用场景,为信用体系的有效运行提供保障。各医药机构主管部门定期汇总医院、药店、门诊等信用状况，推送“信用文登”网站按年度公示。（责任单位：区卫生健康局、区医疗保障局）\n2.完善医护群体信用档案。各医院要根据医护人员遵守职业道德规范、遵守医院管理规定、履行职业信用承诺等方面情况，建立医护人员守信失信行为记录，为守信激励与失信惩戒提供基础信息支撑。各医院要定期归集医护人员信用记录情况并上报医院主管部门，信用记录情况可作为医护人员职称评聘、评先选优、干部选拔任用等有效参考。（责任单位：区卫生健康局、区医疗保障局）\n3.完善住院病患群体信用记录。积极探索病患信用管理方式，各医院根据病患及家属在医疗机构就医的守信行为和失信行为，建立病患信用档案，将信用记录与区社会信用管理平台对接。积极探索信用惠民应用场景，医院重点探索针对守信主体在工本费、挂号费、减免押金等方面出台优惠政策；药店要针对守信主体出台打折优惠措施，激发病患群体守信守诺自觉性。（责任单位：区卫生健康局、区医疗保障局）\n4.探索实施信用承诺书制度。全区所有医药机构及从业人员均须做出信用承诺，签订承诺书，并向社会公开，接受社会监督。医疗机构、零售药店和诊所应在经营场所醒目位置悬挂承诺书。实施病患信用承诺制度，对于享受优惠政策的病患群体要组织做好信用承诺，建立失信倒查机制，失信行为列入医疗黑名单，报区社会信用中心，实施联合惩戒。（责任单位：区卫生健康局、区医疗保障局）\n5.建立医疗保障信用评估体系。坚持“标准透明、程序公平、稳妥推动”原则，依据已制定的相关指标要素和评定标准对医药机构及其从业人员实行积分制管理。将信用评分结果纳入区信用管理平台。（责任单位：区卫生健康局、区医疗保障局）',
       },{
         itemName: '实施步骤',
         content: '（一）动员部署阶段（2020年3月底前）\n各单位要制定信用“进机关”工作具体落实方案，指导机关单位、医疗机构成立信用议事会，负责信用“进机关”工作的宣传发动、组织实施。要通过召开现场会、组织外出考察以及培训会等方式，统一思想认识，营造良好氛围。\n（二）组织实施阶段（2020年4月—2020年7月底前）\n指导各单位建立健全信用档案，开展机关、医疗机构信用信息的采集、认定、与“海贝分”的换算以及申报等工作。加强调度指导、督促检查，指导推进工作开展。对工作中发现的问题进行整改，修订完善信用评价标准和赋分指标，形成可复制、可推广的信用“进机关”标准体系。对需要全面推开的工作任务，由区直机关工委、区卫生健康局统一进行工作部署和调度。\n（三）全面推开阶段（2020年8月—2020年12月底前）\n加强对信用“进机关”工作的调查研究，及时总结、推广各单位在信用“进机关”工作中的创造出的优秀成果和典型经验。加大宣传力度，通过报刊、电视、广播和其他公共媒体广泛宣传各地信用“进机关”工作中的创新做法和突出成效。',
       },{
         itemName: '保障措施',
         content: '（一）加强组织领导。各单位要建立机关单位、医疗机构信用体系相应工作机制，将信用建设纳入重要议事日程，统筹推进信用建设各项工作。有条件的单位成立信用体系建设工作小组，工作小组负责信用体系建设的组织协调、指导推动、重点攻关、解决疑难、督查考核等工作。区卫健局、医保局要加强对医疗机构信用体系建设工作的指导、督促和检查，明确责任部门，充实信用管理和技术支撑人员，明确专人负责信用体系建设的具体组织工作。\n（二）明确责任分工。各党委、总支、支部是诚信进机关的重要责任主体，要认真履行统筹协调、督导落实等职能，及时发现问题、纠正编差，确保各项任务落地见效。各党组织要按照“谁主管谁负责”的原则，各司其职、整体联动，积极参与和落实相关工作任务。区卫健局、医保局是医疗领域信用推广工作的责任主体，要认真履行统筹协调、督导落实等职能，及时发现问题、纠正编差，稳步推进信用体系建设各项工作。\n（三）建立考核机制。推动将机关信用体系建设纳入区级考核内容，鼓励各单位将信用“进机关”工作纳入本级考核内容，加强督导和通报，确保信用“进机关”工作有序开展，取得实效。区卫健局要把信用“进医院”工程与医院各类职称评聘、评先选优、奖金激励等方面充分结合起来，努力开创“以诚信促规范，以规范带信用”的工作局面。',
       }]
      },
      {
        listName: '进社区',
        item:[{
          itemName:'总述',
          content:"为进一步加强城市社区居民信用管理，提高社区居民诚信意识，打造诚实守信、文明和谐的社区环境，根据《文登区信用“五进”工程行动计划》精神，推进我区社会信用体系建设工作深入开展，由区民政局牵头，有关部门配合，制定如下推进方案。"
        },{
         itemName: '总体要求',
         content: '以党的十九大精神和习近平新时代中国特色社会主义思想为指导，以培育和践行社会主义核心价值观为根本，紧紧围绕全区信用“五进工程”的总体部署，褒扬诚信，惩戒失信，着力打造诚实守信、文明和谐的社区环境，努力在城市社区形成人人“讲诚信话、办诚信事、做诚信人”的浓厚氛围。2020年3月，信用“进社区”工作在全区25个城市社区全面开展，到2020年底，社区信用体系基本建立，积分标准科学合理、居民公认，并与“海贝分”挂钩，信用信息采集、认定、录入机制顺畅高效，居民信用档案健全完善，信用应用规范有序，居民诚信意识明显增强，为我区社会信用体系建设奠定坚实的社区信用基础。',
       },{
         itemName: '主要任务',
         content: '（一）广泛在社区中宣传诚信理念。以社区为单位拟定《诚信倡议书》，将不文明行为乱停乱放、乱搭乱建、违规养犬、乱贴广告、物业失信、噪音扰民、损害公物等列入，动员全体社区居民自觉抵制。研究列入群防群治、扫黑除恶、社区扫雪、卫生保洁等工作，弘扬正能量，营造良好的信用氛围。要通过张贴海报、发放明白纸等形式，做好倡议书的宣传工作，做到家喻户晓，让居民明白失信有惩戒，守信有激励。\n（二）建立完善社区信用体系。按照全覆盖的要求，在全区城市社区建立社区信用体系，充分发挥社区信用分在“海贝分”（个人信用积分）体系中的补充作用。制定社区信用管理办法，将社区居民在城市社区中常见的善行义举和不文明、不道德等行为纳入其中，并与“海贝分”挂钩，积极构建社区党组织领导下的居民自治、社区服务、物业管理、单位共建、社会参与的“五位一体”协同共治模式。建立社区居民信用档案，健全社区信用信息采集、认定、录入机制，及时反映社区居民的信用情况。制定激励和惩戒措施，积极扩大社区信用分、“海贝分”在社区中的应用推广力度，正面激励，反面惩戒，引导社区居民通过参加公益劳动、公益活动、志愿服务等提高自己的信用积分，使其成为全体市民共同的道德名片。\n（三）突出诚信典型的示范带动作用。在全面推进社区信用建设的基础上，各街道要重点打造1—2个信用示范社区，发挥典型示范引导作用。在社区中广泛开展各类信用宣传活动，如以诚信为主题的纳凉晚会、健步走等公益活动，提高社区居民对信用工作的认知和支持力度。组织开展社区“公益之星”、“守信之星”、“文明之星”等评选活动，对获奖者给予社区信用积分、“海贝分”加分激励，享受全区范围内的信用惠民政策。充分发挥电视、广播、报纸、网络等媒体的宣传引导作用，树立诚信典范，使社会成员学有榜样、赶有目标，使诚实守信成为全社会的自觉追求。',
       },{
         itemName: '实施步骤',
         content: '（一）动员部署阶段（2020年3月）。区民政局、区社会信用中心组织各社区相关人员，召开信用“进社区”工作部署会议。组织街道信用工作负责人及社区负责人召开专门会议，安排部署工作任务，对社区居民信用档案建立、社区信用加分减分标准、社区信用信息的采集和认定、录入等进行培训。\n（二）全面推开阶段（2020年4月—2020年6月）。指导社区建立健全信用档案，开展社区信用信息的采集、认定、与“海贝分”挂钩以及申报等工作。各街道做好本辖区信用积分管理试行办法的制定工作，对社区申报的信用信息进行认真审核、录入，做好激励、惩戒等社区信用的应用工作。\n（三）总结提升阶段（2020年12月底前）。加强对信用进社区工作的调查研究，组织召开观摩会议，及时总结、推广全区在信用“进社区”工作中创造出的优秀成果和典型经验。加大宣传力度，通过报刊、电视、广播和其他公共媒体广泛宣传信用“进社区”工作中的创新做法和突出成效，充分调动全社会各个层面参与信用“进社区”工作的主动性、积极性，为我区社会信用体系建设营造良好的社区氛围。',
       },{
         itemName: '保障措施',
         content: '（一）加强组织领导。成立推进信用“进社区”工作领导小组，负责指导、协调、调度信用“进社区”工作。各街道是信用“进社区”工作的责任主体，要成立专门机构，落实工作责任，制定信用“进社区”工作具体落实方案，指导社区成立专门的社区信用管理机构、信用议事会，负责信用“进社区”工作的宣传发动、组织实施。\n（二）搞好协作配合。信用“进社区”工作是我区社会信用体系建设的重要组成部分，各有关部门要在区信用办的统一指挥下，通力合作，形成合力。各有关责任单位要充分发挥作用，积极履行职责，加强调度指导、督促检查，指导推进工作开展。各社区要加强与区有关部门、单位的衔接沟通，按照统一要求和部署，积极主动地抓好各项任务落实。\n（三）强化责任考核。将信用“进社区”工作纳入全区社会信用体系建设总体考核，重点考核工作方案制定、工作机构设立、居民信用档案建立、信息采集及录入、信用示范社区建设等工作。各社区也要建立相应制度，严格考核奖惩，形成推动工作开展的强大合力。',
       }]
      }
    ]
  },
  //点击最外层列表展开收起
  listTap(e){
    console.log('触发了最外层');
    let Index = e.currentTarget.dataset.parentindex,//获取点击的下标值
        list=this.data.list;
    list[Index].show = !list[Index].show || false;//变换其打开、关闭的状态
    if (list[Index].show){//如果点击后是展开状态，则让其他已经展开的列表变为收起状态
      this.packUp(list,Index);
    }

    this.setData({
      list
    });
  },
  //点击里面的子列表展开收起
  listItemTap(e){
    let parentindex = e.currentTarget.dataset.parentindex,//点击的内层所在的最外层列表下标
        Index=e.currentTarget.dataset.index,//点击的内层下标
        list=this.data.list;
    console.log(list[parentindex].item,Index);
    list[parentindex].item[Index].show = !list[parentindex].item[Index].show||false;//变换其打开、关闭的状态
    if (list[parentindex].item[Index].show){//如果是操作的打开状态，那么就让同级的其他列表变为关闭状态，保持始终只有一个打开
      for (let i = 0, len = list[parentindex].item.length;i<len;i++ ){
        if(i!=Index){
          list[parentindex].item[i].show=false;
        }

      }
    }
    this.setData({list});
  },
  //让所有的展开项，都变为收起
  packUp(data,index){
    for (let i = 0, len = data.length; i < len; i++) {//其他最外层列表变为关闭状态
      if(index!=i){
        data[i].show = false;
        for (let j=0;j<data[i].item.length;j++){//其他所有内层也为关闭状态
            data[i].item[j].show=false;
        }
      }
    }
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})