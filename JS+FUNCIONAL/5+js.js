const people = ["Douglas", "Dias", "Bento", "Gab"]
const upperCaseDpeople = people
.filter(person => person.startsWith("D"))
.map(dperson => dperson.toUpperCase())