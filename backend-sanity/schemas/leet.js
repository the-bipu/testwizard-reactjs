export default{
    name:'leet',
    title:'Leet',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'year',
            title:'year',
            type:'string'
        },
        {
            name: 'moduleLink',
            title: 'Module Link',
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