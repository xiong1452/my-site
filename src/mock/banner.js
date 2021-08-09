import Mock from "mockjs";

Mock.mock("/api/banner", 'get', {
    code: 0,
    msg: "",
    data: [{
        id: "1",
        midImg: "https://konachan.net/sample/bdc7fd2086049c86bddfa8562b6fc5ac/Konachan.com%20-%20330072%20sample.jpg",
        bigImg: "https://konachan.net/image/bdc7fd2086049c86bddfa8562b6fc5ac/Konachan.com%20-%20330072%20blush%20brown_hair%20butterfly%20clouds%20dress%20kantoku%20kurumi_%28kantoku%29%20long_hair%20original%20panties%20purple_eyes%20see_through%20sky%20stairs%20underwear.png",
        title: "这是标题",
        description: "这是副标题23333"
    }, {
        id: "2",
        midImg: "https://konachan.net/jpeg/1a16728e8834cf9231a9ff2f4cdf0924/Konachan.com%20-%20330049%20bed%20blush%20bow%20chibi%20computer%20flowers%20kukie-nyan%20lolita_fashion%20nijisanji%20pantyhose%20pink_hair%20red_eyes%20rose%20rosemi_lovelock%20short_hair%20watermark.jpg",
        bigImg: "https://konachan.net/image/1a16728e8834cf9231a9ff2f4cdf0924/Konachan.com%20-%20330049%20bed%20blush%20bow%20chibi%20computer%20flowers%20kukie-nyan%20lolita_fashion%20nijisanji%20pantyhose%20pink_hair%20red_eyes%20rose%20rosemi_lovelock%20short_hair%20watermark.png",
        title: "凛冬将至",
        description: "人唯有恐惧的时候方能勇敢"
    }, {
        id: "3",
        midImg: "https://konachan.net/sample/2921661019f5e4c04cb89096ccd60f1c/Konachan.com%20-%20329418%20sample.jpg",
        bigImg: "https://konachan.net/image/2921661019f5e4c04cb89096ccd60f1c/Konachan.com%20-%20329418%20blonde_hair%20blush%20clouds%20dress%20fuuka_rin%20grass%20hat%20long_hair%20necojishi%20petals%20red_eyes%20sky.jpg",
        title: "23333",
        description: "这里是描述主题的文字"
    }]
})