# “海海海贝分”小程序项目概述

## 项目简介

### 开发目的

“海海海贝分”小程序的开发初衷是为便于威海市文登区居民了解“海贝分”即当地信用积分的相关内容，以推进当地“信用积分”知识的普及，从而为推动诚信社会的建设贡献自己的一份力量。

故而，我们的目标是设计一个便于居民快速上手与使用的相关信息查询工具，力求使居民摆脱繁琐的文字阅读，通过对话、搜索等方式快速获取到想要的信息。

### 主要功能

本小程序主要实现的功能有：搜索，智能对话，多级目录阅读。下面将做逐一介绍。

搜索。用户可以通过输入关键字检索到相关内容，从而便捷地获取到目标信息。

智能对话与语音识别。这一功能可以说是本项目的核心功能，用户可以通过语音或文字输入问题，对话机器人将给出对应问题的较为精准的回答。当用户对信用积分政策不甚了解，或者不知道从何问起时，机器人可以通过引导提问引导用户，从而便于用户快速上手与了解到目标信息，解决了新用户条文不知从何查起，搜索不知从何问起的问题。同时我们还提供了“介绍一下”的功能，用户可以对相关信息有一个快速的了解。

多级目录阅读。因为相关信息较多，我们将相关信息分门别类，整理成多级目录，在相当程度上解决了用户浏览条文时因内容众多而无法快速查找到目标信息的问题。

## 开发过程

- 阶段一：项目规划。在本阶段，我们进行了以下工作：
  - 页面原型与交互设计。我们经过研讨设计出了页面的结构与交互方式，之后又借助摹客平台进行了页面的原型设计。
  - 整理条文内容。我们将相关条文的内容分门别类，并抽取出其中如信用信息评价标准等条理分明然内容繁多的部分整理成结构化数据。
  - 探讨技术问题及解决方案。我们通过查阅相关资料，了解智能对话以及语音识别等功能实现的技术难点，以及相应的解决方式。
- 阶段二：编写与实现。本小程序代码编写与功能实现工作共分A、B两组，两组工作并行进行。
  - A组：主要负责搜索与条文阅读功能的实现，或者换言之，本小程序除智能对话之外的功能均由A组实现。
    - 我们按照上阶段的原型设计编写出了静态页面，并依照约定进行了交互代码的编写；
    - 我们将数据导入小程序，并在上述页面基础上进行配置，实现了关键字搜索、多级目录的条文阅读，以及用户授权等功能。
  - B组：主要负责智能对话功能的实现。
    - 我们借助微信对话开放平台与同声传译插件等工具，将上阶段整理好的结构化数据转化为机器人问答；
    - 我们尝试使用服务器来配置开发者自定义API，接入微信对话开放平台来实现从条文数据中检索、引导提问等功能。
    - 我们尝试使用讯飞的语音识别模型对收集到的文登普通话语音集进行了训练，以提高机器人的语音识别能力。
    - 我们通过配置高级技能，实现了引导提问等多轮对话的技能，从而能够更精准地给出用户需要的信息。
- 阶段三：配置与完善。
  - 我们将上一阶段B组的智能对话功能生成插件，导入A组完成的小程序中，从而本小程序的所有目标功能均已初具规模；
  - 我们经过讨论，认为本小程序虽功能丰富，然而数据量不大，使用云开发成本较低而且方便快捷。于是，我们开通云开发，将项目转换成云开发项目；
  - 我们将编写好的小程序上传后，根据用户的使用情况以及反馈的问题，对智能对话、条文阅读等功能做了相当程度的改进。

## 技术问题及解决方案

- 后端基本配置：本项目前期为开发方便，没有使用云开发，使用Javascipt语言进行编写，后期将之转换成云开发，同时，将图片等数据上传到云开发的存储中以减小项目规模。
- 搜索：本项目借助weui的searchbar组件，对整理得到的结构化数据进行匹配，以实现关键字搜索功能。
- 智能对话：本项目主要借助微信对话开放平台实现智能对话功能。我们还尝试采用自定义API来进一步实现多轮对话等功能。
- 语音识别：在项目前期，我们主要借助微信的同声传译插件实现这一功能。在获得语音数据集之后，我们开始尝试采用讯飞的语音识别模型进行深度学习训练。
- 组件使用：除借助微信提供的weui组件实现搜索功能之外，多级列表等页面也采用了微信提供的相关组件以便于开发。

## 项目展示

![show1](https://raw.githubusercontent.com/wechat-haibei/hbf-3/master/a1.jpg)

![show2](https://raw.githubusercontent.com/wechat-haibei/hbf-3/master/a2.jpg)

![show2](https://raw.githubusercontent.com/wechat-haibei/hbf-3/master/a3.jpg)
