React App

#class based component
this.state= [MovieData]
handleinput(event)
Const filter = this.state.movieData.filter(item){
Const value= event.target.value
return value == item.title
}
Return value
setState({MovieData:filter}{input:value})

return(
<MovieList
this.state.MovieData.map((item,index)=>{
Return (
Movie Name: {item.title}
Id:{item.index}
Image:{item.img}
{handleinput}/>
)
})
)

#MovieList Page
Const [Movie, id, image ]= this,props


Return (// structure
<div> <input type = “textarea” onchnge={handleInput}/>
</div>

)

Create a react app to show list of movie & provide a filter using          which user can filter movie based on title 


List of features 

Show list of movie 
Allow user to search based on movie title 


Implementation 


Show list of movie  

Store movie data in state 
Iterate over individual movie & render movie 

Thinking in react 

Components & pages 

App.js    
Movielist component 
Movie component 

App component 

State : movieList : []      api ->  fetch () -> movie list 
  

Filter -> 

Objects 

What are objects ?
 
How they are stored ?
   
What are keys ? what are values ?
How we can create objects ?
Object -> functions available in Object 

Object.freeze  
Create an function which receive an object & a key delete the key from object & return updated object 

Ex let {name:”anshu”,age:19}  , age  output {name: “anshu”}

Create a function which returns all the keys of object .

Create a function which takes an object key and value . check if the key is present in object or not if key is present update the value with given value if key is not present insert the key with value 

Ex {name:”anshu”,age:19}  key : age value :20 output : {name:”anshu”,age:20}

Ex {name:”anshu”,age:19} key:email value : “abc@gmail.com 
Output {name:”anshu”,age:19,email:abc@gmail.com }

Create an function which receive an object if object is empty print “Empty object” else print all values of object .



Implement 

Create a react app to show list of movie & provide a filter using          which user can filter movie based on title 




1 create a function which takes an array of element & return their square 
2 create a function which takes an array & return even sum and odd sume of elements
3 create a function which takes two string check if other string is a substring of first or not 
4 create a function which takes a string replace its vowels with x .
5 create a function which takes a sentence and returns an array with all its words 

Ex  input hey i am feeling good output [“hey”,”i”,”am”,”feeling”,”good”]
