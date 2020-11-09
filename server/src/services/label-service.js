const labelModel = require('@models/label-model');

class LabelService {
    async insertLabel(payload){
        
        if(payload.title.length === 0){
            throw new Error('title 을 입력하세요');
        }
        const exLabel = await labelModel.getLabelByTitle(payload.title);
        if(exLabel){
            throw new Error('이미 존재하는 라벨입니다.');
        }
        const label = await labelModel.insertLabel(payload);
        return label;
    }

 }

const labelService = new LabelService();

module.exports = labelService;
