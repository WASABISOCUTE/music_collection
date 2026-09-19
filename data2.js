const config2 = {
        showDate: true,
        showContext: true,
        showDesc: true,
        showIg: true,
        showChapterTitle: true
};

const chapters2 = [
        {
                id: 0,
                title: 'Chapter 00',
                subtitle: ''
        },
        {
                id: 1,
                title: 'Chapter 01',
                subtitle: ''
        },
        {
                id: 2,
                title: 'Chapter 02',
                subtitle: ''
        },
        {
                id: 3,
                title: 'Chapter 03',
                subtitle: ''
        },
        {
                id: 4,
                title: 'Chapter 04',
                subtitle: ``
        }
];

const tracks2 = [
        // Chapter 01
        {
                chapter: 1,
                title: '夜に駆ける (Racing into the Night)',
                artist: 'YOASOBI',
                context: 'Secret Vault • Vol. 01',
                desc: '沈むように溶けてゆくように',
                date: '2024-05-20',
                ytId: 'x8VYWazR5mE',
                start: 0,
                lyrics: `
[00:00.00]沈むように溶けてゆくように
[00:05.40]二人だけの空が広がる夜に
[00:10.00]「さよなら」だけだった
[00:13.20]その一言で全てが分かった
[00:17.60]日が沈み出した空と君の姿
[00:22.00]フェンス越しに重なっていた
[00:26.50]初めて会った日から
[00:29.00]僕の心の全てを奪った
[00:33.20]どこか儚い空気を纏う君は
[00:37.80]寂しい目をしてたんだ
[00:41.50]いつだってチックタックと
[00:43.80]鳴る世界で何度だってさ
[00:47.00]触れる心無い言葉うるさい声に
[00:51.20]涙が零れそうでも
[00:54.50]ありきたりな喜びきっと二人なら見つけられる
[01:00.50]騒がしい日々に笑えない君に
[01:04.20]思い付く限り眩しい明日を
[01:08.50]明けない夜に落ちてゆく前に
[01:12.60]僕の手を掴んでほら
[01:15.80]忘れてしまいたくて閉じ込めた日々も
[01:21.00]抱きしめた温もりで溶かすから
[01:25.20]怖くないよいつか日が昇るまで
[01:29.80]二人でいよう
        `,
                lyrics_rom: `
[00:00.00]shizumu you ni tokete yuku you ni
[00:05.40]futari dake no sora ga hirogaru yoru ni
[00:10.00]"sayonara" dake datta
[00:13.20]sono hitokoto de subete ga wakatta
[00:17.60]hi ga shizimidashita sora to kimi no sugata
[00:22.00]fensu goshi ni kasanatteita
[00:26.50]hajimete atta hi kara
[00:29.00]boku no kokoro no subete o ubatta
[00:33.20]doko ka hakanai kuuki o matou kimi wa
[00:37.80]sabishii me o shiteta nda
[00:41.50]itsu datte chikku takku to
[00:43.80]naru sekai de nando datte sa
[00:47.00]fureru kokoronai kotoba urusai koe ni
[00:51.20]namida ga koboresou demo
[00:54.50]arikatari na yorokobi kitto futari nara mitsukerareru
[01:00.50]sawagashii hibi ni waraenai kimi ni
[01:04.20]omoitsuku kagiri mabushii ashita o
[01:08.50]akenai yoru ni ochite yuku mae ni
[01:12.60]boku no te o tsukande hora
[01:15.80]wasurete shimaitakute tojikometa hibi mo
[01:21.00]dakishimeta nukumori de tokasu kara
[01:25.20]kowakunai yo itsuka hi ga noboru made
[01:29.80]futari de iyou
        `,
                lyrics_zh: `
[00:00.00]如同沉没一般 渐渐消融一般
[00:05.40]在只属于两人的天空蔓延的夜里
[00:10.00]只有一句“再见”
[00:13.20]单单那一句话就让我明白了一切
[00:17.60]夕阳开始落下的天空与你的身姿
[00:22.00]隔着铁丝网重叠在一起
[00:26.50]从与你初遇的那天起
[00:29.00]你就夺走了我心中的全部
[00:33.20]周身带着一丝缥缈气息的你
[00:37.80]眼神中带着落寞
[00:41.50]在这无论何时都滴答作响的世界里
[00:43.80]无论经历多少次
[00:47.00]面对那些触及心底的无情言语与喧闹声
[00:51.20]即使眼泪几近溢出
[00:54.50]平凡的喜悦 若是两个人一定能够寻得
[01:00.50]在喧嚣纷扰的日子里无法微笑的你
[01:04.20]我愿竭尽所能给予你最耀眼的明天
[01:08.50]在坠入永无破晓的长夜之前
[01:12.60]请紧紧抓住我的手
[01:15.80]哪怕是渴望彻底遗忘而深锁的往昔
[01:21.00]我也会用紧拥的温度将其融化
[01:25.20]不用害怕 直到终有一日太阳升起
[01:29.80]我们都相守相伴
        `,
                trans_source_zh: 'Official Translation'
        },
];

// Universal aliases for accessibility and namespace safety
window.tracks2 = tracks2;
window.chapters2 = chapters2;
window.config2 = config2;
