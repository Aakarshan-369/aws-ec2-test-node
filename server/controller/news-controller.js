import News from '../model/news.js';


// import fs from 'fs';
// const file = fs.readFileSync('/home/ec2-user/aws-ec2-test-node/server/89B06F6928DBF00C2F645B11B145F472.txt');

// export const fileSend = async (request, response) => {
//    response.sendFile('/home/ec2-user/aws-ec2-test-node/server/89B06F6928DBF00C2F645B11B145F472.txt');
// }


export const getNews = async (request, response) => {
    try {
        const size = Number(request.query.size);
        const skip = Number(request.query.page);
        console.log(size, skip)
        const data = await News.find({}).limit(size).skip(size * skip);
        // console.log(data.count());
        response.status(200).json(data);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}