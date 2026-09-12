/***********************************************
 * YouTube Response AdBlock for Shadowrocket
 ***********************************************/
let body = $response.body;
if (body) {
    try {
        let obj = JSON.parse(body);
        
        // Loại bỏ các thành phần quảng cáo khung chính
        if (obj.contents) {
            delete obj.topbar;
        }
        
        $done({ body: JSON.stringify(obj) });
    } catch (e) {
        $done({ body: body });
    }
} else {
    $done({});
}
