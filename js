/*
 * Script xử lý chặn quảng cáo và bật PiP cho YouTube trên Shadowrocket
 */

const path = $request.url;
let body = $response.body;

if (body) {
  try {
    let obj = JSON.parse(body);

    // 1. Xóa quảng cáo trong Luồng Video (Player)
    if (obj.adPlacements) {
      delete obj.adPlacements;
    }
    if (obj.adSlots) {
      delete obj.adSlots;
    }

    // 2. Xóa các mục quảng cáo trên Trang chủ & Danh sách đề xuất (Browse / Search / Next)
    if (obj.contents) {
      if (obj.contents.singleColumnBrowseResultsRenderer) {
        let tabs = obj.contents.singleColumnBrowseResultsRenderer.tabs;
        tabs.forEach(tab => {
          if (tab.tabRenderer && tab.tabRenderer.content) {
            let sectionList = tab.tabRenderer.content.sectionListRenderer;
            if (sectionList && sectionList.contents) {
              sectionList.contents = sectionList.contents.filter(item => !item.adSlotRenderer);
            }
          }
        });
      }
    }

    // 3. Kích hoạt tính năng Play Background (Chạy nền / Picture-in-Picture)
    if (obj.playerConfig && obj.playerConfig.audioConfig) {
      obj.playerConfig.audioConfig.enableBackgroundPlayback = true;
    }

    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    // Nếu dữ liệu không phải JSON thuần, trả về gói tin gốc để tránh crash app
    $done({ body });
  }
} else {
  $done({});
}
