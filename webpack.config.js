module.exports = {
	entry : "./public_html/src/main.js",
	output: {
		filename: "./public_html/lib/bundle.js"
	},
	module:{
		rules:[
			{
				test: /\.html$/, 
				use: [ "html-loader" ] 
			},
			{
				test: /\.(js|jsx)$/,
				loader: "babel-loader",
				exclude: [ /node_modules/ ],
				options: {
					presets: [ "react", "env" ]
				}
			}
		]
	}
	
};