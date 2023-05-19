// validation script here
// let reg = /[a-z]/gi;
// let reg2 = new RegExp(/[a-z]/,'i'); 


const inputs = document.querySelectorAll('input');

const patterns={
    telephone:/^(\+[\d]{1,2}\s)?\d{10}$/,
    username:/^[a-z\d]{5,12}$/i,
    password:/^[\w]{8,20}$/,
    slug:/^[a-z\d-]{8,20}$/,
    email:/^([\w-]+)@([\w])+\.([\w]{2,8})(\.[a-z]{2,8})?$/


}

//validation fuction
function validate(field, regex){
   let result = regex.test(field.value, regex);
   result ? field.className = "valid":
            field.className = "invalid";
}


inputs.forEach((input)=>{
    input.addEventListener('keyup', e => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
})

