const queryBucket = () => {
	$.ajax({
    url: "https://7x512hkx1a.execute-api.us-west-2.amazonaws.com/dev/aws-photo-bucket/",
    type: "GET",
    'Content-Type': "application/json"
	})

	.done((response) => {

	console.log(response);
	// $("body").append("<div><img src='${https://s3-us-west-2.amazonaws.com/photo-bucket-tmp-prjct/Key}'></div>") 

	})

	.fail((error) => {
	console.log("why", error)
	})
}


$("#data").click(() => {
	queryBucket()
})
