let std={
    sname:"kt",
    sid:123,
    splace:{
        streeet:"pune",
        scity:"kjei"
    }
}
std.splace.spin=568990
console.log(std)
//objexct new
let teacher=new Object();
teacher.name="kt",
teacher.id=123
console.log(teacher)

//constructor function fun
function staff(name,id){
    this.name=name;
    this.id=id

}
let s1 = new staff("kt",1123)
let s2= new staff("pt",123)
console.log(s1)
console.log(s2)
//prototype
staff.prototype.gender="male"
console.log(staff.prototype);
