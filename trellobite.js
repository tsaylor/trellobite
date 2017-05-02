function boards_dump(data) {
    data.forEach((item) => {document.write(item.id + ' - ' + item.name + '<br>')})
}

Trello.authorize({
    name: "Trellobite",
    expiration: '1hour',
    success: function(){console.log('nailed it');},
    error: function(){console.log('whoops');}
});

Trello.get('members/me/boards', {filter: 'open'}, boards_dump)
