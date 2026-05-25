// ============================================
// 🌟 CONFIG FILE - Tùy Chỉnh Thông Tin Cá Nhân
// ============================================
// Chỉnh sửa các thông tin dưới đây để tùy chỉnh trang web

const CONFIG = {
    // ===== THÔNG TIN CÁ NHÂN =====
    name: "Bạn",                    // Tên người sinh nhật
    age: 18,                         // Tuổi
    zodiacSign: "Song Tử ♊",         // Cung hoàng đạo
    
    // ===== NỘI DUNG TAROT =====
    tarotTitle: "Nghi Thức Tiết Lộ Định Mệnh",
    
    cards: {
        1: {
            name: "The Sun",
            emoji: "🌞",
            meaning: "Niềm vui, sự rõ ràng, thành công, hạnh phúc",
            message: "Lá bài này báo hiệu một giai đoạn tươi sáng, mọi việc trở nên rõ ràng và thuận lợi.",
            icon: "sun.png"
        },
        2: {
            name: "The Star",
            emoji: "🌟",
            meaning: "Hy vọng, chữa lành, cảm hứng, sự dẫn dắt tinh thần",
            message: "Lá bài này mang đến sự bình an và niềm tin vào tương lai.",
            icon: "star.png"
        },
        3: {
            name: "Three of Pentacles",
            emoji: "🏛",
            meaning: "Hợp tác, làm việc nhóm, thành tựu, sự xuất sắc",
            message: "Lá bài này nhấn mạnh sức mạnh của sự cộng tác.",
            icon: "three_of_pentacles.png"
        }
    },

    // ===== THÔNG TIN CHIÊM TINH =====
    sunSign: {
        emoji: "☀️",
        name: "Cung Mặt Trời",
        description: "Tỏa sáng rực rỡ, hay cười, đôi khi hơi bướng bỉnh. Luôn mang năng lượng tươi vui đến cho mọi người xung quanh."
    },

    // ===== KỶ NIC CÁ NHÂN =====
    memories: [
        {
            title: "Khoảnh Khắc Rạng Rỡ",
            description: "Những lúc tươi cười nhất luôn là những khoảnh khắc đáng nhớ nhất",
            image: "sun.png"
        },
        {
            title: "Chỉ Dẫn Sáng",
            description: "Giống như những ngôi sao, bạn là ánh sáng giúp tôi tìm được đường đi",
            image: "star.png"
        },
        {
            title: "Sự Kết Nối",
            description: "Mỗi khoảnh khắc chúng ta chia sẻ là một sợi dây kết nối vũ trụ",
            image: "three_of_pentacles.png"
        }
    ],

    // ===== LỜI TIÊN TRỊ =====
    oracleMessage: "Những ngôi sao trong vũ trụ vô tận này đều có một mục đích riêng, và em là một ngôi sao đặc biệt nhất. Năm này, hãy tiếp tục tỏa sáng, tiếp tục mộng mơ, và tin rằng mọi điều tốt đẹp sẽ đến.",
    
    oracleSignature: "✨ Vũ Trụ ✨",

    // ===== LỜI CHÚC MỪNG =====
    birthdayMessage: "Happy Birthday, My Twin Star! 🌟✨",
    birthdayWish: "Tuổi mới, những mơ mộng mới, và những khoảnh khắc đẹp đang chờ em!",

    // ===== FOOTER =====
    footerMessage: "✨ Vũ trụ có hàng tỷ ngôi sao, nhưng em là ngôi sao duy nhất trong lòng tôi. Happy Birthday! ✨",

    // ===== CÀI ĐẶT HIỂN THỊ =====
    colors: {
        primary: "#0d0221",
        primaryDarker: "#14012b",
        gold: "#ffd700",
        goldLight: "#ffed4e",
        purpleSmoke: "#5a189a",
        purpleNeon: "#c80064",
        deepBlue: "#0a1551"
    },

    // ===== HIỆU ỨNG =====
    effects: {
        enableParallax: true,       // Bật/tắt hiệu ứng Parallax
        enableConfetti: true,       // Bật/tắt pháo giấy
        enableAudio: true,          // Bật/tắt âm thanh
        cardAnimationSpeed: 0.8,    // Tốc độ lật bài (giây)
        musicVolume: 0.3            // Âm lượng nhạc nền (0-1)
    }
};

// ============================================
// Hướng Dẫn Tùy Chỉnh
// ============================================
/*
1. THAY ĐỔI TÊN & TUỔI:
   - Sửa config.name thành tên bạn ấy
   - Sửa config.age thành tuổi bạn ấy

2. THAY ĐỔI CUNG HOÀNG ĐẠO:
   - Sửa config.zodiacSign 
   - Ví dụ: "Bạch Dương ♈", "Sư Tử ♌", v.v.

3. THAY ĐỔI CÁC LỜI ĐỌC ĐẮC:
   - Sửa config.oracleMessage
   - Sửa config.birthdayMessage
   - Sửa config.footerMessage

4. THÊM KỶ NIC:
   - Thêm đối tượng mới vào config.memories
   - Format: { title: "...", description: "...", image: "..." }

5. THAY ĐỔI MÀU SẮC:
   - Sửa giá trị trong config.colors
   - Ví dụ: gold: "#FFD700" → gold: "#FFD000"

6. BẬT/TẮT HIỆU ỨNG:
   - Thay true/false trong config.effects
   - Điều chỉnh tốc độ animation
*/

// Export để sử dụng trong script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
