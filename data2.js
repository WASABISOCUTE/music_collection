const config2 = {
        showDate: true,
        showContext: true,
        showDesc: true,
        showIg: true,
        showChapterTitle: true
};
/*
{
        chapter: ,
        title: '', artist: '',
        context: '', desc: '',
        date: '', ytId: '', start: 0, end: 0,
        lyrics:``,
        lyrics_rom:``,
        lyrics_cn:``,
        trans_source_cn:``,
        lyrics_en:``,
        trans_source_en:``,
}
*/
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
                title: '',
                artist: '',
                context: '',
                desc: '',
                date: ',
                ytId: '',
                start: 0,
                lyrics: `
        `,
                lyrics_rom: `
        `,
                lyrics_zh: `
        `,
                trans_source_zh: ''
        },
];

// Universal aliases for accessibility and namespace safety
window.tracks2 = tracks2;
window.chapters2 = chapters2;
window.config2 = config2;
