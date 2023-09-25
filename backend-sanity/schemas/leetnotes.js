export default{
    name:'leetnotes',
    title:'LeetNotes',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'description',
            title:'description',
            type:'string'
        },
        {
            name: 'noteslink',
            title: 'Notes Link',
            type: 'string',
        },
        {
            name: 'syllabus',
            title: 'Syllabus Link',
            type: 'string',
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}