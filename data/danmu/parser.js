const fs = require("fs")
const path = require("path")
 
const source = path.join(__dirname + '/xml/')
const target = path.join(__dirname + '/json/')

const main = (dir, newDir) => {
	const files = fs.readdirSync(dir);
	files.forEach(file => {
		if (path.extname(file) === '.xml') {
			const danmuku = {
				code: 0,
				data: [],
			}
			fs.readFile(dir + file, 'utf8', (err, content) => {
			    const lines = content.split('\r\n')
			    for (let line of lines) {
			    	line = line.replace('<d p="', '').replace('</d>', '')
			    	const text = line.split('>')[1]
			    	const time = line.split(',')[0]
			    	const bilibiliType = line.split(',')[1]
			    	const type = bilibiliType === '4' ? 2 : bilibiliType === '5' ? 1 : 0
			    	const fontSize = line.split(',')[2]
			    	const color = line.split(',')[3]
			    	// const colorRGB = '#' + parseInt(color).toString(16).padStart(6, '0')
			    	const timestamp = line.split(',')[4]
			    	const pool = line.split(',')[5]
			    	const author = line.split(',')[6]
			    	const rowID = line.split(',')[7]
			    	const oneDanmu = [
			    		parseInt(time, 10) || 0,
			    		parseInt(type) || 0,
			    		parseInt(color) || 16777215, // colorRGB || '#' + (16777215).toString(16),
			    		'bilibili' + author || 'DPlayer',
			    		text || '',
		    		]
		    		danmuku.data.push(oneDanmu)
			    }
			    // write file
			    const newFileName = newDir + file.replace('.xml', '') + '.json'
				const newFileContent = JSON.stringify(danmuku)
				fs.writeFile(newFileName, newFileContent, err => {
					if (err) {
						console.log(file + 'fail!')
					} else {
						console.log('✅ ' + file + ' done!')
					}
				})
			})
			
		}
	})
}

main(source, target);