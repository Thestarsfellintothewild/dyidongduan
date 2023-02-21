import Mock from 'mockjs'
const Random = require('mockjs').Random
const { newlist } = Mock.mock({
    'newlist|10-20': [
        {
            image: Random.image('100x100', '#894FC4', '#FFF', 'png', '只因你太美'),
            'id|1-10': Random.increment(),
            data: '@date("yyyy-MM-dd")',
            title: '@ctitle()',
            content: Random.cparagraph(1, 2)
        }
    ]
})
Mock.mock('/api/get/news', 'get', {
    status: 200,
    message: '获取数据成功',
    list: newlist,
    total: newlist.length
})
