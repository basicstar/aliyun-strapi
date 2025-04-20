/**
 * usermarkdown controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::usermarkdown.usermarkdown');
export default factories.createCoreController('api::usermarkdown.usermarkdown', ({ strapi }) => ({
    async create(ctx) {
        // 调用默认的创建方法
        const response = await super.create(ctx);
        const data = response.data;
        const domain = 'www.codeapex.top';
        if (data) {
            if (Array.isArray(data)) {
                const newdataArray = data.map(item => {
                    return { linkId: domain + '?linkId=' + item.documentId }; // 返回一个新对象
                  });
                  response.data  = newdataArray;
            } else if(data instanceof Object) {
                response.data = { linkId: domain ? (domain + '?linkId=' + data.documentId) : '生成链接出错！' };
            }
        }
        return response.data.linkId;
    },
    async findOne(ctx) {
        // 调用默认的查找单个方法
        const response = await super.findOne(ctx);
        // 添加自定义逻辑
        if (response) { };
        return response;
    }

})

);
