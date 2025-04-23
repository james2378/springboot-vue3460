const base = {
    get() {
        return {
            url : "http://localhost:8080/xianshanglvyoutiyan/",
            name: "xianshanglvyoutiyan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xianshanglvyoutiyan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "线上旅游体验系统"
        } 
    }
}
export default base
