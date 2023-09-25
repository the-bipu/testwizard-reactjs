export default{
    name:'subject',
    title:'Subject',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'modules',
            title:'modules',
            type:'string'
        },
        {
            name: 'moduleLink',
            title: 'Module Link',
            type: 'string',
        },
        {
            name: 'notesLink',
            title: 'Notes Link',
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