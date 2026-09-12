/***********************************************
 * YouTube Request Filter for Shadowrocket
 ***********************************************/
let url = $request.url;
if (url.includes("googlevideo.com")) {
    // Xử lý loại bỏ tham số quảng cáo trong request video
    url = url.replace(/&ctier=L(&.+?),ctier,(.+)/, "$1$2");
}
$done({ url: url });
