const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

function uploadFile(file) {
    return new Promise((resolve, reject) => {
        imagekit.upload({
            file: file.buffer,
            fileName: "Hello-AK"
        }, (error, result) => error ? reject(result) : resolve(result))
    })
}

module.exports = uploadFile