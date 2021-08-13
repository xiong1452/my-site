import Mock from "mockjs"

Mock.mock("/api/getIndexInfo", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://konachan.net/data/preview/1a/16/1a16728e8834cf9231a9ff2f4cdf0924.jpg",
        github: "https://github.com/xiong1452",
        qq: "2862044980",
        weixin: "q2862044980",
        mail: "13979101972@163.com",
        icp: "黑ICP备17001719号",
        githubName: "xiong1452",
        favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    },
});