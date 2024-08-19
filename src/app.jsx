import { useEffect, useState } from "react"


export default function App() {
	const [blogPostData, setBlogPostData] = useState({
		title: '',
		body:'', 
	});
	console.log(blogPostData);

	return (
		<div>
			<form onSubmit={(e)=>{
				e.preventDefault();			// prevents the form's default behavior of submitting and refreshing the page. This is important for handling the submission entirely within JavaScript without a full page reload.

				if(blogPostData.title && blogPostData.body)  //validating if any field is empty 
				{
					fetch('https://jsonplaceholder.typicode.com/posts',{
						method: 'POST',
						body:JSON.stringify( 	//converts object into a JSON string format, which is required for sending data in the request body
						{
							userId:1,
							title: blogPostData.title,
							body: blogPostData.body
						}),
						headers: {		// This is necessary for the server to correctly interpret the data.
							"content-type": "application/json; charset=UTF-8",
						},
					}).then((response)=>{	// converts the response data from JSON format to a JavaScript object.
						response.json();
					}).then((data)=>{
						console.log('Success...!');
						console.log(data)
					}).catch((err)=>{
						console.log(err);
					})
				}}}>
				<div>
					<label htmlFor="title">Title</label>
					<input 
						type = "text"
						id="title"
						value = {blogPostData.title}
						onChange={(e)=>{
							setBlogPostData((currentBlogPostData) => ({
								...currentBlogPostData,
								title: e.target.value,
							}))//The setBlogPostData function updates the state with the new input value while preserving the other properties in the state object.
						}}
					/>
				</div>
				
				<div>
					<label htmlFor="body">Body</label>
					<input 
						type = "text"
						id="body"
						value = {blogPostData.body}
						onChange={(e)=>{
							setBlogPostData((currentBlogPostData) => ({
								...currentBlogPostData,
								body: e.target.value,
							}))
						}}
					/>
				</div>
				<button>create post</button>
			</form>	
		</div>
	)
}