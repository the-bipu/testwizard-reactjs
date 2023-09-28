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
            title:'Modules',
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
            name: 'pdfFile',
            title: 'PDF File',
            type: 'file',
            options: {
              accept: '.pdf',
            },
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