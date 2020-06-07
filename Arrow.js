let group = {
    title: 'our group',
    students: ['Tarek', 'Rahman', 'Sourov'],
    showList() {
        this.students.forEach(
            student => console.log(this.title+':'+student)
        );
    }
};

group.showList();