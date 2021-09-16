function TreeNode(value) {
    this.value = value;
    this.descendents = [];
    }
   // create nodes with values
   const abe = new TreeNode('Abe');
   const homer = new TreeNode('Homer');
   const bart = new TreeNode('Bart');
   const lisa = new TreeNode('Lisa');
   const maggie = new TreeNode('Maggie');
   // associate root with is descendents
   abe.descendents.push(homer);
   homer.descendents.push(bart,lisa,maggie);

//1 . Log to the console the names of everyone in the tree.
function displayNames(node){
    if(node.descendents.length == 0){
        console.log(node.value);
    }else{
        console.log(node.value);
        node.descendents.forEach(descendent => displayNames(descendent));

    }
    
}
displayNames(abe);

//2 Given a target value, return true or false if there is a node in the tree with the target value.
function contains(node, name){
    if(node.descendents.length === 0){
        if(node.value!=name){
            return false;
        
        }else{
            return true;
        }
        
    }else{
        if(node.value==name){
            return true;

        }else{
            for(let descendent of node.descendents){
            return contains(descendent, name);
            }
        }
    }
}

console.log(contains(abe, "Bart"));

/*4 Create a new constructor function ListNode (based on TreeNode below) and use it to generate a
linked list of Abe, Homer, Bart, Lisa, Maggie instead of a tree. */

function ListNode(value){
    this.value = value;
    this.next = null;
}
let abe1 = new ListNode("Abe");
let homer1 = new ListNode("Homer");
let bart1 = new ListNode("Bart");
let lisa1 = new ListNode("Lisa");
let maggie1 = new ListNode("Maggie");
lisa1.next = maggie1;
bart1.next = lisa1;
homer1.next = bart1;
abe1.next = homer1;


/**
 * 9. Write code to illustrate the use of the rest operator
    a. In a destructurng assignment
    b. In a function call   
 */

let namesArray = ["Jhon", "Joseph", "Abraham","Julius","Michael"];
let [name1,name2,name3, ...rest] = namesArray;

function getProduct(...rest){
    let product = 1;
    for(let i =0; i<rest.length; i++){
        product*=rest[i];
    }

}