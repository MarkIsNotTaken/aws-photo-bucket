$("#data").click(
	imageData = () => {
	$.ajax({
		url: "https://6yvtnxwo7d.execute-api.us-west-2.amazonaws.com/dev/aws-photo-bucket",
		type: "GET",
		success: imageData = response => {console.log(response)},
	})}
)
